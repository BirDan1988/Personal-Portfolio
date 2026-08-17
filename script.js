$(document).ready(function(){
    
 $('#toggle-theme').click(function(){
    
     $('html').toggleClass('bg-[#171717]')
     $('h2,h1,h3,.social-icons i').toggleClass('text-[#FAFAF8]')
     $('p,#moon,#sun').toggleClass('text-[#C5C5C0]')
     $('.nav-link').toggleClass('text-white/70')
     $('#moon').toggle('hide')
     $('#sun').toggle('show')

    
 })

 $('#toggle-btn-menu').click(function(){
     $('.toggle-nav-menu').toggleClass('h-[240px]')
 })

 $('.nav-menu li a').click(function(){
    $(this).addClass('font-semibold text-primary border-b-[2px] border-primary')
        $(this).removeClass('font-medium text-secondary')
        $(this).parent().siblings().find('a').removeClass('font-semibold text-primary border-b-[2px] border-primary')
        $$(this).parent().siblings().find('a').addClass('font-medium text-secondary')
 })



})