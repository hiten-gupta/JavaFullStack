function subscribeButton(){
    const buttonElement = document.querySelector('.Subscribe');
    if(buttonElement.innerText === 'Subscribe'){
        buttonElement.innerText = 'Subscribed';
    }else buttonElement.innerText = 'Subscribe';
    
}