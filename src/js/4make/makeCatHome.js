// makeCatHome.js

function makeCatHome(whichId, whichX, whichY)
{
    let catHomeDiv = ce('div');
    catHomeDiv.id = whichId // catHomeDiv';
    catHomeDiv.style.position = 'absolute';
    catHomeDiv.style.left = whichX + 'px';
    catHomeDiv.style.top = whichY + 'px';
    catHomeDiv.style.width = 200 + 'px';
    catHomeDiv.style.height = 125 + 'px';
    catHomeDiv.style.border = 'solid 1px rgb(100, 100, 100)';
    ba(catHomeDiv);

    makeElementDraggable(catHomeDiv);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

