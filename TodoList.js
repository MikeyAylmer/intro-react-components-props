const TodoList = (props) => {
    // const todos = [
    //     <li>Code Homework</li>,
    //     <li>Finish 70%</li>,
    //     <li>Complete Course</li>
    // ]

    return (
        <div>
            <h4>Todo List</h4>
            <ul>
                {props.todos.map(t => <li>{t}</li>)}
            </ul>
        </div>
    )
}
// in React its common to use map array method to loop over the array.