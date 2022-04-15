<script>
    import Carousel from "./Carousel.svelte";

    let icons_section = [
        {label: 'icon1', image: "/images/icon-slider/icon-image-1.svg"},
        {label: 'icon2', image: "/images/icon-slider/icon-image-2.svg"},
        {label: 'icon3', image: "/images/icon-slider/icon-image-3.svg"},
        {label: 'icon4', image: "/images/icon-slider/icon-image-4.svg"},
        {label: 'icon5', image: "/images/icon-slider/icon-image-5.svg"},
        {label: 'icon6', image: "/images/icon-slider/icon-image-6.svg"},
    ]
</script>

<!--start of icons section-->
<section class="w-full h-64 bg-amber-400 p-2 py-10 md:p-10" id="#about-icons">
    <Carousel autoplay="2000">
        {#each icons_section as icon, index (index)}
            <img class="w-44 h-44 m-auto" alt="card" src={icon.image}/>
        {/each}
    </Carousel>
</section>
<!--end of icons section-->