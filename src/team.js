import React from 'react';
import './css.css';
import {NavLink} from "react-router-dom";

import jsonData from './data.json';
const loadData = () => JSON.parse(JSON.stringify(jsonData));

class Team extends React.Component{
    constructor(props){
        super(props)
        this.state={data:[]}
    }
     
    click=(e)=>{
        this.props.sendIndex(e.currentTarget.getAttribute('index'))
    }

    render(){
        return (
                <div>
                    {jsonData.teams.map((obj,i)=>{
                        return (
                            <div className='teams' index={i} onClick={this.click}>
                                <NavLink to='/teaminfo' className='link'>
                                    <h1>{obj.name}</h1>
                                    <p>FullName: &ensp;&ensp;{obj.fullName}</p>
                                    <p>NickName: &ensp;{obj.nickName}</p>
                                    <p>Players:  &ensp;&ensp;&ensp;&ensp;{obj.roster.length}</p>
                                </NavLink>
                            </div>
                        )
                    })}
                </div>
        )
    }
}

export default Team