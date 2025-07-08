<script lang="ts">
	import bolt from '$lib/images/bolt_icon.svg';
	let { icon = '', skill = 'Skills', color = 'bg-sky-200', text_color = 'text-black' } = $props();
</script>

<div class="flex h-8 w-fit px-2 m-2 border border-0 rounded-3xl {color}">
	<img src={icon} alt="" />
	<p class="wrap-normal text-xl font-bold font-ubuntu-mono {text_color}">{skill}</p>
</div>

<style>
	@import 'tailwindcss';
</style>
