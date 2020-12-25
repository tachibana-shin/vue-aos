<template>
  <div class="wrap">
    <app-header__Home />
    <div class="welcome">
      <div class="app">
        <img class="logo" src="https://getsileo.app/img/icon.png" alt="" v-aos:fade-up.once="600" />
        <h1 class="title" v-aos:fade-up.once="700"> Sileo </h1>
        <h2 class="subtitle" v-aos:fade-up.once="800"> Unpack the full potential
          of your iDevice. </h2>
      </div>
      <picture>
        <source srcset="https://getsileo.app/img/comp-dark.png" media="(prefers-color-scheme: dark)" />
        <source srcset="https://getsileo.app/img/comp.png" media="(prefers-color-scheme: light)" />
        <img class="preview" src="https://getsileo.app/img/comp.png" v-aos:zoom-in-up.once="{ dur: 800, delay: 100 }" />
      </picture>
      <div class="install">
        <span>
          Install <strong>Sileo</strong> from the Electra Repo.
        </span>
      </div>
    </div>
    <div class="section about">
      <div class="inner">
        <h2 class="title"> About </h2>
        <p> Our goal is to empower people who want to bring true usability to their devices, people who aren’t afraid to express themselves through technology. </p>
        <p> Sileo is a fast, beautiful, powerful and efficient APT Package Manager designed for jailbroken devices running iOS 11 and up with focus on being up to date and most importantly reliable. </p>
      </div>
      <div class="footer">
        <picture>
          <source srcset="https://getsileo.app/img/iphone-dark.png" media="(prefers-color-scheme: dark)" />
          <img src="https://getsileo.app/img/iphone.png" v-aos:fade-up="{ anchorPlacement: 'top-bottom', dur: 600, offset: 1 }">
        </picture>
      </div>
    </div>
    <div class="section bg-0">
      <div class="inner mb-0">
        <h2 class="title"> Team </h2>
        <div class="team">
          <div class="item" v-aos:zoom-out="600" v-for="(item, index) in team" :key="index">
            <a :href="item.url">
              <img class="avatar" :src="item.avatar">
            </a>
            <h3 class="name"> {{ item.name }} </h3>
            <p class="type"> {{ item.type }} </p>
            <a :href="item.url" class="linked">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="inner mb-0">
        <h2 class="title font-weight-600"> Support </h2>
      </div>
    </div>
    <div class="collapse FaQ">
      <div class="button" :class="{ active: collapseState }" @click="collapseState = !collapseState"> Frequently Asked Questions </div>
      <div class="collapse--inner" :style="{ height: collapseState ? `${$refs.sectionInnerCollapse.scrollHeight}px` : 0 }">
        <div class="section" ref="sectionInnerCollapse">
          <div class="inner">
            <template v-for="item in frequently">
              <component :is="item.tagName" :class="{ 'title default': item.tagName == 'H3' }" v-html="item.html" v-if="!!item" />
              <br v-else />
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="section need">
      <div class="inner">
        <h2 class="title"> Need to get in touch? </h2>
        <div class="need-for-you">
          <a href="https://discord.gg/YRD4mSA" class="item" v-aos:zoom-out="500">
            <div class="item--inner">
              <svg class="item--inner__logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z" /></svg>
              <p class="name"> Discord </p>
              <p class="des"> Join the server </p>
            </div>
          </a>
          <a href="mailto://getsileoapp@gmail.com" class="item" v-aos:zoom-out="500">
            <div class="item--inner">
              <svg class="item--inner__logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" /></svg>
              <p class="name"> Email </p>
              <p class="des"> Send us an email </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import team from "../data/team"
  import frequently from "../data/frequently"
  import AppHeader__Home from "@/components/AppHeader__Home"

  export default {
    name: "home",
    components: { AppHeader__Home },
    data: () => ({
      collapseState: false,
      team,
      frequently
    })
  }
