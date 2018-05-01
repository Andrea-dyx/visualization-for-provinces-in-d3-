//var textss1,str1,strs1,textsss1;
function view5(){
    var $bmdDiv=$("#bottom-div-right");
    var svgwidth=$bmdDiv.width();
    var svgheight=$bmdDiv.height();
    var margin = {top: 20, right: 20, bottom: 30, left: 40};
    var width = svgwidth - margin.left - margin.right;
    var height = svgheight - margin.top - margin.bottom;
    var svg6=d3.select("#view5")
        .append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("preserveAspectRatio", "xMidYMid meet")
        .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    var textss1 = svg6.append("text") 
        .attr("x",0) 
        .attr("y",0) 
        .attr("font-size",17) 
        .attr("font-family","Lantinghei SC");
    
    textss1.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",17) 
                    .attr("font-family","Lantinghei SC");
    
    var str1="选择指标查看不同指标信息 选择右侧\"指标具体变化\"，可以看到选择指 标在鼠标停留的省区的10年内变化情况。 通过单击可固定查看该省区的信息，选择\"点击 地图添加\"通过在地图上点击省区，可向折线图 添加更多的省区。";
    var strs1=str1.split(" ");
    var textsss1=textss1.selectAll("tspan")  
                .data(strs1)  
                .enter()  
                .append("tspan")  
                .attr("x",textss1.attr("x"))  
                .attr("dy","1.1em")  
                .text(function(d){return d})
}


