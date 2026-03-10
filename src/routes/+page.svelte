<script lang="ts">
  import { keyUpMenu, keyDownMenu, menu } from "../lib/interfaces/menu";
  import { keyUpGame, keyDownGame, game } from "../lib/interfaces/game";
  import { keyUpWin, keyDownWin, win } from "../lib/interfaces/win";
  import { keyUpLoose, keyDownLoose, loose } from "../lib/interfaces/loose";
  import { onMount } from "svelte";
  import { System } from "../lib/system/class";

  let system: System = new System();
  let fpsInterval: number;
  let startTime: number;
  let now: number;
  let then: number;
  let elapsed: number;

  onMount(() => {
    system.ctx = system.canvas.getContext("2d");

    system.canvas.width = 1920;
    system.canvas.height = 1080;

    document.addEventListener("keyup", keyUpHandler, false);
    document.addEventListener("keydown", keyDownHandler, false);

    startAnimating(60);
  });

  function startAnimating(fps: number) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
  }

  function animate() {
    requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now - then;

    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);

      switch (system.page.name) {
        case "menu":
          menu(system);
          break;
        case "game":
          game(system);
          break;
        case "win":
          win(system);
          break;
        case "loose":
          loose(system);
          break;
      }
    }
  }

  function keyUpHandler(e: any) {
    switch (system.page.name) {
      case "menu":
        keyUpMenu(system, e);
        break;
      case "game":
        keyUpGame(system, e);
        break;
      case "win":
        keyUpWin(system, e);
        break;
      case "loose":
        keyUpLoose(system, e);
        break;
    }
  }

  function keyDownHandler(e: any) {
    switch (system.page.name) {
      case "menu":
        keyDownMenu(system, e);
        break;
      case "game":
        keyDownGame(system, e);
        break;
      case "win":
        keyDownWin(system, e);
        break;
      case "loose":
        keyDownLoose(system, e);
        break;
    }
  }
</script>

<div id="html">
  <div id="body">
    <canvas bind:this={system.canvas}></canvas>
  </div>
</div>

<style>
  #html {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;

    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    background: black;
  }

  canvas {
    width: 100%;
    height: 100%;
  }
</style>
