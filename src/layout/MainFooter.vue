<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
           <li>
             © {{ year }} <a href="https://www.oculow.com">Oculow</a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
       <nav>
        <ul>
           <li>
            <a href="https://www.oculow.com/terms/index.html">
              Legal
            </a>
          </li>
          <li>
          <a href="https://www.oculow.com/terms/privacy.html">
            Privacy
          </a>
          </li>
          <li>
            <a href="https://blog.oculow.com/">
              Blog
            </a>
          </li>
        </ul>
      </nav>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
