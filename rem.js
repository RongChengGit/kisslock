const baseSize = 14;

function setRem(){
  const scale = document.documentElement.clientWidth/1280;
  document.documentElement.style.fontSize = baseSize*Math.min(scale , 2) + 'px';

}

setRem();
window.onresize = function(){
  setRem();
}