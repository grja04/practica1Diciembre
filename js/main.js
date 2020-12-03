
let userArray = []
  

document.getElementById("botonSecundario").addEventListener("click", () => {
console.log("click")
let name = document.getElementById("First-name").value
if (name.length > 15) {
    name = name.slice(0,15)+"..."
}
let lastName = document.getElementById("Last-name").value
console.log(name, lastName)

let userObject = {name, lastName}
console.log( userObject )
userArray.push (userObject)
console.log(userArray)
addUserToList();

})

const addUserToList = () => { 
   document.getElementById("user-list").innerHTML = ""
   userArray.forEach( user => {
       let currentContent = document.getElementById("user-list").innerHTML
       let newItem = `
        <li class= "list-group"> ${ user.name } ${user.lastName} </li>`

       let newContent = currentContent + newItem

       document.getElementById("user-list").innerHTML = newContent
   })
}