<template>
    <div>
        <div id="echartsDemo" style="width:500px;height:500px;margin: 0 auto;"></div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                content:'',
            }
        },
        mounted() {
            this.drawLine()
        },
        methods:{
            drawLine(){
                let elementById = document.getElementById('echartsDemo')
                let echartsDemo = echarts.init(elementById)
                let option = {
                    title: {
                        text: '技术掌握情况:  '
                    },
                    tooltip: {},
                    legend: {
                         left:'center',
                        bottom :0,
                    },
                    // x坐标
                    // xAxis: {
                    //     data: ['Html', 'CSS', 'JQuery', 'Javascript', 'Vue', 'ES']
                    // },
                    // y坐标
                    // yAxis: {},
                    series: [{
                        name: '技术',
                        type: 'pie',
                        roseType: 'angle',
                        radius: '60%',
                        data: [{value:35,name:'HTML'},{value:30,name:"CSS"},{ value:36,name:"javascript"},{ value:30,name:"vue"}],
                        itemStyle: {
                            normal: {
                                shadowBlur: 100,
                                shadowColor: 'rgba(0, 0, 0, 1)'
                            }
                        }
                    }]
                }
                echartsDemo.setOption(option)
            },

        }

    }
</script>

<style scoped>

</style>