'use strict';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                Hello world
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));