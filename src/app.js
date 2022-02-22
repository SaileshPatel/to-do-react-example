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
                {this.props.taskItems.map((item, index) =>
                    <Item
                        key={index}
                        ItemName={item} />
                )}
            </ul>
        )
    }
}

class ItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: ""
        };
        this.updateTaskName = this.updateTaskName.bind(this);
        this.addItemToList = this.addItemToList.bind(this);
    }

    updateTaskName(e) {
        this.setState({
            taskName: e.target.value
        })
    }

    addItemToList() {
        if (!this.state.taskName) {
            return;
        }
        var value = this.state.taskName;
        this.props.addItem(value);
    }

    render() {
        return (
            <div>
                <input type="text"
                    name="to-do-task"
                    value={this.state.taskName}
                    onChange={this.updateTaskName} />
                <input type="submit" value="submit" onClick={this.addItemToList} />
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
        };
        this.addTaskToList = this.addTaskToList.bind(this);
    }

    addTaskToList(task) {
        this.setState({
            tasks: [...this.state.tasks, task]
        })
    }

    render() {
        return (
            <div>
                <ItemForm addItem={this.addTaskToList} />
                <List taskItems={this.state.tasks} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));