<script lang="ts" strictEvents>
    import Asdf from './asdf.svelte'
</script>

<Asdf
    on:value={(e) => {
        e.detail.toString()
    }}
/>
