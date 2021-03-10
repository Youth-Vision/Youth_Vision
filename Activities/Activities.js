function openNav() {
    document.getElementById("mySidenav").style.width = "180px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("div-header").style.backgroundColor = "rgba(0,0,0,.0)"
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("div-header").style.backgroundColor = "rgba(0,0,0,.2)"
};

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("divHeader").style.top = "-10px";
    } else {
        document.getElementById("divHeader").style.top = "100px";
    }
}