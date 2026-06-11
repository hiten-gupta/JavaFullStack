function subscribeButton(){
    const buttonElement = document.querySelector('.Subscribe');
    if(buttonElement.innerText === 'Subscribe'){
        buttonElement.innerText = 'Subscribed';
    }else buttonElement.innerText = 'Subscribe';
    
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
function helperEnter(){
    if(event.key === 'Enter'){
        calculate();
    }
}