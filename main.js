
// UMANG CODE------------

// search bar
function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
}

/* header sticky ------------*/

 const header = document.querySelector("[data-header]");
 
 window.addEventListener("scroll", function () {
 
   if (window.scrollY >= 10) {
     header.classList.add("active");
   } else {
     header.classList.remove("active");
   }
}
);

//nav bar colour change

let navigation = document.getElementById('navBar');

function f12(){
  navigation.style.backgroundColor= " rgba(01, 01, 01, 0.0)";
}

function f1(){
    navigation.style.backgroundColor="linear-gradient(whitesmoke, black)";
    setTimeout(f12,1000);
}
function f2(){
    navigation.style.backgroundColor="#ff2712";
    setTimeout(f12,900);

}function f3(){
    navigation.style.backgroundColor="#e7801a";
    setTimeout(f12,900);

}function f4(){
    navigation.style.backgroundColor="#05037c";
    setTimeout(f12,900);

}function f5(){
    navigation.style.backgroundColor="#605a5a";
    setTimeout(f12,900);
}
