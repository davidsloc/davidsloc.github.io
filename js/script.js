const nightDay = ()=>{
    const button = document.querySelector('.dayNight');
    const main = document.querySelectorAll('main, .glass, .nav-glass, .main-glass, p');
    button.addEventListener('click', ()=>{
        
        main.forEach(function(userItem) {
            userItem.classList.toggle('night');
          });
    });
}

nightDay();