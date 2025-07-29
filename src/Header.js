//Header component of react
const Header = ({ title }) => { // distructring the props : props.title =  { title }
  return (
    <header>
        <h1>{title} List</h1>
    </header>
  )
}

Header.defaultProps = {//using def props to if not recieve a data from api
  title: "Default Title",
}

export default Header