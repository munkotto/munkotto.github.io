var cursor = document.getElementById("cursor");
document.addEventListener("mousemove", function(e) {
    var x = e.clientX
    var y = e.clientY
    cursor.style.left = x;
    cursor.style.top = y;
});