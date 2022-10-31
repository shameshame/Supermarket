import {useState} from "react"
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import fieldInputMap from "../../config/fieldInputMap.js"
import TextField from '@mui/material/TextField'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';
import {
          useUpdateUserAccountMutation,
          useDeleteAccountMutation
       } from "../../redux/services/userApi"

import { listItemAvatarClasses } from "@mui/material";

function EditableRow(props) {
    const {rows,setRows,fieldsToDisplay,account}=props
    
    //RTK hooks for api calls
    const [triggerForEditing,result]=useUpdateUserAccountMutation()
    const [triggerForDeletion,afterDeletion] =useDeleteAccountMutation()

   

    // Initial states
    const [open, setOpen] = useState(false);
    const [isEdit, setEdit] = useState(false);
    const [editableRow,setEditableRow]= useState(account)
    const [disable, setDisable] = useState(true);
    const [showConfirm, setShowConfirm] = useState(false);
    
    
   const handleSave = () => {
        
        let updatedRows= rows.filter(row=>row._id!==editableRow._id)
        updatedRows.push(editableRow)
        setRows(updatedRows);
        setEdit(!isEdit);
        triggerForEditing(editableRow)
    };

    const handleDelete=()=>{
        let rowsAfterDeletion = rows.filter(row=>row._id!==editableRow._id)
        setRows(rowsAfterDeletion)
        triggerForDeletion(editableRow._id)
    }
    const handleChange = (event) => {
        // setDisable(false);
        const {name,value}= event.target
        setEditableRow({...editableRow,[name]:value})
    };
    
    
    return (
        <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            {isEdit ? fieldsToDisplay.map(field=>fieldInputMap[field]?.input ? fieldInputMap[field].input(handleChange,editableRow[field]) 
                                                                             :<TextField inputProps={{readOnly:field==="lastLogin"}}
                                                                              type=
                                                                              {
                                                                                fieldInputMap[field]?.type
                                                                                ? fieldInputMap[field].type
                                                                                :"text"
                                                                              }
                                                                              name={field}
                                                                              onChange={event=>handleChange(event)}
                                                                              value={editableRow[field]}
                                                                             />
                                          )
                    : fieldsToDisplay.map(field=><TableCell key={field}>{editableRow[field]}</TableCell>)
            }
            <TableCell>
               <IconButton onClick={isEdit ? handleSave : ()=>setEdit(true)}>
                 {isEdit? <DoneIcon /> : <EditIcon />}
                </IconButton>
            </TableCell>
            <TableCell><IconButton onClick={handleDelete} disabled={isEdit}><DeleteIcon/></IconButton></TableCell>
        </TableRow>
    );
}

export default EditableRow;