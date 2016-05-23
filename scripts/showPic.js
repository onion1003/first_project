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
