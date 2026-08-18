$(document).ready(function(){
    
 $('#toggle-theme').click(function(){
    
     $('html').toggleClass('bg-[#171717]')
     $('h2,h1,h3,.social-icons i').toggleClass('text-[#FAFAF8]')
     $('p,#moon,#sun').toggleClass('text-[#C5C5C0]')
     $('.nav-link').toggleClass('text-white/70')
     $('#moon').toggle('hide')
     $('#sun').toggle('show')
     $('.toggle-nav-menu').toggleClass('text-white bg-black')

    
 })

 $('#toggle-btn-menu').click(function(){
     $('.toggle-nav-menu').toggleClass('h-[280px]')
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



$(document).ready(function () {

    var wow = new WOW({
        boxClass: "wow",
        animateClass: "animate__animated",
        offset: 100,
        mobile: true,
        live: true
    });

    wow.init();


    /*
    =====================================
    REPLAY WOW WHEN ELEMENT LEAVES SCREEN
    =====================================
    */

    const wowElements = document.querySelectorAll(".wow");

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            const element = entry.target;

            if (entry.isIntersecting) {

                // Element entered viewport
                element.classList.remove("animate__animated");

                // Force browser to reset animation
                void element.offsetWidth;

                // Start animation again
                element.classList.add("animate__animated");

            } else {

                // Element left viewport
                element.classList.remove("animate__animated");

            }

        });

    }, {
        threshold: 0.1
    });


    wowElements.forEach(function (element) {
        observer.observe(element);
    });

});


  

       

    




})
AOS.init({
    duration: 800,
    once: false,
    mirror: true
});