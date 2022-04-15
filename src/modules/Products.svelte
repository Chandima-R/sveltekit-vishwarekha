<script context="module">
  export async function load({fetch}){
    const res = await fetch('/api/Products');
    const products = await res.json();

    return {
      props: {
        products
      }
    }
  }

</script>

<script>

  import Carousel from "./Carousel.svelte";
  export let products;

  let product_values = Object.values(products);

  let product_array = product_values[0];
  let shuffled_product_array = product_array.sort(() => Math.random() - 0.5);

</script>

<style>
   .item-card{
     cursor: pointer;
     transition: transform 200ms;
     transition: all 0.5s ease-in-out;
   }

   .item-card:hover{
     transform: translateY(-15px);
     box-shadow: 0px 10px 10px rgba(34,197,94, 0.25);
   }

   .image-container{
     background-position: center;
     background-size: cover;
     height: 100%;
   }

   .description-container{
     height: 100% !important;
     width: 100%;
   }

   @media(max-width:768px){
     .item-card{
       height:100% !important;
       min-height: 360px;
     }
   }

   @media(min-width: 768px){
     .item-card{
       height:100% !important;
       min-height: 450px;
  }

    .description-container{
      height: 180px !important;
    }
  }
 </style>

<section>
 <Carousel autoplay="4000">

   {#each shuffled_product_array as product}
   {#if product.status == "publish"}
     <div class="flex justify-around rounded-lg">
       <div class="item-card shadow-sm shadow-green-500/50 rounded-lg bg-white m-2 w-full border border-blue-100">
         <img class="image-container bg-cover bg-center w-full h-48 rounded-lg" src={product.images[0]?.src} alt={product.name}/>
         <div class="description-container p-4">
           <h1 class="text-amber-400 text-lg capitalize font-medium">{product.categories[0].name}</h1>
           <h2 class="text-black capitalize text-lg font-medium">{product.name}</h2>
           <p class="text-xl capitalize font-bold text-green-900">LKR {product.price}.00</p>
         </div>
       </div>
     </div>
     {/if}
   {/each}

 </Carousel>
</section>
