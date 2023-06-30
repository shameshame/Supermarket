import Box from '@mui/material/Box';
import userListStyle from './userList.style';
import "./UserList.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import userApi from "../../redux/services/userApi"
import EditableRow from '../editableRow/EditableRow';
import {useState,useEffect} from "react"
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';


function UserList(props) {
    
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(1);
    
    //Create single state instead of 2 separate
    const [table,setTable]= useState({rows:[],successAlertOpen:false,errorAlertOpen:false})
    const {rows,successAlertOpen,errorAlertOpen}=table
    

    const [trigger] = userApi.useLazyGetAllUsersQuery()

    useEffect(() => {
        const fetchUsers= async()=>{
            const userList=await trigger().unwrap()
            setTable({...table,rows:userList})
        }  
        
        fetchUsers()
    },[])

    const handleCloseAlert = (event, reason,alert) => {
        if (reason === "clickaway") {
            return;
        }
         setTable({...table,[alert]:false});
    };
    
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // const emptyRows =
    // page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data?.length) : 0;

    const fieldsToDisplay=["name","email","role","lastLogin"]
    const rowData = {table,setTable,fieldsToDisplay}
    
    return (
              <Box style={userListStyle.general}>
                        <TableContainer style={userListStyle.table}   >
                           <Table  aria-label="simple table">
                              <TableHead style={userListStyle.head}>
                                <TableRow>
                                  <TableCell style={userListStyle.head.cell}>Name</TableCell>
                                  <TableCell style={userListStyle.head.cell} >E-mail</TableCell>
                                  <TableCell style={userListStyle.head.cell}>Role</TableCell>
                                  <TableCell style={userListStyle.head.cell}>Last seen</TableCell>
                                  <TableCell style={userListStyle.head.cell}></TableCell>
                                  <TableCell style={userListStyle.head.cell}></TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                <Snackbar
                                   open={successAlertOpen}
                                   autoHideDuration={2000}
                                   onClose={(event)=>handleCloseAlert(event,null,"successAlertOpen")}
                                >   
                                 <Alert  severity="success">
                                      Records saved successfully!
                                 </Alert>
                                </Snackbar>
                                <Snackbar
                                   open={errorAlertOpen}
                                   autoHideDuration={2000}
                                   onClose={(event)=>handleCloseAlert(event,null,"errorAlertOpen")}
                                >   
                                  <Alert onClose={(event)=>handleCloseAlert(event,null,"errorAlertOpen")} severity="error">
                                       Failed to save changes
                                  </Alert>
                                </Snackbar>
                                
                                {rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((account) => (
                                    <EditableRow key={account._id}  account={account} {...rowData}/>
                                ))}
                                
                              </TableBody>
                             
                           </Table>
                           <TablePagination
                              rowsPerPageOptions={[1, 10, 25]}
                              component="div"
                              count={rows?.length}
                              rowsPerPage={rowsPerPage}
                              page={page}
                              onPageChange={handleChangePage}
                              onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </TableContainer>
                </Box>
            );
}

export default UserList;