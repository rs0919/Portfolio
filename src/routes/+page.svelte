<script lang="ts">
	import Counter from './Counter.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcomeFallback from '$lib/images/svelte-welcome.png';
	import type { svelte } from '@sveltejs/vite-plugin-svelte';
	import { onMount } from 'svelte';
	import './Info.svelte';
	import Info from './Info.svelte';

	onMount(async () => {});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Portfolio" />
</svelte:head>

<section class="m-0">
	<h1 class="text-6xl font-bold font-oxanium">Rohith Saravana</h1>

	<div id="tag-line">
		<h3 class="font-ubuntu-mono text-lg">
			Passionate about cybersecurity and software development.
		</h3>
		<img
			class="shadow-md"
			src="https://media.tenor.com/awN35nOvAxgAAAAM/escalesolutions-escale.gif"
			alt="spongebob"
		/>
	</div>

	<div id="social-links">
		<a href="https://github.com/rs0919">
			<img
				class="social-icon"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
				alt="Github"
			/>
		</a>
		<a href="https://www.linkedin.com/in/rohith-saravana-2072b724b/"
			><img class="social-icon" src="https://pngimg.com/d/linkedIn_PNG27.png" alt="LinkedIn" />
		</a>
	</div>

	<div class="about-section my-7">
		<p class="font-ubuntu-mono text-xl text-amber-700">About</p>
		<p class="font-ubuntu-mono">
			I graduated from UC Davis with a degree in Computer Science, B.S. I have worked on many
			projects in software development and cybersecurity over the years. I'm interested in
			developing tools that can help people maintain their privacy and improve their security
			posture. Aside from programming and tech, I really enjoy watching movies, playing video games,
			and cooking.
		</p>
	</div>

	<!-- <Info header="Work Experience" content="Bike Patrol..." /> -->
	<Info header="CS Experience" content="clubs and cs stuff..." />
	<Info header="Projects" content="These are the projects I have done..." />
</section>

<style>
	@import 'tailwindcss';

	section {
		display: flex;
		flex-direction: column;
		justify-content: left;
		align-items: left;
		flex: 0.6;
	}

	/* #tag-line {
		@apply text-blue-600 hover:text-red-500;
	} */

	#social-links {
		display: flex;
		flex-direction: row;
	}

	.social-icon {
		height: 40px;
		margin: 0.5rem;
		cursor: pointer;
	}
</style>
