document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("applyNowButton1").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default behavior of the button
        window.open("https://forms.gle/SyrJywCGAdUuAtny5", "_blank");
    });

    // You can add similar event listeners for other buttons if needed
    document.getElementById("RegisterNow").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default behavior of the button
        window.open("https://forms.gle/GjSa5JLNfiQYqir99", "_blank");
    });
    document.getElementById("RecruitNow").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default behavior of the button
        var mailtoLink = "https://mail.google.com/mail/?view=cm&fs=1&to=services@sharpcareer.in"; // Replace example@gmail.com with your email address
        window.open(mailtoLink, "_blank");
    });
    document.getElementById("ContactUs").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default behavior of the button
        var mailtoLink = "https://mail.google.com/mail/?view=cm&fs=1&to=services@sharpcareer.in"; // Replace example@gmail.com with your email address
        window.open(mailtoLink, "_blank");
    });
    
  



});
// Get the Apply Now button and the modal
var applyNowButton = document.getElementById("ApplyNow2");
var modal = document.getElementById("myModal");
var closeModalButton = document.getElementById("closeModal");

// Add event listener to the Apply Now button
applyNowButton.addEventListener("click", function() {
    // Show the modal
    modal.classList.remove("hidden");
});

// Add event listener to the Close button
closeModalButton.addEventListener("click", function() {
    // Hide the modal
    modal.classList.add("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("mobile-menu-btn").addEventListener("click", function () {
        document.getElementById("mobile-menu").classList.toggle("hidden");
        const menuBtnIconClosed = document.querySelector('#mobile-menu-btn > svg:first-child');
            const menuBtnIconOpen = document.querySelector('#mobile-menu-btn > svg:last-child');
            menuBtnIconOpen.classList.toggle('hidden', !isOpen);
            menuBtnIconClosed.classList.toggle('hidden', isOpen);
            
    });    
});


        



