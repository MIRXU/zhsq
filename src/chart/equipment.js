
//渲染多媒体信息
export function reder_media(data,$id){
    let data1=[]
    data.forEach(function(item,index){
        data1.push([item.name,Number(item.value)])
    })
    //var myChart4 = echarts.init(document.getElementById("security-equipment-eachView"));
    Highcharts.chart($id, {
        chart: {
            backgroundColor: '#00000000',
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 55,
                beta: 0
            },

        },
        colors:[
            '#6DCDE6','#e76d6d','#ea9154'
        ],
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 20,
                dataLabels: {
                    enabled: false,
                    format: '{point.name}'
                }
            }
        },
        title: {
            align: "left",
            //margin: "0px",
            text: '多媒体设备',
            style:{ "color": "#00E6D9", "fontSize": "14px" },
            x:10,
            y:30
        },
        legend: {
            symbolHeight:8,
            symbolWidth: 8,
            symbolRadius:0,
            borderWidth: 0,
            itemMarginBottom:20,
            align: 'right',
            //x: 0,
            itemStyle:{
                fontSize: "10px",
                color:"#ffffff"
            },
            layout:"vertical",

        },
        credits: {
            enabled:false
        },
        series: [
            {
                name:"多媒体设备",
                type:'pie',
                radius: ['40%', '60%'],
                avoidLabelOverlap: false,
                labelLine:{
                    normal:{
                        length:5 ,
                        show:false
                    }
                },
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '15',
                            fontWeight: 'bold'
                        }
                    }
                },
                //labelLine: {
                //    normal: {
                //        length:10 , //设置指式线长度
                //        show: true
                //    }
                //},
                color:['#2ac8c9','#fcba7e','#c77a82','#8d9dac','#e5cd11','#9ab952','#96706f'],    //颜色
                data:data1,
                showInLegend: true // 默认值
            }
        ],
    });
}
//渲染安防信息
export function reder_security(data,$id){
    let data1=[]
    data.forEach(function(item,index){
        data1.push([item.name,Number(item.value)])
    })
    //var myChart4 = echarts.init(document.getElementById("security-equipment-eachView"));
    Highcharts.chart($id, {
        chart: {
            backgroundColor: '#00000000',
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 55,
                beta: 0
            },
        },
        credits: {
            enabled:false
        },
        plotOptions: {
            pie: {
                innerSize: 40,
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 20,
                dataLabels: {
                    enabled: false,
                    format: '{point.name}'
                }
            }
        },
        colors:[
            '#2ac8c9','#fcba7e','#c77a82','#8d9dac','#e5cd11','#9ab952','#96706f'
        ],
        title: {
            align: "left",
            //margin: "0px",
            text: '安防设备',
            style:{ "color": "#00E6D9", "fontSize": "14px" },
            x:10,
            y:40
        },

        legend: {
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
            //floating: true
            //bottom:"0",

            //data: ['室内屏','室外屏',"采集机"]
        },
        series: [
            {
                name:"安防设备",
                type:'pie',
                radius: ['40%', '60%'],
                avoidLabelOverlap: false,
                labelLine:{
                    normal:{
                        length:5 ,
                        show:false
                    }
                },
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '15',
                            fontWeight: 'bold'
                        }
                    }
                },
                //labelLine: {
                //    normal: {
                //        length:10 , //设置指式线长度
                //        show: true
                //    }
                //},
                color:['#2ac8c9','#fcba7e','#c77a82','#8d9dac','#e5cd11','#9ab952','#96706f'],    //颜色
                data:data1,
                showInLegend: true // 默认值
            }
        ],
    });
}