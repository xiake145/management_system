<template>
<!-- 销售统计组件 -->
   <div>
        <Header></Header>
        <div>
            <Myecharts/>
        </div>
    </div>
</template>

<script>
import Header from "../../components/Header"
import Myecharts from '../myecharts/Myecharts';
    export default {
        data() {
            return {
                titlesub:"销售统计",
                titleTow:"进货统计",
            }
        },
        components: {
            Header,
            Myecharts,
        },

    }
</script>

<style lang="scss" scoped>

</style>