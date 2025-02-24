
const titleUpdate = document.getElementById('btn-title-update')
    .addEventListener('click', function () {

        const h1 = document.querySelector('h1')
        h1.innerText = 'Iam text Handler so  update text you are do not mind';
    })



const btnLoggin = document.getElementById('btn-login')
    .addEventListener('click', function () {

        const pageTitel = document.getElementById('page-title');
        pageTitel.innerText = 'user logged In successfully';

    })


// daynmic update element

const btnUpdate = document.getElementById('btn-update')
    .addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const newElementValue = inputField.value;
   

    const titleName = document.getElementById('title-name');

    titleName.style.fontSize='40px'
    titleName.style.color='red'

    titleName.innerText=newElementValue;
    
    inputField.value=''

    
    


    })