import React from 'react';
import './Header.css'

//无状态组建 (箭头函数) 不能存取state，无生命周期
const Header = (props)=>{
    const assginedClasses =[];
    //const classes = ['red','bold'].join(" "); //类之间加入空格 'red bold'

    if(props.persons.length <=2){
        assginedClasses.push("red");
    }
    if(props.persons.length <=1){
        assginedClasses.push("bold");
    }
     //设置行内样式，复活样式使用大写
     const style = {
        backgroundColor: 'green',
        color: '#fff',
        border: '1px solid #dedede',
        padding: "10px 15px",
        fontSize: '15px',
        marginBottom: '20px'
      }
    if(props.showPersons){
      style.backgroundColor = 'red';
    }
    return (
        <header className="App-header">
          <h1 className={assginedClasses.join(" ")}>{props.title}</h1>
          <p className={assginedClasses.join(" ")} >Hi React!</p>
          <button style={style} onClick={props.clicked}>内容切换</button>
        </header>
    )
}

export default Header;

