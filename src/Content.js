import ItemList from "./ItemList"
//Contet component of react
const Content = ({ items, handleCheck, handleDelete }) => { //drilin props witch we using this component

    return(
        <>
            {items.length ? (
                <ItemList //becuase we have long codes and relative to togather we use another usable component to define that and better organize code
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : ( <h1>Your list is empty</h1>) }
        </>
    )
}

export default Content