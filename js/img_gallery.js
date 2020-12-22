function onCity(cityName, elmnt, color) {
    let tabcontent = document.getElementsByClassName("tabcontent");
for(let i=0; i <tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}
let tablinks = document.getElementsByClassName('tablink');
for(i =0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
}
document.getElementById(cityName).style.display = "block";
elmnt.style.backgroundColor = color;
}

document.getElementById('defaultOpen').click();

function openCity(evt, cityName) {
    let overtabcontent = document.getElementsByClassName("overtabcontent");
    for(let i = 0; i < overtabcontent.length; i++) {
        overtabcontent[i].style.display = 'none';
    }
    let tablinks = document.getElementsByClassName("overtablinks");
    for(let i =0; i < tablinks.length; i++) {
        tablinks[i].className =

        tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

function openModal() {
    document.getElementById("myModal").style.display ="block";
}

function clickbtn() {
    document.getElementById("myModal").style.display ="block";
}

function closeModal() {
    document.getElementById("myModal").style.display ="none";
}

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
    let demo = document.getElementsByClassName("demo");
    let captionText = 
    document.getElementById("caption");
    if(n > slides.length) {slideIndex = 1}
    if(n < 1) {slideIndex = slides.length}
    for(let i=0; i <slides.length; i++) {
        slides[i].style.display ="none";
    }
    for(let i=0; i < demo.length; i++) {
        demo[i].className = demo[i].className.replace(" activeImg", "");
    }
    slides[slideIndex-1].style.display = "block";
    demo[slideIndex-1].className += " activeImg";
    captionText.innerHTML = demo[slideIndex-1].alt;
}