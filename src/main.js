import Vue from "vue";
import Contact from "../src/contact/contact.vue";
import Join from "../src/join/Join.vue";
import GameNews from "../src/GameNews/GameNews.vue";
import Material from "../src/material/Material.vue"
new Vue({
    render:h=>h(Contact)
}).$mount("#contact")