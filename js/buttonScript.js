//buttonScript.js
function displayMessage(){
    window.alert('HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello')
}

document.querySelector('#btn-1').addEventListener('click', addParagraph);

document.querySelector('#btn-2').addEventListener('click', removeParagraph);

let counter = 0;

function addParagraph(){
    const newElement = document.createElement('p');
    newElement.textContent='New Paragraph';
    newElement.id = 'para-' + counter;
    // document.body.appendChild(newElement);
    document.querySelector('.container').appendChild(newElement);
}

function removeParagraph(){
    // const newElement = document.createElement('p');
    // newElement.textContent='New Paragraph';
    // document.body.appendChild(newElement);
    const container = document.querySelector('.container');
    if (container.children.length != 0) {
        container.removeChild(container.lastChild);
    }
    
    // document.querySelector('.container').removeChild(lastParagraph);
}
