//silder
$('#owl-demo1').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:1,
    rtl:true

   
})
//silder
$('#slider-work').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:1,
    rtl:true

   
})
// wow
new WOW().init();
// siledr
$('#owl-demo').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsiveClass:true,
    rtl:true,
    items:3,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
})

//menu

$("#times-ican").click(function(){
    $(this).toggleClass("active");
   $("#menu-div").toggleClass("active")

})

var $winl = $(window); // or $box parent container
var $boxl = $("#menu-div, #times-ican");
$winl.on("click.Bst", function (event) {
    if (
        $boxl.has(event.target).length === 0 && //checks if descendants of $box was clicked
        !$boxl.is(event.target) //checks if the $box itself was clicked
    ) {
        $("#menu-div").removeClass("active")
        $("#times-ican").removeClass("active")
    }
});

//input validation 
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();