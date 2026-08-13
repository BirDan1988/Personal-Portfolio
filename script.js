$(document).ready(function(){
    
 $('#toggle-theme').click(function(){
    
     $('html').toggleClass('bg-[#171717]')
     $('h2').toggleClass('text-[#FAFAF8]')
     $('p,i').toggleClass('text-[#C5C5C0]')
     $('.nav-link').toggleClass('text-white/70')
     $('#moon').toggleClass('hidden')
     $('#sun').toggleClass('hidden')
 })

 $('#toggle-btn-menu').click(function(){
     $('.toggle-nav-menu').toggleClass('h-[240px]')
 })



})