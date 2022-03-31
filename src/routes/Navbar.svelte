<script>
  import {onMount} from "svelte";

  // Show mobile icon and display menu
  let showMobileMenu = false;

  // List of navigation items
  const navItems = [
    {label: "Home", href: "#home"},
    {label: "Our Companies", href: "#companies"},
    {label: "About Us", href: "#about-us"},
    {label: "Contact Us", href: "#contact-us"}
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

    let navbar = document.getElementById("nav");

    window.onscroll = function () {
      "use strict";
      if (document.body.scrollTop >= 150 || document.documentElement.scrollTop) {
        navbar.classList.add("nav-colored");
        navbar.classList.remove("nav-transparent");
      } else {
        navbar.classList.add("nav-transparent");
        navbar.classList.remove("nav-colored");
      }
    };

  });

</script>

<style>


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
    top: 10vh;
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

  .navbar-list li {
    list-style-type: none;
    position: relative;
  }

  .navbar-list.mobile a {
    font-size: 25px;
    text-decoration: none;
    display: flex;
    height: 45px;
    align-items: center;
    padding: 0 10px;
  }

  .navbar-list.mobile a:hover {
    color: #ffb300;
  }

  .navbar-list li:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
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
    }
  }

  .nav-colored {
    background-color: rgb(20 83 45);
    position: sticky;
    top: 0 !important;
    z-index: 1000;
  }

  .nav-transparent {
    background-color: transparent;
    position: fixed;
    top: 20px;
    z-index: 1000;
  }

  @media (max-width: 1024px) {
    nav {
      position: sticky;
      top: 0 !important;
    }
  }
</style>

<!--start of navbar-->
<nav
        class="nav-transparent h-16 lg:h-20 nav-default absolute w-full bg-green-900 flex items-center justify-between mt-0"
        id="nav">
  <a class="w-fit p-4 ml-0 lg:w-3/5 lg:ml-16 lg:p-0" href="/">
    <img alt="vishwarekha-logo" class="w-64" src="./images/vishwarekha-logo.svg"/>
  </a>
  <div
          class="bg-transparent w-full justify-end lg:bg-green-900 lg:max-w-screen-lg px-10 m-auto box-border flex items-center h-fit rounded-tl-full rounded-bl-full lg:px-20">
    <div class={`mobile-icon${showMobileMenu ? ' active' : ''}`} on:click={handleMobileIconClick}>
      <div class="middle-line"></div>
    </div>
    <ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
      {#each navItems as item}
        <li class="list-none relative">
          <a class="text-white font-medium text-xl hover:text-amber-400" href={item.href}>{item.label}</a>
        </li>
      {/each}
    </ul>
  </div>
</nav>
<!--end of navbar-->