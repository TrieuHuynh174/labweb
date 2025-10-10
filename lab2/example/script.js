// Get the DOM elements
const myDiv = document.getElementById('myDiv');
const myButton = document.getElementById('myButton');

// Add a 'click' event listener to the button
myButton.addEventListener('click', function() {
  // Change the content of the div
  myDiv.innerHTML = 'You clicked the button!';
  console.log('click');
});

// Add a 'mouseover' event listener to the div
myDiv.addEventListener('mouseover', function() {
  // Change the text color when hovering over the div
  myDiv.style.color = 'blue';
  console.log('mouseover');
});

// Add a 'mouseout' event listener to reset the color when mouse leaves
myDiv.addEventListener('mouseout', function() {
  // Reset the text color
  myDiv.style.color = 'black';
  console.log('mouseout');
});