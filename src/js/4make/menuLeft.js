// menuLeft.js

function menuLeft()
{
    let mainDiv = ce('div');
    mainDiv.id = 'menuLeftMainDiv';
    mainDiv.style.position = 'fixed';
    mainDiv.style.left = 0 + 'px';
    mainDiv.style.top = 20 + 'px';
    mainDiv.style.width = 200 + 'px';
    mainDiv.style.border = 'solid 1px rgb(100, 100, 100)';
    mainDiv.style.borderRadius = '8px';
    mainDiv.style.padding = 10 + 'px';
    mainDiv.style.overflowY = 'scroll';
    mainDiv.style.transition = 'left 0.3s ease, top 0.3s ease, width 0.3s ease, height 0.3s ease';
    mainDiv.style.lineHeight = '20px';
    ba(mainDiv);

    // makeElementDraggable(mainDiv);

    //-//

    let subDiv = ce('div');
    subDiv.id = 'menuLeftSubDiv';
    mainDiv.append(subDiv);

    //-//

    let topInfoDiv = ce('div');
    topInfoDiv.id = 'topInfoDiv';
    subDiv.append(topInfoDiv);

    //-//

    let minimizeButton = ce('button');
    minimizeButton.textContent = '_';
    minimizeButton.style.position = 'fixed';
    minimizeButton.style.left = 0 + 'px';
    minimizeButton.style.top = 0 + 'px';
    minimizeButton.onclick = function()
    {
        slideSound();

        ge('menuLeftMainDiv').style.left = -300 + 'px';
    };
    subDiv.append(minimizeButton);

    //-//

    let maximizeButton = ce('button');
    maximizeButton.textContent = 'O';
    maximizeButton.style.position = 'fixed';
    maximizeButton.style.left = 30 + 'px';
    maximizeButton.style.top = 0 + 'px';
    maximizeButton.onclick = function()
    {
        slideSound2();

        ge('menuLeftMainDiv').style.left = 0 + 'px';
    };
    subDiv.append(maximizeButton);

    //-//

    let tabithaEnergyLabel = ce('label');
    tabithaEnergyLabel.textContent = 'Tabitha Energy';
    topInfoDiv.append(tabithaEnergyLabel);

    //-//

    let tabithaEnergy = ce('div');
    tabithaEnergy.id = 'tabithaEnergy';
    tabithaEnergy.title = 'tabithaEnergy';
    tabithaEnergy.textContent = tabitha.energy;
    topInfoDiv.append(tabithaEnergy);

    //-//

    topInfoDiv.append(ce('hr'));

    //-//

    let tabithaAliveStatusLabel = ce('label');
    tabithaAliveStatusLabel.textContent = 'Tabitha Alive?';
    topInfoDiv.append(tabithaAliveStatusLabel);

    //-//

    let tabithaAliveStatus = ce('div');
    tabithaAliveStatus.id = 'tabithaAliveStatus';
    tabithaAliveStatus.title = 'tabithaAliveStatus';
    tabithaAliveStatus.textContent = isAlive(tabitha);
    topInfoDiv.append(tabithaAliveStatus);

    //-//

    topInfoDiv.append(ce('hr'));

    //-//

    // heal label
    let healPlayerLabel = ce('label');
    healPlayerLabel.textContent = 'Heal Player';
    topInfoDiv.append(healPlayerLabel);

    //-//

    let healPlayerButton = ce('button');
    healPlayerButton.textContent = 'Heal Player +1';
    healPlayerButton.style.marginTop = 5 + 'px';
    healPlayerButton.onclick = function()
    {
        clickSound();
        healPlayer(tabitha);
    };
    topInfoDiv.append(healPlayerButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

