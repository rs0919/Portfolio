<script lang="ts">
	import '../app.css';
	import MediaQuery from 'svelte-media-queries';
	import { onMount } from 'svelte';

	let { children } = $props();

	let menuButton: HTMLElement;
	let menu: HTMLElement;

	onMount(async () => {
		menuButton = document.getElementById('menu-btn'); // hamburger button
		menu = document.getElementById('overlay-menu');

		menuButton?.addEventListener('click', toggleOverlayMenu);
	});

	function toggleOverlayMenu() {
		// console.log('button clicked');
		if (menu?.classList.contains('invisible')) {
			// make overlay menu appear
			menu?.classList.remove('invisible');
			menu?.classList.add('visible');
		} else {
			// hide menu
			menu?.classList.remove('visible');
			menu?.classList.add('invisible');
		}
	}
</script>

<div class="grid grid-cols-6">
	<div
		class="main-content bg-slate-300 m-0 min-h-screen h-auto col-span-4 col-start-2 max-lg:col-span-6"
	>
		<MediaQuery query="(min-width: 480px)" let:matches>
			{#if matches}
				<nav class="bg-indigo-800 h-13">
					<ul class="flex justify-center space-x-14 pt-3 text-white text-xl font-ubuntu-mono pt-2">
						<li><a href="/" class="hover:text-lime-400">Home</a></li>
						<li><a href="/blog" class="hover:text-lime-400">Blog</a></li>
						<li><a href="/projects" class="hover:text-lime-400">Projects</a></li>
						<li><a href="/resources" class="hover:text-lime-400">Resources</a></li>
					</ul>
				</nav>
			{:else}
				<nav class="bg-indigo-800 h-16">
					<button id="menu-btn" type="button" class="cursor-pointer">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
							alt="Menu"
							class="h-9 ml-3 mt-4"
						/>
					</button>
				</nav>
				<div id="overlay-menu" class="absolute invisible z-10 h-full w-full bg-indigo-900">
					<ul
						class="flex flex-col justify-center items-center mt-5 space-y-10 text-white text-2xl underline font-ubuntu-mono pt-2"
					>
						<li><a onclick={toggleOverlayMenu} href="/" class="hover:text-lime-400">Home</a></li>
						<li>
							<a onclick={toggleOverlayMenu} href="/blog" class="hover:text-lime-400">Blog</a>
						</li>
						<li>
							<a onclick={toggleOverlayMenu} href="/projects" class="hover:text-lime-400"
								>Projects</a
							>
						</li>
						<li>
							<a onclick={toggleOverlayMenu} href="/resources" class="hover:text-lime-400"
								>Resources</a
							>
						</li>
					</ul>
				</div>
			{/if}
		</MediaQuery>

		<main>
			{@render children()}
		</main>

		<footer class="text-zinc-500 mt-5 relative">
			<p>Developed by Rohith Saravana</p>
		</footer>
	</div>
</div>

<style>
	@import 'tailwindcss';
	@import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@200..800&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

	:root {
		@theme {
			--font-oxanium: 'Oxanium', sans-serif;
			--font-ubuntu-mono: 'Ubuntu Mono', sans-serif;
		}
		/* @apply bg-slate-300; */
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0;
		/* box-sizing: border-box; */
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}
</style>
