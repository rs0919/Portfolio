<script lang="ts">
	import MarkdownIt from 'markdown-it';
	const md = new MarkdownIt();

	export let data;
	// console.log('Post data: ', data);
	const content: string = data.content;
	let content_rendered: any = md.render(content);

	const title = data.data.title;
</script>

<h1 class="mb-10">{title}</h1>

<!-- <SvelteMarkdown {content} /> -->
<p>{@html content_rendered}</p>

<style>
	@import 'tailwindcss';
</style>
