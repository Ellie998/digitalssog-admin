"use client";
import * as React from "react";

import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";

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
} from "@mui/x-data-grid";
import { randomId } from "@mui/x-data-grid-generator";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { BsArrowsAngleExpand } from "react-icons/bs";
import Link from "next/link";
import { encodeUrl } from "@/lib/utils";

interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel
  ) => void;
}

function EditToolbar(props: EditToolbarProps) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [
      ...oldRows,
      {
        id,
        categoryName: "",
        title: "",
        icon: "",
        description: "",
        methodLength: 0,
        isNew: true,
      },
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "title" },
    }));
  };

  return (
    <GridToolbarContainer className="mx-4 mt-4 ">
      <Button color="primary" onClick={handleClick} className="ml-auto">
        Add Function
      </Button>
    </GridToolbarContainer>
  );
}

export default function FunctionTable({
  data,
}: {
  data: {
    id: string;
    categoryName: string | null;
    title: string | null;
    icon: string | null;
    description: string | null;
    methodLength: number | null;
  }[];
}) {
  const initialRows: GridRowsProp = data?.map((functionData) => ({
    id: functionData.id,
    categoryName: functionData?.categoryName,
    title: functionData.title,
    icon: functionData.icon,
    description: functionData?.description,
    methodLength: functionData?.methodLength,
  }));

  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>(
    {}
  );

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (
    params,
    event
  ) => {
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
    const text = "확인 버튼을 누르면 선택한 function 목록이 삭제됩니다. ";
    if (confirm(text) == true) {
      setRows(rows.filter((row) => row.id !== id));
      const functionName = rows.find((row) => row.id === id);

      try {
        const response = await fetch(
          `/api/functions/${encodeUrl(functionName?.title)}`,
          {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: id,
            }),
          }
        );
        if (!response.ok) {
          toast.error("ERROR!");
          throw Error("FAIL : FUNCTION TABLE");
        }

        toast.success(`[${functionName?.title}] function 삭제 성공`);
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
    const functionName = rows.find((row) => row.id === newRow.id);

    try {
      if (newRow.isNew) {
        const response = await fetch(`/api/functions`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: newRow.id,
            categoryName: newRow?.categoryName,
            title: newRow?.title,
            icon: newRow?.icon,
            description: newRow?.description,
          }),
        });
        if (!response.ok) {
          toast.error("ERROR!");
          throw Error("FAIL : FUNCTION TABLE");
        }

        toast.success(`[${newRow.title}] function 저장 성공`);
      } else {
        const response = await fetch(
          `/api/functions/${encodeUrl(functionName?.title)}`,
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: newRow.id,
              categoryName: newRow?.categoryName,
              title: newRow?.title,
              icon: newRow?.icon,
              description: newRow?.description,
            }),
          }
        );
        if (!response.ok) {
          toast.error("ERROR!");
          throw Error("FAIL : FUNCTION TABLE");
        }

        toast.success(`[${newRow.title}] function 업데이트 성공`);
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
      field: "categoryName",
      headerName: "Category Name",
      width: 150,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "title",
      headerName: "Title",
      width: 200,
      editable: true,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "icon",
      headerName: "Icon",
      width: 70,
      editable: true,
      align: "left",
      headerAlign: "left",
    },

    {
      field: "description",
      headerName: "Description",
      width: 300,
      align: "left",
      headerAlign: "left",
      editable: true,
    },
    {
      field: "methodLength",
      headerName: "Method Length",
      width: 100,
      align: "center",
      headerAlign: "center",
      editable: false,
    },

    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id, row }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
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

            <Link href={`/admin/functions/${encodeUrl(row.title)}`}>
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
          <Link href={`/admin/functions/${encodeUrl(row.title)}`}>
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
        width: "100%",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
      }}>
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
