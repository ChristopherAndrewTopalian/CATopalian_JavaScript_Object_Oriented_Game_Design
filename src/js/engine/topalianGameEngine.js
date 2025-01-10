// startGameLoop.js

let whichPlayer = tabitha;

let ourPlayer =
{
    x: whichPlayer.x,
    y: whichPlayer.y,
    speedMultiplier: whichPlayer.speed,
    id: whichPlayer.id,
    playerColor: whichPlayer.color
};

// keyboard Letter Codes Being Pressed
let keyboard = { };
keyboard.UP = 87; // 87 is w, 38 is up arrow
keyboard.DOWN = 83; // 83 is s, 40 is down arrow
keyboard.LEFT = 65; // 65 is a, 37 is left arrow
keyboard.RIGHT = 68; // 68 is d, 39 is right arrow
keyboard.SHIFT = 16; // Shift Button

// camera Follows the Player
function cameraFollowsPlayer()
{
    if (ge(ourPlayer.id))
    {
        ge(ourPlayer.id).scrollIntoView({ block: "center", inline: "center" });
    }
}

function cameraStays()
{
    cameraFlag = "stay";
    ge(ourPlayer.id).scrollIntoView(true);
}

function theControls(e)
{
    // SPEED
    if (e.keyCode == 192) // tilda ~
    {
        ourPlayer.speedMultiplier = 0.5;

        cl('Speed 0.5');
    }

    // if (e.keyCode == 49 || e.keyCode == 97) // number 1, or numpad 1

    if (e.keyCode == 49) // number 1
    {
        ourPlayer.speedMultiplier = 1;

        cl('Speed 1');
    }

    if (e.keyCode == 50) // number 2
    {
        ourPlayer.speedMultiplier = 2;

        cl('Speed 2');
    }
    if (e.keyCode == 51) // number 3
    {
        ourPlayer.speedMultiplier = 5;

        cl('Speed 5');
    }
    if (e.keyCode == 52) // number 4
    {
        ourPlayer.speedMultiplier = 10;
        cl('Speed 10');
    }
    if (e.keyCode == 53) // number 5
    {
        ourPlayer.speedMultiplier = 15;

        cl('Speed 15');
    }

    let theKeyCode = e.keyCode || e.which;

    if (e.type === 'keydown')
    {
        keyboard[theKeyCode] = true;
    }
    else if (e.type === 'keyup')
    {
        keyboard[theKeyCode] = false;
    }
}

// character movement updating
function movePlayer(theX, theY)
{
    ourPlayer.x += (theX || 0) * ourPlayer.speedMultiplier;

    ourPlayer.y += (theY || 0) * ourPlayer.speedMultiplier;

    if (ge(ourPlayer.id))
    {
        ge(ourPlayer.id).style.left = ourPlayer.x + 'px';

        ge(ourPlayer.id).style.top = ourPlayer.y + 'px';
    }
}

// player Controls
function playerMotion()
{
    if (keyboard[keyboard.LEFT])
    {
        movePlayer(-1, 0);

        // flip horizontal to face left (original image faces right)
        ge(ourPlayer.id).style.webkitTransform  = "scaleX(-1)";
    }

    if (keyboard[keyboard.RIGHT])
    {
        movePlayer(1, 0);

        // flip horizontal to face right
        ge(ourPlayer.id).style.webkitTransform  = "scaleX(1)";
    }
    if (keyboard[keyboard.UP])
    {
        movePlayer(0, -1);
    }
    if (keyboard[keyboard.DOWN])
    {
        movePlayer(0, 1);
    }
    if (keyboard[keyboard.LEFT] && keyboard[keyboard.SHIFT])
    {
        movePlayer(-2, 0);
    }
    if (keyboard[keyboard.RIGHT] && keyboard[keyboard.SHIFT])
    {
        movePlayer(2, 0);
    }
    if (keyboard[keyboard.UP] && keyboard[keyboard.SHIFT])
    {
        movePlayer(0, -2);
    }

    if (keyboard[keyboard.DOWN] && keyboard[keyboard.SHIFT])
    {
        movePlayer(0, 2);
    }
}

// stay or follow
let cameraFlag = "follow";

function updateWorld()
{
    if (ge(ourPlayer.id))
    {
        playerMotion();

        if (cameraFlag == "follow")
        {
            cameraFollowsPlayer();
        }
        else if (cameraFlag == "stay")
        {
            // camera Stays
        }
    }

    //----//

    // if tabitha and hail collide
    if (collision('tabitha', 'mouse001'))
    {
        collisionSound1();

        if (tabitha.energy > 0)
        {
            tabitha.energy -= 1;
        }
    }

    // if tabithaAliveStatus exists
    if (ge('tabithaAliveStatus'))
    {
        // show tabitha's alive status
        ge('tabithaAliveStatus').textContent = isAlive(tabitha);
    }

    //-//

    // if tabithaEnergy exists
    if (ge('tabithaEnergy'))
    {
        // show tabitha's energy
        ge('tabithaEnergy').textContent = tabitha.energy;
    }

    //-//

    // if tabitha and catHomeDiv exist
    if (ge('tabitha') && ge('catHomeDiv'))
    {
        // if tabitha is over catHomeDiv
        if (isElementOverOther('tabitha', 'catHomeDiv'))
        {
            healingSound1();

            // generate a random RGB color
            let randomColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' +
            Math.floor(Math.random() * 256) + ',' +
            Math.floor(Math.random() * 256) + ')';

            // apply random RGB color to border
            ge('catHomeDiv').style.borderColor = randomColor;

            // if tabitha energy is less than 100
            if (tabitha.energy < 100)
            {
                tabitha.energy += 1;
            }
            else
            {
                ge('tabithaEnergy').textContent = 100 + ' FULL';
            }
        }

        if (isElementOverOther('tabitha', 'catHome2'))
        {
            // generate a random RGB color
            let randomColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' +
            Math.floor(Math.random() * 256) + ',' +
            Math.floor(Math.random() * 256) + ')';

            // apply random RGB color to border
            ge('catHome2').style.borderColor = randomColor;
        }
    }

    //----//

    requestAnimationFrame(updateWorld);
}

updateWorld();

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

