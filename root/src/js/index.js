import { createApp } from "vue";
import App from "../vue/App.vue";

createApp(App).mount("#app");

const swiper = new Swiper('.swiper', {
  slidesPerView: "auto",
  centeredSlides: "true"
});