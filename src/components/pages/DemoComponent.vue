<template>
    <div>
        <TitleHeader></TitleHeader>
        <RatioHeader></RatioHeader>
        <div class="row">

        </div>
        <div>Dashboard</div>
    </div>
</template>

<script>
    import TitleHeader from '@/components/layouts/TitleHeader.vue'
    import RatioHeader from '@/components/layouts/RatioHeader.vue'

export default {
    name: "Dashboard",
    components: {
        TitleHeader,
        RatioHeader
    }
}
</script>