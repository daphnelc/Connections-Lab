console.log('file is working');

//the story
let story = ["I look down expecting to see a small rock rolling away from me, but what I see is, instead, a human skull."];

//0.Load the page first
//the javascript code only run when html is finished loading
window.addEventListener("load", () => {
    console.log("page has loaded");

  //1. select a button   
let pickButton = document.querySelector("#clickButton");
    console.log(pickButton);

//2. listen for a button to get clicked
    pickButton.addEventListener("click", () => {
        console.log("button was clicked");
        //when the button was clicked, the number that you clicked will show up in console

//show the story
let showStory = document.querySelector('#sentence');       
   showStory.innerHTML = story;

   document.body.classList.add('animate');
            
});
});
