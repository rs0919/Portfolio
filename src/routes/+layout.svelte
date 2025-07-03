<script lang="ts">
	import Header from './Header.svelte';
	// import '../app.css';

	let { children } = $props();
</script>

<div class="app bg-slate-300 w-3/5">
	<!-- <Header /> -->

	<main>
		{@render children()}
	</main>

	<footer class="text-zinc-500">
		<p>Website developed by Rohith Saravana. Made with SvelteKit.</p>
	</footer>
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
	.app {
		display: flex;
		flex-direction: column;
		/* min-height: 100vh; */
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
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
