<script>
	import { Camera } from '../lib/Camera.js';
	import { Character } from '../lib/Character.js';
	import { goMenu, keyUpMenu, keyDownMenu, menu } from '../lib/Menu.js';
	import { goGame, keyUpGame, keyDownGame, game } from '../lib/Game.js';
	import { keyUpWin, keyDownWin, win } from '../lib/Win.js';
	import { keyUpLoose, keyDownLoose, loose } from '../lib/Loose.js';

	const System = {
		objets: {
			class: [],
			instance: [],
			get: function (name) {
				for (let i = 0; i < this.instance.length; i++) {
					if (this.instance[i].name == name) {
						return this.class[i];
					}
				}
			}
		},
		entities: {
			class: [],
			instance: [],
			get: function (name) {
				for (let i = 0; i < this.instance.length; i++) {
					if (this.instance[i].name == name) {
						return this.class[i];
					}
				}
			}
		},
		maps: {
			class: [],
			instance: [],
			get: function (name) {
				for (let i = 0; i < this.instance.length; i++) {
					if (this.instance[i].name == name) {
						return new this.class[i](System);
					}
				}
			},
			define: function (name) {
				System.map = this.get(name);
			}
		},
		animation: {},
		camera: {},
		character: {},
		map: {},
		gravity: 0.4,
		checkCollision: function (objet1, objet2) {
			if (
				objet1.x + objet1.width > objet2.x &&
				objet1.x < objet2.x + objet2.width &&
				objet1.y + objet1.height > objet2.y &&
				objet1.y < objet2.y + objet2.height
			) {
				return true;
			}
		},
		newGame: function (name) {
			this.character = new Character();
			this.camera = new Camera();
			this.maps.define(name);
			this.map.init();
			goGame(System);
		},
		retry: function () {
			this.newGame(this.map.name);
		},
		empty: function (color) {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			this.ctx.fillStyle = color;
			this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
		}
	};

	import * as objetsList from '../lib/Objets';
	for (const objet of Object.keys(objetsList)) {
		const objetClass = objetsList[objet];
		const objetInstance = new objetClass(System, []);
		System.objets.class.push(objetClass);
		System.objets.instance.push(objetInstance);
	}

	import * as entitiesList from '../lib/Entities';
	for (const entity of Object.keys(entitiesList)) {
		const entityClass = entitiesList[entity];
		const entityInstance = new entityClass(System, []);
		System.entities.class.push(entityClass);
		System.entities.instance.push(entityInstance);
	}

	import * as mapsList from '../lib/Maps';
	for (const map of Object.keys(mapsList)) {
		const mapClass = mapsList[map];
		const mapInstance = new mapClass(System);
		System.maps.class.push(mapClass);
		System.maps.instance.push(mapInstance);
	}

	import { onMount } from 'svelte';

	let fpsInterval, startTime, now, then, elapsed;

	onMount(() => {
		System.ctx = System.canvas.getContext('2d');

		System.canvas.width = 1920;
		System.canvas.height = 1080;

		document.addEventListener('keyup', keyUpHandler, false);
		document.addEventListener('keydown', keyDownHandler, false);

		goMenu(System);
		startAnimating(60);
	});

	function startAnimating(fps) {
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

			switch (System.page.name) {
				case 'menu':
					menu(System);
					break;
				case 'game':
					game(System);
					break;
				case 'win':
					win(System);
					break;
				case 'loose':
					loose(System);
					break;
			}
		}
	}

	function keyUpHandler(e) {
		switch (System.page.name) {
			case 'menu':
				keyUpMenu(System, e);
				break;
			case 'game':
				keyUpGame(System, e);
				break;
			case 'win':
				keyUpWin(System, e);
				break;
			case 'loose':
				keyUpLoose(System, e);
				break;
		}
	}

	function keyDownHandler(e) {
		switch (System.page.name) {
			case 'menu':
				keyDownMenu(System, e);
				break;
			case 'game':
				keyDownGame(System, e);
				break;
			case 'win':
				keyDownWin(System, e);
				break;
			case 'loose':
				keyDownLoose(System, e);
				break;
		}
	}
</script>

<div id="html">
	<div id="body">
		<canvas bind:this={System.canvas}></canvas>
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
