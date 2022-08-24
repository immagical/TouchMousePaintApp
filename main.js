mouse_event = "empty"; 
canvas = document.getElementById("myCanvas"); 
ctx = canvas.getContext("2d"); 
document.getElementById("color").value = "purple"
document.getElementById("width").value = 5; 
color = document.getElementById("color").value; 
width = document.getElementById("width").value; 
addEventListener("mousedown", myMouseDown);
function myMouseDown(e) {
    color = document.getElementById("color").value; 
    width = document.getElementById("width").value; 
    mouse_event = "mousedown"; 
    console.log(color +" "+ width); 
    console.log(mouse_event);
}
addEventListener("touchstart", myTouchStart);
function myTouchStart(e) {
    color = document.getElementById("color").value; 
    width = document.getElementById("width").value; 
    console.log(color +" "+ width); 
    lastx = e.touches[0].clientX - canvas.offsetLeft; 
    lasty = e.touches[0].clientY - canvas.offsetTop; 
}
addEventListener("mouseup", myMouseUp);
function myMouseUp(e) {
    mouse_event = "mouseup"; 
    console.log(mouse_event);
}
addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e) {
    mouse_event = "mouseleave"; 
    console.log(mouse_event);
}
addEventListener("mousemove", myMouseMove);
function myMouseMove(e) {
    currentx = e.clientX - canvas.offsetLeft;
    currenty = e.clientY - canvas.offsetTop; 
    console.log("currentx = " + currentx + " currenty = " + currenty); 
    if(mouse_event=="mousedown") {
        color = document.getElementById("color").value; 
        width = document.getElementById("width").value; 
        console.log(color +" "+ width); 
        ctx.beginPath()
        ctx.strokeStyle = color; 
        ctx.lineWidth = width; 
        ctx.moveTo(lastx, lasty); 
        ctx.lineTo(currentx,currenty); 
        ctx.stroke(); 
    }
    lastx = currentx; 
    lasty = currenty; 
}
addEventListener("mousemove", myTouchMove);
function myTouchMove(e) {
    currentx = e.clientX - canvas.offsetLeft;
    currenty = e.clientY - canvas.offsetTop; 
    console.log("currentx = " + currentx + " currenty = " + currenty); 
    if(mouse_event=="mousedown") {
        color = document.getElementById("color").value; 
        width = document.getElementById("width").value; 
        console.log(color +" "+ width); 
        ctx.beginPath()
        ctx.strokeStyle = color; 
        ctx.lineWidth = width; 
        ctx.moveTo(lastx, lasty); 
        ctx.lineTo(currentx,currenty); 
        ctx.stroke(); 
    }
    lastx = currentx; 
    lasty = currenty; 
}
addEventListener("touchmove", myTouchMove);
function myTouchMove(e) {
    currentx = e.touches[0].clientX - canvas.offsetLeft;
    currenty = e.touches[0].clientY - canvas.offsetTop; 
    console.log("currentx = " + currentx + " currenty = " + currenty); 
    color = document.getElementById("color").value; 
    width = document.getElementById("width").value; 
    console.log(color +" "+ width); 
    ctx.beginPath()
    ctx.strokeStyle = color; 
    ctx.lineWidth = width; 
    ctx.moveTo(lastx, lasty); 
    ctx.lineTo(currentx,currenty); 
    ctx.stroke(); 
    lastx = currentx; 
    lasty = currenty;  
}