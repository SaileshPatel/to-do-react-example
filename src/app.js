'use strict';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.removeItemFromList = this.removeItemFromList.bind(this);
    }

    removeItemFromList() {
        this.props.removeItem(this.props.ItemName);
    }

    render() {
        return (
            <li>{this.props.ItemName}
                <input type="submit" value="Delete" onClick={this.removeItemFromList} />
            </li>
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
                        ItemName={item}
                        removeItem={this.props.deleteItem} />
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
        e.preventDefault();
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
        this.setState({
            taskName: ''
        })
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
        this.deleteTaskFromList = this.deleteTaskFromList.bind(this);
    }

    addTaskToList(task) {
        this.setState({
            tasks: [...this.state.tasks, task]
        })
    }

    deleteTaskFromList(task) {
        this.setState({
            tasks: this.state.tasks.filter(t => t !== task)
        });
    }

    render() {
        return (
            <div>
                <ItemForm addItem={this.addTaskToList} />
                <List taskItems={this.state.tasks} deleteItem={this.deleteTaskFromList} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));