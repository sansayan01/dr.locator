<script lang="ts">
    import type { PageData } from './$types';
    import { onMount } from 'svelte';

    export let data: PageData;

    // Define the Article type if you haven't already
    interface Article {
        // Define your article properties here, for example:
        name:string;
        city: string;
        speciality:string;
        experience_years:string;
        // ... other properties
    }

    let articles: Article[] = [];

    onMount(() => {
        if (data.articles) {
            articles = data.articles;
        }
    });
</script>

{#if articles.length === 0}
    <div class="flex h-full w-full flex-col items-center justify-center">
        <h1 class="text-3xl font-bold">No data available</h1>
        <h2 class="text-xl font-bold opacity-75">Please search again.</h2>
    </div>
{:else}
    <div class="">
        <h1 class="text-2xl font-semibold mb-2">Here are the closest matches :</h1>
        {#each articles as article }
        <div class="mb-4 w-full rounded-lg dark:bg-neutral-900 bg-[#eceaea]  backdrop-blur-lg border    p-6">
            <h1 class="text-xl font-bold ">{article.name}</h1>
            <p class="font-bold mb-2 opacity-70">{article.speciality} | {article.experience_years} years of experience</p>
            <p class="text-sm font-semibold">{article.city}</p>
        </div>
        {/each}
    </div>
{/if}