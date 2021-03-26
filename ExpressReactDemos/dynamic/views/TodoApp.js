var React = require('react');

// Each todo list item is a Component with its own state and event
class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      id: props.id,
      done: false
    };
    this.handleClick = this.handleClick.bind(this);
    console.log(this.state.text +  this.state.id);
  }

  handleClick(e){
    this.setState({done:true});
  }

  render() {
    let todo = `${this.state.id}. ${this.state.text}`;
    if (this.state.done) {
      return (
        <li className="list-group-item" 
          key={this.state.id} onClick={this.handleClick}>
          <del>{todo}</del>
        </li>
      );
    }
    else {
      return (
        <li className="list-group-item" 
          key={this.state.id} onClick={this.handleClick}>
          {todo}
        </li>
      );
    }
  }
}

class TodoList extends React.Component {
  // just display the properties as list items
  render() {
    return (
      <ul className="list-group">
        {this.props.items.map(item => (
          <ListItem id={item.id} text={item.text} />
        ))}
      </ul>
    );
  }
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.items)
    this.state = props; //{ items: props.items, text: '' };
    console.log('state = ', this.state)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div style={{width: "300px", marginLeft:"50px" }}>
        <h3>TODO List</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="new-todo">
              What needs to be done?
            </label>
            <input className="form-control"
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // check for empty textbox
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: todo,
      id: this.state.items.length+1,
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

module.exports = TodoApp;