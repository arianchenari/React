//Contet component of react
const Content = () => {
    const pickRandomName = () => {
        const name = ['arian', 'arash', 'koroush'];
        const index = Math.floor(Math.random() * 3);
        return name[index];
    }

    const pickRandomName2 = () => {
        const name = ['arian', 'arash', 'koroush'];
        const index = Math.floor(Math.random() * 3);
        console.log(name[index]);
    }
    
    const pickRandomName3 = (name) => {
        console.log(name);
    }

    const pickRandomName4 = (e) => {
        console.log(e)
        console.log(e.target)
        console.log(e.target.innerText)
    }

    return(
        <main>
            <p onDoubleClick={pickRandomName2}>{/*using another click event */}
                Double Click!
            </p>
            <p>Hello {pickRandomName()}!</p>{/*using () cause a run early when page run*/}
            <button onClick={pickRandomName2}>Click it</button>{/*don`t use  () cause a when clicking we want run */}
            <button onClick={() => pickRandomName3('Arian')}>Click it</button>{/*when we want to use argumant for click event we use anounymus func for enter the values */}
            <button onClick={(e) => pickRandomName4(e)}>Click it</button>{/*in a anounymus func we have 1 parammeter it says a event object*/}
        </main>
    )
}

export default Content