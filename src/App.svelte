<script>
	import { Camera } from './Camera.js';
	import { Character } from './Character.js';
	import { goMenu, keyUpMenu, keyDownMenu, menu } from './Menu.js';
	import { goGame, keyUpGame, keyDownGame, game } from './Game.js';
	import { keyUpWin, keyDownWin, win } from './Win.js';
	import { keyUpLoose, keyDownLoose, loose } from './Loose.js';

	const System = {
		objects : {
			class : [],
			instance : [],
			get : function (name) {
				for (let i=0;i<this.instance.length;i++) {
					if (this.instance[i].name == name) {
						return this.class[i];
					}
				}
			},
		},
		entities : {
			class : [],
			instance : [],
			get : function (name) {
				for (let i=0;i<this.instance.length;i++) {
					if (this.instance[i].name == name) {
						return this.class[i];
					}
				}
			},
		},
		maps : {
			class : [],
			instance : [],
			get : function (name) {
				for (let i=0;i<this.instance.length;i++) {
					if (this.instance[i].name == name) {
						return new this.class[i](System);
					}
				}
			},
			define : function (name) {
				System.map = this.get(name);
			},
		},
		animation : {},
		camera : {},
		character : {},
		map : {},
		gravity : 0.4,
		checkCollision : function (object1, object2) {
			if (object1.x + object1.width > object2.x && object1.x < object2.x + object2.width && object1.y + object1.height > object2.y && object1.y < object2.y + object2.height) {
				return true;
			}
		},
		newGame : function (name) {
			this.character = new Character();
			this.camera = new Camera();
			this.maps.define(name);
			this.map.init();
			goGame(System);
		},
		retry : function () {
			this.newGame(this.map.name);
		},
		empty : function (color) {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			this.ctx.fillStyle = color;
			this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
		},
	}

	import * as objectsList from "./Objects";
	for (const object of Object.keys(objectsList)) {
        const objectClass = objectsList[object];
		const objectInstance = new objectClass(System, []);
        System.objects.class.push(objectClass);
		System.objects.instance.push(objectInstance);
    };

	import * as entitiesList from "./Entities";
	for (const entity of Object.keys(entitiesList)) {
        const entityClass = entitiesList[entity];
		const entityInstance = new entityClass(System, []);
        System.entities.class.push(entityClass);
		System.entities.instance.push(entityInstance);
    };

	import * as mapsList from "./Maps";
	for (const map of Object.keys(mapsList)) {
        const mapClass = mapsList[map];
		const mapInstance = new mapClass(System);
        System.maps.class.push(mapClass);
		System.maps.instance.push(mapInstance);
    };

	import { onMount } from 'svelte';

	let fpsInterval, startTime, now, then, elapsed;

    onMount(() => {
		System.ctx = System.canvas.getContext('2d');

		System.canvas.width = document.body.clientWidth;
    	System.canvas.height = document.body.clientHeight;

		document.addEventListener("keyup", keyUpHandler, false);
    	document.addEventListener("keydown", keyDownHandler, false);

		goMenu(System);
		startAnimating(60);
	});

    function startAnimating(fps) {
		fpsInterval = 1000 / fps;
		then = Date.now();
		startTime = then;
		animate();
	};

	function animate () {
        requestAnimationFrame(animate);
		now = Date.now();
    	elapsed = now - then;

		if (elapsed > fpsInterval) {
			then = now - (elapsed % fpsInterval);

			switch (System.page.name) {
				case "menu":
					menu(System);
					break;
				case "game":
					game(System);
					break;
				case "win":
					win(System);
					break;
				case "loose":
					loose(System);
					break;
			}
        }
    };

    function keyUpHandler(e) {
		switch (System.page.name) {
			case "menu":
				keyUpMenu(System, e);
				break;
			case "game":
				keyUpGame(System, e);
				break;
			case "win":
				keyUpWin(System, e);
				break;
			case "loose":
				keyUpLoose(System, e);
				break;
		}
    };

    function keyDownHandler(e) {
		switch (System.page.name) {
			case "menu":
				keyDownMenu(System, e);
				break;
			case "game":
				keyDownGame(System, e);
				break;
			case "win":
				keyDownWin(System, e);
				break;
			case "loose":
				keyDownLoose(System, e);
				break;
		}
    };
</script>

<div id="html">
	<div id="body">
		<canvas bind:this={System.canvas}></canvas>
	</div>
</div>	

<style>
	#html {
		width:100vw;
		height:100vh;
		overflow:auto;
		position:fixed;
		top:0;
		left:0;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		font-weight:bold;
		background:#add8e6;
	}
</style>