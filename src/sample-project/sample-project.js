import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Tablegetdata from "../tableGetData/tableGetData";
// import api from '../api';
import axios from "axios";
const SampleProject = () => {
  const [userList, setUserList] = React.useState([]);
  const [notFound, setNotFound] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageNum, setPageNum] = React.useState(1);
  
  React.useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        const newData = res.data.map((item) => ({
          ...item,
          adressCity:item.address.city
        }));
        setUserList([...newData]);
        console.log("item", newData);
      })

      .catch((er) => {});
    // api
    // .getUserList((currentPage - 1) * 10, 10)
    // .then((res) => {
    //   setLoading(false);
    //   const newData = res.data.map((item) => ({
    //     ...item,
    //   }));

    //   setUserList([...newData]);
    //   console.log(newData)
    //   if (res.count % 10) {
    //     setPageNum(Math.floor(res.count / 10) + 1);
    //   } else {
    //     setPageNum(res.count / 10);
    //   }

    //   if (res.data.length === 0) {
    //     setNotFound(true);
    //   }
    // })
    // .catch((e) => {});
  }, []);
  return (
    <>
      {/* <Stack spacing={2} direction="row">
        {/* <Button variant="contained">Contained</Button> */}
        {/* <Button variant="outlined">all</Button>
        <Button variant="outlined">man</Button>
        <Button variant="outlined">woman</Button>
      </Stack> */} 
      <div style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",width:"80%" ,margin:"100px auto"}}>
        <card>
          {userList.length !== 0 ? (
            <Tablegetdata userList={userList} />
          ) : (
            <p>loading...</p>
          )}
        </card>
      </div>
    </>
  );
};

export default SampleProject;
