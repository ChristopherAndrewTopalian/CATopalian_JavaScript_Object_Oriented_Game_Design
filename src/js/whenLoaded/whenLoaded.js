// whenLoaded.js

function whenLoaded()
{
    makeBackground();

    makeTitleOfApp();

    menuLeft();

    makeCatHome('catHomeDiv', 20, 400);

    makeCatHome('catHome2', 2000, 200);

    makePlayer(tabitha);

    makeMouse(mouse001);

    // listen for keydown events
    window.addEventListener("keydown", theControls, false);

    // listen for keyup events
    window.addEventListener("keyup", theControls, false);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

