document.querySelector('.form button')
    .addEventListener('click', sendForm);

function sendForm(e) {
    const form = document.querySelector('.form');
    if (true) { 
        e.preventDefault();
        fetch('form', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                name: document.querySelector('.form input[name=name]').value,
                email: document.querySelector('.form input[name=email]').value,
                subject: document.querySelector('.form input[name=subject]').value,
                message: document.querySelector('.form textarea').value,
            })
        });
    }
}