<script lang="ts">
    import Carousel from "./Carousel.svelte";
    export let products;
</script>


<style>

    hr{
    height: 1px;
    }

    @media(min-width: 1024px) and (max-width:1316px){
    #companies{
            margin-top: 15rem;
        }
    }

       .item-card{
         cursor: pointer;
         transition: all 0.5s ease-in-out;
       }

       .item-card:hover{
         transform: translateY(-15px);
         box-shadow: 0 10px 10px rgba(34,197,94, 0.25);
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

<!--start of our companies section-->
<section class="bg-green-50" id="companies">
    <div class="w-full px-4 md:w-4/5 m-auto py-10">
        <h1 class="text-4xl font-light capitalize text-center text-green-900 mb-5 md:font-bold">our companies</h1>
        <div class="w-full mb-10 px-4 md:px-0">
            <div class="flex flex-col items-center mb-6 lg:flex-row">
                <div class="bg-[url('/images/companies/company-image-2.jpg')] bg-cover bg-center w-full h-96 rounded-lg p-2 lg:p-5" />
                <div class="w-full mt-6 lg:mt-0 lg:p-5 lg:ml-5">
                    <h1 class="text-2xl font-light md:font-bold capitalize mb-2 md:mb-4 text-green-900">vishwarekha foods</h1>
                    <p class="mb-4 md:mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <button class="flex justify-center text-center text-green-900">
                        <a class="text-green-900 font-medium md:font-bold capitalize mr-2" href="/">see more</a>
                        <img class="w-6 h-6" alt="see-more" src="/images/companies/link-image.png" />
                    </button>
                </div>
            </div>
            <div class="rounded-lg">
                <section>
                 <Carousel autoplay="4000">

                   {#each products as product}
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
            </div>
        </div>

        <hr class="bg-green-900 border-none rounded-full h-1 shadow-xl shadow-green-900/100" />

        <div class="w-full my-10 px-4 md:px-0">
            <div class="flex flex-col items-center mb-6 lg:flex-row-reverse">
                <div class="bg-[url('/images/companies/company-image-5.jpg')] bg-cover bg-center w-full h-96 rounded-lg p-2 lg:p-5" />
                <div class="w-full mt-6 lg:mt-0 lg:p-5 lg:mr-5 lg:ml-0">
                    <h1 class="text-2xl font-light md:font-bold capitalize mb-2 md:mb-4 text-green-900">vishwarekha herbal</h1>
                    <p class="mb-4 md:mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <button class="flex justify-center text-center text-green-900">
                        <a class="text-green-900 font-medium md:font-bold capitalize mr-2" href="/">see more</a>
                        <img class="w-6 h-6" alt="see-more" src="/images/companies/link-image.png" />
                    </button>
                </div>
            </div>
            <div class="rounded-lg">
                <section>
                 <Carousel autoplay="4000">

                   {#each products as product}
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
            </div>
        </div>

        <hr class="bg-green-900 border-none rounded-full shadow-xl shadow-green-900/100" />

        <div class="w-full my-10 px-4 md:px-0">
            <div class="flex flex-col items-center mb-6 lg:flex-row">
                <div class="bg-[url('/images/companies/company-image-3.jpg')] bg-cover bg-center w-full h-96 rounded-lg p-2 lg:p-5" />
                <div class="w-full mt-6 lg:mt-0 lg:p-5 lg:ml-5">
                    <h1 class="text-2xl font-light md:font-bold capitalize mb-2 md:mb-4 text-green-900">vishwarekha real state</h1>
                    <p class="mb-4 md:mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <button class="flex justify-center text-center text-green-900">
                        <a class="text-green-900 font-medium md:font-bold capitalize mr-2" href="/">see more</a>
                        <img class="w-6 h-6" alt="see-more" src="/images/companies/link-image.png" />
                    </button>
                </div>
            </div>
            <div class="rounded-lg">
                <section>
                    <Carousel autoplay="4000">


                    {#each products as product}
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
            </div>
        </div>

        <hr class="bg-green-900 border-none rounded-full shadow-xl shadow-green-900/100" />

    </div>
</section>
<!--end of our companies section-->
