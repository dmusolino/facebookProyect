var database = [

{
    username: "Damian",
    password: "topsecret"
},
{
    username: "Jorge",
    password: "topsecret1"
},
{
    username: "Roberto",
    password: "topsecret2"
},
{
    username: "Nathan",
    password: "topsecret3"
},

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

var userPrompt = prompt("What is your Username");
var passPrompt = prompt("What is your Password");


function isValidUser(user,pass) 

{ for (var i = 0; i < database.length; i++){
    
    if (database[i].username === user &&
        database[i].password === pass)
        
        {

            return true;
        }

          
    
    }

    return false;
}


function signIn(user,pass)
{

  if (isValidUser(user,pass)) {

     console.log(newsfeed)

 } else {alert("Sorry, wrong username or password")}


}


signIn(userPrompt,passPrompt);