import React from "react";
import { DataGrid } from "@mui/x-data-grid";
// import { getImageListItemBarUtilityClass } from "@mui/material";
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: " name", width: 270 },
  { field: "username", headerName: "username", width: 270 },
  { field: "email", headerName: "email", width: 270 },
  { field: "adressCity", headerName: "address", width: 270 },
];
// const rows = [
//   { id: 1, name: "Snow", username: "Jon", email: "nazi@gmail.com " },
//   { id: 2, name: "Lannister", username: "Cersei", email: "nazi@gmail.com " },
//   { id: 3, name: "Lannister", username: "Jaime", email: "nazi@gmail.com " },
//   { id: 4, name: "Stark", username: "Arya", email: "nazi@gmail.com " },
//   {id: 5,name: "Targaryen",username: "Daenerys",email: "nazi@gmail.com ",},
//   { id: 6, name: "Melisandre", username: null, email: "nazi@gmail.com " },
//   { id: 7, name: "Clifford", username: "Ferrara", email: "nazi@gmail.com " },
//   { id: 8, name: "Frances", username: "Rossini", email: "nazi@gmail.com " },
//   { id: 9, name: "Roxie", username: "Harvey", email: "nazi@gmail.com " },
// ];
const Tablegetdata = ({ userList }) => {
  return (
    <div style={{ height: 400, width: "100%", textAlign: "center" }}>
      <DataGrid
        rows={userList}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Tablegetdata;
