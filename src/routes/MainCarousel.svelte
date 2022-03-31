<style>
  .main-carousel{
    height: 700px;
  }
  @media (min-width: 1024px) {
    .company-icon {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .slider-text {
      margin-top: 100px;
    }
  }

  @media (min-width: 1024px) and (max-width: 1315px) {
    .slider-text {
      display: none;
    }
  }

  .slider-cards div {
    width: 600px;
    height: 400px;
  }

  .slider-sub-image{
    cursor: pointer;
    transition: transform 200ms;
    transition: all 0.5s ease-in-out;
  }

  .slider-sub-image:hover{
    transform: translateY(-15px);
    z-index: 100;
  }
</style>

<!--start of slider section-->
<section class="main-carousel bg-[url('/images/main-carousel/slider-image-2.jpg')] bg-cover flex flex-col m-auto" id="home">
  <div
          class="flex flex-col h-fits w-full pt-30 px-2 md:py-14 md:pt-36 lg:pt-44 lg:px-24 lg:w-full lg:pb-60 lg:flex-row">
    <div class="slider-text w-full h-fit bg-green-900/30 p-4 rounded-lg mb-4 lg:w-3/5">
      <h1 class="text-white uppercase text-3xl font-medium tracking-widest lg:text-5xl lg:tracking-wider">
        vishwarekha</h1>
      <p class="text-white  mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>

    <div class="company-icon flex flex-col m-auto md:flex-row w-full justify-evenly lg:p-0">
      <div class=" bg-white rounded-lg px-4 py-2 flex justify-center items-center mb-2 md:h-24 md:w-96 mx-2">
        <img alt="companies-icon-1" class="w-fit" src="/images/companies-icon-1.jpg" />
      </div>
      <div class=" bg-white rounded-lg px-4 py-2 flex justify-center items-center mb-2 md:h-24 md:w-96 mx-2">
        <img alt="companies-icon-2" class="w-fit" src="/images/companies-icon-2.jpg" />
      </div>
      <div class=" bg-white rounded-lg px-4 py-2 flex justify-center items-center mb-4 md:h-24 md:w-96 mx-2">
        <img alt="companies-icon-3" class="w-fit" src="/images/companies-icon-3.svg" />
      </div>
    </div>

    <div class="slider-cards w-full relative invisible lg:visible">
      <div
              class="slider-sub-image bg-[url('/images/main-carousel/slider-image-2.jpg')] bg-cover bg-current w-full h-full border border-white rounded-lg shadow-xl shadow-green-900/50 absolute top-0 right-0 z-10"></div>
      <div
              class="slider-sub-image bg-[url('/images/main-carousel/slider-image-1.jpg')] bg-cover bg-current w-full h-full border border-white rounded-lg shadow-xl shadow-green-900/50 absolute top-32 right-20 z-10"></div>
      <div
              class="slider-sub-image bg-[url('/images/main-carousel/slider-image-5.jpg')] bg-cover bg-current w-full h-full border border-white rounded-lg shadow-xl shadow-green-900/50 absolute top-64 right-40 z-20"></div>
    </div>
  </div>
</section>
<!--end of slider section-->