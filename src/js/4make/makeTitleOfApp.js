// makeTitleOfApp.js

function makeTitleOfApp()
{
    let mainDiv = ce('div');
    mainDiv.style.position = 'fixed';
    mainDiv.style.right = '5px';
    mainDiv.style.top = '5px';
    mainDiv.style.zIndex = 1;
    ba(mainDiv);

    //-//

    let titleOfApp = ce('a');
    titleOfApp.id = 'titleOfApp';
    titleOfApp.textContent = 'CATopalian JavaScript Object Oriented Game Design';
    titleOfApp.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JavaScript_Object_Oriented_Game_Design';
    titleOfApp.target = '_blank';
    titleOfApp.style.fontSize = '15px';
    titleOfApp.style.fontWeight = 'bold';
    titleOfApp.style.textDecoration = 'none';
    titleOfApp.style.color = 'rgb(150, 150, 150)';
    titleOfApp.style.textShadow = "1px 1px 2px black";
    mainDiv.append(titleOfApp);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

