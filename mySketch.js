var inputElement,sliderElement,btnElement
var randomValue=0
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	inputElement =createInput("Hello")  
	inputElement.position(50,10)
	sliderElement= createSlider(10,50,20,1)
  sliderElement.position(204,10)
	
	btnElement =createButton("瘋狂")
	btnElement.mousePressed(goCrazy)
	btnElement.position(340,10)
	btnElement.style("border-color",'green')
	btnElement.style("border-width",'10px')
	
	
	colorPicker = createColorPicker('#ed225d');
	colorPicker.position(400,8)
	radioElement=createRadio()
  radioElement.option("一般")
  radioElement.option("旋轉(rotate)")
  radioElement.option("大小(scale)")
	radioElement.position(470,9)
  radioElement.style("background-color",'white')
}

function goCrazy(){
	if(randomValue>0){
	 randomValue=0
 }
	else
	{
		randomValue=10
	}
}

function draw() {
	background(0)
	var txts = inputElement.value();
	var textHeight=sliderElement.value()
	textSize(sliderElement.value())
	var textLength=textWidth(txts)+100
	var mode = radioElement.value()
	for(var y=0;y<height;y=y+textHeight+20){
	push()
				if(int(y/(textHeight+20))%2==0){
					fill(colorPicker.value())
					translate(-50,0)
				}
				else{
					fill(255)
				}
		for(var x=0;x<width;x=x+textLength)
	{ push()
		translate(x+random(-randomValue,randomValue),y+random(-randomValue,randomValue))
	  if (mode=="旋轉(rotate)"){
			//rotate(PI/4)
			rotate(sin(frameCount/20+y/2))
		}else if (mode=="大小(scale)"){
			scale(sin(frameCount/20+y/10))
		}
	 text(txts,0,0) 
	  pop()
		}
		pop()
	}
}