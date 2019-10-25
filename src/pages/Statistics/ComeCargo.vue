<template>
<!--进货统计组件  -->
     <div>
        <Header></Header>
    </div>
</template>

<script>
import Header from "../../components/Header"
    export default {
        data() {
            return {
                titlesub:"销售统计",
                titleTow:"进货统计",
            }
        },
        components: {
            Header,
        },
    }
</script>

<style lang="scss" scoped>

</style>