const Animal = (props) => {
    return (
        <ul>
            <li>Emoji: {props.emoji}</li>
            <li>Name: {props.name}</li>
            <li>Species: {props.species}</li>
            <li>isCute: {props.isCute ? "✅" : "❌"}</li>
        </ul>
    )
}
// ternary operater mean ? "if true do this" : "otherwise do this"