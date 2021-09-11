<template>
    <Header />
    <Hero />
    <About />
    <Showcase :projects="projects" />
    <Footer />
</template>

<script>
import * as Vue from 'vue'
import axios from "axios"
import VueAxios from "vue-axios"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Showcase from "./components/Showcase"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const vueaxios = Vue.createApp()
vueaxios.use(VueAxios, axios)

export default {
    name: "App",
    components: {
        Header,
        Hero,
        About,
        Showcase,
        Contact,
        Footer
    },
    data() {
        return {
            projects: []
        };
    },
    mounted () {
            vueaxios.axios.get('https://yezmxsite-crm1.herokuapp.com/api/projects/', {
                headers: {
                    'Authorization': 'Token ' + process.env.TOKEN
                    }
            }).then((response) => {
                this.projects = response.data
            })
    }
};
</script>