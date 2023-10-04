const App = () => (
    <div>
        <Alert>
            < RandomChoice choices={["yellow", "blue", "red"]} />

            < Animal
                name="Stinky Pumpkin"
                species="Dog"
                emoji="🐶"
                isFriendly={true}
                obj={{ age: 4 }}
                isCute={true} />
            < Animal name="Tony" species="Tiger" emoji="🐯" />
        </Alert>
        <RandomNum />
        <RandomNum />
        <RandomNum />

        <TodoList todos={["Reach 70% Completeion", "Learn ReactJS", "Complete Course"]} />

        <Bouncer age={19} />
        <Bouncer age={11} />
        <Bouncer age={29} />

    </div>
)
// Can use implicit return if only one expression is being returned.

ReactDOM.render(<App />, document.getElementById("root"))
// so we must use reactDOM to render our component and then select somewhere for our component to render to which here we decided to use the div id of "root".