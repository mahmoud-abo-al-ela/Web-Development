
// Initialize and add the map
function initMap() {
  // The location of Uluru
    const Al_mahalla_al_kubra = { lat: 30.97, lng: 31.17 };
  // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: Al_mahalla_al_kubra,
    });
  // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
    position: Al_mahalla_al_kubra,
    map: map,
    });
}

//smooth scrolling
$("#navbar a, #btn-1").on("click", function(event){
    if (this.hash !==""){
        event.preventDefault();
        const hash = this.hash;
        $("html, body").animate({scrollTop:$(hash).offset().top -100}, 800);
    }
});

//navbar opacity
window.addEventListener("scroll", function(){
    if(window.scrollY > 150){
        this.document.querySelector("#navbar").style.opacity = .8;
    }else{
        this.document.querySelector("#navbar").style.opacity = 1;
    }
});