const button = document.querySelector('button');

button.addEventListener('click', (e) => {
    e.preventDefault();
    navigator.share({
        url: 'https://google.com',
        text: 'Te invito a visitar mi fabuloso sitio web',
        title: 'Google Site'
    })
})