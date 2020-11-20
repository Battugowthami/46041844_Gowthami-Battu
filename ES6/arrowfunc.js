/*const square = function(number){
return number * number; js
};*/

const square = number =>  number * number;
console.log(square(5));
    
var points = () => 100;
console.log(typeof points);


let setName = (id, name) => ({ id: id, name: name });
console.log(setName(4, "Gowthami"));

var bill = {
    number: 44,
    process: function () {
        return () => console.log(this.number);
    }
};
bill.process()();