import Header from './Header';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';
import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('listItems')) || []);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

    useEffect(() => {//asyncourons code
      localStorage.setItem('listItems', JSON.stringify(items));
    }, [items]);///the second parameter using when running useEfefect if is null it run every change component and if is [] then run the useeffect one in begging

  function addItem(item) {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = {id, checked: false, item}
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem);
  }

  function handleCheck(id) {
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
    setItems(listItems);
  }

  function handleDelete(id) {
    const listItems = items.filter((item) => item.id !== id ? item : '')
    setItems(listItems);
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
