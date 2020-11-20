function sayHello() 
{
    for (let i=0; i<5; i++) // let- block declar
    {
        console.log(i);
    }
    
    //console.log(i);  shouldn't write this becoz i will be undefined when we use let keyword.
}
sayHello();