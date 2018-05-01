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

var state_name=["北京","天津","河北","山西","内蒙古","辽宁","吉林","黑龙江","上海","江苏","浙江","安徽","福建","江西","山东","河南","湖北","湖南","广东","广西","海南","重庆","四川","贵州","云南","西藏","陕西","甘肃","青海","宁夏","新疆"];
    

var svg1;
var bars;
function view2_view(a,b,c){
    $("#view2").empty();
    var $triDiv=$("#view2");
    var svgwidth=$triDiv.width();
    var svgheight=$triDiv.height();
    var margin = {top: 20, right: 10, bottom: 30, left: 40};
    var width = svgwidth - margin.left - margin.right;
    var height = svgheight - margin.top - margin.bottom;
    
    //var x = d3.scaleBand().rangeRound([0, width]).padding(0.1);
	//var y = d3.scaleLinear().rangeRound([height, 0]);
    
    var x = d3.scaleBand().rangeRound([0, width]).padding(0.1);

    var y = d3.scaleLinear().rangeRound([height, 0]);

    var xAxis = d3.axisBottom(x);

    var yAxis = d3.axisLeft(y);

    svg1 = d3.select("#view2").append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("preserveAspectRatio", "xMidYMid meet")
        .attr("viewBox", "0 0"+" "+svgwidth+" "+svgheight)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
     
    var pre_arrary= new Array();
    var it;
    var abbreviation=["京","津","冀","晋","内蒙","辽","吉","黑","沪","苏","浙","皖","闽","赣","鲁","豫","鄂","湘","粤","桂","琼","渝","川","黔","滇","藏","陕","甘","青","宁","新"];
    
    
    var ori_order={"京":1,"津":2,"冀":3,"晋":4,"内蒙":5,"辽":6,"吉":7,"黑":8,"沪":9,"苏":10,"浙":11,"皖":12,"闽":13,"赣":14,"鲁":15,"豫":16,"鄂":17,"湘":18,"粤":19,"桂":20,"琼":21,"渝":22,"川":23,"黔":24,"滇":25,"藏":26,"陕":27,"甘":28,"青":29,"宁":30,"新":31};
    
    
    var TitleText = svg1.append("text")
                    .attr("class","titleText_view2")
					.attr("x", 160)
					.attr("y", 6)
					.attr("dy", "-0.3em")
					.text(dimen_name[a][b]);
    var TitleYear = svg1.append("text")
                    .attr("class","titleText_view2")
					.attr("x", 285)
					.attr("y", 6)
					.attr("dy", "-0.3em")
					.text(year[c]);
    
    
    var tooltip=d3.select("#view2")  
                .append("div")  
                .attr("class","tooltip")  
                .style("opacity",0.0); 
    
    d3.csv("data/"+file[a][b], function(error, data) {
        data=data.slice(0,31);
        //console.log(data);
        for(it=0;it<31;it++){
            data[it]["地区"]=abbreviation[it];
            pre_arrary[it]=data[it][year[c]]*1;
        }
        
        var pre_max=d3.max(pre_arrary);
        //console.log(pre_max);
		x.domain(data.map(function(d) { return d["地区"]; }));
		y.domain([0, pre_max]);

      //console.log(data.map(function(d) { return d["地区"]; }));
      svg1.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);

      svg1.append("g")
          .attr("class", "y axis")
          .call(yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text(units[a][b]);
      var tooltip=d3.select("#view2")  
            .append("div1")  
            .attr("class","tooltip1")  
            .style("opacity",0.0); 
        
     d3.selectAll("input").on("change", changed);

      /*var timeout = d3.timeout(function() {
        d3.select("input[value=\"grouped\"]")
        .property("checked", true)
        .dispatch("change");
      }, 2000);*/

      bars=svg1.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class","bar")
        .attr("fill", "#8B668B")
        .attr("x", function(d) { return x(d["地区"]); })
        .attr("width",x.bandwidth())
        .attr("y", function(d) { return y(d[year[c]]); })
        .attr("height", function(d) { return height - y(d[year[c]]); })
        .on("mouseover",function(d,i){ 
                    view1_view2_over(a,b,ori_order[d["地区"]]-1);
                    //console.log(ori_order[d["地区"]]);
                    //console.log(i);
                    d3.select(this)
                        .style("fill","#D8BFD8"); 
                  
        })
        .on("mouseout",function(d,i){
                    view1_view2_out(a,b,ori_order[d["地区"]]-1);
                    d3.select(this)  
                    .style("fill","#8B668B");  
                    tooltip.style("opacity",0.0);  
        })
        .on("mousemove",function(d){ 
             view1_view2_move(a,b,ori_order[d["地区"]]-1);
        /* 鼠标移动时，更改样式 left 和 top 来改变提示框的位置 */  
            tooltip.style("left",(d3.event.pageX-35)+"px")  
                .style("top",(d3.event.pageY+16)+"px");  
            });
        
        /*bars.append("title")
			.text(function(d,i) { 
				return state_name[i]+":"+pre_arrary[i]+units[a][b];
        })*/
     

        
      function changed(){
            //timeout.stop();
            if(document.getElementById('sorted').checked)
            transitionsorted();
            else 
            transitionunsorted();
            
      }
        
      function transitionsorted(){
          console.log("change to sort")
          /*var x0 = x.domain(data.sort(this.checked
            ? function(a, b) { return b[year[c]] - a[year[c]]; }
            : function(a, b) { return d3.ascending(a["地区"], b["地区"]); })
            .map(function(d) { return d["地区"]; }))
            .copy();*/
          
        var x0 = x.domain(data.sort(
            function(a, b) { return b[year[c]] - a[year[c]]; })
            .map(function(d) { return d["地区"]; }))
            .copy();
        //console.log(data);

        svg1.selectAll(".bar")
            .sort(function(a, b) { return x0(a["地区"]) - x0(b["地区"]); });

        var transition = svg1.transition().duration(750),
            delay = function(d, i) { return i * 50; };

        transition.selectAll(".bar")
            .delay(delay)
            .attr("x", function(d) { return x0(d["地区"]); });

        transition.select(".x.axis")
            .call(xAxis)
          .selectAll("g")
            .delay(delay);
          
      }
        
      function transitionunsorted(){
             var x0 = x.domain(data.sort(
            function(a, b) { return ori_order[a["地区"]] - ori_order[b["地区"]]; })
            .map(function(d) { return d["地区"]; }))
            .copy();
            //console.log(data);

        svg1.selectAll(".bar")
            .sort(function(a, b) { return x0(a["地区"]) - x0(b["地区"]); });

        var transition = svg1.transition().duration(750),
            delay = function(d, i) { return i * 50; };

        transition.selectAll(".bar")
            .delay(delay)
            .attr("x", function(d) { return x0(d["地区"]); });

        transition.select(".x.axis")
            .call(xAxis)
          .selectAll("g")
            .delay(delay);
        }
        
    });
    
    

}

