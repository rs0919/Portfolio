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
	<div class="Moove col-span-2 bento-box overflow-auto">
		<h1 class="text-xl font-bold underline">Mooving Around</h1>
		<p>
			Built a website to inform new students and residents of Davis, CA about the city's various
			transportation options/services. Displays a creative, yet simple user interface that allows
			users to quickly find relevant info. Provides an organized one-stop site for Davis students
			and residents.
		</p>
	</div>
	<div class="Forecast bento-box row-span-2 overflow-auto">
		<h1 class="text-xl font-bold underline">ForecastFM</h1>
		<p>
			Developed a Svelte web application integrating Spotify and the open-meteo weather API to
			generate personalized music playlists matching current weather conditions, allowing users to
			quickly create a playlist that fits the mood. Users can login through Spotify and directly add
			music to their library to reduce friction and improve productivity.
		</p>
	</div>
	<div class="Keylog bento-box overflow-auto">
		<h1 class="text-xl font-bold underline">Keylogger</h1>
		<p>
			Developed a keylogger as part of to simulate real-world attack vectors; captured keystrokes
			are logged and emailed to simulated-attackers or stored locally, enhancing understanding of
			malware behavior and endpoint protection strategies.
		</p>
	</div>
	<div class="Steg bento-box overflow-auto">
		<h1 class="text-xl font-bold underline">Image Steganography</h1>
		<p>
			Built an image steganography web app in a 24-hour hackathon to embed and extract hidden
			text/images within images using Python; designed an intuitive UI and enabled encryption for
			messages, allowing users to better obscure their data.
		</p>
	</div>
	<div class="New bento-box col-span-3 flex flex-row">
		<img
			src="https://media.tenor.com/MRCIli40TYoAAAAj/under-construction90s-90s.gif"
			alt="under construction"
			class="w-55 ml-7"
		/>
		<p class="m-13 text-3xl/15 font-semibold underline decoration-dashed">
			Under Construction...<br />More Projects Coming Soon!
		</p>
	</div>
</section>

<style>
	@import 'tailwindcss';

	.bento-box {
		@apply border border-3 border-emerald-600 rounded-lg bg-indigo-950 text-sky-200 text-lg transition duration-200 delay-100 hover:scale-104 hover:shadow-xl hover:border-emerald-400 p-3 m-1;
	}
</style>
