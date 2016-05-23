function showPic(whichPic){
    var source = whichPic.getAttribute("href");
    var alter = whichPic.getAttribute("alt");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    placeholder.setAttribute("alt",alter);
}
