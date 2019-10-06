<template>
    <div class="container-scroller">
      <Header></Header>
      <Content></Content>
    </div>
</template>

<script>

import Header from "@/components/Header.vue";
import Content from "@/components/Content.vue";

export default {
    name: "Dashboard",
    components: {
        Header, Content
    }
}
</script>