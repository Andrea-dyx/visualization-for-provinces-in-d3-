var file=[
    ["population.csv","town.csv" , "village.csv"],["GDP.csv","primary_industry.csv","second_industry.csv","third_industry.csv","per_GDP.csv"],
    ["CPI_index.csv","CPI_level.csv"],
    ["ag_fo_he_fi.csv","agriculture.csv","forest.csv","herd.csv","fish.csv"],
    ["local_finan_income.csv","local_finan_outcome.csv"],
    ["water_use.csv","gas_use.csv","per_mill_bus.csv","per_road.csv","per_WC.csv"],
    ["abroad_travel.csv"],
    ["primary_school.csv","middle_school.csv","high_school.csv","college.csv"],
    ["patent_sum.csv","patent_invention.csv","patent_practical.csv","patent_design.csv"],   ["all_peo_endow.csv","job_peo_endow.csv","ret_peo_endow.csv"]
]

var year=["2016年","2015年","2014年","2013年","2012年","2011年","2010年","2009年","2008年","2007年"]

var units=[
    ["万人","万人","万人"],
    ["亿元","亿元","亿元","亿元","元／人"],
    ["上年=100","元"],
    ["亿元","亿元","亿元","亿元","亿元"],
    ["亿元","亿元"],
    ["%","%","标台","平方米","座"],
    ["百万美元"],
    ["教师人数=1","教师人数=1","教师人数=1","教师人数=1"],
    ["项","项","项","项"],
    ["万人","万人","万人"]
]

var dimen_name=[
    ["人口","城镇人口","农村人口"],
    ["国内生产总值","国内第一产业生产总值","国内第二产业生产总值","国内第三产业生产总值","国内人均生产总值"],
    ["居民消费水平指数","居民消费水平"],
    ["农林牧渔总产值","农业总产值","林业总产值","牧业总产值","渔业总产值"],
    ["地方财政一般预算收入","地方财政一般预算支出"],
    ["城市用水普及率","城市燃气普及率","每万人拥有公共交通车辆","人均城市道路面积","每万人拥有公共厕所"],
    ["国际旅游外汇收入"],
    ["小学生师比","初中生师比","高中生师比","高校生师比"],
    ["国内专利申请授权量","国内发明专利申请授权量","国内实用新型专利申请授权量","国内外观设计专利申请授权量"],
    ["城镇职工参加养老保险人数","在职职工参加养老保险人数","离退人员参加养老保险人数"]
]

 var state_order={"北京":0,"天津":1,"河北":2,"山西":3,"内蒙古":4,"辽宁":5,"吉林":6,"黑龙江":7,"上海":8,"江苏":9,"浙江":10,"安徽":11,"福建":12,"江西":13,"山东":14,"河南":15,"湖北":16,"湖南":17,"广东":18,"广西":19,"海南":20,"重庆":21,"四川":22,"贵州":23,"云南":24,"西藏":25,"陕西":26,"甘肃":27,"青海":28,"宁夏":29,"新疆":30};

