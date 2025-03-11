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
{:else if $Characters?.data?.characters?.results}
	{#each $Characters?.data?.characters?.results as character}
		<p class="bg-amber-50 text-2xl">{character?.name}</p>
	{/each}
{/if}
