function setup() {
  // remove p5 canvas
  canvas = document.querySelector('canvas');
	canvas.remove();
  // create svg canvas
  cvs = SVG().addTo('main').size(windowWidth, windowHeight);
}

function draw() {
}
