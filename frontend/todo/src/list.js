import {React, useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const List = ({todo, onDelete, loadData}) => {
    const [disabled, setDisabled] = useState(true);
    var data = {
        mytodo: todo.mytodo,
    }
    const onInputChange = e => {
        data = { ...data, [e.target.name]: e.target.value }
        console.log(data);
    }
    const onEdit = async (e) => {
        e.preventDefault();
        var id = e.target.editId.value;
        setDisabled(!disabled);
        if(!disabled){
            await axios.put(`http://localhost:8080/update/${id}`, data);
        }
    }
    return (
        <tr>
            <td><input 
                onChange={e => onInputChange(e)} 
                name="mytodo" 
                defaultValue={todo.mytodo} 
                disabled={(disabled) ? "disabled" : ""} 
                style={{backgroundColor: "white", outline: "none", boxSizing: "border-box", border: "none"}}
                /></td>
            <td class="text-right">
                <Form onSubmit={e => onEdit(e)}>
                    <input hidden name="editId" value={todo._id} />
                    <Button variant="outline-warning" type="submit">{(disabled) ? "Edit" : "Save"}</Button>
                </Form>
            </td>
            <td class="text-right">
                <Form onSubmit={e => onDelete(e)}>
                    <input hidden name="deleteId" value={todo._id} />
                    <Button variant="outline-danger" type="submit">Delete</Button>
                </Form>
            </td>
        </tr>
    )
}

export default List
