'use client';
import * as React from 'react';

import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';

import {
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import { randomId } from '@mui/x-data-grid-generator';
import { Button } from '@/components/ui/button';
import { toast } from 'react-toastify';
import { BsArrowsAngleExpand, BsCopy } from 'react-icons/bs';
import Link from 'next/link';

interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (newModel: (oldModel: GridRowModesModel) => GridRowModesModel) => void;
}

function EditToolbar(props: EditToolbarProps) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [
      ...oldRows,
      {
        id: id,
        name: '',
        appName: '',
        version: '',
        created_date: '',
        updated_date: '',
      },
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  };

  return (
    <GridToolbarContainer className="mx-4 mt-4 ">
      <Button color="primary" onClick={handleClick} className="ml-auto">
        Add Screen
      </Button>
    </GridToolbarContainer>
  );
}

export default function ScreenTable({
  data,
}: {
  data: {
    id: string;
    name: string;
    appName: string;
    version: string;
    main_color: string;
    sub_color: string;
    templateId: string;
    created_date: string;
    updated_date: string;
  }[];
}) {
  const initialRows: GridRowsProp = data?.map((data) => ({
    id: data.id,
    name: data.name,
    appName: data.appName,
    version: data.version,
  }));

  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => async () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => async () => {
    const text = '확인 버튼을 누르면 선택한 Screen이 삭제됩니다. ';
    if (confirm(text) == true) {
      setRows(rows.filter((row) => row.id !== id));

      toast.success(`[${id}] Screen 삭제 성공`);

      // try {
      //   const response = await fetch(`/api/Screens/${id}`, {
      //     method: 'DELETE',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify({
      //       id: id,
      //     }),
      //   });
      //   if (!response.ok) {
      //     toast.error('ERROR!');
      //     throw Error('FAIL : Screen TABLE');
      //   }

      //   toast.success(`[${id}] Screen 삭제 성공`);
      // } catch (error) {
      //   console.log(error);
      // }
    }
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow!.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = async (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));

    try {
      if (newRow.isNew) {
        // const response = await fetch(`/api/Screens`, {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({
        //     id: newRow.id,
        //     appName: newRow?.appName,
        //     version: newRow?.version,
        //   }),
        // });
        // if (!response.ok) {
        //   toast.error('ERROR!');
        //   throw Error('FAIL : Screen TABLE');
        // }

        toast.success(`[${newRow.id}] Screen 저장 성공`);
      } else {
        // const response = await fetch(`/api/Screens/${newRow.id}`, {
        //   method: 'PATCH',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({
        //     id: newRow.id,
        //     appName: newRow?.appName,
        //     version: newRow?.version,
        //   }),
        // });
        // if (!response.ok) {
        //   toast.error('ERROR!');
        //   throw Error('FAIL : Screen TABLE');
        // }

        toast.success(`[${newRow.id}] Screen 업데이트 성공`);
      }
    } catch (error) {
      console.log(error);
    }

    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'Id',
      width: 200,
      editable: false,
      align: 'left',
      headerAlign: 'left',
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 200,
      editable: true,
      align: 'left',
      headerAlign: 'left',
    },
    {
      field: 'appName',
      headerName: 'App Name',
      width: 100,
      editable: true,
      align: 'left',
      headerAlign: 'left',
    },
    {
      field: 'version',
      headerName: 'Version',
      width: 100,
      editable: true,
      align: 'left',
      headerAlign: 'left',
    },

    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 150,
      cellClassName: 'actions',
      getActions: ({ id, row }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,

            <Link href={`/admin/screens/${row.id}`}>
              <GridActionsCellItem
                icon={<BsArrowsAngleExpand size={14} />}
                label="ETC"
                color="inherit"
              />
            </Link>,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
          <Link href={`/admin/screens/${randomId()}`}>
            <GridActionsCellItem icon={<BsCopy size={14} />} label="Copy" color="inherit" />
          </Link>,
          <Link href={`/admin/screens/${row.id}`}>
            <GridActionsCellItem
              icon={<BsArrowsAngleExpand size={14} />}
              label="ETC"
              color="inherit"
            />
          </Link>,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 700,
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGrid
        pageSizeOptions={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
    </Box>
  );
}
