import LineItem from "./LineItem";

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}//because we reapet the lineitem element so in react we need define that witch key for specefic each item list
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />          
      ))}
  </ul>
  )
}

export default ItemList;