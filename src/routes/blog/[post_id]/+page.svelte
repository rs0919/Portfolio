<script lang="ts">
	import MarkdownIt from 'markdown-it';
	const md = new MarkdownIt();

	export let data;
	console.log('Post data: ', data);
	const { content } = data.content;
	let content_rendered = md.render(content);
</script>

<h1>TITLE</h1>
<!-- <SvelteMarkdown {content} /> -->
<p>{@html content_rendered}</p>

<style>
	@import 'tailwindcss';
</style>
