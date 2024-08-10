<script lang="ts">
    import { onMount } from 'svelte';

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

            const res = await fetch('/api/gemini', {
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
        // Any initialization code can go here
    });
</script>

<main>
    <h1>Gemini Chat Bot</h1>
    
    <div class="chat-container">
        {#each chatHistory as message}
            <div class="message {message.role}">
                <strong>{message.role === 'user' ? 'You' : 'Bot'}:</strong> 
                <p>{message.content}</p>
            </div>
        {/each}
        
        {#if isLoading}
            <div class="message bot">
                <p>Bot is typing...</p>
            </div>
        {/if}
    </div>

    <form on:submit={handleSubmit}>
        <input 
            type="text"
            bind:value={inputMessage} 
            placeholder="Type your message here"
            disabled={isLoading}
        />
        <button type="submit" disabled={isLoading || !inputMessage.trim()}>
            Send
        </button>
    </form>

    {#if error}
        <p class="error">{error}</p>
    {/if}
</main>

<style>
    main {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
    }

    .chat-container {
        height: 400px;
        overflow-y: auto;
        border: 1px solid #ccc;
        padding: 10px;
        margin-bottom: 20px;
    }

    .message {
        margin-bottom: 10px;
        padding: 5px;
        border-radius: 5px;
    }

    .user {
        background-color: #e6f3ff;
        text-align: right;
    }

    .bot {
        background-color: #f0f0f0;
    }

    form {
        display: flex;
        gap: 10px;
    }

    input {
        flex-grow: 1;
        padding: 10px;
    }

    button {
        padding: 10px;
        background-color: #4CAF50;
        color: white;
        border: none;
        cursor: pointer;
    }

    button:disabled {
        background-color: #cccccc;
    }

    .error {
        color: red;
    }
</style>