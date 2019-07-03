<template>
    <div class="page">

        <Header/>
        <Menus/>
        <Footer/>

    </div>

</template>

<script>
import Header from "../components/header.vue";
import Menus from "../components/Menus.vue";
import Footer from "../components/footer.vue";
export default {
    name:"contactUs",
    components:{
        Header,
        Menus,
        Footer
    }
}
</script>

<style scoped>
.page{
    height:100%;
}
</style>
