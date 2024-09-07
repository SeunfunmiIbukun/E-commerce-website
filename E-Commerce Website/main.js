$(document).ready(function() {
    // Open the side menu
    function openmenu() {
        $('#sidemenu').css('right', '0');
    }

    // Close the side menu
    function closemenu() {
        $('#sidemenu').css('right', '-200px');
    }

    // Attach event handlers for the menu icon
    $('.fa-bars').click(function() {
        openmenu();
    });

    $('.fa-times').click(function() {
        closemenu();
    });
});

    $(document).ready(function() {
        // Function to show or hide the .fa-bars icon based on screen width
        function toggleMenuIcon() {
            if ($(window).width() > 601) {
                $('.fa-bars').hide();  // Hide on wide screens
            } else {
                $('.fa-bars').show();  // Show on small screens
            }
        }

        // Call the function on page load
        toggleMenuIcon();

        // Call the function on window resize
        $(window).resize(function() {
            toggleMenuIcon();
        });
    });
/*-------------JS for product gallery---------*/
var ProductImg = document.getElementById("ProductImg");
var SmallImgs = document.getElementsByClassName("small-img");

if (ProductImg && SmallImgs.length > 0) {
    for (var i = 0; i < SmallImgs.length; i++) {
        SmallImgs[i].onclick = function() {
            ProductImg.src = this.src;
        }
    }
} else {
    console.error("ProductImg element or small images not found.");
}




/*--------------new accounts-----------*/

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

/*-----------JS for Cart-------*/
 var removeCartItemButtons = document.getElementsByClassName('btn-remove');
 for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click' , function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove()

    })
 }