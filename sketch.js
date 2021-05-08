var hr , min , sec
var secondAngle , hourAngle , minuteAngle

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)


  
}

function draw() {
  background(0);  
 hr = hour()
 min = minute()
 sec = second()

 translate(200 , 200)
 rotate(-90)
 stroke("blue")
 strokeWeight(8)
 noFill()

 secondAngle = map(sec , 0 , 60 , 0 , 360 ) // drawing complete circle
arc(0,0,300,300,0,secondAngle)

stroke("green")
minuteAngle = map(min , 0 , 60 , 0 , 360 ) // drawing complete circle
arc(0,0,280 , 280,0,minuteAngle)

stroke("red")
hourAngle = map(hr%12 , 0 , 12 , 0 , 360 ) // drawing complete circle
arc(0,0,260 , 260,0,hourAngle)


push()
rotate(secondAngle)
stroke("blue")
line(0 , 0 , 115 , 0)
pop()

push()
rotate(minuteAngle)
stroke("green")
line(0 , 0 ,95 , 0)
pop()


push()
rotate(hourAngle)
stroke("red")
line(0 , 0 , 70, 0)
pop()

stroke(255 )
point(0 ,0)
}