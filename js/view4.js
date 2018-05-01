var textss,str,strs,textsss;
function view4(){
    var $bmdDiv=$("#bottom-div");
    var svgwidth=$bmdDiv.width();
    var svgheight=$bmdDiv.height();
    var margin = {top: 20, right: 20, bottom: 30, left: 40};
    var width = svgwidth - margin.left - margin.right;
    var height = svgheight - margin.top - margin.bottom;
    var svg5=d3.select("#view4")
        .append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("preserveAspectRatio", "xMidYMid meet")
        .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    var textss = svg5.append("text") 
        .attr("x",0) 
        .attr("y",0) 
        .attr("font-size",18) 
        .attr("font-family","Lantinghei SC");
    
    textss.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");
    
    var str="点击地图上省区可显示省区具体信息";
    var strs=str.split(" ");
    var textsss=textss.selectAll("tspan")  
                .data(strs)  
                .enter()  
                .append("tspan")  
                .attr("x",textss.attr("x"))  
                .attr("dy","1em")  
                .text(function(d){return d})
}


var state_info;
(function(){
    state_info={
        view_state_info:function(t){
            if(t==1){
                $("#view4").empty();
                var $bmdDiv=$("#bottom-div");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg5=d3.select("#view4")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss = svg5.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");

                textss.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",18) 
                                .attr("font-family","Lantinghei SC");

                textss.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");
                
                var str="北京（京）"+" "+"日本侵华战争时控制的中华民国临时政府将 北平改名为北京。西周称燕。秦代设蓟县。 1945年第十一战区接收北京并更名北平。 1949年中国人民政治协商会议更名为北京。 面积：1.68万平方千米。"
                var strs=str.split(" ");
                console.log(strs);
                textss.selectAll("tspan") 
                    .data(strs)  
                    .enter()  
                    .append("tspan") 
                    .transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(function(d,i){
                    return strs[i];
                }) ;
                /*textsss.transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(strs);*/
            }
            
            else if(t==2){
                $("#view4").empty();
                var $bmdDiv=$("#bottom-div");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg5=d3.select("#view4")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss = svg5.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");

                textss.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",18) 
                                .attr("font-family","Lantinghei SC");

                textss.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");
                
                var str="天津（津）"+" "+"明朝《重建三官庙碑记》注有：“天津象征 天子车马所渡之地”的词句。隋朝京杭运河 在南运河和北运河交会处的三会海口，是天 津最早的发祥地。 面积：1.1万平方千米"
                var strs=str.split(" ");
                console.log(strs);
                textss.selectAll("tspan") 
                    .data(strs)  
                    .enter()  
                    .append("tspan") 
                    .transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(function(d,i){
                    return strs[i];
                }) ;
                /*textsss.transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(strs);*/
            }
            else if(t==3){
                $("#view4").empty();
                var $bmdDiv=$("#bottom-div");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg5=d3.select("#view4")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss = svg5.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");

                textss.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",18) 
                                .attr("font-family","Lantinghei SC");

                textss.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");
                
                var str="河北（冀）"+" "+"以在黄河之北而得名。唐属河北道。 汉文化的发祥地。春秋战国时期大部分领土 分属燕国和赵国，所以称“燕赵大地”。 面积：19万平方千米"
                var strs=str.split(" ");
                console.log(strs);
                textss.selectAll("tspan") 
                    .data(strs)  
                    .enter()  
                    .append("tspan") 
                    .transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(function(d,i){
                    return strs[i];
                }) ;
                /*textsss.transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(strs);*/
            }
           
            else if(t==4){
                $("#view4").empty();
                var $bmdDiv=$("#bottom-div");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg5=d3.select("#view4")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss = svg5.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");

                textss.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",18) 
                                .attr("font-family","Lantinghei SC");

                textss.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");
                
                var str="山西（晋）"+" "+"以在太行山之西而得名。元设山西道。 厚重的黄河文化的代表。春秋五霸的晋国 ，后分出韩、赵、魏三国。 面积：15万平方千米"
                var strs=str.split(" ");
                console.log(strs);
                textss.selectAll("tspan") 
                    .data(strs)  
                    .enter()  
                    .append("tspan") 
                    .transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(function(d,i){
                    return strs[i];
                }) ;
                /*textsss.transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(strs);*/
            }
            else if(t==5){
                $("#view4").empty();
                var $bmdDiv=$("#bottom-div");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg5=d3.select("#view4")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss = svg5.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");

                textss.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",18) 
                                .attr("font-family","Lantinghei SC");

                textss.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");
                
                var str="内蒙古（内蒙）"+" "+"以漠南蒙古得名。 1947年中共设内蒙古自治区，是建立最早的 自治区。人民敦厚豪爽。  面积：110万平方千米"
                var strs=str.split(" ");
                console.log(strs);
                textss.selectAll("tspan") 
                    .data(strs)  
                    .enter()  
                    .append("tspan") 
                    .transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(function(d,i){
                    return strs[i];
                }) ;
                /*textsss.transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(strs);*/
            }
            else if(t==6){
                $("#view4").empty();
                var $bmdDiv=$("#bottom-div");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg5=d3.select("#view4")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss = svg5.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");

                textss.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",18) 
                                .attr("font-family","Lantinghei SC");

                textss.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");
                
                var str="辽宁（辽）"+" "+"以辽河流域永久安宁得名。 1929年，中华民国改奉天省为辽宁省。 面积：15万平方千米"
                var strs=str.split(" ");
                console.log(strs);
                textss.selectAll("tspan") 
                    .data(strs)  
                    .enter()  
                    .append("tspan") 
                    .transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(function(d,i){
                    return strs[i];
                }) ;
                /*textsss.transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(strs);*/
            }
            else if(t==7){
                $("#view4").empty();
                var $bmdDiv=$("#bottom-div");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg5=d3.select("#view4")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss = svg5.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");

                textss.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",18) 
                                .attr("font-family","Lantinghei SC");

                textss.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");
                
                var str="吉林（吉）"+" "+"以满语“吉林乌拉（沿江）”前二字得名。 1954年6月，松江省撤消并入黑龙江省； 吉林省省会迁至长春市。 面积：18万平方千米"
                var strs=str.split(" ");
                console.log(strs);
                textss.selectAll("tspan") 
                    .data(strs)  
                    .enter()  
                    .append("tspan") 
                    .transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(function(d,i){
                    return strs[i];
                }) ;
                /*textsss.transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(strs);*/
            }
            else if(t==8){
                $("#view4").empty();
                var $bmdDiv=$("#bottom-div");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg5=d3.select("#view4")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss = svg5.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");

                textss.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",18) 
                                .attr("font-family","Lantinghei SC");

                textss.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");
                
                var str="黑龙江（黑）"+" "+"以黑龙江而得名。 清1671年沿黑龙江岸筑城，名黑龙江城， 后改为黑龙江省。 面积：46万平方千米"
                var strs=str.split(" ");
                console.log(strs);
                textss.selectAll("tspan") 
                    .data(strs)  
                    .enter()  
                    .append("tspan") 
                    .transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(function(d,i){
                    return strs[i];
                }) ;
                /*textsss.transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(strs);*/
            }
            else if(t==9){
                $("#view4").empty();
                var $bmdDiv=$("#bottom-div");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg5=d3.select("#view4")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss = svg5.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");

                textss.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",18) 
                                .attr("font-family","Lantinghei SC");

                textss.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");
                
                var str="上海（沪）"+" "+"以吴淞江支流上海浦而得名。 晋朝时，吴淞江和滨海一带的居民创造了一 种竹编的捕鱼工具叫“扈”，以后又改为“ 沪”。 面积：5800平方千米"
                var strs=str.split(" ");
                console.log(strs);
                textss.selectAll("tspan") 
                    .data(strs)  
                    .enter()  
                    .append("tspan") 
                    .transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(function(d,i){
                    return strs[i];
                }) ;
                /*textsss.transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(strs);*/
            }
            else if(t==10){
                $("#view4").empty();
                var $bmdDiv=$("#bottom-div");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg5=d3.select("#view4")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss = svg5.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");

                textss.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",18) 
                                .attr("font-family","Lantinghei SC");

                textss.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");
                
                var str="江苏（苏）"+" "+"以江宁、苏州各取一字得名。清设江苏省。 江苏素享“人文荟萃”的佳誉。江苏省国内 生产总值在广东、山东之后，位居大陆第三。 面积：10万平方千米"
                var strs=str.split(" ");
                console.log(strs);
                textss.selectAll("tspan") 
                    .data(strs)  
                    .enter()  
                    .append("tspan") 
                    .transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(function(d,i){
                    return strs[i];
                }) ;
                /*textsss.transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(strs);*/
            }
            else if(t==11){
                $("#view4").empty();
                var $bmdDiv=$("#bottom-div");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg5=d3.select("#view4")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss = svg5.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");

                textss.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",18) 
                                .attr("font-family","Lantinghei SC");

                textss.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");
                
                var str="浙江（浙）"+" "+"以钱塘江得名。明设浙江省。 “浙江”是钱塘江的古称，意为曲折的江水。 秦统一中国后，在这里设立会稽郡。 面积：10万平方千米"
                var strs=str.split(" ");
                console.log(strs);
                textss.selectAll("tspan") 
                    .data(strs)  
                    .enter()  
                    .append("tspan") 
                    .transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(function(d,i){
                    return strs[i];
                }) ;
                /*textsss.transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(strs);*/
            }
            else if(t==12){
                $("#view4").empty();
                var $bmdDiv=$("#bottom-div");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg5=d3.select("#view4")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss = svg5.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");

                textss.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",18) 
                                .attr("font-family","Lantinghei SC");

                textss.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");
                
                var str="安徽（皖）"+" "+"以安庆、徽州各取一字得名。清设安徽省。 明清时代的徽商曾叱咤商界300余年。 面积：13万平方千米"
                var strs=str.split(" ");
                console.log(strs);
                textss.selectAll("tspan") 
                    .data(strs)  
                    .enter()  
                    .append("tspan") 
                    .transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(function(d,i){
                    return strs[i];
                }) ;
                /*textsss.transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(strs);*/
            }
            else if(t==13){
                $("#view4").empty();
                var $bmdDiv=$("#bottom-div");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg5=d3.select("#view4")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss = svg5.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");

                textss.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",18) 
                                .attr("font-family","Lantinghei SC");

                textss.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");
                
                var str="福建（闽）"+" "+"以福州、建州各取一字得名。唐设福建观察 使。 南宋设1府5州2军共8个行政机构，故称“八 闽”。 面积：12万平方千米"
                var strs=str.split(" ");
                console.log(strs);
                textss.selectAll("tspan") 
                    .data(strs)  
                    .enter()  
                    .append("tspan") 
                    .transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(function(d,i){
                    return strs[i];
                }) ;
                /*textsss.transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(strs);*/
            }
            else if(t==14){
                $("#view4").empty();
                var $bmdDiv=$("#bottom-div");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg5=d3.select("#view4")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss = svg5.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");

                textss.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",18) 
                                .attr("font-family","Lantinghei SC");

                textss.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");
                
                var str="江西（赣）"+" "+"以江南的西部得名。唐设江西观察使。 赣江原称豫章江，汉高帝设豫章郡，郡治南 昌。 面积：16万平方千米"
                var strs=str.split(" ");
                console.log(strs);
                textss.selectAll("tspan") 
                    .data(strs)  
                    .enter()  
                    .append("tspan") 
                    .transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(function(d,i){
                    return strs[i];
                }) ;
                /*textsss.transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(strs);*/
            }
            
            else if(t==15){
                $("#view4").empty();
                var $bmdDiv=$("#bottom-div");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg5=d3.select("#view4")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss = svg5.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");

                textss.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",18) 
                                .attr("font-family","Lantinghei SC");

                textss.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");
                
                var str="山东（鲁）"+" "+"以在太行山之东而得名。金设山东东、西路。 山东西部曾是商部落的活动中心，商王朝统 治的中心区域之一。山东素有“膏壤千里” 的美誉。 面积：15万平方千米"
                var strs=str.split(" ");
                console.log(strs);
                textss.selectAll("tspan") 
                    .data(strs)  
                    .enter()  
                    .append("tspan") 
                    .transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(function(d,i){
                    return strs[i];
                }) ;
                /*textsss.transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(strs);*/
            }
            else if(t==16){
                $("#view4").empty();
                var $bmdDiv=$("#bottom-div");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg5=d3.select("#view4")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss = svg5.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");

                textss.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",18) 
                                .attr("font-family","Lantinghei SC");

                textss.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");
                
                var str="河南（豫）"+" "+"以在黄河之南而得名。西汉设河南郡。 古称中原，是华夏文明和中华民族的重要发 祥地之一。 面积：16万平方千米"
                var strs=str.split(" ");
                console.log(strs);
                textss.selectAll("tspan") 
                    .data(strs)  
                    .enter()  
                    .append("tspan") 
                    .transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(function(d,i){
                    return strs[i];
                }) ;
                /*textsss.transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(strs);*/
            }
            else if(t==17){
                $("#view4").empty();
                var $bmdDiv=$("#bottom-div");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg5=d3.select("#view4")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss = svg5.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");

                textss.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",18) 
                                .attr("font-family","Lantinghei SC");

                textss.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");
                
                var str="湖北（鄂）"+" "+"以在洞庭湖之北而得名。宋设荆湖北路。 武昌为南宋三大都会之一，辛亥革命发起地。 面积：18万平方千米"
                var strs=str.split(" ");
                console.log(strs);
                textss.selectAll("tspan") 
                    .data(strs)  
                    .enter()  
                    .append("tspan") 
                    .transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(function(d,i){
                    return strs[i];
                }) ;
                /*textsss.transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(strs);*/
            }
            else if(t==18){
                $("#view4").empty();
                var $bmdDiv=$("#bottom-div");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg5=d3.select("#view4")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss = svg5.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");

                textss.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",18) 
                                .attr("font-family","Lantinghei SC");

                textss.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");
                
                var str="湖南（湘）"+" "+"以在洞庭湖之南而得名。唐设湖南观察使。 1852年，曾国藩受命在衡州组建湘军。 面积：21万平方千米"
                var strs=str.split(" ");
                console.log(strs);
                textss.selectAll("tspan") 
                    .data(strs)  
                    .enter()  
                    .append("tspan") 
                    .transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(function(d,i){
                    return strs[i];
                }) ;
                /*textsss.transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(strs);*/
            }
            else if(t==19){
                $("#view4").empty();
                var $bmdDiv=$("#bottom-div");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg5=d3.select("#view4")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss = svg5.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");

                textss.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",18) 
                                .attr("font-family","Lantinghei SC");

                textss.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");
                
                var str="广东（粤）"+" "+"以广东路得名。宋置广南东路，简称广东路。 古称“百越”。中山市，是全国唯一以伟人 名字命名的城市。以制造和第三产业为主的 经济强省。 面积：18万平方千米"
                var strs=str.split(" ");
                console.log(strs);
                textss.selectAll("tspan") 
                    .data(strs)  
                    .enter()  
                    .append("tspan") 
                    .transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(function(d,i){
                    return strs[i];
                }) ;
                /*textsss.transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(strs);*/
            }
            
            else if(t==20){
                $("#view4").empty();
                var $bmdDiv=$("#bottom-div");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg5=d3.select("#view4")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss = svg5.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");

                textss.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",18) 
                                .attr("font-family","Lantinghei SC");

                textss.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");
                
                var str="广西（桂）"+" "+"以广西路得名。宋置广南西路，简称广西路。 汉初属南越国。1965年10月12日，经国务 院批准，更名为广西壮族自治区。 面积：23万平方千米"
                var strs=str.split(" ");
                console.log(strs);
                textss.selectAll("tspan") 
                    .data(strs)  
                    .enter()  
                    .append("tspan") 
                    .transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(function(d,i){
                    return strs[i];
                }) ;
                /*textsss.transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(strs);*/
            }
            
            else if(t==21){
                $("#view4").empty();
                var $bmdDiv=$("#bottom-div");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg5=d3.select("#view4")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss = svg5.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");

                textss.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",18) 
                                .attr("font-family","Lantinghei SC");

                textss.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");
                
                var str="海南（琼）"+" "+"以海南岛得名。元设海南道。1988年建海南 省，实行省直接管辖市县的体制。 中国第五个经济特区。 面积：3.4万平方千米"
                var strs=str.split(" ");
                console.log(strs);
                textss.selectAll("tspan") 
                    .data(strs)  
                    .enter()  
                    .append("tspan") 
                    .transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(function(d,i){
                    return strs[i];
                }) ;
                /*textsss.transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(strs);*/
            }
            else if(t==22){
                $("#view4").empty();
                var $bmdDiv=$("#bottom-div");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg5=d3.select("#view4")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss = svg5.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");

                textss.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",18) 
                                .attr("font-family","Lantinghei SC");

                textss.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");
                
                var str="重庆（渝）"+" "+"以重庆府得名。宋光宗升恭州为重庆府。 重庆成为战争时期中国的政治、经济、文化 中心，反法西斯战争远东指挥中心。 面积：8.23万平方千米"
                var strs=str.split(" ");
                console.log(strs);
                textss.selectAll("tspan") 
                    .data(strs)  
                    .enter()  
                    .append("tspan") 
                    .transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(function(d,i){
                    return strs[i];
                }) ;
                /*textsss.transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(strs);*/
            }
            else if(t==23){
                $("#view4").empty();
                var $bmdDiv=$("#bottom-div");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg5=d3.select("#view4")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss = svg5.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");

                textss.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",18) 
                                .attr("font-family","Lantinghei SC");

                textss.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");
                
                var str="四川（川）"+" "+"以益利梓夔四路得名。宋设益州路，利州路， 梓州路，夔州路，合称四川，设四川制置使。 秦设蜀郡。成都是三国时期蜀国的都城。  面积：48万平方千米"
                var strs=str.split(" ");
                console.log(strs);
                textss.selectAll("tspan") 
                    .data(strs)  
                    .enter()  
                    .append("tspan") 
                    .transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(function(d,i){
                    return strs[i];
                }) ;
                /*textsss.transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(strs);*/
            }
            else if(t==24){
                $("#view4").empty();
                var $bmdDiv=$("#bottom-div");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg5=d3.select("#view4")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss = svg5.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");

                textss.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",18) 
                                .attr("font-family","Lantinghei SC");

                textss.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");
                
                var str="贵州（黔）"+" "+"以贵山得名。明置贵州土司。 贵州茅台酒、英国威士忌、法国白兰地为世 界三大蒸馏酒。 面积：17万平方千米"
                var strs=str.split(" ");
                console.log(strs);
                textss.selectAll("tspan") 
                    .data(strs)  
                    .enter()  
                    .append("tspan") 
                    .transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(function(d,i){
                    return strs[i];
                }) ;
                /*textsss.transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(strs);*/
            }
            
            else if(t==25){
                $("#view4").empty();
                var $bmdDiv=$("#bottom-div");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg5=d3.select("#view4")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss = svg5.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");

                textss.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",18) 
                                .attr("font-family","Lantinghei SC");

                textss.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");
                
                var str="云南（滇）"+" "+"以在云岭之南得名。汉设云南县。 远古时期，云南、四川、贵州地区的土著居 民开始相互迁徙。 面积：38万平方千米"
                var strs=str.split(" ");
                console.log(strs);
                textss.selectAll("tspan") 
                    .data(strs)  
                    .enter()  
                    .append("tspan") 
                    .transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(function(d,i){
                    return strs[i];
                }) ;
                /*textsss.transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(strs);*/
            }
            else if(t==26){
                $("#view4").empty();
                var $bmdDiv=$("#bottom-div");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg5=d3.select("#view4")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss = svg5.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");

                textss.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",18) 
                                .attr("font-family","Lantinghei SC");

                textss.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");
                
                var str="西藏（藏）"+" "+"以清正式定名得名。清设西藏办事大臣。 1965年中华人民共和国西藏自治区正式成立 ，西藏一词即成为西藏自治区的简称。 面积：120万平方千米"
                var strs=str.split(" ");
                console.log(strs);
                textss.selectAll("tspan") 
                    .data(strs)  
                    .enter()  
                    .append("tspan") 
                    .transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(function(d,i){
                    return strs[i];
                }) ;
                /*textsss.transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(strs);*/
            }
            else if(t==27){
                $("#view4").empty();
                var $bmdDiv=$("#bottom-div");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg5=d3.select("#view4")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss = svg5.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");

                textss.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",18) 
                                .attr("font-family","Lantinghei SC");

                textss.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");
                
                var str="陕西（陕）"+" "+"以陕原之西得名。宋设陕西路。 人文初祖黄帝的诞生地、部族发源地及陵寝 所在地。  面积：19万平方千米"
                var strs=str.split(" ");
                console.log(strs);
                textss.selectAll("tspan") 
                    .data(strs)  
                    .enter()  
                    .append("tspan") 
                    .transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(function(d,i){
                    return strs[i];
                }) ;
                /*textsss.transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(strs);*/
            }
            
            else if(t==28){
                $("#view4").empty();
                var $bmdDiv=$("#bottom-div");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg5=d3.select("#view4")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss = svg5.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");

                textss.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",18) 
                                .attr("font-family","Lantinghei SC");

                textss.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");
                
                var str="甘肃（甘）"+" "+"以甘州、肃州各取一字得名。元设甘肃路。 中华民族灿烂文化的重要发祥地。 面积：39万平方千米"
                var strs=str.split(" ");
                console.log(strs);
                textss.selectAll("tspan") 
                    .data(strs)  
                    .enter()  
                    .append("tspan") 
                    .transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(function(d,i){
                    return strs[i];
                }) ;
                /*textsss.transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(strs);*/
            }
            
            else if(t==29){
                $("#view4").empty();
                var $bmdDiv=$("#bottom-div");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg5=d3.select("#view4")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss = svg5.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");

                textss.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",18) 
                                .attr("font-family","Lantinghei SC");

                textss.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");
                
                var str="青海（青）"+" "+"以青海湖得名。清设青海办事大臣。 青海湖古称西海，十六国时期称青海，意为 青色的湖。 面积：72万平方千米"
                var strs=str.split(" ");
                console.log(strs);
                textss.selectAll("tspan") 
                    .data(strs)  
                    .enter()  
                    .append("tspan") 
                    .transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(function(d,i){
                    return strs[i];
                }) ;
                /*textsss.transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                .text(strs);*/
            }
            else if(t==30){
                $("#view4").empty();
                var $bmdDiv=$("#bottom-div");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg5=d3.select("#view4")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss = svg5.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");

                textss.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",18) 
                                .attr("font-family","Lantinghei SC");

                textss.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");
                
                var str="宁夏（宁）"+" "+"以西夏安宁得名。元设宁夏路。 是中华文明的发祥地之一。北倚贺兰山， 南凭六盘山，黄河纵贯北部全境，历史文化 悠久，古今素有“塞上江南”之美誉。 面积：6.6万平方千米"
                var strs=str.split(" ");
                console.log(strs);
                textss.selectAll("tspan") 
                    .data(strs)  
                    .enter()  
                    .append("tspan") 
                    .transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(function(d,i){
                    return strs[i];
                }) ;
                /*textsss.transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(strs);*/
            }
            else if(t==31){
                $("#view4").empty();
                var $bmdDiv=$("#bottom-div");
                var svgwidth=$bmdDiv.width();
                var svgheight=$bmdDiv.height();
                var margin = {top: 20, right: 20, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;
                var svg5=d3.select("#view4")
                    .append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "40 15"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                var textss = svg5.append("text") 
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");

                textss.transition()
                                .attr("x",0) 
                                .attr("y",0) 
                                .attr("font-size",18) 
                                .attr("font-family","Lantinghei SC");

                textss.transition()
                    .attr("x",0) 
                    .attr("y",0) 
                    .attr("font-size",18) 
                    .attr("font-family","Lantinghei SC");
                
                var str="新疆（新）"+" "+"以其为新辟疆土而得名。清设新疆省。   天山山脉将新疆分为南北两大部分，天山以 南为南疆、天山以北为北疆。汉称西域，意 为中国西部的疆域。 面积：160万平方千米"
                var strs=str.split(" ");
                console.log(strs);
                textss.selectAll("tspan") 
                    .data(strs)  
                    .enter()  
                    .append("tspan") 
                    .transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(function(d,i){
                    return strs[i];
                }) ;
                /*textsss.transition()
                    .attr("x",textss.attr("x"))  
                    .attr("dy","1em")  
                    .text(strs);*/
            }
            
            /*else if(t==2){
                d3.select("text").transition()
                .text("ddd");
            }*/
            
        }
    }
})()