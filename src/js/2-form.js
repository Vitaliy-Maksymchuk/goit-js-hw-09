'use strict';

const formData = {email: '', message: ''};

const form = document.querySelector('.feedback-form');
const LSKEY = 'feedback-form-state';
const emailInput = form.elements.email;
const messageInput = form.elements.message;

form.addEventListener('input', ifInput);
form.addEventListener('submit', ifSubmit);

function fillLocalStorageForm() {
    const receivedData = localStorage.getItem(LSKEY);
    
    if(receivedData) {
        const parsedData = JSON.parse(receivedData);
        formData.email = parsedData.email || '';
        formData.message = parsedData.message || '';
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    };
};

function ifInput(e) {
    formData[e.target.name] = e.target.value.trim();
    localStorage.setItem(LSKEY, JSON.stringify(formData));
}

function ifSubmit(e) {
    e.preventDefault();
    if(!formData.email || !formData.message) {
        return alert('Fill please all fields');
    }

    console.log(formData);

    localStorage.removeItem(LSKEY);
    formData.email = '';
    formData.message = '';
    form.reset();
}

fillLocalStorageForm();