'use strict';

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>{this.props.ItemName}</li>
        )
    }
}

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ul>
                <Item ItemName="Example Item 1" />
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