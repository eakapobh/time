
function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(255);
  fill(0);
  noStroke();
  textAlign(CENTER);
  textSize(18);

  var startAngle = radians(-90);
  var stopAngle = radians(270);
  
  var shake1 = random(0, second()/5);
  var shake2 = random(0, second()/5);
  var shake3 = random(0, minute()/25);
  var shake4 = random(0, hour()/30);

  var y = height/2;
  var each = windowWidth/3.5;
  var textY = windowHeight*0.9;

  var hourCenter = width/6;
  var hourAngle = map((hour()) % 12, 0, 12, startAngle, stopAngle);
  arc(hourCenter + shake4, y + shake4, each, each, startAngle, hourAngle);
  text(nf(twelveHour(), 2), hourCenter, textY);

  var minuteCenter = width/2;
  var minuteAngle = map(minute(), 0, 60, startAngle, stopAngle);
  arc(minuteCenter + shake3, y + shake3, each, each, startAngle, minuteAngle);
  text(nf(minute(), 2), minuteCenter, textY);

  var secondCenter = 5*width/6;
  var secondAngle = map(second(), 0, 60, startAngle, stopAngle);
  var hi = random(0, 150);
  //fill(hi, hi, hi);
  var arc1 = arc(secondCenter + shake1, y + shake2, each, each, startAngle, secondAngle);
  text(nf(second(), 2), secondCenter, textY);
}


// return hours that read 1 through 12 rather than 0 through 23
function twelveHour() {
  var h = hour() % 12;
  if (h === 0) {
    h = 12;
  }
  return h;
}
