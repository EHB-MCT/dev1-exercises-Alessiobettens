"use strict";

import context from "./context.js";



/**

 * Draws a line between 2 coordinates
 * @param {number} x1 the x coordinate of the start of the line
 * @param {number} y1 the y coordinate of the start of the line
 * @param {number} x2 the x coordinate of the end of the line
 * @param {number} y2 the y coordinate of the end of the line
 */

export function drawLine(x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

/**
 * Draws a filled circle of which the center is at a x,y
 * @param {number} x x coordinate of the center of the circle
 * @param {number} y y coordinare of the center of the circle 
 * @param {number} radius radius of the circle (half of the width)
 */
export function fillCircle(x, y, radius) {
    fillEllipse(x, y, radius, radius);
}


/**
 * Draws a stroked circle of which the center is at a x,y
 * @param {number} x x coordinate of the center of the circle
 * @param {number} y y coordinare of the center of the circle 
 * @param {number} radius radius of the circle (half of the width)
 */
export function strokeCircle(x, y, radius) {
    strokeEllipse(x, y, radius, radius);
}

/**
 * Draws a filled ellipse of which the center is at a x, y
 * @param {*} x x coordinate of the center of the ellipse
 * @param {*} y y coordinate of the center of the ellipse 
 * @param {*} rX horizontal radius of the ellipse (half of the width)
 * @param {*} rY vertical radius of the ellipse (half of the height)
 */
export function fillEllipse(x, y, rX, rY) {
    context.beginPath();
    context.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2);
    context.fill();
}

/**

 * Draws a stroked ellipse of which the center is at a x, y
 * @param {*} x x coordinate of the center of the ellipse
 * @param {*} y y coordinate of the center of the ellipse
 * @param {*} rX horizontal radius of the ellipse (half of the width)
 * @param {*} rY vertical radius of the ellipse (half of the height)
 */

export function strokeEllipse(x, y, rX, rY) {
    context.beginPath();
    context.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2);
    context.stroke();
}

export function fillAndStrokeCircle(x, y, radius) {

    fillCircle(x, y, radius);

    strokeCircle(x, y, radius);

}



export function fillAndStrokeEllipse(x, y, w, h) {

    fillEllipse(x, y, w, h);

    strokeCircle(x, y, w, h);

}

/** function that formats an rgb value based on parameters

 * @param {number} r red (8bits, number between 0-255)

 * @param {number} g green (8bits, number between 0-255)

 * @param {number} b blue (8bits, number between 0-255)

 */

export function rgb(r, g, b) {

    return "rgb(" + r + "," + g + "," + b + ")";

}



/** function that formats an hsla value based on parameters

 * @param {number} h the hue in degrees

 * @param {number} s the saturation in percentage

 * @param {number} l the lightness in percentage

 * @param {number} a the alpha value (opacity) in percentage

 */

export function hsla(h, s, l) {

    return "hsl(" + h + "," + s + "%," + l + "%)";

}


export function hsla(h, s, l, a) {

    return "hsl(" + h + "," + s + "%," + l + "%," + a + "%)";

}

/**

 * function that returns a random whole number between a minimum and a maximumm value

 * @param {number} min minimum value

 * @param {number} max maximum value

 */

export function randomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}