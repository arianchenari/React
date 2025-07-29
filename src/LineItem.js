const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
    <li className="item" key={item.id}>
        <input type="checkbox" checked={item.checked} onChange={() => {handleCheck(item.id)}}/>
        <label onDoubleClick={() => {handleCheck(item.id)}} style={item.checked ? {textDecoration: 'line-through'} : null}>
        {item.item}</label>
        <button onClick={() => handleDelete(item.id)}>Delete</button>
    </li>
  )
}

export default LineItem