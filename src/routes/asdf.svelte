<script lang="ts" strictEvents>
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher<{ value: number }>()
    dispatch('value', 1)
</script>
 