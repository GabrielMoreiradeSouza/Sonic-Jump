const speed = document.querySelector('.speed');
const rock = document.querySelector('.rock');

const jump = () => {
    speed.classList.add('jump');

    setTimeout(() => {
        speed.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() =>{

    const rockPosition = rock.offsetLeft;
    const speedPosition = +window.getComputedStyle(speed).bottom.replace('px', '');
    
    if (rockPosition <= 85 && rockPosition > 0 && speedPosition < 95) {
        rock.style.animation = 'none';
        rock.style.left = `${rockPosition}px`; 

       speed.style.animation = 'none';
       speed.style.bottom = `${speedPosition}px`; 
       
       speed.src= './img/damage.png';
       speed.style.width ='150px'

       clearInterval(loop);
    }

}, 10)

document.addEventListener('keydown', jump);