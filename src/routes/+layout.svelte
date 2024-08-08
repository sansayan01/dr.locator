<script lang="ts">
	import Footer from '$lib/components/shared/footer.svelte';
import Header from '$lib/components/shared/header.svelte';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
</script>
<svelte:head>
    <link rel="icon" href="/logo.png" />
    <title>Aragya | Find Doctors</title>
</svelte:head>

<ModeWatcher defaultMode="dark"/>
<div class="border-b fixed w-full backdrop-blur-md">
	<div class="mx-auto max-w-[1000px] p-2"><Header /></div></div>
<main class="mx-auto max-w-[1000px] p-2 px-4 md:px-2">
	
	<div class="mt-16"><slot /> <Footer/></div></main>

