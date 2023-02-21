const airPlane = document.querySelector(".airplane")
const man = document.querySelector(".man")
const btnPlay = document.querySelector(".play");
const restart = document.querySelector(".restart");
let active = false
let count = 0;
let idInterval;

const flyAnimate = ()=>{
  count++
  idInterval = requestAnimationFrame(flyAnimate)
   if(count<380){
   airPlane.style.left = count * 2.5 + "px";
   man.style.top = count + "px";
    }else{
     cancelAnimationFrame(idInterval);
  }
}
btnPlay.addEventListener("click", () => {
  if (active) {
    cancelAnimationFrame(idInterval);
    active = false;
  } else {
    idInterval = requestAnimationFrame(flyAnimate);
    active = true;
  }
});
restart.addEventListener("click",()=>{
  location.reload();
})
