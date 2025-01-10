// contrastSlider.js

let filter001 = {
    contrast: 1,
    brightness: 1,
    saturation: 1,
    hue: 1,
    grayScale: 0,
    blur: 0,
    invert: 0,
    sepia: 0,
    dropShadowX: 2.5,
    dropShadowY: 2.5,
    dropShadowBlurRadius: 1,
    dropShadowColor: 'rgb(0, 0, 0)',
}

let filter002 = {
    contrast: 1,
    brightness: 1,
    saturation: 1,
    hue: 1,
    grayScale: 0,
    blur: 0,
    invert: 0,
    sepia: 0,
    dropShadowX: 2.5,
    dropShadowY: 1.0,
    dropShadowBlurRadius: 1,
    dropShadowColor: 'rgb(0, 0, 0)',
}

function setFilters(whichId, whichFilter)
{
    let theDeg = 'deg';
    let thePx = 'px';

    let theFilters = ge(whichId).style.filter = "contrast("+whichFilter.contrast+") brightness("+whichFilter.brightness+") saturate("+whichFilter.saturation+") grayscale("+whichFilter.grayScale+") hue-rotate("+whichFilter.hue+""+theDeg+") invert("+whichFilter.invert+") blur("+whichFilter.blur+""+thePx+") sepia("+whichFilter.sepia+") drop-shadow("+whichFilter.dropShadowX+""+thePx+" "+whichFilter.dropShadowY+""+thePx+" "+whichFilter.dropShadowBlurRadius+""+thePx+" "+whichFilter.dropShadowColor+")";

    ge(whichId).style.filter = theFilters;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

