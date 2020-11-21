import React from 'react';
import Person from './Person'

function NameList()
{
    const persons =[
        {
            id : 1,
            name : 'Gowthami',
            age : 21,
            skill : 'Java'
        },
        {
            id : 2,
            name : 'Mohan',
            age : 26,
            skill : 'Advanced Java'
        },
        {
            id : 3,
            name : 'Tulasi',
            age : 38,
            skill : 'React'
        }
    ]
    const personList = persons.map((person) => <Person key ={person.name}  person = {person} />)
    //const personList = persons.map((person) => <Person  person = {person} />)
    return <div> {personList}</div>
}
       
export default NameList
//const personList = persons.map(person => <h2> I am {person.name}. I am {person.age} years of old. I know {person.skill}</h2>)
//return <div> {personList}</div>
//}
   // const names = ['Gowthami','Mohan', 'Tulasi']
//const nameList = names.map(name => <h2>{name}</h2>)
    //return(  <div>{nameList}</div>)
           { /*<h2>{names[0]}</h2>
           // <h2>{names[1]}</h2>
    <h2>{names[2]}</h2>*/}
