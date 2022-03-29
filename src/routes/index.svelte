<script>
    // carousel start

    // let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

    // icon-images array
    // let images =['icon-image-1.svg', 'icon-image-2.svg', 'icon-image-3.svg', 'icon-image-4.svg', 'icon-image-5.svg', 'icon-image-6.svg']
    //carosuel end
    import { onMount } from "svelte";

    // Show mobile icon and display menu
    let showMobileMenu = false;

    // List of navigation items
    const navItems = [
        { label: "Home", href: "#home"},
        { label: "Our Companies", href: "#companies"},
        { label: "About Us", href: "#about-us"},
        { label: "Contact Us", href: "#contact-us"},
    ];

    // Mobile menu click event handler
    const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);

    // Media match query handler
    const mediaQueryHandler = e => {
        // Reset mobile state
        if (!e.matches) {
            showMobileMenu = false;
        }
    };

    // Attach media query listener on mount hook
    onMount(() => {
        const mediaListener = window.matchMedia("(max-width: 767px)");

        mediaListener.addListener(mediaQueryHandler);

        let navbar = document.getElementById('nav');

        window.onscroll = function (){
            "use strict";
            if(document.body.scrollTop >= 150 || document.documentElement.scrollTop){
                    navbar.classList.add('nav-colored');
                    navbar.classList.remove('nav-transparent');
            }else{
                navbar.classList.add('nav-transparent');
                navbar.classList.remove('nav-colored');
            }
        }

    });

    // navbar background color on scroll


</script>

<style>
    /*carousel start*/
    /*.color-block {*/
    /*    height: 8rem;*/
    /*    width: 8rem;*/
    /*}*/

    span {
        display: inline-block;
        margin-top: 6rem;
    }
    /*carousel end*/
    .mobile-icon {
        width: 25px;
        height: 14px;
        position: relative;
        cursor: pointer;
    }

    .mobile-icon:after,
    .mobile-icon:before,
    .middle-line {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #fff;
        transition: all 0.4s;
        transform-origin: center;
    }

    .mobile-icon:before,
    .middle-line {
        top: 0;
    }

    .mobile-icon:after,
    .middle-line {
        bottom: 0;
    }

    .mobile-icon:before {
        width: 66%;
    }

    .mobile-icon:after {
        width: 33%;
    }

    .middle-line {
        margin: auto;
    }

    .mobile-icon:hover:before,
    .mobile-icon:hover:after,
    .mobile-icon.active:before,
    .mobile-icon.active:after,
    .mobile-icon.active .middle-line {
        width: 100%;
    }

    .mobile-icon.active:before,
    .mobile-icon.active:after {
        top: 50%;
        transform: rotate(-45deg);
    }

    .mobile-icon.active .middle-line {
        transform: rotate(45deg);
    }

    .navbar-list {
        display: none;
        width: 100%;
        justify-content: space-between;
        margin: 0;
        border-radius: 20px;
    }

    .navbar-list.mobile {
        background-color: rgba(0, 0, 0, 0.8);
        position: absolute;
        top:10vh;
        height: 100vh;
        bottom: 0;
        left: 0;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        align-items: center;
        justify-content: center;
        line-height: 2;
    }

    .navbar-list li:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #424245;
    }

    @media only screen and (min-width: 1024px) {
        .mobile-icon {
            display: none;
        }

        .navbar-list {
            display: flex;
            padding: 20px;
        }

        .navbar-list a {
            display: inline-flex;
            text-decoration: none;
        }
    }

    .nav-colored{
        background-color: rgb(20 83 45);
        position: sticky;
        top: 0 !important;
        z-index: 1000;
    }

    .nav-transparent{
        background-color: transparent;
        position: fixed;
        top: 20px;
        z-index: 1000;
    }


    /*wavy shape*/
    svg {
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        transform: scaleX(-1);

    }
    .container {
        z-index: -1 !important;
        display: inline-block;
        position: relative;
        width: 100%;
        max-width: 100%;
        padding-bottom: 100%;
        vertical-align: middle;
        overflow: hidden;
    }
    .svg-wrapper{
        height: 200px;
    }

    @media(max-width: 1024px){
        .svg-wrapper{
            display: none;
        }
    }

    @media(min-width:1024px) and (max-width:1315px){
        #companies{
            margin-top: 250px;
        }
    }

    @media(min-width: 1315px){
        #brands{
            margin-top: 30vh;
        }
    }
    @media(max-width: 1024px){
        nav{
            position: sticky;
            top: 0 !important;
        }
    }

