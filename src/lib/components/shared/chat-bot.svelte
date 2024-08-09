<script lang="ts">
	import { MessageCircle, Send } from 'lucide-svelte';

	let x = false;
	function toggleon() {
		x = true;
	}
	function toggleoff() {
		x = false;
	}
</script>

<div class="fixed bottom-20 md:right-10 right-4 z-[10]">
	{#if x == false}
		<button
			class="flex flex-row items-center gap-2 rounded-full bg-purple-500/30 p-2 px-4 backdrop-blur-lg"
			on:click={toggleon}
		>
			<MessageCircle />
			<p class="text-sm font-bold">Chat with assistant.</p>
		</button>
	{:else}
		<div class="flex flex-col items-center justify-center ">
			<div class="card-wrapper h-[500px] md:w-[400px] w-[300px]">
                <div class="w-full flex justify-end absolute top-2 right-2 z-[10]">
                    <button class="bg-purple-200 rounded-full p-1 px-4 font-bold text-sm text-black" on:click={toggleoff}> close </button>
                </div>
				<div class="card-content flex items-start justify-center text-xs">
                    <div class="bg-blue-200 p-2 rounded-xl mt-10 text-black">your chat is not stored.<br/>send a message to get started</div>
                </div>
                <div>
                    <form action="/" class="absolute bottom-2 p-2 flex flex-row justify-between item-center w-full gap-2">
                        <input type="text" class="w-full rounded-md p-2 dark:bg-neutral-800 bg-neutral-200">
                        <button type="submit" class="p-2 rounded-md bg-purple-500"><Send/></button>
                    </form>
                </div>
			</div>
		</div>
	{/if}
</div>
