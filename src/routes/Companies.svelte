<script>
    import Carousel from "./Carousel.svelte";

    let item_cards = [
        {label: 'Food Supplement', name:"Yakinaran Tablets", price:"LKR 1200.00", image: "./images/card-image-1.jpg"},
        {label: 'Food Supplement', name:"Traditional Turmeric Powder", price:"LKR 1200.00", image: "./images/card-image-1.jpg"},
        {label: 'Food Supplement', name:"Pepper Powder", price:"LKR 1200.00", image: "./images/card-image-1.jpg"},
        {label: 'Food Supplement', name:"Curry Powder", price:"LKR 1200.00", image: "./images/card-image-1.jpg"},
        {label: 'Food Supplement', name:"Curry Powder", price:"LKR 1200.00", image: "./images/card-image-1.jpg"}
    ]
</script>

<style>
    @media(min-width:768px){
        .item-card{
            height:100% !important;
            min-height: 350px;
        }
    }

    @media(max-width: 768px) and (min-width: 1366px){
        .item-card{
            height:100% !important;
            min-height: 300px;
        }
    }

    @media(max-width: 1768px){
        .item-card{
            height:100%;
        }
    }

    @media(min-width: 1024px) and (max-width:1316px){
    #companies{
            margin-top: 15rem;
        }
    }
</style>

<!--start of our companies section-->
<section class="bg-green-50" id="companies">
    <div class="w-full md:w-4/5 m-auto py-10">
        <h1 class="text-4xl font-light capitalize text-center text-green-900 mb-5 md:font-bold">our companies</h1>
        <div class="w-full mb-10">
            <div class="flex flex-col items-center mb-10 lg:flex-row">
                <div class="bg-[url('./images/slider-image-1.jpg')] bg-cover bg-center w-full h-96 rounded-lg p-2 lg:p-5">
                </div>
                <div class="w-full p-2 lg:p-5">
                    <h1 class="text-2xl font-light md:font-bold capitalize mb-2  text-green-900">vishwarekha foods</h1>
                    <p class="mb-4 md:mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <button class="flex justify-center text-center text-green-900">
                        <a class="text-green-900 font-medium md:font-bold capitalize mr-2" href="/">see more</a>
                        <img class="w-6 h-6" alt="see-more" src="./images/link-image.png" />
                    </button>
                </div>
            </div>
            <div class="mb-10 bg-blue-100 rounded-lg">
                <Carousel autoplay="4000">
                    {#each item_cards as item, index (index)}
                        <div class="flex justify-around rounded-lg p-2">
                            <div class="item-card border border-green-900 rounded-lg p-4 bg-white m-2 w-full">
                                <img alt="card-image" src={item.image}/>
                                <h1 class="text-amber-400 text-lg capitalize font-medium">{item.label}</h1>
                                <h2 class="text-black capitalize text-lg font-medium">{item.name}</h2>
                                <p class="text-xl capitalize font-bold text-green-900 ">{item.price}</p>
                            </div>
                        </div>
                    {/each}
                </Carousel>
            </div>
        </div>
        <div class="w-full mb-10">
            <div class="flex flex-col mb-10 lg:flex-row-reverse">
                <div class="bg-[url('./images/slider-image-1.jpg')] bg-cover bg-center w-full h-96 rounded-lg p-2 lg:p-5">
                </div>
                <div class="w-full p-2 lg:p-5">
                    <h1 class="text-2xl font-light md:font-bold capitalize mb-2  text-green-900">vishwarekha real estate</h1>
                    <p class="mb-4 md:mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <button class="flex justify-center text-center text-green-900">
                        <a class="text-green-900 font-medium md:font-bold capitalize mr-2" href="/">see more</a>
                        <img class="w-6 h-6" alt="see-more" src="./images/link-image.png" />
                    </button>
                </div>
            </div>
            <div class="mb-10 bg-blue-100 rounded-lg">
                <Carousel autoplay="4000">
                    {#each item_cards as item, index (index)}
                        <div class="flex justify-around rounded-lg p-2">
                            <div class="item-card border border-green-900 rounded-lg p-4 bg-white m-2 w-full">
                                <img alt="card-image" src={item.image}/>
                                <h1 class="text-amber-400 text-lg capitalize font-medium">{item.label}</h1>
                                <h2 class="text-black capitalize text-lg font-medium">{item.name}</h2>
                                <p class="text-xl capitalize font-bold text-green-900 ">{item.price}</p>
                            </div>
                        </div>
                    {/each}
                </Carousel>
            </div>
        </div>
        <div class="w-full mb-10">
            <div class="flex flex-col mb-10 lg:flex-row">
                <div class="bg-[url('./images/slider-image-1.jpg')] bg-cover bg-center w-full h-96 rounded-lg p-2 lg:p-5">
                </div>
                <div class="w-full p-2 lg:p-5">
                    <h1 class="text-2xl font-light md:font-bold capitalize mb-2  text-green-900">vishwarekha herbal</h1>
                    <p class="mb-4 md:mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <button class="flex justify-center text-center text-green-900">
                        <a class="text-green-900 font-medium md:font-bold capitalize mr-2" href="/">see more</a>
                        <img class="w-6 h-6" alt="see-more" src="./images/link-image.png" />
                    </button>
                </div>
            </div>
            <div class="mb-10 bg-blue-100 rounded-lg">
                <Carousel autoplay="4000">
                    {#each item_cards as item, index (index)}
                        <div class="flex justify-around rounded-lg p-2">
                            <div class="item-card border border-green-900 rounded-lg p-4 bg-white m-2 w-full">
                                <img alt="card-image" src={item.image}/>
                                <h1 class="text-amber-400 text-lg capitalize font-medium">{item.label}</h1>
                                <h2 class="text-black capitalize text-lg font-medium">{item.name}</h2>
                                <p class="text-xl capitalize font-bold text-green-900 ">{item.price}</p>
                            </div>
                        </div>
                    {/each}
                </Carousel>
            </div>
        </div>
    </div>
</section>
<!--end of our companies section-->