var index_info;
(function(){
    index_info={
        view_index_info:function(t){
            if(t==0){
                $("#view5").empty();
                var $bmdDiv=$("#bottom-div-right");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg6=d3.select("#view5")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss1 = svg6.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",17) 
                    .attr("font-family","Lantinghei SC");

                textss1.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",17) 
                                .attr("font-family","Lantinghei SC");

                var str1="人口=城镇人口+农村人口 在右侧选择\"从总体指标来看\"查看，点击地图上 省区，查看该省区具体的人口情况";
                var strs1=str1.split(" ");
                var textsss1=textss1.selectAll("tspan")  
                            .data(strs1)  
                            .enter()  
                            .append("tspan")  
                            .attr("x",textss1.attr("x"))  
                            .attr("dy","1em")  
                            .text(function(d){return d})
            }
            
            
            else if(t==1){
                $("#view5").empty();
                var $bmdDiv=$("#bottom-div-right");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg6=d3.select("#view5")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss1 = svg6.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",17) 
                    .attr("font-family","Lantinghei SC");

                textss1.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",17) 
                                .attr("font-family","Lantinghei SC");

                var str1="国内生产总值是指一个国家(或地区)所有常 住单位在一定时期内生产的全部最终产品 和服务价值的总和。国内生产总值=第一产业+ 第二产业+第三产业。 在右侧选择\"从总体指标来看\"查看，点击地图 上省区，查看该省区具体的国内生产总值情况";
                var strs1=str1.split(" ");
                var textsss1=textss1.selectAll("tspan")  
                            .data(strs1)  
                            .enter()  
                            .append("tspan")  
                            .attr("x",textss1.attr("x"))  
                            .attr("dy","1em")  
                            .text(function(d){return d})
            }
            
            
            else if(t==2){
                $("#view5").empty();
                var $bmdDiv=$("#bottom-div-right");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg6=d3.select("#view5")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss1 = svg6.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",17) 
                    .attr("font-family","Lantinghei SC");

                textss1.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",17) 
                                .attr("font-family","Lantinghei SC");

                var str1="居民消费水平指数=（一组固定商品按当期价 格计算的价值／一组固定商品按上一年价格计 算的价值）×100%";
                var strs1=str1.split(" ");
                var textsss1=textss1.selectAll("tspan")  
                            .data(strs1)  
                            .enter()  
                            .append("tspan")  
                            .attr("x",textss1.attr("x"))  
                            .attr("dy","1em")  
                            .text(function(d){return d})
            }
            
            
            else if(t==3){
                $("#view5").empty();
                var $bmdDiv=$("#bottom-div-right");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg6=d3.select("#view5")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss1 = svg6.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",17) 
                    .attr("font-family","Lantinghei SC");

                textss1.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",17) 
                                .attr("font-family","Lantinghei SC");

                var str1="农林牧渔总产值=农业总产值+林业总产值+牧 业总产值+渔业总产值+其他 在右侧选择\"从总体指标来看\"查看，点击地图 上省区，查看该省区具体的农林牧渔产值情况";
                var strs1=str1.split(" ");
                var textsss1=textss1.selectAll("tspan")  
                            .data(strs1)  
                            .enter()  
                            .append("tspan")  
                            .attr("x",textss1.attr("x"))  
                            .attr("dy","1em")  
                            .text(function(d){return d})
            }
            else if(t==4){
                $("#view5").empty();
                var $bmdDiv=$("#bottom-div-right");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg6=d3.select("#view5")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss1 = svg6.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",17) 
                    .attr("font-family","Lantinghei SC");

                textss1.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",17) 
                                .attr("font-family","Lantinghei SC");

                var str1="通过地方财政一般预算收入和地方财政一般预 算支出了解这个地区收支是否平衡";
                var strs1=str1.split(" ");
                var textsss1=textss1.selectAll("tspan")  
                            .data(strs1)  
                            .enter()  
                            .append("tspan")  
                            .attr("x",textss1.attr("x"))  
                            .attr("dy","1em")  
                            .text(function(d){return d})
            }
            
            else if(t==5){
                $("#view5").empty();
                var $bmdDiv=$("#bottom-div-right");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg6=d3.select("#view5")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss1 = svg6.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",17) 
                    .attr("font-family","Lantinghei SC");

                textss1.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",17) 
                                .attr("font-family","Lantinghei SC");

                var str1="通过城市概况了解该地区城市建设情况";
                var strs1=str1.split(" ");
                var textsss1=textss1.selectAll("tspan")  
                            .data(strs1)  
                            .enter()  
                            .append("tspan")  
                            .attr("x",textss1.attr("x"))  
                            .attr("dy","1em")  
                            .text(function(d){return d})
            }
            else if(t==6){
                $("#view5").empty();
                var $bmdDiv=$("#bottom-div-right");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg6=d3.select("#view5")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss1 = svg6.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",17) 
                    .attr("font-family","Lantinghei SC");

                textss1.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",17) 
                                .attr("font-family","Lantinghei SC");

                var str1="指入境旅游的外国人、华侨、港澳同胞和台 湾同胞在中国大陆旅游过程中发生的一切旅 游支出，对于国家来说就是国际旅游(外汇) 收入。";
                var strs1=str1.split(" ");
                var textsss1=textss1.selectAll("tspan")  
                            .data(strs1)  
                            .enter()  
                            .append("tspan")  
                            .attr("x",textss1.attr("x"))  
                            .attr("dy","1em")  
                            .text(function(d){return d})
            }
            
            else if(t==7){
                $("#view5").empty();
                var $bmdDiv=$("#bottom-div-right");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg6=d3.select("#view5")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss1 = svg6.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",17) 
                    .attr("font-family","Lantinghei SC");

                textss1.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",17) 
                                .attr("font-family","Lantinghei SC");

                var str1="通过各级学校生师比了解这个地区各种层次 的教育发达程度。 生师比=在校生数/专任教师数";
                var strs1=str1.split(" ");
                var textsss1=textss1.selectAll("tspan")  
                            .data(strs1)  
                            .enter()  
                            .append("tspan")  
                            .attr("x",textss1.attr("x"))  
                            .attr("dy","1em")  
                            .text(function(d){return d})
            }
            else if(t==8){
                $("#view5").empty();
                var $bmdDiv=$("#bottom-div-right");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg6=d3.select("#view5")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss1 = svg6.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",17) 
                    .attr("font-family","Lantinghei SC");

                textss1.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",17) 
                                .attr("font-family","Lantinghei SC");

                var str1="国内专利申请授权量=国内发明专利申请授 权量+国内实用新型专利申请授权量+国内外 观设计专利申请授权量。  在右侧选择\"从总体指标来看\"查看，点击地图 上省区，查看该省区具体的国内专利申请情况";
                var strs1=str1.split(" ");
                var textsss1=textss1.selectAll("tspan")  
                            .data(strs1)  
                            .enter()  
                            .append("tspan")  
                            .attr("x",textss1.attr("x"))  
                            .attr("dy","1em")  
                            .text(function(d){return d})
            }
            
            else if(t==9){
                $("#view5").empty();
                var $bmdDiv=$("#bottom-div-right");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg6=d3.select("#view5")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss1 = svg6.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",17) 
                    .attr("font-family","Lantinghei SC");

                textss1.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",17) 
                                .attr("font-family","Lantinghei SC");

                var str1="城镇职工参加养老保险人数=在职职工参加 养老保险人数+离退人员参加养老保险人数。 在右侧选择\"从总体指标来看\"查看，点击地图 上省区，查看该省区具体的养老保险人数情况";
                var strs1=str1.split(" ");
                var textsss1=textss1.selectAll("tspan")  
                            .data(strs1)  
                            .enter()  
                            .append("tspan")  
                            .attr("x",textss1.attr("x"))  
                            .attr("dy","1em")  
                            .text(function(d){return d})
            }
            
        }
    }
})()