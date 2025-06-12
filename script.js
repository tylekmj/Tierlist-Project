/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

let droplist = document.querySelectorAll(".dropContainer")
let items = document.querySelectorAll(".images")
let container = document.querySelector(".imgContain")
let reset = document.querySelector(".resetType")
let currimg //using this for later

//activates the arrow function when the reset button is clicked
reset.addEventListener('click', () => {
  items.forEach((item) => { //loops through every element in images class
    container.appendChild(item); //puts every element inside the container
  });
});


//drag n drop
items.forEach((img) => {  //loops thru every element in items 
  img.addEventListener("drag", () => { //if any of the elements inside of items is being dragged then it actiavtes the arrow function
    currimg = event.target  //turns currimg into whatever is currently being dragged
  })
});

droplist.forEach((list) => {  //loops thru every element in the container
  list.addEventListener("drop", () => { //activates a function if anything is dropped inside
    list.appendChild(currimg) //puts the current element being dragged previously inside of the tierlist container
  })
});

document.addEventListener("dragover", () => { //activates the function whenever a dragged element is hovering over something droppable
    event.preventDefault(); //prevents the browser from doing whatever shenanigans its doing thats stopping the from event from working
});



