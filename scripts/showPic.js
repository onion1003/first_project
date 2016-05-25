/*
function showPic(whichPic){
    var source = whichPic.getAttribute("href");
    var alter = whichPic.getAttribute("alt");
    var text = whichPic.getAttribute("title");
    var placeholder = document.getElementById("placeholder");
    var description = document.getElementById("description");
    placeholder.setAttribute("src",source);
    placeholder.setAttribute("alt",alter);
    //alert(description.childNodes[0].nodeValue);
    description.firstChild.nodeValue = text;
}

function countBodyChildren(){
    var body_element = document.getElementsByTagName("body")[0];
    //alert(body_element.nodeType);
}

window.onload = countBodyChildren;
*/

function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for( var i=0; i < links.length; i++) {
        links[i].onclick = function(){
            return showPic(this) ? false : true; //在点击无效时，继续执行href中的链接；点击有效时不跳转
        }
    }
}

function showPic(whichPic) {
    if(!document.getElementById("placeholder")) return false;
    var source = whichPic.getAttribute("href");
    var alter = whichPic.getAttribute("alt");
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG") return false;
    placeholder.setAttribute("src", source);
    placeholder.setAttribute("alt",alter);
    if (document.getElementById("description")) {
        var text = whichPic.getAttribute("title") ? whichPic.getAttribute("title") : "";
        var description = document.getElementById("description");
        if (description.firstChild.nodeType == 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}

/* 共享onload，可以一次onload多个函数
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

addLoadEvent(prepareGallery);
*/

window.onload = prepareGallery;
