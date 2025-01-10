// attackEnemy.js

function attackEnemy(whichPlayer, whichEnemy)
{
    let amount = whichPlayer.strength * whichPlayer.weight;

    cl(whichPlayer.name + ' attacks ' + whichEnemy.name + ' with ' + amount + ' of damage done');

    whichEnemy.energy -= amount;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

