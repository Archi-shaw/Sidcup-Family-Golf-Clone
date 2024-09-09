/* Gsap use first write the element which u will use
in scrolltrigger write the elemnt which u want to trigger
write the element which u will scroll
markers means it for us to show where it is starting and ending
scrub is for repeat mode time required to repeat 
stagger bring individual elements */

var crsr = document.querySelector("#cursor");
var blu = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x +30+ "px";
    crsr.style.top = dets.y +"px";
    blu.style.left = dets.x -140 + "px";
    blu.style.top = dets.y -140 +"px";
});

gsap.to("#aboutus img",{
  opacity:0.8,
});
var h4a = document.querySelectorAll("#nav h4");
h4a.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
     crsr.style.scale = 3;
     crsr.style.border = "0.3px solid #fff";
     crsr.style.backgroundColor = "transparent";
      });
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid  #b3ec17";
        crsr.style.backgroundColor = " #b3ec17";
         });
});
gsap.from("#aboutus img,#about-us-in",{
    y: 90,
    opacity:0,
    duration:1,
    scrollTrigger: {
      trigger:"#aboutus",
      scroller:"body",
      start:"top 70%",
      end:"top 65%",
      scrub:1,
    },
});
gsap.from(".card",{
  scale: 2,
  opacity:0,
  stagger:0.1,
  scrollTrigger: {
    trigger:".card",
    scroller:"body",
    start:"top 70%",
    end:"top 65%",
    scrub:1,
  },
});
gsap.to("#nav",{
    backgroundColor: "#000",
    height: "110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    },
});
gsap.from("#colon1",{
  y:-60,
  x:-60,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start:"top 55%",
    end:"top 45%",
    scrub:1,
},
})
gsap.from("#colon2",{
  y:60,
  x:60,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start:"top 55%",
    end:"top 45%",
    scrub:1,
},
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -15%",
        end:"top -70%",
        scrub:2
    },
});
