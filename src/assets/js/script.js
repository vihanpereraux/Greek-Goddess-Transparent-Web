import LocomotiveScroll from 'locomotive-scroll';
// import gsap from 'gsap'z;
// import ScrollTrigger from 'gsap/ScrollTrigger';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 0.05
});

