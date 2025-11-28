const botonIrArriba = document.getElementById('IrArriba');

window.addEventListener('scroll', function() {
  
    const umbralScroll = 300; 
    
    if (window.scrollY > umbralScroll) {
        
        botonIrArriba.style.display = 'block'; 
    } else {
    
        botonIrArriba.style.display = 'none';
    }
});

botonIrArriba.addEventListener('click', function() {
    
    window.scrollTo({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
    });
});