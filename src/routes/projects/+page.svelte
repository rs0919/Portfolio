<script>
	// --Projects--
	// Mooving around
	// ForecastFM
	// Keylogger
	// Image Steg
	// "Under Construction"
</script>

<svelte:head>
	<title>Projects</title>
	<meta name="description" content="Portfolio" />
</svelte:head>

<section class="bento-grid grid grid-cols-3 grid-rows-3 h-200 font-ubuntu-mono">
	<div class="Moove col-span-2 bento-box">
		<p>This project informed people about travel options</p>
	</div>
	<div class="Forecast bento-box row-span-2">
		<p>
			Generated music playlists based on the user's current weather. Tracks can be added directly to
			Spotify.
		</p>
	</div>
	<div class="Keylog bento-box"></div>
	<div class="Steg bento-box"></div>
	<div class="New bento-box col-span-3"></div>
</section>

<style>
	@import 'tailwindcss';

	.bento-box {
		@apply border border-3 border-emerald-600 rounded-lg bg-indigo-950 text-sky-200 text-lg transition duration-200 delay-50 hover:scale-102 hover:shadow-xl p-3 m-1;
	}
</style>