</style>



<!--<Carousel autoplay="2000">-->
<!--    {#each colors as color, index (index)}-->
<!--        <div class="color-block" >-->
<!--            <img alt="icon-image" src="./images/{images}" />-->
<!--            <h1>header</h1>-->
<!--        </div>-->
<!--    {/each}-->
<!--&lt;!&ndash;    <span slot="left-control">Left</span>&ndash;&gt;-->
<!--&lt;!&ndash;    <span slot="right-control">Right</span>&ndash;&gt;-->
<!--</Carousel>-->


<!--start of navbar-->
<nav class="nav-transparent h-16 lg:h-28 nav-default absolute w-full bg-green-900 flex items-center justify-between mt-0" id="nav">
    <a href="#" class="w-fit p-4 ml-0 lg:w-3/5 lg:ml-16 lg:p-0">
        <img class="w-64" alt="vishwarekha-logo" src="./images/vishwarekha-logo.svg" />
    </a>
    <div class="bg-transparent w-full justify-end lg:bg-green-900 lg:max-w-screen-lg px-10 m-auto box-border flex items-center h-fit rounded-tl-full rounded-bl-full lg:px-20">
        <div on:click={handleMobileIconClick} class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
            <div class="middle-line"></div>
        </div>
        <ul  class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
            {#each navItems as item}
                <li class="list-none relative">
                    <a class="text-white font-medium hover:text-amber-400" href={item.href}>{item.label}</a>
                </li>
            {/each}
        </ul>
    </div>
</nav>
<!--end of navbar-->

<!--start of slider section-->
<section class="bg-[url('./images/slider-image-1.jpg')] bg-cover flex flex-col m-auto" id="home">
    <div class="flex flex-col h-fits w-full pt-24 px-2 md:py-14 md:pt-24 lg:pt-32 lg:px-24 lg:w-full lg:pb-60 lg:flex-row">
        <div class="slider-text w-full h-fit bg-green-900/30 p-4 rounded-lg mb-4 lg:w-3/5">
            <h1 class="text-white uppercase text-3xl font-medium tracking-widest lg:text-5xl lg:tracking-wider">vishwarekha</h1>
            <p class="text-white  mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div class="company-icon flex flex-col m-auto md:flex-row w-full justify-evenly lg:p-0">
            <div class=" bg-white rounded-lg px-4 py-2 flex justify-center items-center mb-2 md:h-24 md:w-96 mx-2">
                <img class="w-fit" alt="companies-icon-1" src="./images/companies-icon-1.jpg"/>
            </div>
            <div class=" bg-white rounded-lg px-4 py-2 flex justify-center items-center mb-2 md:h-24 md:w-96 mx-2">
                <img class="w-fit" alt="companies-icon-2" src="./images/companies-icon-2.jpg"/>
            </div>
            <div class=" bg-white rounded-lg px-4 py-2 flex justify-center items-center mb-4 md:h-24 md:w-96 mx-2">
                <img class="w-fit" alt="companies-icon-3" src="./images/companies-icon-3.svg"/>
            </div>
        </div>

        <div class="slider-cards w-full relative invisible lg:visible">
            <div class="bg-[url('./images/slider-image-1.jpg')] bg-cover bg-current w-full h-full border border-white rounded-2xl shadow-xl shadow-green-900/50 absolute top-0 right-0 z-10"></div>
            <div class="bg-[url('./images/slider-image-2.jpg')] bg-cover bg-current w-full h-full border border-white rounded-2xl shadow-xl shadow-green-900/50 absolute top-32 right-20 z-10"></div>
            <div class="bg-[url('./images/slider-image-3.jpg')] bg-cover bg-current w-full h-full border border-white rounded-2xl shadow-xl shadow-green-900/50 absolute top-64 right-40 z-20"></div>
        </div>
    </div>
</section>
<!--end of slider section-->

<div class="svg-wrapper">
    <div class="container bg-white shadow shadow-green-900/50">
        <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
            <path d="M0,100 C100,150 350,0 500,50 L500,00 L0,0 Z" style="stroke: none; fill:#0A472E;"></path>
        </svg>
    </div>
</div>

<!--start of companies icon section-->
<section class="main-brand-cards invisible h-0 w-0 p-0 m-0 lg:mt-64 lg:w-full lg:h-48 lg:p-10 lg:visible" id="brands">
    <div class="flex w-4/5 m-auto justify-evenly">
        <div class="border border-green-900 rounded-2xl px-4 py-2 flex justify-center items-center shadow-md shadow-green-900/60 mx-4">
            <img class="w-80 p-100" alt="companies-icon-1" src="./images/companies-icon-1.jpg"/>
        </div>
        <div class="border border-green-900 rounded-2xl px-4 py-2 flex justify-center items-center shadow-md shadow-green-900/60 mx-4">
            <img class="w-80 p-100" alt="companies-icon-2" src="./images/companies-icon-2.jpg"/>
        </div>
        <div class="border border-green-900 rounded-2xl px-4 py-2 flex justify-center items-center shadow-md shadow-green-900/60 mx-4">
            <img class="w-80" alt="companies-icon-3" src="./images/companies-icon-3.svg"/>
        </div>
    </div>
</section>
<!--end of companies icon section-->

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
<!--            <div class="flex justify-around rounded-2xl bg-blue-100 p-2 overflow-x-auto hover:overflow-scroll-y lg:p-10">-->
<!--                <div class="border border-green-900 rounded-xl p-4 bg-white m-2 w-full">-->
<!--                    <img alt="card-image" src="./images/card-image-1.jpg"/>-->
<!--                    <h1 class="text-amber-400 text-lg capitalize font-medium">food supplement</h1>-->
<!--                    <h2 class="text-black capitalize text-lg font-medium">yakinaran tablets</h2>-->
<!--                    <p class="text-xl capitalize font-bold text-green-900 ">LKR 1200.00</p>-->
<!--                </div>-->
<!--                <div class="border border-green-900 rounded-xl p-4 bg-white m-2 w-full">-->
<!--                    <img alt="card-image" src="./images/card-image-1.jpg"/>-->
<!--                    <h1 class="text-amber-400 text-lg capitalize font-medium">food supplement</h1>-->
<!--                    <h2 class="text-black capitalize text-lg font-medium">yakinaran tablets</h2>-->
<!--                    <p class="text-xl capitalize font-bold text-green-900 ">LKR 1200.00</p>-->
<!--                </div>-->
<!--                <div class="border border-green-900 rounded-xl p-4 bg-white m-2 w-full">-->
<!--                    <img alt="card-image" src="./images/card-image-1.jpg"/>-->
<!--                    <h1 class="text-amber-400 text-lg capitalize font-medium">food supplement</h1>-->
<!--                    <h2 class="text-black capitalize text-lg font-medium">yakinaran tablets</h2>-->
<!--                    <p class="text-xl capitalize font-bold text-green-900 ">LKR 1200.00</p>-->
<!--                </div>-->
<!--                <div class="border border-green-900 rounded-xl p-4 bg-white m-2 w-full">-->
<!--                    <img alt="card-image" src="./images/card-image-1.jpg"/>-->
<!--                    <h1 class="text-amber-400 text-lg capitalize font-medium">food supplement</h1>-->
<!--                    <h2 class="text-black capitalize text-lg font-medium">yakinaran tablets</h2>-->
<!--                    <p class="text-xl capitalize font-bold text-green-900 ">LKR 1200.00</p>-->
<!--                </div>-->
<!--                <div class="border border-green-900 rounded-xl p-4 bg-white m-2 w-full flex flex-col justify-center text-center">-->
<!--                    <p class="text-2xl text-amber-400 font-bold capitalize">see more in</p>-->
<!--                    <h1  class="text-3xl text-green-900 font-medium capitalize">vishwarekha foods</h1>-->
<!--                    <img class="w-10 h-10 mx-auto" alt="see-more" src="./images/link-image.png" />-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
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
<!--            <Swiper-->
<!--                    class="flex rounded-lg bg-blue-100 p-2 lg:p-10"-->
<!--                    modules={[Navigation, Pagination, Scrollbar, A11y]}-->
<!--                    slidesPerView={1}-->
<!--                    navigation-->
<!--                    pagination={{ clickable: true }}-->
<!--                    scrollbar={{ draggable: true }}-->
<!--                    on:slideChange={() => console.log('slide change')}-->
<!--                    on:swiper={(e) => console.log(e.detail[0])}-->
<!--            >-->
<!--                <SwiperSlide class="border border-green-900 rounded-lg p-2 m-2 bg-white w-fit">-->
<!--                    <img class="w-fit" alt="card-image" src="./images/card-image-1.jpg"/>-->
<!--                    <h1 class="text-amber-400 text-lg capitalize font-medium">food supplement</h1>-->
<!--                    <h2 class="text-black capitalize text-lg font-medium">yakinaran tablets</h2>-->
<!--                    <p class="text-xl capitalize font-bold text-green-900 ">LKR 1200.00</p>-->
<!--                </SwiperSlide>-->
<!--                <SwiperSlide class="border border-green-900 rounded-xl p-4 bg-white m-2 w-fit">-->
<!--                    <img alt="card-image" src="./images/card-image-1.jpg"/>-->
<!--                    <h1 class="text-amber-400 text-lg capitalize font-medium">food supplement</h1>-->
<!--                    <h2 class="text-black capitalize text-lg font-medium">yakinaran tablets</h2>-->
<!--                    <p class="text-xl capitalize font-bold text-green-900 ">LKR 1200.00</p>-->
<!--                </SwiperSlide>-->
<!--                <SwiperSlide class="border border-green-900 rounded-xl p-4 bg-white m-2 w-fit">-->
<!--                    <img alt="card-image" src="./images/card-image-1.jpg"/>-->
<!--                    <h1 class="text-amber-400 text-lg capitalize font-medium">food supplement</h1>-->
<!--                    <h2 class="text-black capitalize text-lg font-medium">yakinaran tablets</h2>-->
<!--                    <p class="text-xl capitalize font-bold text-green-900 ">LKR 1200.00</p>-->
<!--                </SwiperSlide>-->
<!--                <SwiperSlide class="border border-green-900 rounded-xl p-4 bg-white m-2 w-fit">-->
<!--                    <img alt="card-image" src="./images/card-image-1.jpg"/>-->
<!--                    <h1 class="text-amber-400 text-lg capitalize font-medium">food supplement</h1>-->
<!--                    <h2 class="text-black capitalize text-lg font-medium">yakinaran tablets</h2>-->
<!--                    <p class="text-xl capitalize font-bold text-green-900 ">LKR 1200.00</p>-->
<!--                </SwiperSlide>-->
<!--                <SwiperSlide class="border border-green-900 rounded-xl p-4 bg-white m-2 w-full">-->
<!--                    <p class="text-2xl text-amber-400 font-bold capitalize">see more in</p>-->
<!--                    <h1  class="text-3xl text-green-900 font-medium capitalize">vishwarekha herbal</h1>-->
<!--                    <img class="w-10 h-10 mx-auto" alt="see-more" src="./images/link-image.png" />-->
<!--                </SwiperSlide>-->
<!--            </Swiper>-->
<!--            <div class="flex justify-around rounded-2xl bg-blue-100 p-10">-->
<!--                <div class="border border-green-900 rounded-xl p-4 bg-white m-2 w-full">-->
<!--                    <img alt="card-image" src="./images/card-image-1.jpg"/>-->
<!--                    <h1 class="text-amber-400 text-lg capitalize font-medium">food supplement</h1>-->
<!--                    <h2 class="text-black capitalize text-lg font-medium">yakinaran tablets</h2>-->
<!--                    <p class="text-xl capitalize font-bold text-green-900 ">LKR 1200.00</p>-->
<!--                </div>-->
<!--                <div class="border border-green-900 rounded-xl p-4 bg-white m-2 w-full">-->
<!--                    <img alt="card-image" src="./images/card-image-1.jpg"/>-->
<!--                    <h1 class="text-amber-400 text-lg capitalize font-medium">food supplement</h1>-->
<!--                    <h2 class="text-black capitalize text-lg font-medium">yakinaran tablets</h2>-->
<!--                    <p class="text-xl capitalize font-bold text-green-900 ">LKR 1200.00</p>-->
<!--                </div>-->
<!--                <div class="border border-green-900 rounded-xl p-4 bg-white m-2 w-full">-->
<!--                    <img alt="card-image" src="./images/card-image-1.jpg"/>-->
<!--                    <h1 class="text-amber-400 text-lg capitalize font-medium">food supplement</h1>-->
<!--                    <h2 class="text-black capitalize text-lg font-medium">yakinaran tablets</h2>-->
<!--                    <p class="text-xl capitalize font-bold text-green-900 ">LKR 1200.00</p>-->
<!--                </div>-->
<!--                <div class="border border-green-900 rounded-xl p-4 bg-white m-2 w-full">-->
<!--                    <img alt="card-image" src="./images/card-image-1.jpg"/>-->
<!--                    <h1 class="text-amber-400 text-lg capitalize font-medium">food supplement</h1>-->
<!--                    <h2 class="text-black capitalize text-lg font-medium">yakinaran tablets</h2>-->
<!--                    <p class="text-xl capitalize font-bold text-green-900 ">LKR 1200.00</p>-->
<!--                </div>-->
<!--                <div class="border border-green-900 rounded-xl p-4 bg-white m-2 w-full flex flex-col justify-center text-center">-->
<!--                    <p class="text-2xl text-amber-400 font-bold capitalize">see more in</p>-->
<!--                    <h1  class="text-3xl text-green-900 font-medium capitalize">vishwarekha real life</h1>-->
<!--                    <img class="w-10 h-10 mx-auto" alt="see-more" src="./images/link-image.png" />-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
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
<!--            <div class="flex justify-around rounded-2xl bg-blue-100 p-10">-->
<!--                <div class="border border-green-900 rounded-xl p-4 bg-white m-2 w-full">-->
<!--                    <img alt="card-image" src="./images/card-image-1.jpg"/>-->
<!--                    <h1 class="text-amber-400 text-lg capitalize font-medium">food supplement</h1>-->
<!--                    <h2 class="text-black capitalize text-lg font-medium">yakinaran tablets</h2>-->
<!--                    <p class="text-xl capitalize font-bold text-green-900 ">LKR 1200.00</p>-->
<!--                </div>-->
<!--                <div class="border border-green-900 rounded-xl p-4 bg-white m-2 w-full">-->
<!--                    <img alt="card-image" src="./images/card-image-1.jpg"/>-->
<!--                    <h1 class="text-amber-400 text-lg capitalize font-medium">food supplement</h1>-->
<!--                    <h2 class="text-black capitalize text-lg font-medium">yakinaran tablets</h2>-->
<!--                    <p class="text-xl capitalize font-bold text-green-900 ">LKR 1200.00</p>-->
<!--                </div>-->
<!--                <div class="border border-green-900 rounded-xl p-4 bg-white m-2 w-full">-->
<!--                    <img alt="card-image" src="./images/card-image-1.jpg"/>-->
<!--                    <h1 class="text-amber-400 text-lg capitalize font-medium">food supplement</h1>-->
<!--                    <h2 class="text-black capitalize text-lg font-medium">yakinaran tablets</h2>-->
<!--                    <p class="text-xl capitalize font-bold text-green-900 ">LKR 1200.00</p>-->
<!--                </div>-->
<!--                <div class="border border-green-900 rounded-xl p-4 bg-white m-2 w-full">-->
<!--                    <img alt="card-image" src="./images/card-image-1.jpg"/>-->
<!--                    <h1 class="text-amber-400 text-lg capitalize font-medium">food supplement</h1>-->
<!--                    <h2 class="text-black capitalize text-lg font-medium">yakinaran tablets</h2>-->
<!--                    <p class="text-xl capitalize font-bold text-green-900 ">LKR 1200.00</p>-->
<!--                </div>-->
<!--                <div class="border border-green-900 rounded-xl p-4 bg-white m-2 w-full flex flex-col justify-center text-center">-->
<!--                    <p class="text-2xl text-amber-400 font-bold capitalize">see more in</p>-->
<!--                    <h1  class="text-3xl text-green-900 font-medium capitalize">vishwarekha herbal</h1>-->
<!--                    <img class="w-10 h-10 mx-auto" alt="see-more" src="./images/link-image.png" />-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
    </div>
</section>
<!--end of our companies section-->

<!--start of icons section-->
<!--<section class="w-full h-80 bg-amber-400" id="#about-icons">-->
<!--    <div  class="flex h-80 bg-amber-400 justify-evenly m-auto items-center px-20">-->
<!--        <img class="w-36 h-36 m-10 text-green-900" alt="icon1" src="./images/icon-image-1.svg"/>-->
<!--        <img class="w-36 h-36 m-10 text-green-900" alt="icon2" src="./images/icon-image-2.svg"/>-->
<!--        <img class="w-36 h-36 m-10 text-green-900" alt="icon3" src="./images/icon-image-3.svg"/>-->
<!--        <img class="w-36 h-36 m-10 text-green-900" alt="icon4" src="./images/icon-image-4.svg"/>-->
<!--        <img class="w-36 h-36 m-10 text-green-900" alt="icon5" src="./images/icon-image-5.svg"/>-->
<!--        <img class="w-36 h-36 m-10 text-green-900" alt="icon6" src="./images/icon-image-6.svg"/>-->
<!--    </div>-->
<!--</section>-->

<!--<Swiper-->
<!--        class="flex h-80 bg-amber-400 justify-evenly m-auto items-center px-20 flex items-center justify-evenly lg:hidden"-->
<!--        modules={[Navigation, Pagination, Scrollbar, A11y]}-->
<!--        slidesPerView={2}-->
<!--        navigation-->

<!--        on:slideChange={() => console.log('slide change')}-->
<!--        on:swiper={(e) => console.log(e.detail[0])}-->
<!--&gt;-->
<!--    <SwiperSlide><img class="w-36 h-36 m-10 text-green-900" alt="icon1" src="./images/icon-image-1.svg"/></SwiperSlide>-->
<!--    <SwiperSlide><img class="w-36 h-36 m-10 text-green-900" alt="icon2" src="./images/icon-image-2.svg"/></SwiperSlide>-->
<!--    <SwiperSlide><img class="w-36 h-36 m-10 text-green-900" alt="icon3" src="./images/icon-image-3.svg"/></SwiperSlide>-->
<!--    <SwiperSlide><img class="w-36 h-36 m-10 text-green-900" alt="icon4" src="./images/icon-image-4.svg"/></SwiperSlide>-->
<!--    <SwiperSlide><img class="w-36 h-36 m-10 text-green-900" alt="icon5" src="./images/icon-image-5.svg"/></SwiperSlide>-->
<!--    <SwiperSlide><img class="w-36 h-36 m-10 text-green-900" alt="icon6" src="./images/icon-image-6.svg"/></SwiperSlide>-->
<!--</Swiper>-->
<!--end of icons section-->

<!--start of about us-->
<section id="about-us">
    <div class=" w-full p-2 md:w-4/5 m-auto my-5 md:py-10 ">
        <h1 class="text-4xl font-light capitalize text-center text-green-900 mb-5 md:font-bold">about us</h1>
        <div class="relative">
            <div class="bg-[url('./images/about-cover.jpg')] bg-cover bg-center w-full h-96 rounded-2xl p-2 mb-4">
                <h1 class="absolute text-white text-4xl top-10 right-10">Vishwarekha Pvt Ltd.</h1>
            </div>
        </div>
        <div>
            <div class="flex flex-col lg:flex-row">
                <div class="bg-green-800 text-white rounded-md md:m-2 md:p-4 mb-2 md:mb-0">
                    <div class="bg-[url('./images/slider-image-1.jpg')] bg-cover bg-center w-full h-96 rounded-lg">
                    </div>
                    <div class="mt-2 p-2 md:p-0">
                        <h1 class="text-2xl capitalize mb-2">Who we are?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                </div>
                <div class="bg-green-800 text-white rounded-md md:m-2 md:p-4 mb-2 md:mb-0">
                    <div class="bg-[url('./images/slider-image-1.jpg')] bg-cover bg-center w-full h-96 rounded-lg">
                    </div>
                    <div class="mt-2 p-2 md:p-0">
                        <h1 class="text-2xl capitalize mb-2">What we do?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col lg:flex-row">
                <div class="bg-green-800 text-white rounded-md md:m-2 md:p-4 mb-2 md:mb-0">
                    <div class="bg-[url('./images/slider-image-1.jpg')] bg-cover bg-center w-full h-96 rounded-lg">
                    </div>
                    <div class="mt-2 p-2 md:p-0">
                        <h1 class="text-2xl capitalize mb-2">our vission</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                </div>
                <div class="bg-green-800 text-white rounded-md md:m-2 md:p-4 mb-2 md:mb-0">
                    <div class="bg-[url('./images/slider-image-1.jpg')] bg-cover bg-center w-full h-96 rounded-lg">
                    </div>
                    <div class="mt-2 p-2 md:p-0">
                        <h1 class="text-2xl capitalize mb-2">our mission</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--end of about us-->

<!--start of contact us-->
<section class="contact-us w-full bg-green-900 text-white py-1" id="contact-us">
    <div class="w-full m-auto p-4 md:w-4/5">
        <h1 class="text-4xl font-light capitalize text-center mb-5 md:font-bold">contact us</h1>
        <div class="w-full">
            <div class="mb-5">
                <h1 class="text-lg text-amber-400">News Letter</h1>
                <p><span class="text-lg text-amber-400">Subscribe</span> to us and never loose a new product launch!</p>
                <div class="mt-2 flex flex-col w-full lg:flex-row">
                    <input class="rounded-md m-0 mb-2 p-2 w-full h-10 placeholder:italic placeholder:text-slate-400 text-md focus:outline-none text-gray-600 italic lg:w-2/5 lg:mb-0 lg:mr-4" placeholder="Email Address" />
                    <button class="w-36 rounded-md bg-amber-400 text-green-900 py-2 px-4 border border-amber-400">Sign Up</button>
                </div>
            </div>
            <div>
                <div class="flex flex-col mb-5 md:flex-row">
                    <div class="w-full">
                        <h3 class="text-lg text-amber-400">Location</h3>
                        <p>Samadhi Arana, Agalawaththa Rd, Mathugama, <br/>Sri Lanka.</p>
                    </div>
                    <div class="w-full md:pl-24">
                        <h3 class="text-lg text-amber-400">Follow Us</h3>
                        <div class="flex">
                            <img class="w-10 h-10 mr-5 cursor-pointer" alt="twitter-icon" src="./images/icon-twitter.png"/>
                            <img class="w-10 h-10 mr-5 cursor-pointer" alt="facebook-icon" src="./images/icon-facebook.png"/>
                            <img class="w-10 h-10 mr-5 cursor-pointer" alt="linkedin-icon" src="./images/icon-linkedin.png"/>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row">
                    <div class="w-full">
                        <h3 class="text-lg text-amber-400">Contact Us</h3>
                        <p>+94 75 500 38 28</p>
                    </div>
                    <div class="w-full md:pl-24">
                        <h3 class="text-lg text-amber-400">Email Us</h3>
                        <p>ayubowan@vishwarekha.com</p>
                    </div>
                </div>
            </div>
        </div>
        <hr class="w-full mt-2 pt-2 md:mt-5 md:pt-5"/>
        <div>
            <div class="flex mb-5 flex-col-reverse md:flex-row">
                <div class="w-full">
                    <h3 class="text-lg text-amber-400">Information</h3>
                    <a>Terms & Conditions</a>
                    <br />
                    <a>Privacy Policy</a>
                </div>
                <div class="w-full md:pl-24">
                    <img class="w-60 mb-2 sm:w-60 md:mb-0 md:w-96" alt="vishwarekha-logo"  src="./images/vishwarekha-logo.svg"/>
                </div>
            </div>
            <div class="flex flex-col md:flex-row">
                <div class="w-full">
                    <h3 class="text-lg text-amber-400">Vishwarekha</h3>
                    <a>Vishwarekha Herb</a>
                    <br />
                    <a>Vishwarekha Food</a>
                    <br />
                    <a>Vishwarekha Real Life</a>
                </div>
                <div class="w-full mt-4 md:pl-24 md:m-0">
                    <p class="text-sm text-gray-200">Monday - Friday: 8.00am - 5.30pm</p>
                    <p class="text-sm text-gray-200">Saturday - Sunday: 9.00am - 2.00pm</p>
                </div>
            </div>
        </div>
        <hr class="w-full mt-2 md:mt-5 pt-2 md: pt-5" />
        <div class="w-full flex flex-col md:flex-row">
            <p class="w-full text-sm">Copyright @ Vishwarekha(pvt) Ltd. All Rights Reserved.</p>
            <p class="w-full text-sm md:pl-24">Developed by <span class="text-amber-400">Leafy Code (Pvt) Ltd</span>.</p>
        </div>
    </div>
</section>
<!--end of contact us-->