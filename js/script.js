//consoleIO
let print = (message)=>{console.log(message)};
//testing IO / print("hello2");


//variables for form
let input = document.querySelector("#input");
let button = document.querySelector("#btn");
let name = document.querySelector("#result");

//gives random number function
function randomizer(nums){
  let random = Math.floor(Math.random() * nums);
  return random;
}

//click event for button
button.addEventListener('click',event);

function event(){
  var inputValue = input.value;




  //testing to console
  print(inputValue);
  print(randomizer(100));
  name.textContent = inputValue + " is number " + randomizer(100) + " !!";
  input.value = " ";

  if(inputValue == ""){
    name.textContent = "*Please write a name*";
  }

}
