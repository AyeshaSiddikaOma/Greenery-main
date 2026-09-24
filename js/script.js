

let input = document.querySelector('#input').value
let btn = document.querySelector('#btn')

btn.addEventListener('click',()=>{


switch (input) {
  case "apple":
    console.log("It is red");
    break;

  case "pineapple":
    console.log("It is yellow");
    break;

  default:
    console.log("Pleae Enter The Name Of Any Fruit")
    break;
}

})
