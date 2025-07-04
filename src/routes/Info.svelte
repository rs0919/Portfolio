<!-- Used to define how each "blurb" of website will look
    Will contain a header and content -->
<script lang="ts">
	let {
		header = 'default header',
		content_1 = 'default content',
		content_2 = '',
		content_3 = ''
	} = $props();
</script>

<div
	class="h-full w-full font-ubuntu-mono bg-cyan-950 border-2 border-black rounded-lg mb-10 p-5 shadow-xl"
>
	<h3 class="text-lime-400">{header}</h3>
	<p class="text-white">{@html content_1}</p>
	<br />
	<p class="text-white">{@html content_2}</p>
	<br />
	<p class="text-white">{@html content_3}</p>
</div>

<style>
	@import 'tailwindcss';

	/* @theme {
		--terminal-img: url($lib/images/terminal_empty.png);

	} */
</style>
