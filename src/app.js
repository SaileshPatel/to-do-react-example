'use strict';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ul>
                <li>Example Item</li>
            </ul>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <List />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));