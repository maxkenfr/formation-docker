import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

let api = axios.create({
    baseURL: process.env.BASE_API || 'http://localhost:3030',
    timeout: 6000
});

const TodoItem = ({id, content = '', onDelete, ...props})=>(
    <li className="TodoItem">
        {content}
        <button onClick={()=>onDelete(id)}>remove</button>
    </li>
);

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            text : '',
            todos : [
                {_id:1, content:'example'}
            ]
        }
    }
    async componentDidMount() {
        const {data} = await api.get('/');
        this.setState({todos:data});
    }

    async handleSubmit(e){
        e.preventDefault();
        const {data} = await api.post('/', {content:this.state.text});
        this.setState({todos: [...this.state.todos, data], text:''})
    }

    async handleDeleteTodo(id){
        const {data} = await api.delete(`/${id}`);
        this.setState({todos: this.state.todos.filter(todo=>todo._id !== data._id)});
    }

    render() {
        return (
            <div className="App">
                <h1>Todo</h1>
                <ul className="TodoList">
                    {this.state.todos.map(todo=><TodoItem key={todo._id} id={todo._id} content={todo.content} onDelete={this.handleDeleteTodo.bind(this)}/>)}
                </ul>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input  className="AddTodo" placeholder="Ajouter une todo" type="text"  value={this.state.text} onChange={event=>this.setState({text:event.target.value})}/>
                </form>
            </div>
        );
    }
}

export default App;
