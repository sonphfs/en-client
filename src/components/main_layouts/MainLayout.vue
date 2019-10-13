<template>
    <div class="container-scroller">
        <Header></Header>
        <div class="container-fluid page-body-wrapper">
            <MenuSide></MenuSide>
            <div class="main-panel">
                <div class="content-wrapper" style="width: 500px">
                    <router-view></router-view>
                </div>
                <Footer></Footer>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/layouts/Header.vue'
    import MenuSide from '@/components/layouts/MenuSide.vue'
    import Footer from '@/components/layouts/Footer.vue'

    export default {
        name: "MainLayout",
        components: {
            Header,
            MenuSide,
            Footer
        }
    };
</script>

<style>
    .container-fluid.page-body-wrapper {
        padding-top: 63px;
        padding-right: 0px;
        padding-left: 0px;
    }
</style>