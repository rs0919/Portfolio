<script lang="ts">
	import type { svelte } from '@sveltejs/vite-plugin-svelte';
	import { onMount } from 'svelte';
	import './Info.svelte';
	import bolt from '$lib/images/bolt_icon.svg';
	import profile_pic from '$lib/images/profile_picture.jpg';
	import Info from './Info.svelte';
	import Badge from './Badge.svelte';

	onMount(async () => {});
</script>

<!-- Boxicons CSS -->
<link href="https://cdn.boxicons.com/fonts/basic/boxicons.min.css" rel="stylesheet" />
<link href="https://cdn.boxicons.com/fonts/brands/boxicons-brands.min.css" rel="stylesheet" />

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Portfolio" />
</svelte:head>

<section class="m-0">
	<h1 class="text-6xl font-bold flex justify-center font-oxanium max-lg:text-5xl">
		Rohith Saravana
	</h1>

	<div id="tag-line">
		<h3 class="font-ubuntu-mono text-lg flex justify-center">
			Passionate about cybersecurity and software development
		</h3>
		<img
			class="shadow-md m-3"
			src="https://media.tenor.com/awN35nOvAxgAAAAM/escalesolutions-escale.gif"
			alt="spongebob and patrick"
		/>
	</div>

	<div id="social-links">
		<a href="https://github.com/rs0919" class="m-5">
			<!-- <img
				class="social-icon rounded-full transition duration-300 hover:scale-110"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
				alt="Github"
			/> -->
			<i
				class="bxl bx-github scale-300 transition duration-300 delay-50 hover:scale-350"
				style="color:#00226c"
			></i>
		</a>
		<a href="https://www.linkedin.com/in/rohith-saravana-2072b724b/" class="m-5">
			<!-- <img
				class="social-icon rounded-full transition duration-300 hover:scale-110"
				src="https://pngimg.com/d/linkedIn_PNG27.png"
				alt="LinkedIn"
			/> -->
			<i
				class="bxl bx-linkedin-square scale-300 transition duration-300 delay-50 hover:scale-350"
				style="color:#00226c"
			></i>
		</a>
		<a href="mailto:rohithsaravana@gmail.com" class="m-5">
			<!-- <img
				class="social-icon rounded-full transition duration-300 hover:scale-110"
				src="https://images.vexels.com/media/users/3/140138/isolated/lists/88e50689fa3280c748d000aaf0bad480-email-round-icon-1.png"
				alt="Email"
			/> -->
			<i
				class="bxr bxs-envelope-alt scale-300 transition duration-300 delay-50 hover:scale-350"
				style="color:#00226c"
			>
			</i>
		</a>
	</div>

	<div class="about-section my-7">
		<p class="font-ubuntu-mono font-bold text-xl text-amber-700">About</p>
		<p class="font-ubuntu-mono text-lg">
			I graduated from UC Davis with a degree in Computer Science, B.S. I have worked on many
			projects in software development and cybersecurity over the years. I'm interested in
			developing tools that can help people maintain their privacy and improve their security
			posture. Aside from programming and tech, I really enjoy watching movies, playing video games,
			and cooking.
		</p>
	</div>

	<!-- <Info header="Work Experience" content="Bike Patrol..." /> -->
	<Info
		header="CS Experience"
		content_1="At my time in UC Davis, I was a project manager at the AI Student Collective. 
		I guided cohorts of students that were interested in machine learning, but had little 
		coding experience. I taught them the Python basics and the Sci-Kit Learn framework 
		through beginner-friendly ML projects such as a basic stock-price predictor project."
		content_2="I was also a member of the Cybersecurity club. I attended the club's workshops which 
		furthered my understanding of security and networking concepts. I participated in CTFs 
		and cyber competitions with the club, such as ECitadel, where we were tasked with securing 
		a virtual machine and preventing the red-team from gaining access."
	/>
	<Info
		header="Project Highlight"
		content_1="A recent project I worked on is <a href='https://moovingaround.vercel.app/' class='text-orange-300 hover:text-rose-500'>Mooving Around</a> a transportation guide 
		for Davis, CA. My college town had a lot of options for traveling aside from just 
		driving. During HackDavis 2025, a 24-hour hackathon oriented toward social-good, 
		I devloped a website that explained the different transportation services available
		 to students and residents of Davis. My goal was to help with the potentially 
		 overwhelming process of moving to a new city and provide online resources to 
		 help students learn how to get around the city."
	/>
	<!-- <br><br>
		 Another project I contributed to is <a href='https://github.com/danfirsten/ForecastFM' class='text-orange-300 hover:text-rose-500'>ForecastFM</a> a music player built with 
		 Svelte that integrates Spotify's API. Based on the user's location and current weather, 
		 the site generates playlists that match the vibe of the weather." -->
</section>

<section>
	<Badge icon={bolt} />
	<div class="flex flex-wrap">
		<Badge skill="Python" color="bg-green-400" />
		<Badge skill="C/C++" color="bg-orange-400" />
		<Badge skill="OOP" color="bg-yellow-400" />
		<Badge skill="Microsoft Office" color="bg-blue-300" />
		<Badge skill="Git/Github" color="bg-stone-400" />
		<Badge skill="Networks" color="bg-purple-300" />
		<Badge skill="HTML/CSS/JS" color="bg-rose-400" />
		<Badge skill="Svelte" color="bg-red-400" />
		<Badge skill="Wire Shark" color="bg-teal-400" />
		<Badge skill="Linux" color="bg-violet-950" text_color="text-white" />
	</div>
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
