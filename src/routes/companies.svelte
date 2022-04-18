<script>
    import Companies from '../modules/Companies.svelte'
    import IconSlider from '../modules/IconSlider.svelte'
    export let products;
</script>

<Companies {products}/>
<IconSlider />