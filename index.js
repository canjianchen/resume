const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const headline = document.querySelector('.headline');
const headline2 = document.querySelector('.headline2');

const tl = new TimelineMax();

tl.fromTo(hero,1.3,{height:"0"},{height:'90%',ease:Power2.easeInOut})
.fromTo(hero,1.8,{width:"50%"},{width:'100%',ease:Power2.easeInOut})
.fromTo(slider,1.3,{x:"-100%"},{x:'0%',ease:Power2.easeInOut},"-=1.4");
