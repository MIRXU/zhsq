import echarts from 'echarts'; //引入echarts
//小区数量
export function render_floornum_info(data,$id){
    Highcharts.chart($id, {
        chart: {
            backgroundColor: '#00000000',
            renderTo: 'bigScreen-floornum-eachView',
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 0,
                beta: 0,
                depth: 5,
                viewDistance: 50
            }
        },
        yAxis: {
            title: {
                text: ''
            },
            min:0,
            gridLineWidth:'2px',
            gridLineColor: '#2343a1',
            plotLines: [{
                value: 0,
                width: 0,
                color: '#2343a1'
            }],
            labels: {
                formatter: function () {
                    return this.value
                },
                style: {
                    color: '#fff',
                    fontSize:'14px',
                    fontFamily:'微软雅黑'
                }
            },
            lineWidth: 1
        },
        xAxis: {
            categories:["业主人员","租户人员","工作人员","服务人员"],
            title: {
                text: ''
            },
            //min:0,
            gridLineWidth:'2px',
            gridLineColor: '#2343a1',
            plotLines: [{
                value: 0,
                width: 0,
                color: '#2343a1'
            }],
            labels: {
                formatter: function () {
                    return this.value
                },
                style: {
                    color: '#fff',
                    fontSize:'14px',
                    fontFamily:'微软雅黑'
                },
            },
            lineWidth: 1
        },
        title:{
            text:'<div style="width: 100%;text-align: left;"><span style="color: #00E6D9;text-align: center;font-size: 14px;border: 0.5px solid #3772A5;border-radius: 5px;width: 113px;height: 20px;margin-left: 10px;padding: 5px;display: inline-block;">小区数量</span></div>',
            useHTML:true,
            align:"left"
        },
        credits: {
            enabled:false
        },
        plotOptions: {
            column: {
                pointWidth: 25,
                depth: 20
            }
        },
        legend: {
            enabled:false,
            symbolHeight:8,
            symbolWidth: 8,
            symbolRadius:0,
            borderWidth: 0,
            itemMarginBottom:5,
            align: 'right',
            //x: 0,
            //y: 100,
            itemStyle:{
                fontSize: "10px",
                color:"#ffffff"
            },
            layout:"vertical",

        },
        series: [{
            name:'数量',
            data: [50,45,17,54]
        },]
    }, function (chart) {
        SetEveryOnePointColor(chart);
    });
    //设置每一个数据点的颜色值
    function SetEveryOnePointColor(chart) {
        //获得第一个序列的所有数据点
        var pointsList = chart.series[0].points;
        //遍历设置每一个数据点颜色
        for (var i = 0; i < pointsList.length; i++) {
            chart.series[0].points[i].update({
                color: {
                    linearGradient: {x1: 0, y1: 1, x2: 0, y2: 0}, //横向渐变效果 如果将x2和y2值交换将会变成纵向渐变效果
                    stops: [
                        [0, Highcharts.Color('#3476DA').setOpacity(1).get('rgba')],
                        [1, 'rgb(102, 195, 229)']
                    ]
                }
            });
        }
    }
}
//渲染门禁信息
export function render_mj_info(data,$id){
    var myChart2 = echarts.init(document.getElementById($id));
    var option2= {
            title:{
                text: '门禁人员出入',
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
            left:'right',
            textStyle:{
                fontSize: 10,
                color:"#ffffff"
            },
            data:['刷卡出','刷卡入',"扫码出","扫码入"],
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
                data: data[0].outheng,
                name:"(日期)"

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
                    textStyle:{
                        fontSize:15,
                        color:"#ffffff"
                    },
                    lineStyle: {
                        color: ["#ffffff"]
                    }

                },
                //网格样式
                splitLine: {
                    show: true,
                    lineStyle:{
                        color: ['#2343a1'],
                        width: 2,
                        type: 'solid'
                    }
                },
                name:"(次)"
            }
        ],
        series : [
            {
                name:'扫码出',
                type:'line',
                //stack: '总量',
                symbolSize: 7,
                symbol: 'circle',
                data: data[0].outzong,
                itemStyle: {
                    normal: {color: '#5CB85C'},
                }
            },
            {
                name:'扫码入',
                type:'line',
                //stack: '总量',
                symbolSize: 7,
                symbol: 'circle',
                data:data[1].inzong,
                itemStyle: {
                    normal: {color: '#F0AD4E'},
                }
            },
            {
                name:'刷卡出',
                type:'line',
                //stack: '总量',
                symbolSize: 7,
                symbol: 'circle',
                data:data[2].outzongCrad,
                itemStyle: {
                    normal: {color: '#E86E6D'},
                }
            },
            {
                name:'刷卡入',
                type:'line',
                //stack: '总量',
                symbolSize: 7,
                symbol: 'circle',
                data:data[3].inzongCard,
                itemStyle: {
                    normal: {color: '#6DCDE6'},
                }
            },
        ]
    };
    myChart2.setOption(option2);

}
//渲染报警信息
export function render_bjnum_info(data,$id){
    var myChart2 = echarts.init(document.getElementById($id));
    var option2= {
        title:{
            text: '报警次数',
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
            left:'right',
            textStyle:{
                fontSize: 10,
                color:"#ffffff"
            },
            data:['室内屏','室外屏',"APP"],
        },
        grid: {
            right: '10%',
        },
        xAxis : [
            {
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    symbol: ['none', 'arrow'],
                    symbolSize: [10, 15],
                    symbolOffset: [10, 10],
                    lineStyle: {
                        color: ["#ffffff"]
                    }
                },
                data: data[0].insideheng,
                name:"(日期)"

            }
        ],
        yAxis : [
            {
                splitNumber:2,
                //网格样式
                splitLine: {
                    show: true,
                    lineStyle:{
                        color: ['#2343a1'],
                        width: 2,
                        type: 'solid'
                    }
                },
                type: 'value',
                axisLine: {
                    symbol: ['none', 'arrow'],
                    symbolSize: [10, 15],
                    symbolOffset: [10, 10],
                    lineStyle: {
                        color: ["#ffffff"]
                    }

                },
                name:"(次)",
            }
        ],

        series : [
            {
                name:'室内屏',
                type:'line',
                symbolSize: 7,
                symbol: 'circle',
                //areaStyle: {color: '#003399cc' },
                data:data[0].insidezong,
                itemStyle: {
                    normal: {color: '#E86E6D'},
                }
            },
            {
                name:'室外屏',
                type:'line',
                symbolSize: 7,
                //areaStyle: {color: '#c24747'},
                symbol: 'circle',
                data:data[1].outzong,
                itemStyle: {
                    normal: {color: '#6DCDE6'},
                }
            },
            {
                name:'APP',
                type:'line',
                symbolSize: 7,
                symbol: 'circle',
                //areaStyle:{color: '#43E055'},
                data:data[2].appzong,
                itemStyle: {
                    normal: {color: '#43E055'},
                }
            },
        ]
    };
    myChart2.setOption(option2);
}