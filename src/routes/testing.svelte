<Swiper-->
    class="flex rounded-lg bg-blue-100 p-2 lg:p-10"
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    on:slideChange={() => console.log('slide change')}
    on:swiper={(e) => console.log(e.detail[0])}
>
    <SwiperSlide class="border border-green-900 rounded-lg p-2 m-2 bg-white w-fit">
        <img class="w-fit" alt="card-image" src="./images/card-image-1.jpg"/>
        <h1 class="text-amber-400 text-lg capitalize font-medium">food supplement</h1>
        <h2 class="text-black capitalize text-lg font-medium">yakinaran tablets</h2>
        <p class="text-xl capitalize font-bold text-green-900 ">LKR 1200.00</p>
    </SwiperSlide>
    <SwiperSlide class="border border-green-900 rounded-xl p-4 bg-white m-2 w-fit">
        <img alt="card-image" src="./images/card-image-1.jpg"/>
        <h1 class="text-amber-400 text-lg capitalize font-medium">food supplement</h1>
        <h2 class="text-black capitalize text-lg font-medium">yakinaran tablets</h2>
        <p class="text-xl capitalize font-bold text-green-900 ">LKR 1200.00</p>
    </SwiperSlide>
    <SwiperSlide class="border border-green-900 rounded-xl p-4 bg-white m-2 w-fit">
        <img alt="card-image" src="./images/card-image-1.jpg"/>
        <h1 class="text-amber-400 text-lg capitalize font-medium">food supplement</h1>
        <h2 class="text-black capitalize text-lg font-medium">yakinaran tablets</h2>
        <p class="text-xl capitalize font-bold text-green-900 ">LKR 1200.00</p>
    </SwiperSlide>
    <SwiperSlide class="border border-green-900 rounded-xl p-4 bg-white m-2 w-fit">
        <img alt="card-image" src="./images/card-image-1.jpg"/>
        <h1 class="text-amber-400 text-lg capitalize font-medium">food supplement</h1>
        <h2 class="text-black capitalize text-lg font-medium">yakinaran tablets</h2>
        <p class="text-xl capitalize font-bold text-green-900 ">LKR 1200.00</p>
    </SwiperSlide>
    <SwiperSlide class="border border-green-900 rounded-xl p-4 bg-white m-2 w-full">
        <p class="text-2xl text-amber-400 font-bold capitalize">see more in</p>
        <h1  class="text-3xl text-green-900 font-medium capitalize">vishwarekha herbal</h1>
        <img class="w-10 h-10 mx-auto" alt="see-more" src="./images/link-image.png" />
    </SwiperSlide>
    </Swiper>
    <div class="flex justify-around rounded-2xl bg-blue-100 p-10">
    <div class="border border-green-900 rounded-xl p-4 bg-white m-2 w-full">
        <img alt="card-image" src="./images/card-image-1.jpg"/>
        <h1 class="text-amber-400 text-lg capitalize font-medium">food supplement</h1>
        <h2 class="text-black capitalize text-lg font-medium">yakinaran tablets</h2>
        <p class="text-xl capitalize font-bold text-green-900 ">LKR 1200.00</p>
    </div>
    <div class="border border-green-900 rounded-xl p-4 bg-white m-2 w-full">
        <img alt="card-image" src="./images/card-image-1.jpg"/>
        <h1 class="text-amber-400 text-lg capitalize font-medium">food supplement</h1>
        <h2 class="text-black capitalize text-lg font-medium">yakinaran tablets</h2>
        <p class="text-xl capitalize font-bold text-green-900 ">LKR 1200.00</p>
    </div>
    <div class="border border-green-900 rounded-xl p-4 bg-white m-2 w-full">
        <img alt="card-image" src="./images/card-image-1.jpg"/>
        <h1 class="text-amber-400 text-lg capitalize font-medium">food supplement</h1>
        <h2 class="text-black capitalize text-lg font-medium">yakinaran tablets</h2>
        <p class="text-xl capitalize font-bold text-green-900 ">LKR 1200.00</p>
    </div>
    </div>
    <div class="border border-green-900 rounded-xl p-4 bg-white m-2 w-full">
        <img alt="card-image" src="./images/card-image-1.jpg"/>
        <h1 class="text-amber-400 text-lg capitalize font-medium">food supplement</h1>
        <h2 class="text-black capitalize text-lg font-medium">yakinaran tablets</h2>
        <p class="text-xl capitalize font-bold text-green-900 ">LKR 1200.00</p>
    </div>
    <div class="border border-green-900 rounded-xl p-4 bg-white m-2 w-full flex flex-col justify-center text-center">
        <p class="text-2xl text-amber-400 font-bold capitalize">see more in</p>
        <h1  class="text-3xl text-green-900 font-medium capitalize">vishwarekha real life</h1>
        <img class="w-10 h-10 mx-auto" alt="see-more" src="./images/link-image.png" />
    </div>
</Swiper-->