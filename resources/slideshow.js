/**
 * Slideshow code. A "slideframe" <div> must contain "slide" <div>s, and <a>s of classes "prev" and "next"
 */
//initial setup
console.log("setting up slideshows");
let sframes=document.getElementsByClassName("slideframe");
for (i = 0; i < sframes.length; i++) {
    sframes[i].style.setProperty('--index', 0);
    switchslide(sframes[i],0)
  }

/**
 * Arrow controls for slideshow. Arrows must have onclick="arrowCTRLS(this,n), where n is -1 or 1.
 * @param  {div} arrow arrow that was clicked
 * @param  {int} move -1 or 1, depending on slide direction
 * @return {none}
 */
function arrowCTRLS(arrow, move) {
  //console.log("ushabti");
  let frame=arrow.parentNode;
  console.log("switching slides in frame");
  console.log(frame);
  switchslide(frame,move);
}

/**
 * Slide switching code for slideshows.
 * @param  {div} frame the slideframe in which slides are to be changed
 * @param  {int} move -1 or 1, depending on slide direction
 * @return {none}
 */
function switchslide(frame, move) {
  let i;
  //css didn't wanna store a number so I'm casting it
  let index = Number(getComputedStyle(frame).getPropertyValue('--index'));
  let slides = frame.getElementsByClassName("slide");
  index+=move;
  console.log("Target slide")
  console.log(index);
  console.log("Total slides")
  console.log(slides.length);
  //looping if target index is out of bounds
  if (index >= slides.length) {index = 0;
    console.log("Looped")
  }
  if (index < 0) {index = slides.length-1;
    console.log("Looped")
  }
  //Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //Unhide target slide
  slides[index].style.display = "block";
  frame.style.setProperty('--index', index);
  console.log("yay the code didn't crash");
} 

