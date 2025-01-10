// makeMouse.js

let mouse001 = {
    name: 'Mouse 001',
    id: 'mouse001',
    x: 620,
    y: 400,
    width: 50,
    height: 50,
    bgColor: 'rgb(0, 255, 255)',
    class: 'smallMouse',
    texture: 'src/media/texture/mice/mouse001/mouse001.png'
};

function makeMouse(whichObject)
{
    let mouse = ce('img');
    mouse.id = whichObject.id;
    mouse.style.position = 'absolute';
    mouse.style.left = whichObject.x + 'px';
    mouse.style.top = whichObject.y + 'px';
    mouse.style.width = whichObject.width + 'px';
    mouse.style.height = whichObject.height + 'px';
    mouse.style.zIndex = 100;
    mouse.src = whichObject.texture;
    ba(mouse);

    //-//

    setFilters(mouse.id, filter002);

    makeElementDraggable(mouse);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

