<script lang="ts">
   import { MoveUpRight } from 'lucide-svelte';
</script>

<div class="z-10 my-48 mb-72 w-full flex-col items-center justify-center md:my-72 md:mt-48 ">
	<svg
		width="1700"
		height="934"
		viewBox="0 0 1700 934"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class="absolute top-0 z-[-10] md:h-[500px] h-64 w-64 md:w-[500px]"
	>
		<g filter="url(#filter0_f_1_143)">
			<circle cx="850" cy="84" r="250" fill="white" fill-opacity="0.5" />
		</g>
		<defs>
			<filter
				id="filter0_f_1_143"
				x="0"
				y="-766"
				width="1700"
				height="1700"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
				<feGaussianBlur stdDeviation="300" result="effect1_foregroundBlur_1_143" />
			</filter>
		</defs>
	</svg>

	<h1
		class="inline-block w-full bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text py-6 text-center text-6xl font-semibold text-transparent"
	>
		Welcome to Aragya
	</h1>

	<h2 class="text-center  text-2xl md:text-4xl font-bold tracking-tight">
		Your Trusted Companion in Finding the Right Doctor.
	</h2>
	<div >
		<form action="/" method="post" class="my-10 flex flex-row w-full items-center justify-center gap-4">	
			<div class="">
				<input
				    id="search_query"
					name="search_query"
					type="text"
					class="md:w-80 w-48 rounded-full bg-white/30 dark:bg-white/10 p-2 px-4 text-gray-800 dark:text-gray-200 placeholder-gray-500 shadow-lg backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border"
					placeholder="Enter your text here..."
				/>
			</div>
			<button type="submit" class="p-2 bg-purple-600 rounded-full text-white"><MoveUpRight/></button>
		</form>
	</div>
</div>