function View1(){
    $("#view1").empty();
    var view1 = {};
    var $bmDiv=$("#top-div");
	var svgwidth=$bmDiv.width();
    var svgheight=$bmDiv.height();
    var margin = {top: 20, right: 20, bottom: 30, left: 40};
    var width = svgwidth - margin.left - margin.right;
    var height = svgheight - margin.top - margin.bottom;
	var svg=d3.select("#view1")
			.append("svg")
			.attr("width", "100%")
			.attr("height", "100%")
            .attr("preserveAspectRatio", "xMidYMid meet")
            .attr("viewBox", "100 -120 500 550");
    
    var projection = d3.geoMercator()  
                        .center([107, 31])  
                        .scale(600)  
                        .translate([width/2, height/2]); 
    
    var path = d3.geoPath()  
                .projection(projection);
    
    var color={};
    
    
    
    
    
    var q=0;
    for(q;q<34;q++){
        color[q]=d3.interpolate("#ffffcc", "#800026")((q+1)/34);
    }
    
    var tooltip=d3.select("body")  
                .append("div")  
                .attr("class","tooltip")  
                .style("opacity",0.0);  
    var file1="data/china.json";
    
    d3.json(file1, function(error, root) {  
          
        if (error)   
            return console.error(error);  
        //console.log(root.features);  
        /*for(q=0;q<34;q++){
                    console.log(q+1);
                    console.log(root.features[q].properties.name);
                }*/
          
        svg.selectAll("path")  
            .data( root.features )  
            .enter()  
            .append("path")  
            .attr("stroke","#000")  
            .attr("stroke-width",1)  
            .attr("fill", function(d,i){ 
                return d3.interpolate("#ffffcc", "#800026")(d.properties.id/34);  
            })  
            .attr("d", path )  
            .on("mouseover",function(d,i){  
                d3.select(this)  
                    .attr("fill","rgb("+(d3.rgb(d3.interpolate("#ffffcc", "#800026")(d.properties.id/34)).r+50)+","+(d3.rgb(d3.interpolate("#ffffcc", "#800026")(d.properties.id/34)).g+50)+","+(d3.rgb(d3.interpolate("#ffffcc", "#800026")(d.properties.id/34)).b)+")"); 
            
               tooltip.html(d.properties.name)  
                    .style("left",(d3.event.pageX-18)+"px")  
                    .style("top",(d3.event.pageY+16)+"px")  
                    .style("opacity",1.0);   
            })  
            .on("mouseout",function(d,i){  
                d3.select(this)  
                    .attr("fill",d3.interpolate("#ffffcc", "#800026")(d.properties.id/34));  
                tooltip.style("opacity",0.0);  
            })
             .on("mousemove",function(d){  
        /* 鼠标移动时，更改样式 left 和 top 来改变提示框的位置 */  
            tooltip.style("left",(d3.event.pageX-18)+"px")  
                .style("top",(d3.event.pageY+16)+"px");  
            })
             .on("click",function(d,i){
                state_info.view_info(i+1);
            });
            
          
    });  
}

var svg;
var color=new Array();
var color_light="#ECF5FF";//"#EBD3E8";
var color_deep="#00008B";
var tooltip;
var value_use=new Array();
var flag=true;

