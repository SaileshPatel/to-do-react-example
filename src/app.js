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

class ItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <form>
                <input type="text" name="to-do-task" />
                <input type="submit" value="submit" />
            </form>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <ItemForm />
                <List />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));