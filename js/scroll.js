window.onscroll = function() {scrollFunction()};
        
function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0"; 
    } else {
        document.getElementById("navbar").style.top = "-50px";    
           }     
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle('show');
}

function filterFunction() {
    let input = document.getElementById("myInput");
    let filter = input.value.toUpperCase();
    let dropdown = document.getElementById("myDropdown");
    let a = dropdown.getElementsByTagName('a');
    for (let i=0; i<a.length; i++) {
        let txtValue = a[i].textContent || a[i].innerText; 
        if(txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = ""; 
        } else {
            a[i].style.display = "none";
        }
    }
}