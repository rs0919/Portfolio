<script lang="ts">
	import { onMount } from 'svelte';
	export let data; // prop data returned by page.server.ts
	// console.log('Posts: ', data.posts);
	onMount(async () => {
		console.log('blog opened');
		console.log('data: ', data);
	});
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Posts" />
</svelte:head>

<section>
	<h2 class="font-ubuntu-mono text-2xl font-semibold tracking-wide">Posts about my Thoughts</h2>

	<ul class="w-full">
		{#each data.posts as post, i}
			{#if post.title != undefined}
				<a href={`/blog/${post.slug}`}>
					<li
						class="{i % 2 === 0
							? 'bg-indigo-300'
							: 'bg-indigo-200'} py-2 text-sky-700 text-2xl font-semibold pl-4 border-t-2 transition duration-300 delay-100 hover:text-teal-600 hover:bg-slate-300"
					>
						{post.title}
					</li>
				</a>
			{/if}
		{/each}
	</ul>
</section>

<style>
	@import 'tailwindcss';
</style>