function View1_show(a,b,c=0){
    $("#view1").empty();
    //var color_light="#F8F8FF";
    //var color_deep="#8B668B";
    var view1 = {};
    var $bmDiv=$("#top-div");
	var svgwidth=$bmDiv.width();
    var svgheight=$bmDiv.height();
    var margin = {top: 20, right: 20, bottom: 30, left: 40};
    var width = svgwidth - margin.left - margin.right;
    var height = svgheight - margin.top - margin.bottom;
	svg=d3.select("#view1")
			.append("svg")
			.attr("width", "100%")
			.attr("height", "100%")
            .attr("preserveAspectRatio", "xMidYMid meet")
            .attr("viewBox", "100 -120 500 550");
    
    var projection = d3.geoMercator()  
                        .center([107, 31])  
                        .scale(600)  
                        .translate([width/2, height/2]); 
    
    var path = d3.geoPath()  
                .projection(projection);
    
    //var color=new Array();
    //console.log(file[a][b]);
    var it;
    
    var max,min;
    d3.csv("data/"+file[a][b], function(data){
        //console.log(data);
        for(it=0;it<31;it++){
            value_use[it]=data[it][year[c]]*1;
        }
        //console.log(value_use);
        max=d3.max(value_use);
        min=d3.min(value_use);
        //console.log(max);
        for(it=0;it<31;it++){
            color[it]=(value_use[it]-min)/(max-min);
        }
    });
    tooltip=d3.select("#view1")  
                .append("div")  
                .attr("class","tooltip")  
                .style("opacity",0.0);  
    var file1="data/china.json";
    
    
    d3.json(file1, function(error, root) {  
          
        if (error)   
            return console.error(error);  
        //console.log(root.features);  
        /*for(q=0;q<34;q++){
                    console.log(q+1);
                    console.log(root.features[q].properties.name);
                }*/
        
          
        svg.selectAll("path")  
            .data( root.features )  
            .enter()  
            .append("path")  
            .attr("stroke","#000")  
            .attr("stroke-width",1)  
            .attr("fill", function(d,i){ 
                return d3.interpolate(color_light, color_deep)(color[i]);  
            })  
            .attr("d", path )  
            .on("mouseover",function(d,i){  
                d3.select(this)  
                    .attr("fill","rgb("+(d3.rgb(d3.interpolate(color_light, color_deep)(color[i])).r+50)+","+(d3.rgb(d3.interpolate(color_light, color_deep)(color[i])).g+50)+","+(d3.rgb(d3.interpolate(color_light, color_deep)(color[i])).b)+")"); 

                tooltip.html(function(){if(i!=33){return d.properties.name+":"+value_use[i]+units[a][b];}else{return d.properties.name+"数据未统计"}})  
                    .style("left",(d3.event.pageX-35)+"px")  
                    .style("top",(d3.event.pageY+16)+"px")  
                    .style("opacity",1.0);   
                change_view1_1.show_change_view1_over(a,b,state_order[d.properties.name]);
                if(document.getElementById('see_specific').checked&&(!document.getElementById('added').checked)&&flag){
                    view3_2.view3_single(a,b,i);
                }
                //view3_2.view3_single(a,b,i);
            })  
            .on("mouseout",function(d,i){  
                d3.select(this)  
                    .attr("fill",d3.interpolate(color_light, color_deep)(color[i]));  
                tooltip.style("opacity",0.0); 
                change_view1_2.show_change_view1_out(a,b,state_order[d.properties.name]);
            })
            .on("mousemove",function(d){  
            /* 鼠标移动时，更改样式 left 和 top 来改变提示框的位置 */  
                tooltip.style("left",(d3.event.pageX-35)+"px")  
                    .style("top",(d3.event.pageY+16)+"px"); 
                change_view1_1.show_change_view1_over(a,b,state_order[d.properties.name]);
            })
            .on("click",function(d,i){
                state_info.view_state_info(i+1);
                if(document.getElementById('see_specific').checked&&(!document.getElementById('added').checked)){
                    //view3_1.show_view3();
                    view3_2.view3_single(a,b,i);
                    if(flag==true){
                        flag=false;
                    }
                    else{
                        console.log("change to true");
                        flag=true;
                    }
                    
                }
                if(document.getElementById('see_specific').checked&&document.getElementById('added').checked){
                    view3_1.show_view3(a,b,i);
                    //view3_2.view3_single(a,b,i);
                    
                }
            
                 if(document.getElementById('see_all').checked){
                    document.getElementById('added').checked=false;
                    view3_3.view3_stack(a,i);
                    //view3_2.view3_single(a,b,i);
                    
                }
            

            });
        var TitleText = svg.append("text")
                    .attr("class","titleText")
					.attr("x", 300)
					.attr("y", -90)
					.attr("dy", "-0.3em")
					.text(dimen_name[a][b]);
        var TitleYear = svg.append("text")
                    .attr("class","titleText")
					.attr("x", 300)
					.attr("y", -65)
					.attr("dy", "-0.3em")
					.text(year[c]);
        
        var defs = svg.append("defs");
		var linearGradient = defs.append("linearGradient")
								.attr("id","linearColor")
								.attr("x1","0%")
								.attr("y1","0%")
								.attr("x2","100%")
								.attr("y2","0%");

		var stop1 = linearGradient.append("stop")
						.attr("offset","0%")
						.style("stop-color",color_light);

		var stop2 = linearGradient.append("stop")
						.attr("offset","100%")
						.style("stop-color",color_deep);

		//添加一个矩形，并应用线性渐变
		var colorRect = svg.append("rect")
					.attr("x", 550)
					.attr("y", 300)
					.attr("width", 140)
					.attr("height", 30)
					.style("fill","url(#" + linearGradient.attr("id") + ")");

		//添加文字
        //console.log(min);
        //console.log(max);
        
        
        
		var minValueText = svg.append("text")
                    .attr("class","valueText")
					.attr("x", 550)
					.attr("y", 300)
					.attr("dy", "-0.3em")
					.text(min+units[a][b]);

		var maxValueText = svg.append("text")
                    .attr("class","valueText")
					.attr("x", 690)
					.attr("y", 300)
					.attr("dy", "-0.3em")
					.text(max+units[a][b]);
            
          
    });  
}

