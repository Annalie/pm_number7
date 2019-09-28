import React, { Component } from 'react';

class App extends Component {
    render() {
        let ListNames = []
        let ListLast = []
        let ages = []
        const List = [{
            firstName: "AZ",
            secondName: "Gomez",
            age: 21
        },
        {
            firstName: "Tikling",
            secondName: "Heron",
            age: 56

        },
        {
            firstName: "Mayang",
            secondName: "Bungol",
            age: 45       
        }]

        List.map((l) => <ul key = {l.firstName}>
        {ListNames.push(l.firstName+ ", ")}:{ListLast.push(l.secondName + ", ")}:{ages.push(l.age+ ", ")} </ul>)



        return(
            <div>
                <h2>The Names</h2>
                {ListNames}<br/>
                <h2>The Last Names</h2>
                {ListLast}<br/>
                <h2>Ages</h2>
                {ages}
            </div>
        )
}
}

export default App;