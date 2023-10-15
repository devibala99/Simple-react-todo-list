import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

const ListItems = ({ items, handleCheck, handledelete }) => {
    return (
        <main>
            {(items.length) ? (
                <ul className='unorder_list'>
                    {items.map((item) => (
                        <li className='item' key={item.id}>
                            <input
                                className='checkbox'
                                type='checkbox'
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <label style={(item.checked) ? { textDecoration: 'line-through' } : null}
                                onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
                            <FaTrashAlt
                                role="button"
                                onClick={() => handledelete(item.id)}
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Add something to make a list</p>
            )}
        </main>
    )
}

export default ListItems
