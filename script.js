let toTop=document.querySelector('.to-top');
window.addEventListener('scroll',()=>{
       if(window.pageYOffset>60){
              toTop.classList.add('active')
       }
       else{
              toTop.classList.remove('active')
       }
})

