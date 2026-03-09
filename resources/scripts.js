function recolor(event){ //get mouse pos, make color
  let x = event.clientX;
  let y = event.clientY;
  let r = (Math.cos(0.05*x)+1)*127;
  let g = (Math.sin(0.03*x)+1)*63 + (Math.sin(0.03*y)+1)*64;
  let b = (Math.cos(0.05*y)+1)*127;
  let rgebe="rgb("+r+","+g+","+b+")";
  document.getElementById("dabox").style.background = rgebe;
}
