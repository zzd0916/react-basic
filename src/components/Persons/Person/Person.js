import React from 'react'; //使用jsx语法必须引入react
import './Person.css'
const person = (props)=>{
    return(
        <div className="Person">
            <p onClick={props.myClick}>大家好，我是{props.name}. 我已经学习了{props.count}门课程！</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} defaultValue={props.name} />
        </div>
    )
}
export default person;