import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import MyHeader from '../components/Header/Header';


//有状态组建 (类) ，有生命周期
class App extends Component {

  //constructor get default props
  constructor(props){
    super(props);
    console.log("react app contructor is running...",props)

     //state 只能在extends Compoment的class中使用
    this.state = {
      persons:[
        {id:1,name:"进击的小牛牛",count: 30},
        {id:2,name:"成都小东",count: 18},
        {id:3,name:"Samson",count: 48}
      ],
      otherThings:'otherThings'
    }
  }

  //componentWillMount
  componentWillMount(){
    console.log("react app componedWillMount is running...");
  }
  //componentDidMount
  componentDidMount(){
    //不能再此处更新State ，否则为继续调用render，进入死循环
    console.log("react app componentDidMount is running...");
  }
  switchNameHandler = (newName)=>{
    //调用时加上括号会自动执行该方法

    //更改state值，使用setState
    this.setState({
      persons:[
        {id:1,name:"致命一击",count: 301},
        {id:2,name:"神奇的故事",count: 118},
        {id:3,name:newName,count: 418}
      ],
      showPersons:false
    })
  }
  
  switchPerson = ()=>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  changNameHandler = (event,id)=>{
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id ===id
    })
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }
  deleteNameHandler = (personIndex)=>{
    // const persons = this.state.persons;
    const persons = [...this.state.persons];//es6操作运算符
    persons.splice(personIndex,1);
    this.setState({
      persons:persons
    })

  }


  render() {
    
    console.log("react app render is running...");
    let persons = null;
    if(this.state.showPersons){
      persons = <Persons  
        myClick= {this.deleteNameHandler}
        changed= {this.changNameHandler}
        persons = {this.state.persons} />
    }
   
    return (
      <div className="App">
          <MyHeader 
            title = {this.props.appTitle}
            clicked = {this.switchPerson}
            showPersons = {this.state.showPersons}
            persons={this.state.persons} />
          {persons}
      </div>

      
      //return React.createElement('div',{"className":"App"},React.createElement('h1',null,'Hello world'))
    );
  }
}

export default App;
