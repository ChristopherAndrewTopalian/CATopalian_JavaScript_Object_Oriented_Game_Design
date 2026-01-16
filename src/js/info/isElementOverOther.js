// isElementOverOther.js

function isElementOverOther(whichA, whichB)
{
    whichA = gr(whichA);
    whichB = gr(whichB);

    // check if whichA is in whichB completely
    if (
    // left edge of whichA is within whichB's left edge
    whichA.left >= whichB.left &&

    // right edge of whichA is within whichB's right edge
    whichA.right <= whichB.right &&

    // top edge of whichA is within whichB's top edge
    whichA.top >= whichB.top &&

    // bottom edge of whichA is within whichB's bottom edge
    whichA.bottom <= whichB.bottom
    )
    {
       return true;
    }
    else
    {
        return false;
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

