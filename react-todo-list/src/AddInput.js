import React from 'react'
import { FaPlusCircle } from "react-icons/fa";

const AddInput = ({ newItem, setNewItem, handleSubmit }) => {
    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <input
                type="text"
                autoFocus
                required
                placeholder='Add Item'
                id="addItem"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button className='addSubmit'>
                <FaPlusCircle />
            </button>

        </form>
    )
}

export default AddInput
