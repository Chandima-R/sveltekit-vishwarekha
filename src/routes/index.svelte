<script context="module">
    import axios from 'axios'

    export async function load({fetch}){
        let products = []
        try{
            const res = await axios.get('/api/Products');
            products = res.data.products
        }
        catch(e){
            console.log(e)
        }

        return{
            props :{
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

    let shuffled_product_array = products.sort(() => Math.random() - 0.5)


</script>

<!--svelte components-->

<Carousel />
<Companies products={shuffled_product_array}/>
<About />
<Contact />


