<template>
    <section id="showcase" class="section">
        <h2>showcase</h2>
        <div class="swiper projects">
            <div class="swiper-wrapper projects__wrapper">
                <div class="swiper-slide projects__slide" :key="project.id" v-for="project in projects" :style="{ '--color' : project.color }">
                    <p class="title">{{ project.headline }}</p>
                    <img class="project__image" :src="project.thumbnail">
                    <a class="project__link" :href="project.link" target="_blank" rel="noopener noreferrer"></a>
                </div>
                <!-- <div class="swiper-slide projects__slide" :style="{ '--color' : '#000000' }">
                    <p class="title">Test</p>
                    <img class="project__image" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80">
                    <a class="project__link" href="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" target="_blank" rel="noopener noreferrer"></a>
                </div> -->
            </div>
        </div>
        </section>
</template>

<script>
export default {
    name: "Showcase",
    props: {
        projects: Array
    }
}
</script>

<style lang='css' scoped>
    @media screen and (min-width: 800px) {
        .projects__slide:hover, .projects__slide:focus {
            background-color: var(--color);
            transition: background-color 0.5s;
        }
    }
    @media screen and (max-width: 800px) {
        .projects__slide {
            background-color: var(--color);
        }
    }
</style>