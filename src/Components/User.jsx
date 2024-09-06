
import React from 'react'

const User = ({id,email,name,phone,onDelete, onEdit}) => {

    const handleEdit = () => {
        onEdit({ id, name, email, phone });
    }

    const handleDelete = () => {
        onDelete(id);
    }

    return (  
                 <tr key={id}>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>
                <button id="edit" onClick={handleEdit}>Update</button>
                <button id="delete" onClick={handleDelete}>Delete</button>
                </td>
                </tr>

               
    )
}

export default User;
