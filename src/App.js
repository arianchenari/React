import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([{//if we have data witch we want using difrent child components we define that to parent component
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

  function handleCheck(id) {//becuase this function using that data(items) we should define that to parent
      const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
      setItems(listItems);
      localStorage.setItem('listItems', JSON.stringify(listItems))
  }

  function handleDelete(id) {
      const listItems = items.filter((item) => item.id !== id ? item : '')
      setItems(listItems);
      localStorage.setItem('listItems', JSON.stringify(listItems))
  }

  return (
    <div className='App'>
      <Header title='Groceries'/>{/*props(properties) driling: we can drill a property to another components*/}
      <Content 
        items={items}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
