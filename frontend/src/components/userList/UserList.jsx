import Box from '@mui/material/Box';
import userListStyle from './userList.style';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {useSelector} from "react-redux"
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import {useGetAllUsersQuery} from "../../redux/services/userApi"
import CircularProgress from '@mui/material/CircularProgress'
import EditableRow from '../editableRow/EditableRow';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@mui/material/styles';
import {useState,useEffect} from "react"


function UserList(props) {
    const {data,isSuccess} = useGetAllUsersQuery(null)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(1);
    const [rows,setRows]= useState(data)

    useEffect(() => {
        if(isSuccess) setRows(data)
    },[])
    
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data?.length) : 0;

    const fieldsToDisplay=["name","email","role","lastLogin"]
    const rowData = {rows,setRows,fieldsToDisplay}
    
    return (<>
             {isSuccess ? <Box style={userListStyle.general}>
                        <TableContainer style={userListStyle.table}   >
                           <Table  aria-label="simple table">
                              <TableHead style={userListStyle.head}>
                                <TableRow>
                                  <TableCell style={userListStyle.head.cell}>Name</TableCell>
                                  <TableCell style={userListStyle.head.cell} >E-mail</TableCell>
                                  <TableCell style={userListStyle.head.cell}>Role</TableCell>
                                  <TableCell style={userListStyle.head.cell}>Last seen</TableCell>
            
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((account) => (
                                    
                                    <EditableRow key={account._id}  account={account} {...rowData}/>
                                ))}
                                
                                 </TableBody>
                             
                           </Table>
                           <TablePagination
                          rowsPerPageOptions={[1, 10, 25]}
                          component="div"
                          count={data.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          onPageChange={handleChangePage}
                          onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                        </TableContainer>
                        {console.log("Page",page)}
                                    {console.log("Rows per Page",rowsPerPage)}
                       
                    </Box>
            
                    :<CircularProgress/>}
            </>
        
    );
}

export default UserList;