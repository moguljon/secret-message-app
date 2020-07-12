const { hash } = window.location;

const message = atob(hash.replace('#', ''));
if(message) {
  document.querySelector('#card-msg').classList.add('hide');
  document.querySelector('#msg-show').classList.remove('hide');
  document.querySelector('h1').innerHTML = message;

}
//grab form - 1st step
const form = document.querySelector('form');
//add event listener on submit
form.addEventListener('submit', event => {
  //removes reload of default browser
  event.preventDefault();

  //add some visability
  document.querySelector('#card-msg').classList.add('hide');
  document.querySelector('#text-msg').classList.remove('hide');
  
  //select input
 const input = document.querySelector('#msg-input');
  //take value and encoded
 const encrypted = btoa(input.value);

 //throw it into the second input
 const input2 = document.querySelector('#text-input');
 //window.location allows us to give use that
 input2.value = `${window.location}#${encrypted}`;
 input2.select();
});