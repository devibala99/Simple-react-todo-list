import './App.css';
import { useState } from 'react';
import Header from "./Header";
import AddInput from "./AddInput";
import ListItems from './ListItems';


function App() {

    // ! List of items
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('to_do_list')));

    // ! Add new item to the list
    const [newItem, setNewItem] = useState('');


    // ! Add & set item with unique key value
    const addItem = (item) => {
        const id = items.length ?
            items[items.length - 1].id + 1 : 1;
        const addNewItem = { id, checked: false, item }
        const listItems = [...items, addNewItem];

        console.log(item.id);
        save(listItems);
    }

    // ! Save list in local storage
    const save = (listItems) => {
        setItems(listItems);
        localStorage.setItem('to_do_list', JSON.stringify(listItems));
    }

    // ! Check whether task is completed or not
    const handleCheck = (id) => {
        const listItems = items.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item);
        console.log('checked');
        save(listItems);
    }

    // ! Delete the task
    const handledelete = (id) => {
        const listItems = items.filter((item) =>
            item.id !== id)
        save(listItems);
    }

    // ! Input function add's input to the list
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newItem) return;
        addItem(newItem);
        setNewItem('');
    }
    return (
        <div className="App">
            <Header title='To-do List' items={items} />
            <AddInput
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}
            />
            <ListItems
                items={items}
                handleCheck={handleCheck}
                handledelete={handledelete}
            />
        </div>
    );
}

export default App;
