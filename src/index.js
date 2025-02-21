import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function pageOneAnimation() {
  const tl = gsap.timeline();

  // Navbar animations
  tl.from("#logo, nav ul li", {
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 1,
    stagger: 0.15,
  })
    .from("#headers-heading-text h2", {
      x: -300,
      opacity: 0,
      duration: 0.6,
      stagger: 0.28,
    })
    .from("#headers-heading-text p", {
      x: -100,
      opacity: 0,
      duration: 0.4,
    })
    .from("#headers-heading-text button", {
      opacity: 0,
    })
    .from(
      "#headers-image",
      {
        x: 200,
        opacity: 0,
        duration: 0.5,
      },
      "-=0.7"
    )
    .from("#brand-section img", {
      opacity: 0,
      stagger: 0.28,
      duration: 0.6,
      y: 30,
    });
}

// Service Page Animations
function ServicePageAnimation() {
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#services-section",
      scroller: "body",
      start: "top 60%",
      scrub: 2,
      end: "top 2",
    },
  });

  tl2
    .from("#service-section-heading h2", {
      x: -100,
      opacity: 0,
    })
    .from("#service-section-heading p", {
      x: -10,
      opacity: 0,
      duration: 0.4,
    })
    .from("#card1", {
      opacity: 0,
      y: 100,
      duration: 0.5,
    })
    .from("#card2", {
      opacity: 0,
      y: 100,
      duration: 0.5,
    })
    .from("#card3", {
      opacity: 0,
      y: 100,
      duration: 0.5,
    })
    .from("#card4", {
      opacity: 0,
      y: 100,
      duration: 0.5,
    });
}

// contact page animation function
function contactPageAnimation() {
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#contact-section",
      scroller: "body",
      start: "top 60%",
      scrub: 2,
      end: "top 20%",
    },
  });
  tl2
    .from(".contacts", {
      opacity: 0,
      y: 100,
    })
    .from(".contacts h2", {
      opacity: 0,
      x: -100,
    })
    .from(".contacts p", {
      opacity: 0,
      x: -100,
    })
    .from(".contacts button", {
      opacity: 0,
      x: -100,
    })
    .from(".contacts img", {
      opacity: 0,
      scale: 0.7,
    });
}

//case study animation function
function caseStudyAnimation() {
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#case-study-section",
      scroller: "body",
      start: "top 70%",
      scrub: 2,
      end: "top 50%",
    },
  });

  tl2
    .from("#case-study-heading h2", {
      x: -100,
      opacity: 0,
    })
    .from("#case-study-heading p", {
      x: -10,
      opacity: 0,
      duration: 0.4,
    })
    .from("#case-study-card1", {
      opacity: 0,
      y: 100,
      duration: 0.5,
    })
    .from("#case-study-card2", {
      opacity: 0,
      y: 100,
      duration: 0.5,
    })
    .from("#case-study-card3", {
      opacity: 0,
      y: 100,
      duration: 0.5,
    });
}

pageOneAnimation();
ServicePageAnimation();
contactPageAnimation();
caseStudyAnimation();

// Menu Toggle
function toggleMenu() {
  const menuToggleBtn = document.getElementById("menu-toggle-btn");
  const menu = document.getElementById("nav-bar-menu");
  menuToggleBtn.addEventListener(
    "click",
    () => {
      console.log("click");

      if (menuToggleBtn.classList.contains("close")) {
        menu.classList.add("right-0");
        menu.classList.remove("right-[-40%]");
        menuToggleBtn.classList.remove("close");
        menuToggleBtn.innerHTML =
          '<i class="ri-close-large-fill text-black"></i>';
      } else {
        menu.classList.add("right-[-40%]");
        menu.classList.remove("right-0");
        menuToggleBtn.classList.add("close");
        menuToggleBtn.innerHTML = '<i class="ri-menu-3-line"></i>';
      }
    },
    true
  );
}

toggleMenu();
