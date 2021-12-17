const progressBar = document.querySelector('.progress-bar');
const section = document.querySelector('.section');

function handleProgressbar() {

    height = section.getBoundingClientRect().height - window.innerHeight;
    scrollTop =-section.getBoundingClientRect().top;
    progressWidth = (scrollTop / height) * 100;
    progressBar.style.setProperty('--width', `${progressWidth}%`);
    
}


window.addEventListener('scroll', handleProgressbar);