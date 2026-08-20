$(document).ready(function(){

 $(window).scroll(function(){
    let x = $(window).scrollTop()
    if(x>700){
        $('.header-part').addClass('fixed top-0 left-0 w-full z-[9999] shadow-md')
    }
    else{
         $('.header-part').removeClass('fixed top-0 left-0 w-full z-[9999] shadow-md')
    }

 })


    
 $('#toggle-theme').click(function(){
    
     $('html,.header-part').toggleClass('bg-[#171717]')
     $('h2,h1,h3,.social-icons i').toggleClass('text-[#FAFAF8]')
     $('p,#moon,#sun').toggleClass('text-[#C5C5C0]')
     $('.nav-link').toggleClass('text-white/70')
     $('#moon').toggle('hide')
     $('#sun').toggle('show')
     $('.toggle-nav-menu').toggleClass('text-white bg-black')
     

    
 })

 $('#toggle-btn-menu').click(function(){
     $('.toggle-nav-menu').toggleClass('max-h-0 max-h-[280px]')
 })

 $('.nav-menu li a').click(function(){
    $(this).addClass('font-semibold text-primary border-b-[2px] border-primary')
        $(this).removeClass('font-medium text-secondary')
        $(this).parent().siblings().find('a').removeClass('font-semibold text-primary border-b-[2px] border-primary')
        $$(this).parent().siblings().find('a').addClass('font-medium text-secondary')
 })

  $('.toggle-nav-menu li a').click(function(){
    $(this).addClass('font-semibold text-primary')
        $(this).removeClass(' text-secondary')
        $(this).parent().siblings().find('a').removeClass('font-semibold text-primary')
        $$(this).parent().siblings().find('a').addClass(' text-secondary')
 })


    $(function () {

        const $dot = $("#cursorDot");
        const $circle = $("#cursorCircle");

        let mouseX = 0;
        let mouseY = 0;

        let circleX = 0;
        let circleY = 0;


        // Mouse movement
        $(document).on("mousemove", function (e) {

            mouseX = e.clientX;
            mouseY = e.clientY;

            // Small dot follows mouse immediately
            $dot.css({
                left: mouseX + "px",
                top: mouseY + "px"
            });

        });


        // Smooth circle follower
        function animate() {

            circleX += (mouseX - circleX) * 0.12;
            circleY += (mouseY - circleY) * 0.12;

            $circle.css({
                left: circleX + "px",
                top: circleY + "px"
            });

            requestAnimationFrame(animate);

        }

        animate();

    });







  

       

    




})

   AOS.init();