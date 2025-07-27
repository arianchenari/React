import { useState } from "react";

//Contet component of react
const Content = () => {
    //useState(initialValue) return a array witch have 2 value : [state, setState()]
    const [name, setName] = useState('arian')//set name as def arian and have setName func to change it
    const [count, setCount] = useState(0)

    const pickRandomName = () => {
        const name = ['arian', 'arash', 'koroush'];
        const index = Math.floor(Math.random() * 3);
        setName(name[index]);
    }

    const changeNumber = () => {
        setCount(count + 1);//expected 1 and it is 0
        //when we click button it actully show the state of count witch is 0 and then plus it to one so it 
        // is 1 in next click then we change that to another state and in the next click it will show up 2
        setCount(count + 1);//and it is in the first 0 + 1 , and also after code 16 becuase we talk about 
        // state not a value and state of count in the first is zero also
        console.log(count);//actully show the state not a final value
    }

    return(
        <main>
            <p onDoubleClick={pickRandomName}>Hello {name}!</p>{/*using () cause a run early when page run*/}
            <button onClick={pickRandomName}>Change name</button>
            <button onClick={changeNumber}>Count</button>
        </main>
    )
}

export default Content