</script>
<style lang="scss" scoped>
  .wrap {
    text-align: center;

    .bg-0 {
      background-color: #00000000 !important;
    }

    .mb-0 {
      margin-bottom: 0 !important;
    }

    .font-weight-600 {
      font-weight: 600 !important;
    }

    .welcome {
      padding: 2rem 1rem;
      padding-top: 30px;

      @media (max-width: 420px) {
        padding-top: 0
      }

      @media (prefers-color-scheme: dark) {
        color: #fff;
      }

      .app {
        .logo {
          width: 120px;
          display: block;
          margin: 100px auto 30px auto;

          @media (max-width: 420px) {
            width: 60px;
            margin-top: 60px;
            margin-bottom: 25px;
          }
        }

        .title {
          font-size: 100px;
          font-weight: 700;
          margin-bottom: 15px;
          line-height: 1.2;
          color: #000;

          @media (max-width: 420px) {
            font-size: 60px;
          }

          @media (prefers-color-scheme: dark) {
            color: #fff;
          }
        }

        .subtitle {
          color: rgb(163, 163, 163);
          font-size: 40px;
          font-weight: 400;
          letter-spacing: 1px;
          margin-top: 0;
          margin-bottom: .5rem;

          @media (max-width: 420px) {
            font-size: 23px;
          }
        }
      }

      .preview {
        width: 80%;
        max-width: 1000px;
        height: auto;
        margin: 50px;
        margin-bottom: 70px;

        @media (max-width: 420px) {
          width: 85%;
          margin: 40px 10px;
        }
      }

      .install {
        span {
          margin-bottom: 1rem;
          font-size: 25px;

          @media (max-width: 420px) {
            font-size: 1rem;
          }

          line-height: 1.5;
          color: rgb(136, 136, 136);
          font-weight: 400;
          margin: 0 20px 10px 20px;
          display: block;

          strong {
            color: rgb(51, 51, 51);

            @media (prefers-color-scheme: dark) {
              color: #fff;
            }
          }
        }
      }
    }

    .section {
      padding: 60px;
      background-color: rgb(250, 250, 250);

      @media (prefers-color-scheme: dark) {
        background-color: rgb(17, 17, 17);
      }

      @media (max-width: 420px) {
        padding: 40px 20px
      }

      .inner {
        margin-bottom: 40px;
        max-width: 820px;
        padding-bottom: 1px;

        .title {
          font-weight: 700;
          margin-bottom: 25px;
          color: rgb(17, 17, 17);

          @media (prefers-color-scheme: dark) {
            color: #fff;
          }

          font-size: 60px;
          letter-spacing: 1px;
          font-weight: 700;
          line-height: 1.75;

          @media (max-width: 420px) {
            font-size: 35px;
            margin-bottom: 5px;
          }

          &.default {
            margin-bottom: .5rem;
            font-size: 25px;
            font-weight: 600;
            text-align: left;
          }
        }

        p {
          margin-bottom: 1rem;
          font-size: 25px;
          line-height: 1.5;
          margin-top: 20px;
          color: rgb(119, 119, 119);

          @media (max-width: 420px) {
            font-size: 16px;
          }
        }

        .team {
          margin-bottom: 10px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;

          .item {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 20px;
            margin-bottom: 20px;
            margin-top: 20px;
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            min-width: 240px;

            @media (prefers-color-scheme: dark) {
              color: #fff;
            }

            .avatar {
              max-width: 130px;
              margin-bottom: 15px;
              transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
              border-radius: 50%;

              &:hover {
                transform: scale(1.1);
                transform: translateY(-5px);
              }

              &:active {
                transform: scale(0.95);
                opacity: 0.7;
              }

              @media (max-width: 420px) {
                margin-bottom: 10px;
                max-width: 95px;
              }
            }

            .name {
              margin: 0;
              padding: 0;
              font-weight: 600;
              color: #000;
              font-size: 1.75rem;

              @media (prefers-color-scheme: dark) {
                color: #fff;
              }

              @media (max-width: 420px) {
                font-size: 20px
              }
            }

            .type {
              font-size: 22px;
              line-height: 1.5;
              margin-bottom: 1rem;
              color: rgb(119, 119, 119);

              @media (prefers-color-scheme: dark) {
                font-size: 20px;
                margin-top: 0
              }

              @media (max-width: 420px) {
                font-size: 16px;
              }
            }

            .linked {
              font-size: 20px;
              color: rgb(44, 177, 190);
              text-decoration: none;
              transition: all .8s cubic-bezier(0.2, 0.8, 0.2, 1);

              svg {
                width: 1em;
                height: 1em;
                fill: currentColor;
              }

              &:hover {
                opacity: 0.7
              }

              &:active {
                opacity: 0.5
              }
            }
          }
        }
      }

      .footer {
        img {
          width: 70%;
          max-width: 1000px;
          margin-bottom: 70px;

          @media (max-width: 420px) {
            width: 85%;
            margin-bottom: 40px;
          }
        }
      }

      &.need {
        .inner {
          .title {
            letter-spacing: 0px;
            color: #808080;

            @media (prefers-color-scheme: dark) {
              color: #fff;
            }

            @media (max-width: 420px) {
              font-size: 32px;
            }
          }

          .need-for-you {
            display: flex;
            flex-wrap: wrap;
            margin-top: 50px;
            justify-content: center;

            @media (max-width: 540px) {
              margin-top: 0;
              max-width: 400px;
            }

            .item {
              position: relative;
              margin: 30px;
              transition: all .8s cubic-bezier(0.2, 0.8, 0.2, 1);
              color: rgb(44, 177, 190);
              text-decoration: none;
              margin-left: auto;
              margin-right: auto;

              @media (max-width: 540px) {
                margin-top: 20px;
                margin-bottom: 10px;
              }

              &--inner {
                min-width: 240px;
                min-height: 180px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border-radius: 10px;
                background-color: white;
                padding: 40px;
                font-weight: 500;
                text-align: center;
                transition: 250ms ease-out transform, 250ms ease-out opacity;

                &:hover {
                  opacity: 0.7
                }

                &:active {
                  opacity: 0.5;
                  transform: scale(0.95)
                }

                @media (max-width: 540px) {
                  min-height: auto
                }

                @media (prefers-color-scheme: dark) {
                  background-color: rgb(25, 25, 25)
                }

                &__logo {
                  font-size: 50px;
                  margin-bottom: 20px;
                  width: 1em;
                  height: 1em;
                  fill: currentColor;
                }

                .name,
                .des {
                  margin: 0;
                  padding: 0;
                }

                .name {
                  color: #333;
                  margin-bottom: 0;

                  @media (prefers-color-scheme: dark) {
                    color: #fff;
                  }
                }

                .des {
                  color: #a3a3a3;
                  margin: 0;
                  font-weight: 400;
                }
              }
            }
          }
        }
      }
    }

    .FaQ {
      .button {
        display: block;
        font-weight: bold;
        font-size: 2.5rem;
        text-align: center;
        padding: 1rem 3rem;
        color: #000000;
        background: #FAFAFA;
        cursor: pointer;
        border-radius: 7px;
        transition: all 0.25s ease-out;
        margin-bottom: 0;
        border-radius: 7px;

        @media (prefers-color-scheme: dark) {
          background-color: #111;
          color: #fff;
        }

        @media (max-width: 450px) {
          font-size: 1.5rem
        }

        &:hover {
          color: #323232;

          @media (prefers-color-scheme: dark) {
            color: #a3a3a3
          }
        }

        &:before {
          content: ' ';
          display: inline-block;
          border-top: 8.5px solid transparent;
          border-bottom: 8.5px solid transparent;
          border-left: 8.5px solid currentColor;
          vertical-align: middle;
          margin-right: 1.2rem;
          margin-left: -1.2rem;
          transform: translateY(-2px);
          transition: transform .5s ease-out;
        }

        &.active {
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;

          &:before {
            transform: rotate(90deg) translateX(-3px);
          }
        }
      }

      .collapse--inner {
        height: 0px;
        overflow: hidden;
        transition: height .8s ease;

        @media (prefers-color-scheme: dark) {
          background-color: #111111;
          color: #fafafa
        }

        .section {
          .inner {
            text-align: left;

            .title {
              margin-top: 1em;

              &:first-child {
                margin-top: 0;
              }
            }

            &>>>a {
              text-decoration: none;
              transition: all .8s cubic-bezier(0.2, 0.8, 0.2, 1);

              &,
              &:hover {
                color: rgb(44, 177, 190);

                &:active {
                  opacity: 0.7;
                }
              }
            }
          }
        }
      }
    }
  }
</style>