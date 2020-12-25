<template>
  <footer class="footer">
    <nav class="section navbar">
      <a href="#" class="linked"> Home </a>
      <a href="#" class="linked"> New </a>
      <a href="#" class="linked"> Documentation </a>
    </nav>
    <div class="section copyright">
      <h5 class="name"> &copy; Sileo Team </h5>
      <p class="credits">
        Designed & Developed by <a href="#"> Alessandro Chiarlitti</a> . Updated by <a href="#"> 23 Aaron.</a>
      </p>
    </div>
  </footer>
</template>
<script>
  export default {
    name: "app-footer"
  }
</script>
<style lang="scss" scoped>
  .footer {
    background: #fff;
    text-align: center;

    @media (prefers-color-scheme: dark) {
      background: #191919;
    }

    .section {
      padding: 20px 0;
      border-bottom: 1px solid #eee;
      max-width: 800px;
      margin: 0 auto;

      &.navbar {
        font-size: 16px;
        font-weight: 600;
        overflow-x: auto;
        white-space: nowrap;
        text-align: center;

        .linked {
          transition: all .8s cubic-bezier(0.2, 0.8, 0.2, 1);
          color: rgb(44, 177, 190);
          text-decoration: none;
          margin: 0 16px;
          display: inline-block;

          &:hover {
            opacity: .7;
          }
        }
      }

      &.copyright {

        .name,
        .credits {
          color: #555;
          font-weight: 500;
          font-size: 15px;
          margin: 3px 0;
        }

        .name {
          @media (prefers-color-scheme: dark) {
            color: rgb(250, 250, 250);
          }

          @media (max-width: 640px) {
            font-size: 22px
          }
        }

        .credits {
          color: rgb(145, 145, 150);
          font-size: 11px;
          font-weight: 400;
          padding: 0 5px;

          a {
            color: rgb(44, 177, 190);
            text-decoration: none;
            transition: all .8s cubic-bezier(0.2, 0.8, 0.2, 1);
            font-weight: 500;

            &:hover {
              opacity: .7;
            }
          }
        }
      }

      &:last-child {
        border-bottom: none
      }

      @media (prefers-color-scheme: dark) {
        border-bottom-color: #111111;
      }
    }
  }
</style>