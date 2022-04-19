<script context="module">
    export async function load({fetch}){
        const res = await fetch('/api/Products');
        const products = await res.text();

        return {
            props: {
                products
            }
        }
    }

</script>

<script>
    import Carousel from './carousel.svelte';
    import Companies from './companies.svelte';
    import About from './about.svelte';
    import Contact from './contact.svelte';

    export let products;

    let product_values = Object.values(products);

    let product_array = product_values[0];
    let shuffled_product_array = product_array.sort(() => Math.random() - 0.5);


</script>

<!--svelte components-->

<Carousel />
<Companies products={shuffled_product_array}/>
<About />
<Contact />


