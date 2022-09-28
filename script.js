var database = [

{
    username: "Damian",
    password: "topsecret"
}

];

var newsfeed = [

{
    username: "Shakira",
    comment: "HowI know you can move your body babe"

},

{
    username: "Hernan",
    comment: "Scooby doby doooooo"

}
];

var userPrompt = prompt("What is your Username")
var passPrompt = prompt("What is your Password")



function singIn(user,pass){

if (user === database[0].username &&
    pass === database[0].password) {

    console.log(newsfeed);

} else { 
    
    alert("Wrong Username or Password")

}

}

singIn(userPrompt,passPrompt)