var change_view2_1;
(function(){
    change_view2_1={
        show_change_view2_over:function(a,b,t){
            var state_name=["北京","天津","河北","山西","内蒙古","辽宁","吉林","黑龙江","上海","江苏","浙江","安徽","福建","江西","山东","河南","湖北","湖南","广东","广西","海南","重庆","四川","贵州","云南","西藏","陕西","甘肃","青海","宁夏","新疆"];
            //console.log("s:"+t);
            svg.selectAll("path")    
            .attr("fill",function(d,i){
                if (i===t){
                    return "rgb("+(d3.rgb(d3.interpolate(color_light, color_deep)(color[i])).r+50)+","+(d3.rgb(d3.interpolate(color_light, color_deep)(color[i])).g+50)+","+(d3.rgb(d3.interpolate(color_light, color_deep)(color[i])).b)+")";
                }
                else{
                    return d3.interpolate(color_light, color_deep)(color[i]); 
                }
            });
            
            tooltip.html(function(){if(t!=33){return state_name[t]+":"+value_use[t]+units[a][b];}else{return state_name[t]+"数据未统计"}})  
                    .style("left",(d3.event.pageX-35)+"px")  
                    .style("top",(d3.event.pageY+16)+"px")  
                    .style("opacity",1.0);  
        }
 }
})()       
var change_view2_2;
(function(){
    change_view2_2={
        show_change_view2_out:function(a,b,t){
            var state_name=["北京","天津","河北","山西","内蒙古","辽宁","吉林","黑龙江","上海","江苏","浙江","安徽","福建","江西","山东","河南","湖北","湖南","广东","广西","海南","重庆","四川","贵州","云南","西藏","陕西","甘肃","青海","宁夏","新疆"];
            //console.log("s:"+t);
            svg.selectAll("path")    
            .attr("fill",function(d,i){
                    return d3.interpolate(color_light, color_deep)(color[i]);     
            });
            
            tooltip.style("opacity",0.0);  
        }
}
})() 

var change_view2_3;
(function(){
    change_view2_3={
        
        show_change_view2_move:function(a,b,t){
              var state_name=["北京","天津","河北","山西","内蒙古","辽宁","吉林","黑龙江","上海","江苏","浙江","安徽","福建","江西","山东","河南","湖北","湖南","广东","广西","海南","重庆","四川","贵州","云南","西藏","陕西","甘肃","青海","宁夏","新疆"];
            //console.log("s:"+t);
            svg.selectAll("path")    
            .attr("fill",function(d,i){
                if (i===t){
                    return "rgb("+(d3.rgb(d3.interpolate(color_light, color_deep)(color[i])).r+50)+","+(d3.rgb(d3.interpolate(color_light, color_deep)(color[i])).g+50)+","+(d3.rgb(d3.interpolate(color_light, color_deep)(color[i])).b)+")";
                }
                else{
                    return d3.interpolate(color_light, color_deep)(color[i]); 
                }
            });
            
             tooltip.style("left",(d3.event.pageX-35)+"px")  
                .style("top",(d3.event.pageY+16)+"px");  
        }
   }
})() 


