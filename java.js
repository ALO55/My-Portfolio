const card = document.querySelectorAll('.card');

card.forEach((card) =>{
    card.addEventListener('mouseover', (e) =>{
        card.classList.add('focus');
    })
});

card.forEach((card) =>{
    card.addEventListener('mouseleave', () =>{
        card.classList.remove('focus');
    })
});
