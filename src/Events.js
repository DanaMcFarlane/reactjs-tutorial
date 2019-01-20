import React, {Component} from 'react';
//import {API_KEY, CALENDAR_ID} from '../config.js';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.characterData.map((row,index) => {
       return (
            <tr keys = {index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button onClick = {() => 
                    props.removeCharacter(index)}>Delete 
                    </button>
                </td>
            </tr>
       ); 
    });
    return (
        <tbody>
            {rows}  
        </tbody>
    )
}


class Events extends Component {
    render() {
        const {characterData, removeCharacter} = this.props;
        return (
           <table>
               <TableHeader/>
               <TableBody 
                    characterData={characterData}
                    removeCharacter={removeCharacter}/>
           </table>
        );
    }
}

export default Events;