var change_view3_1;
(function(){
    change_view3_1={
        show_change_view3_over:function(a,b,c){//a,b为类别，c为数值        
            tooltip.html(function(){
                console.log(c+units[a][b]);
                return c+units[a][b];
                //if(t!=33){return state_name[t]+":"+value_use[t]+units[a][b];}else{return state_name[t]+"数据未统计"}
            })  
            .style("left",(d3.event.pageX-35)+"px")  
            .style("top",(d3.event.pageY+16)+"px")  
            .style("opacity",1.0);  
        }
 }
})()       
var change_view3_2;
(function(){
    change_view3_2={
        show_change_view3_out:function(a,b,t){
            tooltip.style("opacity",0.0);  
        }
}
})() 

var change_view3_3;
(function(){
    change_view3_3={
        show_change_view3_move:function(a,b,t){
             tooltip.style("left",(d3.event.pageX-35)+"px")  
                .style("top",(d3.event.pageY+16)+"px");  
        }
   }
})() 



var change_view3_1_1;
(function(){
    change_view3_1_1={
        show_change_view3_over:function(a,c,po){//a,b为类别，c为数值        
            if(po!=9){
                tooltip.html(function(){
                    if(a==0||a==9){
                        //console.log(dimen_name[a][1]+":"+c[0]+units[a][1]);
                        return dimen_name[a][1]+":"+c[0]+units[a][1]+"<br/>"+dimen_name[a][2]+":"+c[1]+units[a][2];
                    }
                    else if(a==1||a==8){
                        return dimen_name[a][1]+":"+c[0]+units[a][1]+"<br/>"+dimen_name[a][2]+":"+c[1]+units[a][2]+"<br/>"+dimen_name[a][3]+":"+c[2]+units[a][3];
                    }
                    else if(a==3){
                        return dimen_name[a][1]+":"+c[0]+units[a][1]+"<br/>"+dimen_name[a][2]+":"+c[1]+units[a][2]+"<br/>"+dimen_name[a][3]+":"+c[2]+units[a][3]+"<br/>"+dimen_name[a][4]+":"+c[3]+units[a][4]+"<br/>"+"其它"+":"+c[4]+units[a][4];
                    }
                })  
                .style("left",(d3.event.pageX-35)+"px")  
                .style("top",(d3.event.pageY+16)+"px")  
                .style("opacity",1.0);  
            }
            else{
                tooltip.html(function(){
                    if(a==0||a==9){
                        //console.log(dimen_name[a][1]+":"+c[0]+units[a][1]);
                        return dimen_name[a][1]+":"+"<br/>"+c[0]+units[a][1]+"<br/>"+dimen_name[a][2]+":"+"<br/>"+c[1]+units[a][2];
                    }
                    else if(a==1||a==8){
                        return dimen_name[a][1]+":"+"<br/>"+c[0]+units[a][1]+"<br/>"+dimen_name[a][2]+":"+"<br/>"+c[1]+units[a][2]+"<br/>"+dimen_name[a][3]+":"+"<br/>"+c[2]+units[a][3];
                    }
                    else if(a==3){
                        return dimen_name[a][1]+":"+"<br/>"+c[0]+units[a][1]+"<br/>"+dimen_name[a][2]+":"+"<br/>"+c[1]+units[a][2]+"<br/>"+dimen_name[a][3]+":"+"<br/>"+c[2]+units[a][3]+"<br/>"+dimen_name[a][4]+":"+"<br/>"+c[3]+units[a][4]+"<br/>"+"其它"+":"+"<br/>"+c[4]+units[a][4];
                    }
                    //if(t!=33){return state_name[t]+":"+value_use[t]+units[a][b];}else{return state_name[t]+"数据未统计"}
                })  
                .style("left",(d3.event.pageX-35)+"px")  
                .style("top",(d3.event.pageY+16)+"px")  
                .style("opacity",1.0); 
            }
        }
 }
})()       
var change_view3_2_1;
(function(){
    change_view3_2_1={
        show_change_view3_out:function(){
            tooltip.style("opacity",0.0);  
        }
}
})() 

var change_view3_3_1;
(function(){
    change_view3_3_1={
        show_change_view3_move:function(){
             tooltip.style("left",(d3.event.pageX-35)+"px")  
                .style("top",(d3.event.pageY+16)+"px");  
        }
   }
})() 




