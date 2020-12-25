<template>
  <nav class="navbar" :class="{ active }">
    <div class="inner">
      <a class="linked logo" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 285">
          <g transform="translate(-64.000000, -58.000000)">
            <g transform="translate(64.000000, 24.000000)">
              <path d="M117.130767,39.1629993 C128.770147,32.2790002 143.229853,32.2790002 154.869233,39.1629993 L253.778324,97.6618279 C265.07147,104.34105 272,116.493859 272,129.623085 L272,223.376915 C272,236.506141 265.07147,248.65895 253.778324,255.338172 L154.869233,313.837001 C143.229853,320.721 128.770147,320.721 117.130767,313.837001 L18.2216764,255.338172 C6.92853043,248.65895 0,236.506141 0,223.376915 L0,129.623085 C0,116.493859 6.92853043,104.34105 18.2216764,97.6618279 L117.130767,39.1629993 Z M243.567944,222.888672 L243.567944,210.376905 C243.567944,209.185275 242.612015,208.219269 241.432817,208.219269 C241.049524,208.219269 240.673299,208.323536 240.343629,208.521125 L154.350686,260.061503 C152.081296,261.421675 150.689895,263.890394 150.689895,266.556732 L150.689895,278.96861 C150.689895,280.160239 151.645825,281.126246 152.825023,281.126246 C153.207699,281.126246 153.583342,281.022314 153.912648,280.825326 L239.901684,229.387176 C242.17417,228.027788 243.567944,225.557301 243.567944,222.888672 Z M202.815331,206.971659 L202.815331,194.307377 C202.815331,193.100937 201.862786,192.122924 200.687762,192.122924 C200.305413,192.122924 199.930129,192.228715 199.601383,192.42917 L154.33406,220.031194 C152.07478,221.408804 150.689895,223.907003 150.689895,226.604919 L150.689895,239.174351 C150.689895,240.380791 151.64244,241.358804 152.817464,241.358804 C153.198723,241.358804 153.572977,241.253615 153.90108,241.05424 L199.161494,213.551272 C201.426249,212.17507 202.815331,209.673694 202.815331,206.971659 Z M69.8376405,195.94766 L38.3616758,177.67005 C35.3718241,175.933889 31.524116,176.922091 29.7675793,179.877261 C29.2011107,180.830278 28.902439,181.91554 28.902439,183.020858 L28.902439,217.375332 C28.902439,223.976426 32.4388686,230.083979 38.1972027,233.427755 L69.6731674,251.705365 C72.6630191,253.441526 76.5107272,252.453324 78.2672639,249.498155 C78.8337325,248.545137 79.1324042,247.459875 79.1324042,246.354557 L79.1324042,212.000083 C79.1324042,205.398989 75.5959746,199.291436 69.8376405,195.94766 Z"></path>
            </g>
          </g>
        </svg>
      </a>
      <a class="linked sm-show" href="#"> Home </a>
      <a class="linked" href="#"> New </a>
      <a class="linked" href="#">
        <span class="lg-hide"> Docs </span>
        <span class="lg-show"> Documentation </span>
      </a>
      <a class="linked" href="#"> Support </a>
      <a class="linked twitter" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
      </a>
    </div>
  </nav>
</template>
<script>
  let onScroll = null
  export default {
    name: "app-header__home",
    data: () => ({
      active: false
    }),
    created() {
      window.addEventListener("scroll", this.onScroll = () => this.active = window.pageYOffset > 50)
    },
    beforeDestroy() {
      window.removeEventListener("scroll", onScroll)
    }
  }
</script>
<style lang="scss" scoped>
  @import "~@/scss/header";

  .navbar {
    @include header;

    .sm-show {
      display: none;

      @media (min-width:576px) {
        display: inline-block;
      }
    }

    .lg-show {
      display: none;
    }

    .bg-hide {
      display: inline-block;
    }

    @media (min-width: 992px) {
      .lg-hide {
        display: none;
      }

      .lg-show {
        display: inline-block;
      }
    }

    @media (max-width: 640px) {
      padding: 15px 0;
    }

    transition: all .8s cubic-bezier(.2, .8, .2, 1);

    &.active {
      background-color: rgb(44, 177, 190);

      @media (max-width: 640px) {
        padding: 10px 0;
      }

      backdrop-filter: blur(10px) saturate(3);

      @supports (backdrop-filter: none) or (-webkit-backdrop-filter: none) {
        background-color: rgba(44, 177, 190, 0.9);
        -webkit-backdrop-filter: blur(10px) saturate(3);
        backdrop-filter: blur(10px) saturate(3)
      }
    }

    .inner {
      .linked {
        border-radius: 10px;
        font-weight: 500;
        text-decoration: none;
        text-transform: uppercase;
        transition: all .8s cubic-bezier(0.2, 0.8, 0.2, 1);
        color: rgb(145, 145, 150);

        &.twitter {
          color: rgb(93, 168, 220);
        }

        &.logo {
          color: #2cb1be;
        }

        padding: 8px 10px;

        margin: {
          left: 2.5px;
          right: 2.5px;
        }

        @media (min-width: 375px) {
          padding: 8px 15px;
        }

        @media (min-width: 414px) {
          padding: 8px 20px;
        }

        @media (min-width: 768px) {
          margin: 0 20px;
        }

        @media (min-width: 800px) {
          margin: 0 35px
        }

        @media (max-width: 640px) {
          font-size: 14px;
        }

        &:hover {
          opacity: .7;
        }

        svg {
          width: 26px;
          height: 26px;
          fill: currentColor;
        }
      }
    }

    &.active .inner {

      .linked {
        color: #fff;
      }
    }
  }
</style>