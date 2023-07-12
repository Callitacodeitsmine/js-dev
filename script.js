let clickCount = 0;

const button = document.getElementById('myButton');

button.addEventListener('click', function() {
  clickCount++;
  console.log('Click count:', clickCount);
});
console.log("Hello world");
