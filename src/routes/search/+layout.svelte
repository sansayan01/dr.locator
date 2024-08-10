<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Select from '$lib/components/ui/select/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import * as Form from '$lib/components/ui/form';

	const city = [
		'Agra',
		'Ahmedabad',
		'Ajmer',
		'Ambala',
		'Amritsar',
		'Asansol',
		'Bathinda',
		'Belagavi',
		'Bengaluru',
		'Bhagalpur',
		'Bhavnagar',
		'Bhilai',
		'Bhopal',
		'Bhubaneswar',
		'Bilaspur',
		'Bokaro',
		'Chandigarh',
		'Chennai',
		'Coimbatore',
		'Cuttack',
		'Darbhanga',
		'Daman',
		'Dhanbad',
		'Dharamshala',
		'Dibrugarh',
		'Durg',
		'Durgapur',
		'Faridabad',
		'Gaya',
		'Guwahati',
		'Guntur',
		'Gurgaon',
		'Gwalior',
		'Haldwani',
		'Haridwar',
		'Hazaribagh',
		'Howrah',
		'Hubballi-Dharwad',
		'Hyderabad',
		'Indore',
		'Jabalpur',
		'Jaipur',
		'Jalandhar',
		'Jamshedpur',
		'Jodhpur',
		'Jorhat',
		'Karaikal',
		'Karimnagar',
		'Karnal',
		'Kavaratti',
		'Khammam',
		'Kochi',
		'Kolkata',
		'Kollam',
		'Korba',
		'Kota',
		'Kozhikode',
		'Kullu',
		'Lucknow',
		'Ludhiana',
		'Madurai',
		'Mangalore',
		'Mandi',
		'Margao',
		'Mapusa',
		'Meerut',
		'Muzaffarpur',
		'Mumbai',
		'Mysuru',
		'Nagpur',
		'Nashik',
		'Nellore',
		'New Delhi',
		'Nizamabad',
		'Old Delhi',
		'Panaji',
		'Panipat',
		'Patiala',
		'Patna',
		'Pondicherry',
		'Ponda',
		'Port Blair',
		'Puducherry',
		'Pune',
		'Puri',
		'Rajkot',
		'Rajnandgaon',
		'Ranchi',
		'Rishikesh',
		'Roorkee',
		'Rourkela',
		'Salem',
		'Sambalpur',
		'Shimla',
		'Siliguri',
		'Silchar',
		'Solan',
		'Surat',
		'Tezpur',
		'Thane',
		'Thiruvananthapuram',
		'Tiruchirappalli',
		'Tirupati',
		'Udaipur',
		'Ujjain',
		'Vadodara',
		'Varanasi',
		'Vasco da Gama',
		'Vijayawada',
		'Visakhapatnam',
		'Warangal'
	];
	let result = '';
	let data_ = [];
	type data_ = [{
		name: string;
		speciality: string;
		experience_years: number;
		city: string;
	}];

	let endpoint = 'https://aragya-alpha.vercel.app/api/search';
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

<section class="flex flex-col items-start justify-start gap-2 md:h-[88vh] md:flex-row">
	<div class="h-full w-full md:w-72">
		<Card.Root class="h-full w-full md:w-72">
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
	<div class=" no-scrollbar h-full w-full overflow-y-scroll">
		{#if result.length > 2}
			<h1 class="mb-2 text-2xl font-semibold">Here are the closest matches :</h1>
			{#each data_ as r}<div
					class="mb-4 w-full rounded-lg border bg-[#eceaea] p-6 backdrop-blur-lg dark:bg-neutral-900"
				>
					<h1 class="text-xl font-bold">{r.name}</h1>
					<p class="mb-2 font-bold opacity-70">
						{r.speciality} | {r.experience_years} years of experience
					</p>
					<p class="text-sm font-semibold">{r.city}</p>
				</div>{/each}
			<pre>{result}</pre>
		{:else}
			<slot />
		{/if}
	</div>
</section>
