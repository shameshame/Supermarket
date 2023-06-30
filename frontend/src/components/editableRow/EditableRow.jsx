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


function EditableRow(props) {
    const {table,setTable,fieldsToDisplay,account}=props
    const {rows}=table
    
    //RTK hooks for api calls
    const [triggerForEditing,result]=useUpdateUserAccountMutation()
    const [triggerForDeletion,afterDeletion] =useDeleteAccountMutation()

   

    // Initial states
   
    const [isEdit, setEdit] = useState(false);
    const [editableRow,setEditableRow]= useState(account)
    
    
    
   const handleSave = async () => {
      try{  
          await triggerForEditing(editableRow).unwrap()
          let updatedRows= rows.filter(row=>row._id!==editableRow._id)
          updatedRows.push(editableRow)
          setTable({...table,rows:updatedRows,successAlertOpen:true})
          setEdit(!isEdit);
        }catch (error) {
          setTable({...table,errorAlertOpen:true})
       }
    };

    const handleDelete= async ()=>{
       try{
         await triggerForDeletion(editableRow._id).unwrap()
         let rowsAfterDeletion = rows.filter(row=>row._id!==editableRow._id)
         setTable({...table,rows:rowsAfterDeletion,alertSuccessOpen:true})
       }catch (error) {
        setTable({...table,alertErrorOpen:true})
       } 
    }
    
    const handleChange = (event) => {
        
        const {name,value}= event.target
        setEditableRow({...editableRow,[name]:value})
    };
    
    
    return (
        <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            {isEdit ? fieldsToDisplay.map(field=>
              <TableCell label={fieldInputMap[field].label}>
                 {fieldInputMap[field]?.input
                  ? fieldInputMap[field].input(handleChange,editableRow[field])
                  : <TextField  key={field} inputProps={{readOnly:field==="lastLogin"}}
                     type=
                     {
                       fieldInputMap[field]?.type
                       ? fieldInputMap[field].type
                       :"text"
                     }
                     name={field}
                     onChange={event=>handleChange(event)}
                     value={editableRow[field]}
                     />}
                    {/*(End of inner IF - returns either textField or special component) */}
               </TableCell>) 
                      :fieldsToDisplay.map(field=><TableCell label={fieldInputMap[field].label} key={field} scope="row">{editableRow[field]}</TableCell>)
            } 
            {/* End of outer IF (Returns row of inputs if it's edit mode, otherwise ordinary row) */}
            <TableCell>
               <IconButton onClick={isEdit ? ()=> handleSave() : ()=>setEdit(true)}>
                 {isEdit? <DoneIcon /> : <EditIcon />}
                </IconButton>
            </TableCell>
            <TableCell><IconButton onClick={handleDelete} disabled={isEdit}><DeleteIcon/></IconButton></TableCell>
        </TableRow>
    );
}

export default EditableRow;