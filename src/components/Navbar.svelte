<script>
  export let title = 'Navbar';
</script>

<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>

<style>
  nav {
    background-color: #333;
    color: white;
    padding: 1rem;
  }
  nav ul {
    list-style-type: none;
    padding: 0;
  }
  nav ul li {
    display: inline;
    margin-right: 1rem;
  }
</style>