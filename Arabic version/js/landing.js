$("document").ready(function(){
    $(".icon").click(function(){
        $("#hidden").slideToggle();
        $(".icon").css({
            transform: "rotate(180deg)",
            transition: "linear 0.2s"
        });
        $(".icon").removeClass("icon")
    })
})

$("document").ready(function(){
    $(".icon2").click(function(){
        $("#hiddenn").slideToggle();
        $(".icon2").css({
            // display: "flex",
            transform: "rotate(180deg)",
            transition: "linear 0.2s"
        });
        $(".icon2").removeClass("icon2")
    })
})



const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
      ? 'fa-solid fa-xmark'
      : 'fa-solid fa-bars'
    
}

window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revTop = reveals[i].getBoundingClientRect().top;
        var revPoints = 150;
        if (revTop < windowHeight - revPoints) {
            reveals[i].classList.add('activee');
        } else {
            // reveals[i].classList.remove('activee');
        }
    }
}