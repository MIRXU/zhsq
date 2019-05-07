import echarts from 'echarts'; //引入echarts
//渲染app统计图
export  function renderinfo(data,$id){
    var myChart2 = echarts.init(document.getElementById($id));
    var option2= {
        title:{
            text: 'APP注册量',
            x:'left',
            left:20,
            padding:8,

            //backgroundColor: 'rgba(16,48,107,0.8)',
            borderColor:'#3772A5',
            borderWidth: 0.5,
            borderRadius:5,
            textStyle:{
                fontSize: '14',
                color: "#00E6D9",
                fontWeight:"500",

            },
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#f00'
                }
            }
        },
        legend: {
            orient: 'horizontal',
            y:10,
            show:false,
            textStyle:{
                fontSize: 10,
                color:"#6BCEE6"
            },
            data:['app注册量'],
        },
        grid: {
            right: '10%',
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                axisLine: {
                    symbol: ['none', 'arrow'],
                    symbolSize: [10, 15],
                    symbolOffset: [10, 10],
                    lineStyle: {
                        color: ["#ffffff"]
                    }
                },
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                axisLabel:{formatter:'{value} 月'}

                //name:title
            }
        ],
        yAxis : [
            {
                splitNumber:2,
                type : 'value',
                axisLine: {
                    symbol: ['none', 'arrow'],
                    symbolSize: [10, 15],
                    symbolOffset: [10, 10],
                    lineStyle: {
                        color: ["#ffffff"]
                    }

                },
                name:"个",
                //网格样式
                splitLine: {
                    show: true,
                    lineStyle:{
                        color: ['#2343a1'],
                        width: 2,
                        type: 'solid'
                    }
                }
            }
        ],
        series : [
            {
                name:'app注册量',
                type:'line',
                symbolSize: 0,
                //symbol: 'circle',
                areaStyle:{color: '#245193'},
                data:[1, 0, 2, 1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 5, 0, 0, 0, 6, 0, 0, 0, 0],
                itemStyle: {
                    normal: {
                        //label: {
                        //    show: true,
                        //    formatter: "{c}",
                        //    textStyle: {
                        //        color: '#6DCDE6',
                        //        fontSize:16
                        //    }
                        //},
                        textColor: '#000',
                        color: '#6BCDE5',
                    },
                }
            }

        ]
    };
    myChart2.setOption(option2);

}
//渲染采集机统计图
export  function render_cjj_info(data,$id){
    var myChart2 = echarts.init(document.getElementById($id));
    var option2= {
        title:{
            text: '采集机录入人数',
            x:'left',
            left:20,
            padding:8,
            //backgroundColor: 'rgba(16,48,107,0.8)',
            borderColor:'#3772A5',
            borderWidth: 0.5,
            borderRadius:5,
            textStyle:{
                fontSize: '14',
                color: "#00E6D9",
                fontWeight:"500",

            },
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#f00'
                },
            }
        },
        grid: {
            right: '10%',
        },
        //legend: {
        //    orient: 'horizontal',
        //    y:10,
        //    show:false,
        //    textStyle:{
        //        fontSize: 10,
        //        color:"#ffffff"
        //    },
        //    data:['录入成功'],
        //},
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                axisLine: {
                    symbol: ['none', 'arrow'],
                    symbolSize: [10, 15],
                    symbolOffset: [10, 10],
                    lineStyle: {
                        color: ["#ffffff"]
                    }
                },
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                axisLabel:{formatter:'{value} 月'}
                //name:title
            }
        ],
        yAxis : [
            {
                splitNumber:2,
                type : 'value',
                axisLine: {
                    symbol: ['none', 'arrow'],
                    symbolSize: [10, 15],
                    symbolOffset: [10, 10],
                    lineStyle: {
                        color: ["#ffffff"]
                    }
                },
                //网格样式
                splitLine: {
                    show: true,
                    lineStyle:{
                        color: ['#2343a1'],
                        width:2,
                        //type: 'solid'
                    }
                },
                name:"次数",

            }
        ],
        series : [
            {
                name: '录入成功',
                type: 'line',
                symbolSize: 0,
                //symbol: 'circle',
                areaStyle: {color: '#245193'},
                data: [1, 0, 2, 1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 5, 0, 0, 0, 6, 0, 0, 0, 0],
                //markPoint:{
                //    symbol:"circle"
                //},
                itemStyle: {
                    normal: {
                        //label: {
                        //    show: true,
                        //    formatter: "{c}",
                        //    textStyle: {
                        //        color: '#6DCDE6',
                        //        fontSize:16
                        //    }
                        //},
                        textColor: '#000',
                        color: '#6BCDE5',
                    },
                }
            }
        ]
    };
    myChart2.setOption(option2);
}