function view1_view2_over(a,b,t){
    //console.log("ss");
    change_view2_1.show_change_view2_over(a,b,t);
}

function view1_view2_out(a,b,t){
    //console.log("ss");
    change_view2_2.show_change_view2_out(a,b,t);
}

function view1_view2_move(a,b,t){
    //console.log("ss");
    change_view2_3.show_change_view2_move(a,b,t);
}

function view2_view2(a,b,c){
    $("#view2").empty();
    var $triDiv=$("#top-right");
    var svgwidth=$triDiv.width();
    var svgheight=$triDiv.height();
    var margin = {top: 20, right: 10, bottom: 30, left: 40};
    var width = svgwidth - margin.left - margin.right;
    var height = svgheight - margin.top - margin.bottom;
    
    //var x = d3.scaleBand().rangeRound([0, width]).padding(0.1);
	//var y = d3.scaleLinear().rangeRound([height, 0]);
    
    var x = d3.scaleBand().rangeRound([0, width]).padding(0.1);

    var y = d3.scaleLinear().rangeRound([height, 0]);

    var xAxis = d3.axisBottom(x);

    var yAxis = d3.axisLeft(y);

    var svg = d3.select("#view2").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
     
    var pre_arrary= new Array();
    var it;
    var abbreviation=["京","津","冀","晋","内蒙","辽","吉","黑","沪","苏","浙","皖","闽","赣","鲁","豫","鄂","湘","粤","桂","琼","渝","川","黔","滇","藏","陕","甘","青","宁","新"];
    
    var state_name=["北京","天津","河北","山西","内蒙古","辽宁","吉林","黑龙江","上海","江苏","浙江","安徽","福建","江西","山东","河南","湖北","湖南","广东","广西","海南","重庆","四川","贵州","云南","西藏","陕西","甘肃","青海","宁夏","新疆"];
    
    
    var TitleText = svg.append("text")
                    .attr("class","titleText")
					.attr("x", 160)
					.attr("y", 6)
					.attr("dy", "-0.3em")
					.text(dimen_name[a][b]);
    var TitleYear = svg.append("text")
                    .attr("class","titleText")
					.attr("x", 280)
					.attr("y", 6)
					.attr("dy", "-0.3em")
					.text(year[c]);
    
    
    var tooltip=d3.select("#view2")  
                .append("div")  
                .attr("class","tooltip")  
                .style("opacity",0.0); 
    
    d3.csv("data/"+file[a][b], function(error, data) {
        data=data.slice(0,31);
        //console.log(data);
        for(it=0;it<31;it++){
            data[it]["地区"]=abbreviation[it];
            pre_arrary[it]=data[it][year[c]]*1;
        }
        
        var pre_max=d3.max(pre_arrary);
        //console.log(pre_max);
		x.domain(data.map(function(d) { return d["地区"]; }));
		y.domain([0, pre_max]);

      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text(units[a][b]);
      var tooltip=d3.select("#view2")  
            .append("div1")  
            .attr("class","tooltip1")  
            .style("opacity",0.0); 

      var bars=svg.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d["地区"]); })
        .attr("width",x.bandwidth())
        .attr("y", function(d) { return y(d[year[c]]); })
        .attr("height", function(d) { return height - y(d[year[c]]); })
        .on("mouseover",function(d,i){  
                    console.log(i);
                    d3.select(this)
                        .style("fill","#A4D3EE"); 

                   tooltip.html(function(){if(i!=33){return state_name[i]+":"+pre_arrary[i]+units[a][b];}else{return state_name[i]+"数据未统计"}})  
                        .style("left",(d3.event.pageX-18)+"px")  
                        .style("top",(d3.event.pageY+16)+"px")  
                        .style("opacity",1.0); 
        })
        .on("mouseout",function(d,i){
                    d3.select(this)  
                    .style("fill","steelblue");  
                    tooltip.style("opacity",0.0);  
        })
        .on("mousemove",function(d){  
        /* 鼠标移动时，更改样式 left 和 top 来改变提示框的位置 */  
            tooltip.style("left",(d3.event.pageX-18)+"px")  
                .style("top",(d3.event.pageY+16)+"px");  
            });
        
        bars.append("title")
			.text(function(d,i) { 
				return state_name[i]+":"+pre_arrary[i]+units[a][b];
        })
      d3.select("input").on("change", change);

      var sortTimeout = setTimeout(function() {
        d3.select("input").property("checked", true).each(change);
      }, 2000);

      function change() {
        clearTimeout(sortTimeout);

        // Copy-on-write since tweens are evaluated after a delay.
        var x0 = x.domain(data.sort(this.checked
            ? function(a, b) { return b[year[c]] - a[year[c]]; }
            : function(a, b) { return d3.ascending(a["地区"], b["地区"]); })
            .map(function(d) { return d["地区"]; }))
            .copy();

        svg.selectAll(".bar")
            .sort(function(a, b) { return x0(a["地区"]) - x0(b["地区"]); });

        var transition = svg.transition().duration(750),
            delay = function(d, i) { return i * 50; };

        transition.selectAll(".bar")
            .delay(delay)
            .attr("x", function(d) { return x0(d["地区"]); });

        transition.select(".x.axis")
            .call(xAxis)
          .selectAll("g")
            .delay(delay);
      }
    });
    
    

}

