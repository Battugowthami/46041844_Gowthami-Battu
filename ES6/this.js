const person={
    name :'Gowthami',
    walk()
    {
        console.log(this);
    }
};
person.walk();

const walk=person.walk.bind(person); //walk() -window object
walk();