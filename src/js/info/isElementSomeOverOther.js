// isElementSomeOverOther.js

function isElementSomeOverOther(whichA, whichB)
{
    // check if element is being dragged in the dragzone some
    whichA = gr(whichA);
    whichB = gr(whichB);

    if (
        // whichA's right is beyond the left of whichB
        whichA.right > whichB.left &&
        
        // check if left side of whichA is before the right side of whichB
        whichA.left < whichB.right &&

        // whichA's bottom is beyond the top of whichB
        whichA.bottom > whichB.top &&

        // whichA's top is within the bottom of whichB
        whichA.top < whichB.bottom
    )
    {
        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

        ge('catHomeDiv').style.borderColor = randomColor;

        cl('hi');
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

