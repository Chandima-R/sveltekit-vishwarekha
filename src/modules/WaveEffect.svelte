<style>
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
</style>

<!--start of wave effect-->
<div class="svg-wrapper">
    <div class="container bg-white shadow shadow-green-900/50">
        <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
            <path d="M0,100 C100,150 350,0 500,50 L500,00 L0,0 Z" style="stroke: none; fill:#14532d;"></path>
        </svg>
    </div>
</div>
<!--end of wave effect-->