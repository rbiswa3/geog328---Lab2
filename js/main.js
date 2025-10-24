function responsive_control() {
    // Get the navigation element by its ID
    let x = document.getElementById("myTopnav");
    
    // Check if the current class is just "topnav"
    if (x.className === "topnav") {
        // If it is, append the " responsive" class to open the menu
        x.className += " responsive";
    } else {
        // If it already has the " responsive" class, revert back to just "topnav" to close it
        x.className = "topnav";
    }
};

// Find the hamburger icon element and attach the click listener
// Note: document.getElementsByClassName returns an array, so we need the [0] index.
let icon = document.getElementsByClassName("icon")[0];

// Only attach the listener if the icon element exists
if (icon) {
    icon.addEventListener('click', responsive_control);
}

