function recolor(event){ //get mouse pos, make color
  let x = event.clientX;
  let y = event.clientY;
  let r = x;
  let g = 255 - x;
  let b = y - 485;
  let rgebe="rgb("+r+","+g+","+b+")";
  document.getElementById("dabox").style.background = rgebe;
}
