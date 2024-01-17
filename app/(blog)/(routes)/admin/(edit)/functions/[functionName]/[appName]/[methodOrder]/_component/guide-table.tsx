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
import { Guide } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { BsArrowsAngleExpand } from "react-icons/bs";
import Link from "next/link";

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
      { id, order: "", description: "", isNew: true },
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "order" },
    }));
  };

  return (
    <GridToolbarContainer className="flex justify-between mx-4 mt-4">
      <div className="text-lg font-bold">Linked Guides</div>
      <Button color="primary" onClick={handleClick}>
        Add guide
      </Button>
    </GridToolbarContainer>
  );
}

export default function GuideTable({
  guides,
  methodId,
}: {
  guides: Guide[];
  methodId: string;
}) {
  const initialRows: GridRowsProp = guides.map((guide) => ({
    id: guide.id,
    order: guide.order,
    description: guide.description,
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
    const text = "확인 버튼을 누르면 선택한 가이드 목록이 삭제됩니다. ";
    if (confirm(text) == true) {
      setRows(rows.filter((row) => row.id !== id));

      try {
        const response = await fetch(`/api/guides/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: id,
          }),
        });
        if (!response.ok) {
          toast.error("ERROR!");
          throw Error("FAIL : GUIDE TABLE");
        }

        toast.success("Guide 삭제 성공");
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
        const response = await fetch(`/api/guides`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: newRow.id,
            methodId: methodId,
            description: newRow.description,
            order: Number(newRow.order),
          }),
        });
        if (!response.ok) {
          toast.error("ERROR!");
          throw Error("FAIL : GUIDE TABLE");
        }

        toast.success(`Guide ${newRow.order} 저장 성공`);
      } else {
        const response = await fetch(`/api/guides/${newRow.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: newRow.id,
            methodId: methodId,
            description: newRow.description,
            order: Number(newRow.order),
          }),
        });
        if (!response.ok) {
          toast.error("ERROR!");
          throw Error("FAIL : GUIDE TABLE");
        }

        toast.success(`Guide ${newRow.order} 업데이트 성공`);
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
      field: "order",
      headerName: "Order",
      width: 100,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "description",
      headerName: "Description",
      width: 500,
      align: "left",
      headerAlign: "left",
      editable: true,
    },

    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
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

            <Link href={`/admin/guides/${id}`}>
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
          <Link href={`/admin/guides/${id}`}>
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
        height: 500,
        width: "100%",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
      }}>
      <DataGrid
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
