function shareBtn(){
    const mobile_active_display = document.querySelector('.mobile-active__display')
    const mobileActive = document.querySelector('.mobile__display');
    const width = window.innerWidth;

    if(width < 576 ){
       ( mobile_active_display.style.display = 'flex') && (mobileActive.style.display = 'none')
    }
    else{
         mobile_active_display.style.display = 'flex';
    }
}