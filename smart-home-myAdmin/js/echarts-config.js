
//配置仪表盘第一个图表

	(function(){
        var myChart = echarts.init(document.getElementById('myAreaChart'));


        var option = {
        title : {
            text: '室内温度监测',
            textStyle:{    //图例文字的样式
			        color:'grey',
			        fontSize:14
			    	}
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['最高温度','最低温度']
        },
        //右上角工具条
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : []
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value} '
                }
            }
        ],
        series : [
            {
                name:'最高温度',
                type:'line',
                data:[],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'最低温度',
                type:'line',
                data:[],
                markPoint : {
                    data : [
//                        {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                        {type : 'min', name: '周最低'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name : '平均值'}
                    ]
                }
            }
        ]
    };


//通过ajax get请求加载服务器端json数据 
                $.get('wendu.json').done(function (wendu) {  
                      
                    console.dir(wendu);  
                    // 填入数据  
                    myChart.setOption({  
                        xAxis: {  
                            data: wendu.categories  
                        },  
                        series: [{  
                            name: '最高温度',  
                            data: wendu.data1  
                        },
                        
                        {  
                            name: '最低温度',  
                            data: wendu.data2  
                        },
                        
                        
                        ]
                    });  
                  
                });  
                  
                function eConsole(param)   
                {  
                    console.dir(param);  
                }  
                  
                myChart.on("click",eConsole); 



// 为echarts对象加载数据
 
        myChart.setOption(option);
        })();
        
        
//配置仪表盘第二个图表--------------------------------------------
//条形图
      (function(){
        var myChart = echarts.init(document.getElementById('myBarChart'));


        var option = {
          title: {
            text: '2018-04-26--2018-05-02',
            textStyle:{    //图例文字的样式
			        color:'grey',
			        fontSize:14
			    	}
          },
          tooltip: {},
          legend: {
            data:['相对湿度%']
          },
           //右上角工具条
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
          xAxis: {
            data:["周一","周二","周三","周四","周五","周六","周日"]
          },
          yAxis: {},
          series:[{
            name: '相对湿度%',
            itemStyle:{
                    normal:{
                        color:'#0275d8'
                    }
                },
            type: 'bar',
            data: [45,39,47,50,57,62,59],
            barWidth : 60, //配置宽度
            barMaxWidth : 50, 
          }]
        };
        myChart.setOption(option);
        })();
        
 //配置第三个饼图------------------------------------------------------
 (function(){
        var myChart = echarts.init(document.getElementById('myPieChart'));


        var option = {
          title: {
            text: '家庭主要电器',
            x:'center',
            textStyle:{    //图例文字的样式
			        color:'grey',
			        fontSize:16
			    	}
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)>"
            //饼图中{a}表示系列名称，{b}表示数据项名称，{c}表示数值，{d}表示百分比
          },
          legend: {//图例
            orient: 'vertical',
            left: 'left',
            data: ['冰箱','电脑','空调','热水器','电视']
          },
          
          color:['#007bff', '#dc3545','#ffc107','#28a745','#d84c29'],  
           //右上角工具条
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
          series: [{
            name: '频率占比',
            type: 'pie',
            radius: '55%',
            data: [
                {value:45,name:'冰箱'},
                {value:39,name:'电脑'},
                {value:50,name:'空调'},
                {value:40,name:'热水器'},
                {value:39,name:'电视'}
            ],


            itemStyle: {     //itemStyle有正常显示：normal，有鼠标hover的高亮显示：emphasis
              emphasis:{//normal显示阴影,与shadow有关的都是阴影的设置
                shadowBlur:10,//阴影大小
                shadowOffsetX:0,//阴影水平方向上的偏移
                shadowColor:'rgba(0,0,0,0.5)'//阴影颜色
              }
            }
          }]
        };
        myChart.setOption(option);


        })();
