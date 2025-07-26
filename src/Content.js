//Contet component of react
const Content = () => {
    const pickRandomName = () => {
        const name = ['arian', 'arash', 'koroush'];
        const index = Math.floor(Math.random() * 3);
        return name[index];
    }

    return(
        <main>
            <p>Hello {pickRandomName()}!</p>{/*using () cause a run early when page run*/}
        </main>
    )
}

export default Content