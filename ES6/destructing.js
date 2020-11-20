var employee = {
    id: 44,
    name: "Gowthami"
};
var { id } = employee;
var { name } = employee;
console.log(id);      
console.log(name);

let arrayExample = ["destructuring", "assignment"]
let [firstElement, secondElement] = arrayExample;
console.log(firstElement)
console.log(secondElement)

var names = [
    'Gowthami',
    'jaya',
    'Lithu',
    'Sri'
  ];
  
  names.map(function(name) { 
    return name.length; 
  });
  
  names.map((name) => {
    return names.length;
  }); 
  
  names.map(({length}) => length);