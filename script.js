const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const scoreEl = document.getElementById("score");
const bestEl = document.getElementById("best");
const overlay = document.getElementById("overlay");
const message = document.getElementById("message");
const startBtn = document.getElementById("start");

const CELL = 20;
const COLS = canvas.width / CELL;
const ROWS = canvas.height / CELL;
const COLORS = { snake: "#b7d9b0", head: "#e8f1ec", koi: "#f26a2e" };

let snake, dir, nextDir, koi, score, timer, paused;
let best = 0;
try { best = Number(localStorage.getItem("pond-snake-best")) || 0; } catch (e) {}
bestEl.textContent = best;

function reset() {
  snake = [{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }];
  dir = { x: 1, y: 0 };
  nextDir = dir;
  score = 0;
  paused = false;
  scoreEl.textContent = 0;
  placeKoi();
}

function placeKoi() {
  do {
    koi = { x: Math.floor(Math.random() * COLS), y: Math.floor(Math.random() * ROWS) };
  } while (snake.some(s => s.x === koi.x && s.y === koi.y));
}
