import React from 'react';
import './css.css';
import {NavLink} from "react-router-dom";

import jsonData from './data.json';
const loadData = () => JSON.parse(JSON.stringify(jsonData));

class EditInfo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
        this.nameRef=React.createRef()
        this.unitRef=React.createRef()
        this.positionRef=React.createRef()
        this.depthRef=React.createRef()
    }

    componentWillMount(){
        this.setState({data: jsonData.teams[this.props.fetchIndex].roster[this.props.fetchIndex2]})  
    }

    save=()=>{
        this.state.data.person.displayName=this.nameRef.current.value
        this.state.data.unit=this.unitRef.current.value
        this.state.data.position=this.positionRef.current.value
        this.state.data.depthOrder=this.depthRef.current.value
    }
     
    render(){
        return (
                <div className='playerCard' >{console.log(this.state.data)}
                    <form>
                        <p>Name: <input type='text' defaultValue={this.state.data.person.displayName} ref={this.nameRef}></input></p>
                        <p>Unit: <input type='text' defaultValue={this.state.data.unit} ref={this.unitRef}></input></p>
                        <p>Position: <input type='text' defaultValue={this.state.data.position} ref={this.positionRef}></input></p>
                        <p>DepthOrder: <input type='text' defaultValue={this.state.data.depthOrder} ref={this.depthRef}></input></p>
                        <NavLink to='/teaminfo'>
                            <button onClick={this.save}>SAVE</button>
                            <button>CANCEL</button>
                        </NavLink>
                    </form>
                </div>
        )
    }
}

export default EditInfo