<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Select from '$lib/components/ui/select/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import * as Form from '$lib/components/ui/form';

	import { city } from '$lib/store';
	let result = '';
	let data_ = [];

	let endpoint = 'http://localhost:5173/api/search';
	let params = {
		city: '',
		speciality: ''
	};

	// Options for select inputs

	async function handleSubmit() {
		const url = new URL(endpoint);
		Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
		// console.log(url);

		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const data = await response.json();
			result = JSON.stringify(data, null, 2);
			data_ = data;
		} catch (error) {
			console.error('Error:', error);
			result = `Error: ${error.message}`;
		}
	}
</script>

<section class="flex md:h-[88vh] md:flex-row flex-col items-start justify-start gap-2">
	<div class="h-full w-full md:w-72">
		<Card.Root class="h-full md:w-72 w-full">
			<Card.Header>
				<Card.Title>Filter Search Result</Card.Title>
			</Card.Header>
			<Card.Content>
				<form on:submit|preventDefault={handleSubmit} class="w-full max-w-md space-y-4">
					<div class="space-y-2">
						<label
							for="city"
							class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						>
							City
						</label>
						<select
							
							id="city"
							bind:value={params.city}
							class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
						>
							<option value="">Select a city</option>
							{#each city as option}
								<option value={option}>{option}</option>
							{/each}
						</select>
						
					</div>

					<div class="space-y-2">
						<label
							for="speciality"
							class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						>
							Speciality
						</label>
						<input
							id="speciality"
							bind:value={params.speciality}
							class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
						/>
					</div>

					<button
						type="submit"
						class="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
					>
						Search
					</button>
				</form></Card.Content
			></Card.Root
		>
	</div>
	<div class=" w-full overflow-y-scroll h-full no-scrollbar">
		{#if result.length > 2}
			<h1 class="text-2xl font-semibold mb-2">Here are the closest matches :</h1>
			{#each data_ as r}<div class="mb-4 w-full rounded-lg dark:bg-neutral-900 bg-[#eceaea]  backdrop-blur-lg border    p-6">
					<h1 class="text-xl font-bold ">{r.name}</h1>
					<p class="font-bold mb-2 opacity-70">{r.speciality} | {r.experience_years} years of experience</p>
					<p class="text-sm font-semibold">{r.city}</p>
				</div>{/each}
		{:else}
			<slot />
		{/if}
	</div>
</section>
