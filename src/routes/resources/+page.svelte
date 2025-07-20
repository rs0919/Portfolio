<script lang="ts">
	import type { svelte } from '@sveltejs/vite-plugin-svelte';
	import { onMount } from 'svelte';
</script>

<svelte:head>
	<title>Resources</title>
	<meta name="resources" content="Portfolio" />
</svelte:head>

<div class="mt-10">
	<a
		href="https://github.com/rs0919/Portfolio"
		class="text-blue-800 hover:text-rose-600 font-ubuntu-mono text-2xl underline"
		target="_blank"
		rel="noopener noreferrer"
		>Portfolio Source Code
	</a>
	<p class="text-black font-ubuntu-mono text-xl">Github repo for this website.</p>
</div>

<div class="mt-10">
	<a
		href="https://svelte.dev/tutorial/svelte/welcome-to-svelte"
		class="text-blue-800 hover:text-rose-600 font-ubuntu-mono text-2xl underline"
		target="_blank"
		rel="noopener noreferrer"
		>Svelte Documentation
	</a>
	<p class="text-black font-ubuntu-mono text-xl">
		I used SvelteKit to create this site, the official website has really good documentation and
		tutorial.
	</p>
</div>

<div class="mt-10">
	<a
		href="https://tailwindcss.com/docs"
		class="text-blue-800 hover:text-rose-600 font-ubuntu-mono text-2xl underline"
		target="_blank"
		rel="noopener noreferrer"
		>TailWindCSS Documentation
	</a>
	<p class="text-black font-ubuntu-mono text-xl">I used TailWindCSS for styling.</p>
</div>

<div class="mt-10">
	<a
		href="https://boxicons.com/"
		class="text-blue-800 hover:text-rose-600 font-ubuntu-mono text-2xl underline"
		target="_blank"
		rel="noopener noreferrer"
		>Boxicons
	</a>
	<p class="text-black font-ubuntu-mono text-xl">Icons I used for my website.</p>
</div>

<style></style>
