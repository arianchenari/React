//Footer component of react
const Footer = ( {length} ) => {//driling with distructuring length property
    
  return (
    <footer>
        <p>{length} List {length === 1 ? 'item' : 'items'}</p>
    </footer>
  )
}

export default Footer