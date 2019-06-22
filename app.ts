console.log("Hello world!!")

console.log("new message has been added...")

//variable declaration
let a = 10
console.log(a)

//array
let student ={
name: "Anup",
phone:1234567890

}

let studentlist=[
    {name: "Akshay", phone: 12312312},
        
    {name: "amey", phone : 123121212}
]

//studentlist.push(student)

for(var index=0; index< studentlist.length;index++){
    var element = studentlist[index];
    console.log("Name is: "+element.name+"has phone is: "+element.phone)

}