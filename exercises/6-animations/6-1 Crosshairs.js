"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;



window.onmousemove = Crosshair;

/**
 *
 * @param {MouseEvent} eventData
 */


function Crosshair(eventData) {
    let x = eventData.pageX;
    let y = eventData.pageY;

    context.fillRect(0, 0, width, height);
    context.fillStyle = "black";

    context.lineWidth = "10";
    context.strokeStyle = "white";

    Utils.drawLine(x, 0, x, height);
    Utils.drawLine(0, y, width, y);
}