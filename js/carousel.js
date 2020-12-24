let slideIndex = 1;
showSlides(slideIndex); 

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = slides.length;}
    for(let i= 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for(let i =0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display ="block";
    dots[slideIndex-1].className += " active";
}

filterSelection('all');
function filterSelection(c) {
    let columns = document.getElementsByClassName('column');
    if (c == "all") c = "";
    for(let i = 0; i < columns.length; i++) {
        removeClass(columns[i], 'show');
        if(columns[i].className.indexOf(c) > -1)
        addClass(columns[i], 'show');
    }
}

function addClass(element, name) {
    let arrspl = element.className.split(" ");
    let splname = name.split(" ");
    for(let i = 0; i < splname.length; i++) {
        if (arrspl.indexOf(splname[i]) == -1) {
            element.className += " " + splname[i];}
    }
}

function removeClass(element, name) {
    arrspl = element.className.split(" ");
    splname = name.split(" ");
    for(let i=0; i < splname.length; i++) {
        while(arrspl.indexOf(splname[i]) > -1) {
            arrspl.splice(arrspl.indexOf(splname[i]), 1);
        }
    }
    element.className = arrspl.join(" ");
}

let btnContainer = document.getElementById("myBtnContainer");
let btns = document.getElementsByClassName('btn');
for (let i =0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("btnact");
        current[0].className = current[0].className.replace(" btnact", "");
        this.className += " btnact";
    });
}

let topButton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let modal = document.getElementById("viewSign");

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display ='none';
    }
}

let navCenter = document.getElementsByClassName("topnav");
let aLink = document.getElementsByClassName("alink");
for(let i = 0; i < aLink.length; i++) {
    aLink[i].addEventListener('click', function() {
        let current = document.getElementsByClassName("aact");
        current[0].className = current[0].className.replace(" aact","");
        this.className += " aact";
    })
}

function openNav() {
    document.getElementById("curtainNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("curtainNav").style.width = "0%";
  }