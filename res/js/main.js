import { Cursor, Background, Score } from "./ui/basic-ui.js";
import { Entity } from "./logic/entities.js";

const cursor = new Cursor();
const background = new Background();
const score = new Score();
const firstEntity = new Entity(10, 20, 20, 30,"red", 0 , 0);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const times = [];
let fps;

const keys = {};
let mouseX;
let mouseY;

document.addEventListener("keydown", (e) => {
    keys[e.code] = true;
});

document.addEventListener("keyup", (e) => {
    keys[e.code] = false;
});

canvas.addEventListener("mousemove", (e) => {
    const canvasPos = canvas.getBoundingClientRect();
    mouseX = Math.round(e.clientX - canvasPos.left);
    mouseY = Math.round(e.clientY - canvasPos.top);
});

const resizeCanvas = () => {
    canvas.width = 1280;
    canvas.height = 720;
};

const gameLoop = () => {
    //resize canvas
    resizeCanvas();

    //clear canvas
    clearCanvas();

    //update logic
    updateGame();

    //render objects
    renderGame();

    //calculate fps
    calculateFps();

    //next frame
    window.requestAnimationFrame(gameLoop);
};

const clearCanvas = () => {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);  
};

const updateGame = () => {};

const renderCursor = () => {
    cursor.draw(ctx, mouseX, mouseY);
};

const renderGame = () => {
    background.draw(ctx, canvas);
    renderEntities();
    score.draw(ctx, canvas);
    renderCursor();
};

const renderEntities = () => {
    firstEntity.draw(ctx);
};

const calculateFps = () => {
    const now = performance.now();
    while (times.length > 0 && times[0] <= now - 1000) {
        times.shift();
    }
    times.push(now);
    fps = times.length;
    ctx.fillStyle = "black";
    ctx.font = "60px serif";
    ctx.fillText(fps, 60, 60);
};

window.onload = () => {
    resizeCanvas();
    window.requestAnimationFrame(gameLoop);
}