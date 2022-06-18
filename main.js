canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var mouseEvent="empty";
var last_position_of_x,last_position_of_y;


color = "black"; 
width_of_line=1;
radius=20;



canvas.addEventListener("mousedown",myMouseDown);
function myMouseDown(e){
    color = document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mousedown";
}

canvas.addEventListener("mouseup",myMouseUp);
function myMouseUp(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",myMouseLeave);
function myMouseLeave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",myMouseMove);
function myMouseMove(e){
   current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
   current_position_of_mouse_y=e.clientY-canvas.offsetTop;
   
   if(mouseEvent=="mousedown"){
       ctx.beginPath();
       ctx.strokeStyle=color;
       ctx.lineWidth=width_of_line;

       ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);
       ctx.stroke();

   }

   last_position_of_x=current_position_of_mouse_x;
   last_position_of_y=current_position_of_mouse_y;
}

function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);


}
