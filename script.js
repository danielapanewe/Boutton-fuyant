
let namePerson = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let form = document.querySelector('.form');
let formButtonContainer = document.querySelector('.form__button');
let formButton = document.querySelector('.form__button button');


formButtonContainer.addEventListener('mouseover', e => {
    if(namePerson.value !== '' && email.value !== '' && password.value !== ''){
        form.querySelector('.form__button button').classList.add('success');
        if(form.querySelector('.form__button button').classList.contains('error')){
            form.querySelector('.form__button button').classList.replace('error', 'success')
        }
        if(form.querySelector('.form__button button').classList.contains('translate--right')){
            form.querySelector('.form__button button').classList.remove('translate--right')
        }
        if(form.querySelector('.form__button button').classList.contains('translate--left')){
            form.querySelector('.form__button button').classList.remove('translate--left')
        }
    }
    else{
        form.addEventListener('submit' , (e) => {
            e.preventDefault();
        })
        form.querySelector('.form__button button').classList.add('error');
       
        if(!e.target.classList.contains('translate--right')){
            if(!e.target.classList.contains('translate--left')){
                e.target.classList.add('translate--left');
                }
            e.target.classList.replace('translate--left','translate--right');

        }
        else if(e.target.classList.contains('translate--right')){
            e.target.classList.replace('translate--right','translate--left');
                }
        if(form.querySelector('.form__button button').classList.contains('success')){
            form.querySelector('.form__button button').classList.replace('success', 'error');}

    

        
    }
})