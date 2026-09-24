

let input = document.querySelector('#input')
let btn = document.querySelector('#btn')
let head = document.querySelector('#heading')
btn.addEventListener('click',()=>{


switch (input.value) {
  case "apple":
  head.innerHTML = `
             🍎 Apple is a nutritious fruit.<br>  🍎
            It contains fiber and antioxidants.<br>  🍎
            It may support heart health and digestion.<br>  🍎
            Apples are also a good source of vitamin C.  
          `;    
              head.style.color = "red";

          break;
          
  case "mango":
  head.innerHTML = `
    🥭 Mango is a delicious and nutritious fruit.<br> 🥭
    It is rich in vitamin C and vitamin A.<br> 🥭
    It contains antioxidants and fiber.<br> 🥭
    Mango may support healthy digestion.
  `
          break;

  case "avocado":
   head.innerHTML = `
    🥑 Avocado is a nutritious fruit.<br> 🥑
    It contains healthy fats and fiber.<br> 🥑
    It is a good source of potassium and vitamins.<br> 🥑
    Avocado may support heart health.
  `;
          break;


  default:
    head.innerHTML = "Sorry! We don't have information about this fruit."
    break;
}

})
