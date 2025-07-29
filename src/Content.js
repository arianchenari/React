import { useState } from "react";

//Contet component of react
const Content = () => {
    const [items, setItems] = useState([{
        id: 1,
        checked: false,
        item: 'wash dishes and watch'
    }, {
        id: 2,
        checked: false,
        item: 'item 2'
    }, {
        id: 3,
        checked: false,
        item: 'item 3'
    }, {
        id: 4,
        checked: false,
        item: 'item 4'
    }]);

    function handleCheck(id) {
        const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
        setItems(listItems);
        localStorage.setItem('listItems', JSON.stringify(listItems))
    }

    function handleDelete(id) {
        const listItems = items.filter((item) => item.id !== id ? item : '')
        setItems(listItems);
        localStorage.setItem('listItems', JSON.stringify(listItems))
    }

    return(
        <main>
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className="item" key={item.id}>
                            <input type="checkbox" checked={item.checked} onChange={() => {handleCheck(item.id)}}/>
                            <label onDoubleClick={() => {handleCheck(item.id)}} style={item.checked ? {textDecoration: 'line-through'} : null}>
                            {item.item}</label>
                            <button onClick={() => handleDelete(item.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <h1>Your list is empty</h1>
            )}
        </main>
    )
}

export default Content