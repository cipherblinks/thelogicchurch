document.addEventListener('DOMContentLoaded', () => {
    let submenu = $('#subMenu');
    let isOpen = false;
    
    // $('#subMenuView').click(function () {
    //     if (isOpen) {
    //         gsap.to(submenu, {
    //             height: 0,
    //             opacity: 0,
    //             duration: 0.5,
    //             onComplete: () => submenu.css('display', 'none')
    //         });
    
    //         $('#button span').text('Menu');
    //         isOpen = false;
    //     } else {
    //         submenu.css({
    //             display: 'block',
    //             height: 'auto',
    //             opacity: 1
    //         });
    
    //         let fullHeight = submenu[0].scrollHeight;
    
    //         submenu.css({
    //             height: 0,
    //             opacity: 0
    //         });
    
    //         gsap.to(submenu, {
    //             height: fullHeight,
    //             opacity: 1,
    //             duration: 0.5,
    //             clearProps: 'height'
    //         });
    
    //         $('#button span').text('Close');
    //         isOpen = true;
    //     }
    // });
    
    // initial state
    gsap.set(submenu, {
        height: 0,
        opacity: 0,
        display: "none"
    });
    
    $('#subMenuView').click(function () {
    
        if (isOpen) {
    
            gsap.to(submenu, {
                height: 0,
                opacity: 0,
                duration: 0.35,
                ease: "power2.in",
                onComplete: () => submenu.css("display", "none")
            });
    
            $('#button span').text('Menu');
            isOpen = false;
    
        } else {
    
            submenu.css("display", "block");
    
            gsap.fromTo(submenu,
                {
                    height: 0,
                    opacity: 0
                },
                {
                    height: "auto",
                    opacity: 1,
                    duration: 0.45,
                    ease: "power3.out",
                    clearProps: "height"
                }
            );
    
            $('#button span').text('Close');
            isOpen = true;
        }
    });
    
    $(window).on('resize', function () {
        if (window.innerWidth >= 768) {
            submenu.css({
                display: 'none',
                height: '',
                opacity: ''
            });
    
            $('#button span').text('Menu');
            isOpen = false;
        }
    });

    // 
    document.querySelectorAll(".nav-dropdown").forEach((menu) => {
        const dropdown = menu.querySelector(".dropdown-menu");
      
        gsap.set(dropdown, {
          opacity: 0,
          y: -10,
          visibility: "hidden"
        });
      
        menu.addEventListener("mouseenter", () => {
          gsap.to(dropdown, {
            opacity: 1,
            y: 0,
            visibility: "visible",
            duration: 0.3,
            ease: "power2.out"
          });
        });
      
        menu.addEventListener("mouseleave", () => {
          gsap.to(dropdown, {
            opacity: 0,
            y: -10,
            duration: 0.2,
            ease: "power2.in",
            onComplete: () => {
              gsap.set(dropdown, { visibility: "hidden" });
            }
          });
        });
      });

});
