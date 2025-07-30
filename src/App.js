import Header from './Header';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import apiRequest from './apiRequest';

function App() {
  const API_URL = 'http://localhost:3500/items';

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchItems = async () => {
        try{
          const response = await fetch(API_URL);
          if(!response.ok) throw Error('data did not recieved');
          const listItems = await response.json();
          setItems(listItems);
          setFetchError(null);
        } catch(err) {
          console.log(err);
          setFetchError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      setTimeout(() => {
        (() => fetchItems())();
      }, 2000);

    }, []);

  async function addItem(item) {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = {id, checked: false, item}
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postOption = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }
    const result = await apiRequest(API_URL, postOption);
    if(result) setFetchError(result);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem);
  }

  async function handleCheck(id) {
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
    setItems(listItems);

    const myItem = listItems.filter((item) => item.id === id);
    const updateOption = {
      method: 'PATCH',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checked: myItem[0].checked })
    };
    const requUrl = `${API_URL}/${id}`
    const result = await apiRequest(requUrl, updateOption);
    if(result) setFetchError(result);
  }

  async function handleDelete(id) {
    const listItems = items.filter((item) => item.id !== id ? item : '')
    setItems(listItems);

    const deleteOption = { method: 'DELETE' };
    const requUrl = `${API_URL}/${id}`;
    const result = await apiRequest(requUrl, deleteOption);
    if(result) setFetchError(result);
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
       <main>
        {isLoading && (<p style={{color: 'green', textAlign: 'center', padding: '1rem'}}>Loading Items....</p>)}
        {fetchError && (<p style={{color: 'red', textAlign: 'center', padding: '1rem'}}>Error:{fetchError}</p>)}
        {!fetchError && !isLoading && <Content 
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))}
          setItems={setItems}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />}
      </main>
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
