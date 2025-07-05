<script lang="ts">
	import { onMount } from 'svelte';
	export let data; // prop data returned by page.server.ts
	console.log('Posts: ', data.posts);
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
	<h1>Blog</h1>
	<h2>Posts about some of my random thoughts and opinions.</h2>

	<ul>
		{#each data.posts as post}
			<li>
				<a href={`/blog/${post.slug}`}>{post.title}</a>
			</li>
		{/each}
	</ul>
	<!-- <p>{data.posts.slug}</p> -->

	<p>thats it.</p>
</section>

<style>
	@import 'tailwindcss';
</style>
