<template>
    <!-- Global Header -->
     <header class="bg-dark text-white py-3 w-100 fixed-top">
        <nav class="navbar navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Play2Learn</a>
                <ul class="nav ms-auto">
                    <!-- Home Router Link -->
                    <li class="nav-item"><router-link class="nav-link text-white" to="/">Home</router-link></li>
                    <li class="nav-item"><span class="text-white my-2 mx-2 d-block">|</span></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Games</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <!-- Anagram Hunt Router Link -->
                            <li><router-link class="dropdown-item" to="/anagram-hunt">Anagram Hunt</router-link></li>
                            <li><a class="dropdown-item" href="/games/math-facts.html">Math Facts Practice</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><span class="text-white my-2 mx-2 d-block">|</span></li>
                    <li class="nav-item"><a class="nav-link text-white" href="about.html">About</a></li>
                    <li class="nav-item"><span class="text-white my-2 mx-2 d-block">|</span></li>
                    <li class="nav-item"><a class="nav-link text-white" href="/login.html">Login</a></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'GlobalHeader'
};
</script>

<style scoped>
</style>