let canvas = document.getElementById("canvas")

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
	
let context = canvas.getContext('2d');

// Rectangle

// context.fillStyle = 'rgba(205,24,155,0.3)'
// context.fillRect(100,100,100,100)
// context.fillRect(400,600,100,100)

// // lines
// context.beginPath();
// context.moveTo(50,300)
// context.lineTo(400,790)
// context.lineTo(500,456)
// context.strokeStyle = '#fa34a3'
// context.lineWidth = 8
// context.stroke()

// arc
// x,y,radius,start angle ,end angle in rad,draw couter clockwise



function Circle(context,x,y,dx,dy,radius,startAngle,endAngle,color,width){
	this.context = this.context;
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy
	this.radius = radius;
	this.startAngle = startAngle;
	this.endAngle = endAngle;
	this.color = color;
	this.width = width;

	this.draw = function(){
		context.beginPath();
		context.arc(this.x,this.y,this.radius,this.startAngle,this.endAngle,false)
		context.strokeStyle = this.color
		context.lineWidth = this.width
		context.stroke()
		context.fillStyle = this.color
		context.fill()
	}
	this.update =function(){
		// wall collision mechanism 
		if ((this.x + this.radius > innerWidth) || (this.x - this.radius < 0)){
			this.dx = -this.dx
		}
		if ((this.y + this.radius > innerHeight) || (this.y - this.radius < 0)){
			this.dy = -this.dy
		}
		
		this.x += this.dx
		this.y += this.dy

		// object collision (momentum conservation)
		

		this.draw()
	}
	
}


let circleArray =[];

for (var i = 0; i < 500; i++) {

	radius = Number.parseInt(Math.random() * 20)
	x = Math.random() * (canvas.width - radius*2) + radius
	y =	Math.random() * (canvas.height - radius*2) + radius
	dx = (Math.random() - 0.5) * 8
	dy = (Math.random() - 0.5) * 8 
	startAngle = Math.random() * 2 * Math.PI * 0
	endAngle = 2 * Math.PI
	color = `rgba(${Number.parseInt(Math.random()*255)},${Number.parseInt(Math.random()*255)},${Number.parseInt(Math.random()*255)},${Math.random()})`
	width = Number.parseInt(Math.random()*10) *0

	circleArray.push(new Circle(context,x,y,dx,dy,radius,startAngle,endAngle,color,width))
}

let animate =()=>{	
	requestAnimationFrame(animate);
	context.clearRect(0,0,innerWidth,innerHeight)
	for (circle of circleArray) {		
		circle.update()
	}

};

animate();