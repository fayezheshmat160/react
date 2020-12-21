import React, { Component } from "react";
import ToDoItems from "./component/todoitems/todoitem";
import AddItem from "./component/additems/additem";
import "./App.css";

class App extends Component {
  state={
    items:[
      {id:1 ,name:'fayez' , age:20},
      {id:2 ,name:'demain' , age:20},
      {id:3 ,name:'bola' , age:20}

    ]
  }

  deleteItem=(id)=>{
    let items=this.state.items;
    let i =items.findIndex(item=>item.id===id)
    items.splice(i,1)
    this.setState({items})
  }

  addItem=(item)=>{
    item.id=Math.random();
    let items=this.state.items;
    items.push(item);
    this.setState({items});
  }
  render() {
    return (
      <div className="App container">
        <h1 className='text-center'>ToDoList</h1>
        <ToDoItems items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
