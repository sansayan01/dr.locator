<script lang="ts">
	
	import { MessageCircle, Send, X } from 'lucide-svelte';

	let x = false;
	function toggleon() {
		x = true;
	}
	function toggleoff() {
		x = false;
	}
	import { onMount } from 'svelte';
	let chatContainer: HTMLDivElement;
	function scrollToBottom() {
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }

	interface ChatMessage {
		role: 'user' | 'bot';
		content: string;
	}

	let inputMessage: string = '';
	let chatHistory: ChatMessage[] = [];
	let isLoading: boolean = false;
	let error: string | null = null;

	async function handleSubmit(event: Event) {
		event.preventDefault();
		if (!inputMessage.trim()) return;

		isLoading = true;
		error = null;

		// Add user message to chat history
		chatHistory = [...chatHistory, { role: 'user', content: inputMessage }];

		try {
			const formData = new FormData();
			formData.append('message', inputMessage);

			const res = await fetch('https://aragya-alpha.vercel.app/api/gemini', {
				method: 'POST',
				body: formData
			});

			if (!res.ok) {
				throw new Error('Failed to get response');
			}

			const data = await res.json();

			// Add bot response to chat history
			chatHistory = [...chatHistory, { role: 'bot', content: data.response }];

			// Clear input field
			inputMessage = '';
		} catch (err) {
			console.error('Error:', err);
			error = 'An error occurred while fetching the response.';
		} finally {
			isLoading = false;
		}
	}
	onMount(() => {
        scrollToBottom();
    });

    $: {
        if (chatHistory.length) {
            setTimeout(scrollToBottom, 0);
        }
    }
</script>

<div class="fixed md:bottom-20 bottom-4 right-4 z-[10] md:right-10">
	{#if x == false}
		<button
			class="flex flex-row items-center gap-2 rounded-full bg-purple-500/30 p-2 px-4 backdrop-blur-lg"
			on:click={toggleon}
		>
			<MessageCircle />
			<p class="text-sm font-bold">Chat with assistant.</p>
		</button>
	{:else}
		<div class="flex flex-col items-center justify-center">
			<div class="card-wrapper h-[500px] w-[300px] md:w-[400px]">
				<div class="absolute right-2 top-2 z-[10] flex w-full justify-end">
					<button class="rounded-md border p-1 bg-white/10 backdrop-blur-md" on:click={toggleoff}>
						<X />
					</button>
				</div>
				<div class="card-content flex flex-col items-start justify-start text-xs" >
					<div class="no-scrollbar mb-16 mt-2 h-full w-full overflow-x-scroll rounded-md p-2 chatContainer" bind:this={chatContainer}>
						<div
							class="mx-auto mb-2 w-48 rounded-xl bg-cyan-200 p-2 text-center text-xs text-black"
						>
							your chat is not stored.<br />send a message to get started
						</div>
						{#each chatHistory as message}
							<div class="message {message.role} ">
								<div class="text-res rounded-md p-2 {message.role}">
									<strong class="text-xs font-bold text-black"
										>{message.role === 'user' ? 'You' : 'Bot'}:</strong
									>

									<p class="">{message.content}</p>
								</div>
							</div>
						{/each}

						{#if isLoading}
							<div class="message bot">
								<p>Bot is typing...</p>
							</div>
						{/if}
					</div>
					{#if error}
						<p class="error">{error}</p>
					{/if}
				</div>
				<div>
					<form
						on:submit={handleSubmit}
						class="item-center absolute bottom-2 flex w-full flex-row justify-between gap-2 p-2"
					>
						<input
							type="text"
							bind:value={inputMessage}
							placeholder="Type your message here"
							disabled={isLoading}
							class="w-full rounded-md bg-neutral-200 p-2 dark:bg-neutral-800"
						/>
						<button
							type="submit"
							disabled={isLoading || !inputMessage.trim()}
							class="rounded-md bg-purple-500 p-2"><Send /></button
						>
					</form>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.error {
		color: red;
	}
</style>
