const Person = (props) => {
    const age = props.age >= 18 ? "Go vote" : "You must be 18"
    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>)
    return (
        <div>
            <p>Learn some information about this person</p>
            <h3>{age}</h3>
            <ul>
                <li>{props.name.slice(0, 6)}</li>
                <li>{props.age}</li>
            </ul>
            <ul>Hobbies
                {hobbies}
            </ul>
        </div>
    )
}