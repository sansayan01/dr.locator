<script lang="ts">
    import Sun from "lucide-svelte/icons/sun";
    import Moon from "lucide-svelte/icons/moon";
   
    import { toggleMode } from "mode-watcher";
    import { Button } from "$lib/components/ui/button/index.js";
</script>

<header class="flex">
    <nav class="flex flex-row justify-between items-center w-full">
        <div class="flex flex-row justify-center items-center gap-2">
            
                <img src="logo.png" alt="logo" class="h-10 w-10 object-contain">
            <a href="/">
             <h1 class="text-3xl font-bold hidden md:flex">Aragya</h1></a>
        </div>
        <div class="align-middle">
           
        </div>
        <div class="flex flex-row justify-center items-center gap-2">
            <div>
                <a href="/search">
                <button class="p-1 px-3"><p class="text-md font-semibold opacity-60">Search</p></button>
                </a>
            </div>
            <div>
                <a href="/">
                <button class="p-1 px-3"><p class="text-md font-semibold opacity-60">About Us</p></button>
                </a>
            </div>
            <div>
                <Button on:click={toggleMode} variant="outline" size="icon">
                    <Sun
                      class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                    />
                    <Moon
                      class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                    />
                    <span class="sr-only">Toggle theme</span>
                  </Button>
                
            </div>
        </div>
    </nav>
</header>