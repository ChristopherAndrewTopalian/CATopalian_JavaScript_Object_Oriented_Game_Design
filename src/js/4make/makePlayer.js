// makePlayer.js

function makePlayer(whichCharacter)
{
    let player = ce('img');

    if (whichCharacter.id)
    {
        player.id = whichCharacter.id;
    }

    if (whichCharacter.texture)
    {
        player.src = whichCharacter.texture;
    }

    if (whichCharacter.width)
    {
        player.style.width = whichCharacter.width + 'px';
    }

    player.style.position = 'absolute';

    if (whichCharacter.x)
    {
        player.style.left = whichCharacter.x + 'px';
    }

    if (whichCharacter.y)
    {
        player.style.top = whichCharacter.y + 'px';
    }

    // flipHorizontal
    // if array has flipHorizontal
    if (whichCharacter.flipHorizontal)
    {
        // if flipHorizontal is true
        if (whichCharacter.flipHorizontal == true)
        {
            // flip image horizontal
            player.style.transform = "scaleX(-1)";
        }
    }

    // flipVertical
    // if array has flipVertical
    if (whichCharacter.flipVertical)
    {
        // if flipVertical is true
        if (whichCharacter.flipVertical == true)
        {
            // flip image vertical
            player.style.transform = "scaleY(-1)";
        }
    }

    // ROTATION
    // if array has rotationAmount
    if (whichCharacter.rotationAmount)
    {
        // if rotationAmount is not null
        if (whichCharacter.rotationAmount != null)
        {
            // rotate image
            player.style.rotate = whichCharacter.rotationAmount;
        }
    }

    //----//

    // zIndex
    // if array has theLayer
    if (whichCharacter.layer)
    {
        // set zIndex
        player.style.zIndex = whichCharacter.layer;
    }

    // objectFit
    // if array has kind
    if (whichCharacter.kind)
    {
        // set the objectFit
        player.style.objectFit = whichCharacter.kind;
    }

    player.style.zIndex = 5;

    ba(player);

    makeElementDraggable(player);

    setFilters(player.id, filter001);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

