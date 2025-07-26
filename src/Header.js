//Header component of react
const Header = () => {
    /*using inline styling
    const styleHeader = {//styling actully have object kind of in jsx
        backgroundColor: '#000',//in jsx we can`t use - for properties so we use camalCase
        color: '#fff'
    }*/
  return (
    <header /*style={styleHeader}*/>
        <h1>Groceries List</h1>
    </header>
  )
}

export default Header