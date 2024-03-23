import "./UserList.scss";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import {userRows} from "../../data";
import { Link } from 'react-router-dom';
import { useState } from "react";

const UserList = () => {
  const [data,setData] = useState(userRows);

  const handleDelete = (id)=>{
    setData(data.filter(item=>item.id !== id));

  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'First name', width: 200, renderCell: (params)=>{
      return(
        <div className="userListUser">
        {params.row.avatar && <img src={params.row.avatar} alt=""  className="userListImg"/>}
        {params.row.username}
      </div>
      )
    } },
    { field: 'email', headerName: 'Email', width: 200},
    {
      field: 'status',
      headerName: 'status',
      width: 150,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 230,
    },
    {
      field:"action",
      headerName: "Action",
      width:150,
      renderCell: (params)=>{
        return(
          <>
          <Link to={"/user/"+params.row.id} className='link'>  
          <button className="userListEdit">Edit</button>
          </Link>
          <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
          </>
        )
      }
    }
   
  ];
  

  
  
  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8},
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  ) 
}

export default UserList
