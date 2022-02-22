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
                {this.props.taskItems.map((item) =>
                    <Item
                        key={item.toString()}
                        ItemName={item} />
                )}
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
        this.state = {
            tasks: ["Hello", "Task 1"],
        };
    }

    render() {
        return (
            <div>
                <ItemForm />
                <List taskItems={this.state.tasks} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));