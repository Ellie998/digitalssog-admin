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

import { Button } from '@/components/ui/button';
import { toast } from 'react-toastify';
import { BsArrowsAngleExpand, BsCopy } from 'react-icons/bs';
import Link from 'next/link';

import { v4 } from 'uuid';
import { TemplateWithScreenId } from '@/lib/db';

interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (newModel: (oldModel: GridRowModesModel) => GridRowModesModel) => void;
}

function EditToolbar(props: EditToolbarProps) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = v4();
    setRows((oldRows) => [
      ...oldRows,
      {
        id: id,
        appName: '',
        version: '',
        phoneName: '',
        created_at: '',
        updated_at: '',
        isNew: true,
      },
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'appName' },
    }));
  };

  return (
    <GridToolbarContainer className="mx-4 mt-4 ">
      <Button color="primary" onClick={handleClick} className="ml-auto">
        Add Template
      </Button>
    </GridToolbarContainer>
  );
}

export default function TemplateTable({ data }: { data: TemplateWithScreenId[] }) {
  const initialRows: GridRowsProp = data?.map((data) => ({
    id: data.id,
    appName: data.appName,
    version: data.version,
    phoneName: data.phoneName,
    created_at: data.created_at,
    updated_at: data.updated_at,
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
  const handleCopyClick = (id: GridRowId) => async () => {
    const originData = data.find((template) => template?.id === id);
    const newId = v4();
    setRows((oldRows) => [
      ...oldRows,
      {
        id: newId,
        appName: originData?.appName,
        version: originData?.version + 'copy',
        phoneName: originData?.phoneName,
        created_date: '',
        updated_date: '',
        isNew: true,
      },
    ]);
    setRowModesModel((oldModel) => ({ ...oldModel, [id]: { mode: GridRowModes.View } }));

    try {
      const response = await fetch(`/api/templates`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: newId,
          appName: originData?.appName,
          version: originData?.version + 'copy',
          phoneName: originData?.phoneName,
          main_color: originData?.main_color,
          sub_color: originData?.sub_color,
        }),
      });
      originData?.screens?.forEach(async (screen) => {
        const screensResponse = await fetch(`/api/screen/${screen.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: screen.id,
            template_id: newId,
          }),
        });
        if (screensResponse.ok) {
          toast.error('템플릿 스크린 복제 성공!');
        }
      });

      if (!response.ok) {
        toast.error('템플릿 복제 실패!');
        throw Error('FAIL : Template Copy in Template table');
      }

      toast.success(`[${newId}] Template 복제 성공`);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteClick = (id: GridRowId) => async () => {
    const text = '확인 버튼을 누르면 선택한 Template이 삭제됩니다. ';
    if (confirm(text) == true) {
      setRows(rows.filter((row) => row.id !== id));

      toast.success(`[${id}] template 삭제 성공`);

      try {
        const response = await fetch(`/api/templates/${id}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: id,
          }),
        });
        if (!response.ok) {
          toast.error('ERROR!');
          throw Error('FAIL : TEMPLATE TABLE');
        }

        toast.success(`[${id}] template 삭제 성공`);
      } catch (error) {
        console.log(error);
      }
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
        const response = await fetch(`/api/templates`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: newRow.id,
            appName: newRow.appName,
            version: newRow.version,
            phoneName: newRow.phoneName,
          }),
        });
        if (!response.ok) {
          toast.error('ERROR!');
          throw Error('FAIL : TEMPLATE TABLE');
        }

        toast.success(`[${newRow.id}] template 저장 성공`);
      } else {
        const response = await fetch(`/api/templates/${newRow.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: newRow.id,
            appName: newRow.appName,
            version: newRow.version,
            phoneName: newRow.phoneName,
          }),
        });
        if (!response.ok) {
          toast.error('ERROR!');
          throw Error('FAIL : TEMPLATE TABLE');
        }

        toast.success(`[${newRow.id}] template 업데이트 성공`);
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
      field: 'phoneName',
      headerName: 'Phone Name',
      width: 100,
      editable: true,
      align: 'left',
      headerAlign: 'left',
    },

    {
      field: 'created_at',
      headerName: 'created_at',
      width: 100,
      align: 'left',
      headerAlign: 'left',
      editable: false,
    },
    {
      field: 'updated_at',
      headerName: 'updated_at',
      width: 100,
      align: 'left',
      headerAlign: 'left',
      editable: false,
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

            <Link href={`/admin/templates/${row.id}`}>
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

          <GridActionsCellItem
            icon={<BsCopy size={14} />}
            label="Copy"
            color="inherit"
            onClick={handleCopyClick(id)}
          />,
          <Link href={`/admin/templates/${row.id}`}>
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
