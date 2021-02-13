function myMood() {
    const moods = ['Angry', 'Happy', 'Hungry', 'Silly', 'Paranoid'];
    return moods[Math.floor(Math.random() * moods.length)];

}
class JSXDemo extends React.Component {
    render () {
        return (
            <div>
                <h1>My current Mood is: {myMood()}</h1>
            </div>
         );

    }
}

ReactDOM.render(<JSXDemo/>, document.getElementById('root'))