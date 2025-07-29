import Header from './Header';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('listItems')));
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  function setAndSaveItems(listItems) {
    setItems(listItems);
    localStorage.setItem('listItems', JSON.stringify(listItems));
  }

  function addItem(item) {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = {id, checked: false, item}
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems)
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem);
  }

  function handleCheck(id) {
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
    setAndSaveItems(listItems)
  }

  function handleDelete(id) {
    const listItems = items.filter((item) => item.id !== id ? item : '')
    setAndSaveItems(listItems)
  }

  return (
    <div className='App'>
      <Header title='Groceries'/>
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
       />
      <Content 
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
