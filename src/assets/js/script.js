import LocomotiveScroll from 'locomotive-scroll';
// import gsap from 'gsap'z;
// import ScrollTrigger from 'gsap/ScrollTrigger';


const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 0.05,
    multiplier: .5
});


// scrollmagic init
let ctrl = new ScrollMagic.Controller();

// each image
[].forEach.call(document.querySelectorAll('.inner_img'), function (e) {

    // gsap timeline
    let tl = new TimelineMax();
    tl.from(e, 1, { xPercent: -100, ease: Expo.easeInOut, ease: 'power2.in' }, 0);
    tl.from(e.querySelector('.img'), 1, { xPercent: 100, ease: Expo.easeInOut, ease: 'power2.in' }, 0);

    // scrollmagic scene
    let scene = new ScrollMagic.Scene({ triggerElement: e, triggerHook: .6 })
        .setTween(tl)
        .addTo(ctrl);

});
