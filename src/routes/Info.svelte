<!-- Used to define how each "blurb" of website will look
    Will contain a header and content -->
<script lang="ts">
	import terminal from '$lib/images/terminal_empty.png';

	let { header = 'default header', content = 'default content' } = $props();
</script>

<div class="h-70 w-full font-ubuntu-mono bg-cyan-950 border-2 border-black rounded-lg mb-10 p-5">
	<h3 class="text-lime-400">{header}</h3>
	<p class="text-white">{content}</p>
</div>

<style>
	@import 'tailwindcss';

	/* @theme {
		--terminal-img: url($lib/images/terminal_empty.png);

	} */
</style>
