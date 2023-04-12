function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}


function position() {
    if (!document.getElementById) return false;
    if (!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "100px";
    moveMessage("message", 300, 200, 10);
    if (!document.getElementById("title")) return false;
    var elem = document.getElementById("title");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "50px";
    moveMessage("title", 300, 90, 10);
}



function moveMessage(elementID, final_x, final_y, interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    if (elem.movement) {
        clearTimeout(elem.movement);
    }
    if (!elem.style.left) {
        elem.style.left = "0px";
    }
    if (!elem.style.top) {
        elem.style.top = "0px";
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == final_x && ypos == final_y) {
        return true;
    } 
    if (xpos < final_x) {
        dist = Math.ceil((final_x - xpos) / 10);
        xpos= xpos + dist;
    }
    if (xpos > final_x){
        dist = Math.ceil(( xpos- final_x) / 10);
        xpos= xpos - dist;
    }
    if (ypos < final_y) {
        dist = Math.ceil((final_y - ypos) / 10);
        ypos= ypos + dist;
    }
    if (ypos > final_y) {
        dist = Math.ceil((ypos -final_y ) / 10);
        ypos= ypos - dist;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveMessage('"+elementID+"', "+final_x+","+final_y+","+interval+" )"
    elem.movement = setTimeout(repeat,interval)
}

function prepareSlideShow() {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById("linklist")) return false;
    if (!document.getElementById("preview")) return false;
    var preview = document.getElementById("preview");
    preview.style.position = "absolute";

    var list = document.getElementById("linklist");
    var links = list.getElementsByTagName("a");
    links[0].onmouseover = function () {
        moveMessage("preview", 0, -100, 10);
    }
    links[1].onmouseover = function () {
        moveMessage("preview", 0, -200, 10);
    }
    links[2].onmouseover = function () {
        moveMessage("preview", 0, -300, 10);
    }
}

addLoadEvent(position);
addLoadEvent(prepareSlideShow);