function view2_show(a,b,c){
    //console.log(a,b,c);
    $("#view2").empty();
    var $triDiv=$("#top-right");
    var svgwidth=$triDiv.width();
    var svgheight=$triDiv.height();
    var margin = {top: 20, right: 10, bottom: 30, left: 40};
    var width = svgwidth - margin.left - margin.right;
    var height = svgheight - margin.top - margin.bottom;
    /*var svg=d3.select("#view2")
        .append("svg")
        .attr("width", svgwidth)
        .attr("height", svgheight);
        //.attr("preserveAspectRatio", "xMidYMid meet")
        //.attr("viewBox", "500 -90 500 550");
    var g=svg.append("g")
        .attr("transform","translate("+margin.left+","+margin.top+")");
    
    
    g.append("g")
        .append("text")
        .text("here!!!!")
        .attr("x",1000)
        .attr("y",200);*/
    
    var svg=d3.select("#view2")
        .append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("preserveAspectRatio", "xMidYMid meet")
        .attr("viewBox", "0 0"+" "+svgwidth+" "+svgheight);
			
	var g = svg.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
		
	var x = d3.scaleBand().rangeRound([0, width]).padding(0.1);
	var y = d3.scaleLinear().rangeRound([height, 0]);
	
	var xAxis=d3.axisBottom(x);
	var yAxis=d3.axisLeft(y).ticks(10);
	
	var xAxisg=g.append("g")
			.attr("class", "axis axis--x")
			.attr("transform", "translate(0," + height + ")");
	var yAxisg=g.append("g")
			.attr("class", "axis axis--y");	
			
	var transition = d3.transition()
		.duration(750)
		.ease(d3.easeLinear);
	
	var addcnt=0;

    function state_data(states,pre_data){
        this.statas=states;
        this.pre_data=pre_data;
    }
    
    var pre_arrary= new Array();
    var abbreviation=["京","津","冀","晋","内蒙","辽","吉","黑","沪","苏","浙","皖","闽","赣","鲁","豫","鄂","湘","粤","桂","琼","渝","川","黔","滇","藏","陕","甘","青","宁","新"];
    
    var state_name=["北京","天津","河北","山西","内蒙古","辽宁","吉林","黑龙江","上海","江苏","浙江","安徽","福建","江西","山东","河南","湖北","湖南","广东","广西","海南","重庆","四川","贵州","云南","西藏","陕西","甘肃","青海","宁夏","新疆"]
    
    var TitleText = g.append("text")
                    .attr("class","titleText")
					.attr("x", 160)
					.attr("y", 6)
					.attr("dy", "-0.3em")
					.text(dimen_name[a][b]);
    var TitleYear = g.append("text")
                    .attr("class","titleText")
					.attr("x", 280)
					.attr("y", 6)
					.attr("dy", "-0.3em")
					.text(year[c]);
    
     var tooltip=d3.select("#view2")  
                .append("div")  
                .attr("class","tooltip")  
                .style("opacity",0.0);  
    
    /*var tip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html(function(d) {
            return state_name[i]+":"+pre_arrary[i]+units[a][b];
        });*/

    
    
	d3.csv("data/"+file[a][b],function(error, data) {
		if (error) throw error;
		data=data.slice(0,31);
		//console.log(data);
        for(it=0;it<31;it++){
            data[it]["地区"]=abbreviation[it];
            pre_arrary[it]=data[it][year[c]]*1;
        }
        
        
        
		
		function updatebars(){
			//属性的更新
			bars.transition(transition)
                .delay(function(d, i) { return i * 30; })
                .attr("x", function(d) { return x(d["地区"]); })
			bars.attr("y", function(d) { return y(d[year[c]]); })
				.attr("width", x.bandwidth())
				.attr("height", function(d) { return height - y(d[year[c]]); })
				.attr("fill","steelblue");
            
            
		}
        //console.log(pre_arrary);
		var pre_max=d3.max(pre_arrary);
        //console.log(pre_max);
		x.domain(data.map(function(d) { return d["地区"]; }));
		y.domain([0, pre_max]);
        //console.log(d3.max(data, function(d) { return d[year[c]]; }));
		
		
		
		xAxisg.call(xAxis);

		yAxisg.call(yAxis)
			.append("text")
			.attr("transform", "rotate(-90)")
			.attr("y", 6)
			.attr("dy", "0.71em")
			.attr("text-anchor", "end")
			.text(units[a][b]);
			
		
		var bars = g.append("g")
			.selectAll(".bar")
			.data(data)
			.enter().append("rect")
			.attr("class", "bar")
            .on("mouseover",function(d,i){  
                    //console.log(i);
                    d3.select(this)
                        .style("fill","#A4D3EE"); 

                   tooltip.html(function(){if(i!=33){return state_name[i]+":"+pre_arrary[i]+units[a][b];}else{return state_name[i]+"数据未统计"}})  
                        .style("left",(d3.event.pageX-18)+"px")  
                        .style("top",(d3.event.pageY+16)+"px")  
                        .style("opacity",1.0); 
                })
            .on("mouseout",function(d,i){
                    d3.select(this)  
                    .style("fill","steelblue");  
                    tooltip.style("opacity",0.0);  
            })
            .on("mousemove",function(d){  
        /* 鼠标移动时，更改样式 left 和 top 来改变提示框的位置 */  
            tooltip.style("left",(d3.event.pageX-18)+"px")  
                .style("top",(d3.event.pageY+16)+"px");  
            });
		/*bars.append("title")
			.text(function(d,i) { 
				return state_name[i]+":"+pre_arrary[i]+units[a][b];
			})*/
		updatebars();

	});
}

var change_view1_1;
(function(){
    change_view1_1={
        show_change_view1_over:function(a,b,t){
            //console.log("change"+t);
            bars.attr("fill", function(d,i){
                if(i===t){
                    return "#D8BFD8";
                }
                else{
                    return "#8B668B";
                }
                
            })
        }
 }
})()  

var change_view1_2;
(function(){
    change_view1_2={
        show_change_view1_out:function(a,b,t){
            //console.log("change:"+t);
            bars.attr("fill", function(d,i){
                    return "#8B668B";   
            })
        }
 }
})()  
            