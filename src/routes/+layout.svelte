<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="grid grid-cols-5">
	<div class="main-content bg-slate-300 m-0 h-full col-span-3 col-start-2 max-md:col-span-5">
		<nav class="bg-indigo-800 h-10">
			<ul class="flex justify-center space-x-8 text-white text-lg font-ubuntu-mono pt-2">
				<li><a href="/" class="hover:text-lime-400">Home</a></li>
				<li><a href="/blog" class="hover:text-lime-400">Blog</a></li>
				<li><a href="#services" class="hover:text-lime-400">Projects</a></li>
				<li><a href="#contact" class="hover:text-lime-400">Security Test</a></li>
			</ul>
		</nav>

		<main>
			{@render children()}
		</main>

		<footer class="text-zinc-500">
			<p>Website developed by Rohith Saravana. Made with SvelteKit.</p>
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
