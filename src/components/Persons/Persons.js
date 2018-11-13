import React,{Component} from 'react';
import Person from './Person/Person';

//有状态组件
class Persons  extends Component {
    
    //constructor get default props
    constructor(props){
        super(props);
        console.log("Persons app contructor is running...",props)
    }

    //componentWillMount
    componentWillMount(){
        console.log("Persons app componedWillMount is running...");
    }
    //componentDidMount
    componentDidMount(){
        //不能再此处更新State ，否则为继续调用render，进入死循环
        console.log("Persons app componentDidMount is running...");
    }


    //更新组件生命周期钩子函数
    componentWillReceiveProps(nextProps){
        console.log("[update Persons.js] componentWillReceiveProps is running...");
    }

    //判断是否更新组件
    shouldComponentUpdate(nextProps,nextState){
        console.log("[update Persons.js] shouldCompoentUpdate is running...",nextProps,nextState);
        //如果return false ，则不进入render();
        return nextProps.persons !== this.props.persons;
    }

    //将要进行更新
    componentWillUpdate(nextProps,nextState){
        console.log("[update Persons.js] componentWillUpdate is running...",nextProps,nextState);
    }

    //render执行完才执行
    componentDidUpdate(prevProps,pervState){
        console.log("[update Persons.js] componentDidUpdate is running...",prevProps,pervState);
    }
    
    render(){
        console.log("[Persons.js] render is running...");
        return this.props.persons.map((person,index) =>{
            return  <Person 
                      myClick={()=> this.props.myClick(index)}
                      changed={(event) => this.props.changed(event,person.id)}
                      key={person.id}
                      name={person.name} 
                      count={person.count}/>
          })
    }
    
}

export default  Persons;