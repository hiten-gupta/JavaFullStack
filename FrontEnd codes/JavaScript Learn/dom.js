function subscribeButton(){
    const buttonElement = document.querySelector('.Subscribe');
    if(buttonElement.innerText.trim() === 'Subscribe'){
        buttonElement.innerText = 'Subscribed';
        buttonElement.classList.add('is-subscribed');
    }else{ 
        buttonElement.innerText = 'Subscribe';
        buttonElement.classList.remove('is-subscribed');
    }
    
}
function calculate(){
    const inputElement = document.getElementById('fname');
    let orderTotal = Number(inputElement.value);
    let finalCost = 0;
    if(isNaN(orderTotal) || orderTotal <=0){
        document.getElementById('total-cost').innerText = "Enter a valid amount";
        return;
    }
    if(orderTotal < 500) finalCost = orderTotal +150;
    else finalCost = orderTotal;
    document.getElementById('total-cost').innerText = `Total Amount : RS. ${finalCost}`;
}
document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('fname');
    if(textInput){
textInput.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') calculate();
});
    }
});
