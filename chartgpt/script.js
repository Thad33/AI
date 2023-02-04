import bot from './assets/blog.svg';
import user from '.assets/user.svg';

const from = document.querrySelector('form');
const chartContainer = document.querySelector('#chart_container');

let loadInterval;


function loader(element){
  element.textContent = ' ';

  loadInterval = setInterval(() =>{
    element.textContent += '.';

    if(element.textContent === '...') {
      element.textContent = '';
    }
  },300)
}

function typeText(element, text){
  let index = 0;

  let interval = setInterval(() => {
    if(index < text.length){
      element.innerHTML += text.charAt(index);
      index++;
    }
    else {
      clearInterval(interval);
    }
  },20)   
  }

  function generateUniqueId(){
    const timestamp = Date.now();
    const randommNumber = Math.random();
    const hexadecimal = randomNumber.toString(16);

    return `id-${timestamp}-${hexadecimal}`
  }

  function chatStripe(isAi, value, uniqueId){
    reuturn (
      `
      <div class="wrapper ${isAi && 'ai'}">
      <div class="chat">
      <div className ="Profile">
      <img 
       src="${isAi ? bot: user}"
      alt="${isAi ? 'bot' : 'user'}"
      </div>
      <div class ="Message" id = ${uniqueId}>${value}></div>
      </div>
      </div>
      `
    )
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const data = new FormData(from);

    //use's chatstripe
    chartContainer.innerHTML += chatStripe(false,data.get('prompt'));

    form.reset();

    //bot chatStripe
    const uniqueId = generateUniqueId();
    chartContainer.innerHTML += chatStripe(true, " ", uniqueId);

    chartContainer.scrollTop = chatContainer.scrollHeight;

    const messageDiv = documentgetElementById(uniqueId);

    loader(messageDiv);
  }

  form.addEventListner('submit', handleSubmit);
  from.addEventListner('keyup', (e) => {
    if(e.keyCode === 13){
      handleSubmit(e);
    }
  })
