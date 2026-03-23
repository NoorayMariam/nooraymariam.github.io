// change navigation bar styles on scroll events
// while scrolling the navigation bar, for a slidover
// when the event is basically a scroll, then from the document ie. the page, listen to 
// the scroll event, and from the css query select navigation class 'nav', change/apply immediatley the class list to
// window-scroll which is in the css style sheet and the minimum scroll in the Y-direction is 0
// hence immediate scrolling
window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

//hiding the FAQ answer on normal time and displaying during hovering time/clicking time

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq=>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');

        //changing the icon from plus to minus
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className == 'uil uil-plus-circle'){
            icon.className = 'uil uil-minus-circle'
        }
        else{
            icon.className = 'uil uil-plus-circle'
        }
    })
})

