<script lang="ts">
	import type { PageData } from './$houdini';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	let { Characters } = $derived(data);
</script>

{#if $Characters.fetching}
	<p>loading...</p>
	{#if $Characters?.data?.characters?.results}
		{#each $Characters?.data?.characters?.results as character}
			<p>{character?.name}</p>
		{/each}
	{/if}
{/if}

<h1 class="bg-amber-50 text-2xl">Welcome to SvelteKit</h1>

<p>Test</p>
