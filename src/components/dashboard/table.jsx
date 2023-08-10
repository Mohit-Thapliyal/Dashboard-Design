import { FiUpload } from "react-icons/fi";
import { AgGridReact } from "ag-grid-react";
import { useMemo, useRef, useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const data = [
  {
    invoiceId: "M063592DR2",
    date: "08.04.2021",
    description: "Code 5928MD01",
    status: "Completed",
    amount: "$2500.00",
  },
  {
    invoiceId: "B084765FD1",
    date: "15.05.2021",
    description: "Code 9876AB01",
    status: "Approved",
    amount: "$1500.00",
  },
  {
    invoiceId: "X029381GH5",
    date: "21.07.2021",
    description: "Code 1234CD56",
    status: "Approved",
    amount: "$1800.00",
  },
  {
    invoiceId: "T071926JP8",
    date: "03.09.2021",
    description: "Code 6543EF78",
    status: "Completed",
    amount: "$3200.00",
  },
  {
    invoiceId: "K013287LM9",
    date: "12.11.2021",
    description: "Code 2468GH90",
    status: "Completed",
    amount: "$2100.00",
  },
  {
    invoiceId: "N095432KP3",
    date: "02.12.2021",
    description: "Code 7312QR45",
    status: "Approved",
    amount: "$1900.00",
  },
  {
    invoiceId: "R077661VX6",
    date: "18.01.2022",
    description: "Code 8520YZ67",
    status: "Approved",
    amount: "$2700.00",
  },
  {
    invoiceId: "E042573WB7",
    date: "07.03.2022",
    description: "Code 1369TU78",
    status: "Completed",
    amount: "$3100.00",
  },
  {
    invoiceId: "J031294QC8",
    date: "24.04.2022",
    description: "Code 5794AB23",
    status: "Approved",
    amount: "$2400.00",
  },
  {
    invoiceId: "M015867SD9",
    date: "11.06.2022",
    description: "Code 0287CD45",
    status: "Approved",
    amount: "$1800.00",
  },
  {
    invoiceId: "P094263WE0",
    date: "30.07.2022",
    description: "Code 3968EF01",
    status: "Completed",
    amount: "$3300.00",
  },
  {
    invoiceId: "L080493TF1",
    date: "17.09.2022",
    description: "Code 6241GH67",
    status: "Approved",
    amount: "$2800.00",
  },
  {
    invoiceId: "S060829GJ2",
    date: "05.11.2022",
    description: "Code 7530IJ89",
    status: "Completed",
    amount: "$2200.00",
  },
  {
    invoiceId: "F040261HK3",
    date: "22.12.2022",
    description: "Code 9182KL01",
    status: "Completed",
    amount: "$3700.00",
  },
  {
    invoiceId: "U016493LM4",
    date: "09.02.2023",
    description: "Code 2457MN89",
    status: "Approved",
    amount: "$1950.00",
  },
];

function Table() {
  const gridRef = useRef(null);
  const [rowData] = useState(data);
  const [columnDefs] = useState([
    {
      field: "invoiceId",
      headerName: "Invoice ID",
      checkboxSelection: true,
      headerCheckboxSelection: true,
    },
    { field: "date" },
    { field: "description" },
    { field: "status", cellRenderer: Status },
    { field: "amount" },
  ]);
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      flex: 1,
      headerClass: "custom-header",
      cellStyle: { fontSize: "12px" },
    }),
    []
  );
  const getRowStyle = (params) => {
    if (params.node.rowIndex % 2 === 0) {
      return { background: "#F0F4F9" }; // Set the background color for even rows
    }
    return { background: "#fff" }; // No style changes for odd rows
  };
  const handleExportButtonClick = () => {
    const gridApi = gridRef.current.api; // Assuming you have a ref for AgGridReact
    gridApi.exportDataAsCsv();
  };

  return (
    <div className="bg-white rounded-[4px] hover:shadow-lg shadow-md">
      <div className="px-4 py-4 flex justify-between">
        <h2 className="font-semibold">Recent Transactions</h2>
        <button
          type="button"
          onClick={handleExportButtonClick}
          className="flex text-white text-xs items-center gap-1 px-2 py-[6px] rounded-[3px] bg-primary"
        >
          <FiUpload />
          <span>Export</span>
        </button>
      </div>
      <div className="px-4 flex text-xs gap-1 border-b">
        <span className="pb-2 px-2 font-medium border-b-2 border-primary text-primary cursor-pointer">Incoming</span>
        <span className="pb-2 px-2 font-medium text-slate-500 cursor-pointer">Invoices</span>
      </div>
      <div className="h-64 w-full ag-theme-alpine" style={{ fontSize: "12px" }}>
        <AgGridReact
          ref={gridRef}
          getRowStyle={getRowStyle}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          animateRows={true}
          headerHeight={40}
        />
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Status({ value }) {
  return (
    <span className="h-full items-center text-xs flex">
      <span
        className={`text-white px-2 py-[3px] rounded-full text-[10px] ${
          value === "Completed"
            ? "bg-emerald-500"
            : value === "Approved"
            ? "bg-primary"
            : "bg-amber-400"
        }`}
      >
        {value}
      </span>
    </span>
  );
}

export default Table;
