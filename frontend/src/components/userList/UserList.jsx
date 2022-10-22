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
import {useState} from "react"


function UserList(props) {
    const {data,isSuccess} = useGetAllUsersQuery(null)
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(1);
    
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data?.length) : 0;
    
    
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
                                {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((account) => (
                                  <TableRow
                                    key={account.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                  >
                                    
                                    {/* Turn it into loop , to make a component reusable */}
                                    <TableCell label="Name">
                                      {account.name}
                                    </TableCell>
                                    <TableCell label="E-mail">{account.email}</TableCell>
                                    <TableCell label="Role">{account.role}</TableCell>
                                    <TableCell label="Last Login">{account.lastLogin}</TableCell>
                                    
                                </TableRow>
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
                    </Box>
            
                    :<CircularProgress/>}
            </>
        
    );
}

export default UserList;