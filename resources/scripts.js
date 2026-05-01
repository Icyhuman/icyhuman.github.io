function recolor(event){ //get mouse pos, make color
  let x = event.clientX;
  let y = event.clientY;
  let r = (Math.cos(0.025*x)+1)*127;
  let g = (Math.sin(0.015*x)+1)*63 + (Math.sin(0.015*y)+1)*64;
  let b = (Math.cos(0.025*y)+1)*127;
  let rgebe="rgb("+r+","+g+","+b+")";
  document.getElementById("dabox").style.background = rgebe;
}
