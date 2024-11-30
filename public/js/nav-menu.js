/*=============== SCROLL LINK ===============*/
// Seleccionamos todas las secciones que tienen un atributo "id".
const sections = document.querySelectorAll('section[id]')

// Función que se ejecuta cuando se hace scroll.
function scrollActive(){
    // Obtenemos la cantidad de desplazamiento en el eje Y (vertical) de la página.
    const scrollY = window.pageYOffset

    // Recorremos todas las secciones.
    sections.forEach(current =>{
        // Obtenemos la altura de la sección actual.
        const sectionHeight = current.offsetHeight,
            // Obtenemos la distancia de la sección desde el principio de la página.
            sectionTop = current.offsetTop - 50, // Restamos 50px para un pequeño margen.
            // Obtenemos el id de la sección para identificarla.
            sectionId = current.getAttribute('id')

        // Verificamos si el desplazamiento está dentro del rango de la sección actual.
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            // Si el desplazamiento está dentro del rango, agregamos la clase 'active-link' al enlace correspondiente en el menú.
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            // Si no está dentro del rango, removemos la clase 'active-link' del enlace correspondiente.
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
// Añadimos el evento de scroll para que la función scrollActive se ejecute cada vez que se hace scroll.
window.addEventListener('scroll', scrollActive)


/*==============================*/
// Función que cambia el fondo del encabezado cuando se hace scroll.
function scrollHeader(){
    // Obtenemos el elemento con el id 'header' (el encabezado).
    const header = document.getElementById('header')
    // Si el desplazamiento es mayor o igual a 80 píxeles, añadimos la clase 'scroll-header' al encabezado.
    if(this.scrollY >= 80) header.classList.add('scroll-header');
    // Si el desplazamiento es menor a 80 píxeles, removemos la clase 'scroll-header' del encabezado.
    else header.classList.remove('scroll-header')
}
// Añadimos el evento de scroll para que la función scrollHeader se ejecute cada vez que se hace scroll.
window.addEventListener('scroll', scrollHeader)
