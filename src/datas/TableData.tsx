import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoDocumentText } from "react-icons/io5";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    renderCell: (params: GridRenderCellParams) => {
      return (
        <div className="flex items-center gap-5">
          <IoDocumentText size={18} color={params.row.color} />
          <span>{params.value}</span>
        </div>
      );
    },
    width: 300,
  },
  {
    field: "members",
    headerName: "Members",
    width: 300,
  },
  {
    field: "lastmodified",
    headerName: "Last Modified",
    width: 320,
  },
  {
    field: "blank",
    headerName: "",
    renderCell: () => {
      return (
        <div className="flex justify-center items-center">
          <HiDotsHorizontal color="blue" />,
        </div>
      );
    },
    width: 200,
  },
];

const rows = [
  {
    id: 1,
    name: "presentation",
    members: "only you",
    lastmodified: "---",
    blank: "...",
    color: "#00b391",
  },
  {
    id: 2,
    name: "design guidlines",
    members: "only you",
    lastmodified: "Nov13,2020",
    blank: "...",
    color: "#ff0000",
  },
  {
    id: 3,
    name: "resources",
    members: "only you",
    lastmodified: "---",
    blank: "...",
    color: "#936a54",
  },
  {
    id: 4,
    name: `objectives`,
    members: "only you",
    lastmodified: "---",
    blank: "...",
    color: "#ef1b81",
  },
  {
    id: 5,
    name: `screenshot`,
    members: "only you",
    lastmodified: "---",
    blank: "...",
    color: "#8c18e2",
  },
];

export { columns, rows };
