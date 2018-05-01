var svg3;
var dataset=[];
var xScale,yScale,xInner,xInnerBar,yInnerBar,yInner;
var lineColor=["#FFB6C1","#DC143C","#DB7093","#FF69B4","#FF1493","#C71585","#DA70D6","#D8BFD8","#DDA0DD","#EE82EE"];
var barColor=
[
    "#EEB4B4","#EEE0E5","#EED2EE","#EEE685","#EE7621"
]
var w,h,padding,foot_height,legend;
var xAxis,yAxis,xBar,yBar;
var lineNames=[]; //保存系列名称
var lines=[]; //保存折线图对象
var xMarks=["2016年","2015年","2014年","2013年","2012年","2011年","2010年","2009年","2008年","2007年"].reverse(); 	
padding=10;
var currentLineNum=0;
var maxdata,mindata;
var kind,subkind;
var lineNames=[];

//定义折线类
function CrystalLineObject()
{
    this.group=null;
    this.path=null;
    this.oldData=[];

    this.init=function(id)
    {
        var arr=dataset[id];
        this.group=svg3.append("g");

        var line = d3.line()
        .x(function(d,i){return xScale(i);})
        .y(function(d){return yScale(d);});

        //添加折线
        this.path=this.group.append("path")
        .attr("d",line(arr))
        .style("fill","none")
        .style("stroke-width",1)
        .style("stroke",lineColor[id])
        .style("stroke-opacity",0.9);

        //添加系列的小圆点
        this.group.selectAll("circle")
        .data(arr)
        .enter()
        .append("circle")
        .attr("cx", function(d,i) {
        return xScale(i);
        })
        .attr("cy", function(d) {
        return yScale(d);
        })
        .attr("r",5)
        .attr("fill",lineColor[id])
        .on("mouseout",function(d,i){
            change_view3_2.show_change_view3_out(kind,subkind,arr[i]);
        })
        .on("mousemove",function(d,i){
            change_view3_3.show_change_view3_move(kind,subkind,arr[i]);
        })
        .on("mouseover",function(d,i){
            console.log("dddd");
            change_view3_1.show_change_view3_over(kind,subkind,arr[i]);
        })
        this.oldData=arr;
    };

    //动画初始化方法
    this.movieBegin=function(id)
    {
        var arr=dataset[i];
        //补足/删除路径
        var olddata=this.oldData;
        var line= d3.line()
        .x(function(d,i){if(i>=olddata.length) return w-padding; else return xScale(i);})
        .y(function(d,i){if(i>=olddata.length) return h-foot_height; else return yScale(olddata[i]);});

        //路径初始化
        this.path.attr("d",line(arr));

        //截断旧数据
        var tempData=olddata.slice(0,arr.length);
        var circle=this.group.selectAll("circle").data(tempData);

        //删除多余的圆点
        circle.exit().remove();

        //圆点初始化，添加圆点,多出来的到右侧底部
        this.group.selectAll("circle")
        .data(arr)
        .enter()
        .append("circle")
        .attr("cx", function(d,i){
        if(i>=olddata.length) return w-padding; else return xScale(i);
        })
        .attr("cy",function(d,i){
        if(i>=olddata.length) return h-foot_height; else return yScale(d);
        })
        .attr("r",5)
        .attr("fill",lineColor[id]);

        this.oldData=arr;
    };

    //重绘加动画效果
    this.reDraw=function(id,_duration)
    {
        var arr=dataset[i];
        var line = d3.line()
        .x(function(d,i){return xScale(i);})
        .y(function(d){return yScale(d);});

        //路径动画
        this.path.transition().duration(_duration).attr("d",line(arr));

        //圆点动画
        this.group.selectAll("circle")
        .transition()
        .duration(_duration)
        .attr("cx", function(d,i) {
        return xScale(i);
        })
        .attr("cy", function(d) {
        return yScale(d);
        })
    };

    //从画布删除折线
    this.remove=function()
    {
        this.group.remove();
    };
}


var view3_1;
(function(){
    view3_1={
        show_view3:function(a=0,b=0,d=0){
            console.log("view3");
 	        kind=a;
            subkind=b;
 	 
            //用一个变量存储标题和副标题的高度，如果没有标题什么的，就为0
            var head_height=padding;
            var title=dimen_name[a][b];
            var subTitle="2007年至2016年";


            //用一个变量计算底部的高度，如果不是多系列，就为0
            foot_height=padding;
            
            foot_height+=25;

            //定义画布
            $("#view3").empty();
            var $triDiv=$("#view3");
            var svgwidth=$triDiv.width();
            var svgheight=$triDiv.height();
            var margin = {top: 20, right: 10, bottom: 30, left: 40};
            var width = svgwidth - margin.left - margin.right;
            var height = svgheight - margin.top - margin.bottom;
            w=width;
            h=height;

            svg3=d3.select("#view3")
            .append("svg")
            .attr("width","100%")
            .attr("height","100%")
            .attr("preserveAspectRatio", "xMidYMid meet")
            .attr("viewBox", "0 0"+" "+svgwidth+" "+svgheight)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            //添加标题
            if(title!="")
            {
                svg3.append("g")
                .append("text")
                .text(title)
                .attr("class","title")
                .attr("x",width/2)
                .attr("y",height+10);

                head_height+=10;
            }

            //添加副标题
            if(subTitle!="")
            {
                svg3.append("g")
                .append("text")
                .text(subTitle)
                .attr("class","subTitle")
                .attr("x",width/2)
                .attr("y",height+25);

                head_height+=0;
            }
            legend=svg3.append("g");

            d3.csv("data/"+file[a][b],function(error,data){
                currentLineNum++;
                lineNames.push(data[d]["地区"]);
                console.log("main"+lineNames);
                var tmp=new Array();
                for(var i=0;i<10;i++){
                    tmp[i]=data[d][[year[9-i]]]*1;
                }
                dataset.push(tmp);
                dataset=unique(dataset);
                lineNames=unique(lineNames);
                maxdata=getMaxdata(dataset);
                mindata=getMindata(dataset);
                console.log(dataset);
                currentLineNum=dataset.length;

                //横坐标轴比例尺
                xScale = d3.scaleLinear()
                .domain([0,dataset[0].length-1])
                .range([padding,w-padding]);

                //纵坐标轴比例尺
                yScale = d3.scaleLinear()
                .domain([mindata-(maxdata-mindata)*0.1,maxdata+(maxdata-mindata)*0.1])
                .range([h-foot_height,head_height]);

                //定义横轴网格线
                xInner = d3.axisBottom(xScale)
                //.scale(xScale)
                .tickSize(-(h-foot_height-15),0,0)
                .tickFormat("")
                //.orient("bottom")
                .ticks(dataset[0].length);

                //添加横轴网格线
                xInnerBar=svg3.append("g")
                .attr("class","inner_line")
                .attr("transform", "translate(0," + (h - padding) + ")")
                .call(xInner);

                //定义纵轴网格线
                yInner = d3.axisLeft(yScale)
                //.scale(yScale)
                .tickSize(-(w-padding*2),0,0)
                .tickFormat("")
                //.orient("left")
                .ticks(10);

                //添加纵轴网格线
                yInnerBar=svg3.append("g")
                .attr("class", "inner_line")
                .attr("transform", "translate("+padding+",0)")
                .call(yInner);

                //定义横轴
                xAxis = d3.axisBottom(xScale)
                //.scale(xScale)
                //.orient("bottom")
                .ticks(dataset[0].length);

                //添加横坐标轴
                xBar=svg3.append("g")
                .attr("class","axis")
                .attr("transform", "translate(0," + (h - foot_height) + ")")
                .call(xAxis);

                //通过编号获取对应的横轴标签
                xBar.selectAll("text")
                .text(function(d){return xMarks[d];});

                //定义纵轴
                yAxis = d3.axisLeft(yScale)
                //.scale(yScale)
                //.orient("left")
                .ticks(11);

                //添加纵轴
                yBar=svg3.append("g")
                .attr("class", "axis")
                .attr("transform", "translate("+padding+",0)")
                .call(yAxis);

                //添加图例
                

                //添加折线
                lines=[];
                for(i=0;i<currentLineNum;i++)
                {
                    var newLine=new CrystalLineObject();
                    newLine.init(i);
                    lines.push(newLine);
                }
                draw_add();
                //addLegend();
            });    
        }    
    }
})()


function addLegend()
{
    var textGroup=legend.selectAll("text")
    .data(lineNames);
    console.log("legeng:"+lineNames);

    //textGroup.exit().remove();

    legend.selectAll("text")
    .data(lineNames)
    .enter()
    .append("text")
    .text(function(d){return d;})
    .attr("class","legend")
    .attr("x", function(d,i) {return i*100;})
    .attr("y",0)
    .attr("fill",function(d,i){ return lineColor[i];});

    var rectGroup=legend.selectAll("rect")
    .data(lineNames);

    //rectGroup.exit().remove();

    legend.selectAll("rect")
    .data(lineNames)
    .enter()
    .append("rect")
    .attr("x", function(d,i) {return i*100-20;})
    .attr("y",-10)
    .attr("width",12)
    .attr("height",12)
    .attr("fill",function(d,i){ return lineColor[i];});

    legend.attr("transform","translate("+((w-lineNames.length*100)/2)+","+(h-10)+")");
}
 	 
 	//重新作图
function draw_add(){	
    var _duration=1000;

    //getData(a,b,d);

    

    //设置线条动画起始位置
    var lineObject=new CrystalLineObject();

    /*for(i=0;i<dataset.length;i++)
    {
        if(i<currentLineNum)
        {
        //对已有的线条做动画
            lineObject=lines[i];
            lineObject.movieBegin(i);
        }
        else
        {
        //如果现有线条不够，就加上一些
            var newLine=new CrystalLineObject();
            newLine.init(i);
            lines.push(newLine);
        }
    }*/

    //删除多余的线条，如果有的话
    /*if(dataset.length<currentLineNum)
    {
        for(i=dataset.length;i<currentLineNum;i++)
        {
            lineObject=lines[i];
            lineObject.remove();
        }
        lines.splice(dataset.length,currentLineNum-dataset.length);
    }*/

    maxdata=getMaxdata(dataset);
    mindata=getMindata(dataset);
    newLength=dataset[0].length;

    //横轴数据动画
    xScale.domain([0,newLength-1]);
    xAxis.scale(xScale).ticks(newLength);
    xBar.transition().duration(_duration).call(xAxis);
    xBar.selectAll("text").text(function(d){return xMarks[d];});
    xInner.scale(xScale).ticks(newLength);
    xInnerBar.transition().duration(_duration).call(xInner);

    //纵轴数据动画
    yScale.domain([mindata,maxdata]);
    yBar.transition().duration(_duration).call(yAxis);
    yInnerBar.transition().duration(_duration).call(yInner);

    //开始线条动画
    for(i=0;i<lines.length;i++)
    {
        lineObject=lines[i];
        lineObject.reDraw(i,_duration);
    }

    currentLineNum=dataset.length;
    dataLength=newLength;
    addLegend();
 	
 	//添加图例
}
 	 
 	 
 	//取得多维数组最大值
function unique(arr) {
    var result = [], hash = {};
    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
    //http://www.cnblogs.com/sosoft/
}

function getMaxdata(arr)
{
    maxdata=0;
    for(i=0;i<arr.length;i++)
    {
        maxdata=d3.max([maxdata,d3.max(arr[i])]);
    }
    return maxdata;
}

function getMindata(arr)
{
    mindata=Number.MAX_VALUE;
    for(i=0;i<arr.length;i++)
    {
        mindata=d3.min([mindata,d3.min(arr[i])]);
    }
    return mindata;
}
   
    
var view3_2;
(function(){
    view3_2={
    view3_single:function(a=0,b=0,d=0){
        console.log("view3");
        kind=a;
        subkind=b;
        //用一个变量存储标题和副标题的高度，如果没有标题什么的，就为0
        var head_height=padding;
        var title=state_name[d]+dimen_name[a][b];
        var subTitle="2007年至2016年";


        //用一个变量计算底部的高度，如果不是多系列，就为0
        foot_height=padding;

        foot_height+=25;

        //定义画布
        $("#view3").empty();
        var $triDiv=$("#view3");
        var svgwidth=$triDiv.width();
        var svgheight=$triDiv.height();
        var margin = {top: 20, right: 10, bottom: 30, left: 40};
        var width = svgwidth - margin.left - margin.right;
        var height = svgheight - margin.top - margin.bottom;
        w=width;
        h=height;

        svg3=d3.select("#view3")
        .append("svg")
        .attr("width","100%")
        .attr("height","100%")
        .attr("preserveAspectRatio", "xMidYMid meet")
        .attr("viewBox", "0 0"+" "+svgwidth+" "+svgheight)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        //添加标题
        if(title!="")
        {
            svg3.append("g")
            .append("text")
            .text(title)
            .attr("class","title")
            .attr("x",width/2)
            .attr("y",height+10);

            head_height+=10;
        }

        //添加副标题
        if(subTitle!="")
        {
            svg3.append("g")
            .append("text")
            .text(subTitle)
            .attr("class","subTitle")
            .attr("x",width/2)
            .attr("y",height+25);

            head_height+=0;
        }
        legend=svg3.append("g");
        
        svg3.append("g")
            .append("text")
            .text(units[a][b])
            .attr("class","subTitle")
            .attr("x",25)
            .attr("y",head_height-5);

        d3.csv("data/"+file[a][b],function(error,data){
        currentLineNum=0;
        dataset=[];
        lineNames=[];
        lineNames.push(data[d]["地区"]);
        var tmp=new Array();
        for(var i=0;i<10;i++){
            tmp[i]=data[d][[year[9-i]]]*1;
        }
        dataset.push(tmp);
        maxdata=getMaxdata(dataset);
        mindata=getMindata(dataset);
        console.log(dataset);
        currentLineNum=dataset.length;

        //横坐标轴比例尺
        xScale = d3.scaleLinear()
        .domain([0,dataset[0].length-1])
        .range([padding,w-padding]);

        //纵坐标轴比例尺
        yScale = d3.scaleLinear()
        .domain([mindata-(maxdata-mindata)*0.1,maxdata+(maxdata-mindata)*0.1])
        .range([h-foot_height,head_height]);

        //定义横轴网格线
        xInner = d3.axisBottom(xScale)
        //.scale(xScale)
        .tickSize(-(h-foot_height+4),0,0)
        .tickFormat("")
        //.orient("bottom")
        .ticks(dataset[0].length);

        //添加横轴网格线
        xInnerBar=svg3.append("g")
        .attr("class","inner_line")
        .attr("transform", "translate(0," + (h - padding) + ")")
        .call(xInner);

        //定义纵轴网格线
        yInner = d3.axisLeft(yScale)
        //.scale(yScale)
        .tickSize(-(w-padding*2),0,0)
        .tickFormat("")
        //.orient("left")
        .ticks(10);

        //添加纵轴网格线
        yInnerBar=svg3.append("g")
        .attr("class", "inner_line")
        .attr("transform", "translate("+padding+",0)")
        .call(yInner);

        //定义横轴
        xAxis = d3.axisBottom(xScale)
        //.scale(xScale)
        //.orient("bottom")
        .ticks(dataset[0].length);

        //添加横坐标轴
        xBar=svg3.append("g")
        .attr("class","axis")
        .attr("transform", "translate(0," + (h - foot_height) + ")")
        .call(xAxis);

        //通过编号获取对应的横轴标签
        xBar.selectAll("text")
        .text(function(d){return xMarks[d];});

        //定义纵轴
        yAxis = d3.axisLeft(yScale)
        //.scale(yScale)
        //.orient("left")
        .ticks(11);

        //添加纵轴
        yBar=svg3.append("g")
        .attr("class", "axis")
        .attr("transform", "translate("+padding+",0)")
        .call(yAxis);

        //添加图例
        //addLegend();

        //添加折线
        lines=[];
        for(i=0;i<currentLineNum;i++)
        {
            var newLine=new CrystalLineObject();
            newLine.init(i);
            lines.push(newLine);
        }
        //draw_add();
     });  
} 
}
})()

var view3_3;
(function(){
    view3_3={
        view3_stack:function(a=0,s=0){//a代表大的种类，s代表哪个省
            //console.log("view3");
            
            if(a==0||a==9){
                console.log("thisone");
                view3_two(a,s);
            }
            else if(a==1||a==8){
                view3_three(a,s);
            }
            else if(a==3){
                view3_five(a,s);
            }
        } 
    }
})()

var svg4;
function view3_two(a,s){
    $("#view3").empty();
    d3.csv("data/"+file[a][1], function(data1) {
        d3.csv("data/"+file[a][2],function(data2){
            var values1=[[],[]];
            var i;
            for(i=0;i<10;i++){
                values1[0][i]=data1[s][year[i]]*1;
                values1[1][i]=data2[s][year[i]]*1;
            
            }
            console.log(values1);

            var n = 2, // The number of series.
                m = 10; // The number of values per series.
        // The xz array has m elements, representing the x-values shared by all series.
        // The yz array has n elements, representing the y-values of each of the n series.
        // Each yz[i] is an array of m non-negative numbers representing a y-value for xz[i].
        // The y01z array has the same structure as yz, but with stacked [y₀, y₁] instead of y.
        //var values=d3.range(n).map(function() { return bumps(); });
            //['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
            var xz = d3.range(m),
                yz = values1,
                y01z  = d3.stack().keys(d3.range(n))(d3.transpose(yz)),
                yMax = d3.max(yz, function(y) { return d3.max(y); }),
                y1Max = d3.max(y01z, function(y) { return d3.max(y, function(d) { return d[1]; }); });
            //console.log("xz:"+xz);
            //console.log("yz:"+yz);
            //console.log(y01z);
            console.log("yMax:"+yMax);
            console.log("y1Max:"+y1Max);
            
            


            var $briDiv=$("#view3");
            var svgwidth=$briDiv.width();
            var svgheight=$briDiv.height();
            var margin = {top: 20, right: 10, bottom: 30, left: 40};
            var width = svgwidth - margin.left - margin.right;
            var height = svgheight - margin.top - margin.bottom;
            
            svg4 = d3.select("#view3").append("svg")
                .attr("width", "100%")
                .attr("height", "100%")
                .attr("preserveAspectRatio", "xMidYMid meet")
                .attr("viewBox", "0 0"+" "+svgwidth+" "+svgheight)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            svg4.append("text")
                 .text(state_name[s]+dimen_name[a][0])
                 .attr("class","title")
                 .attr("x",width/2-40)
                 .attr("y",25);

            var xx = d3.scaleBand()
                .domain(xz)
                //.range(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'])
                .rangeRound([10, width])
                .padding(0.1);

            var yy = d3.scaleLinear()
                .domain([0, y1Max])
                .rangeRound([height, 30]);



            var color = d3.scaleOrdinal()
                .domain(d3.range(n))
                .range(barColor);

            var series = svg4.selectAll(".series")
                .data(y01z)
                .enter().append("g")
                //.attr("class","g")
                .attr("fill", function(d, i) { return color(i); });

            var rectt = series.selectAll("rect")
                .data(function(d) { return d; })
                .enter().append("rect")
                .attr("x", function(d, i) { return xx(i); })//+10
                .attr("y", height)
                .attr("width", xx.bandwidth()-12)
                .attr("height", 0);

            console.log(y01z);
            var when_to_change=true;

            rectt.transition()
                .delay(function(d, i) { return i * 10; })
                .attr("y", function(d) { return yy(d[1]); })
                .attr("height", function(d) { return yy(d[0]) - yy(d[1]); });
            rectt.on("mouseover",function(d,i){
                    var tmppp=[values1[0][i],values1[1][i]]
                    change_view3_1_1.show_change_view3_over(a,tmppp,i);
                })
                .on("mouseout",function(d,i){
                    change_view3_2_1.show_change_view3_out();
                })
                .on("mousemove",function(d,i){
                    change_view3_3_1.show_change_view3_move();
                });

            svg4.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(d3.scaleBand()
                    .domain(year)
                //.range(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'])
                    .rangeRound([0, width])
                    .padding(0.1)));

            var yaxis=svg4.append("g")
                .attr("class", "y axis")
                .attr("transform", "translate(10,0)")
                .call(d3.axisLeft(yy));
            
            svg4.append("g")
                .append("text")
                .attr("x", 10)  
                .attr("y", 10)  
                .text(units[a][0]);  

            var legendss=svg4.selectAll(".legend")
                .data([dimen_name[a][1],dimen_name[a][2]])
                .enter().append("g")
                .attr("class","legend")
                .attr("font-family", "sans-serif")
                .attr("font-size", 15)
                .attr("text-anchor", "end")
                .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });
            
            legendss.append("rect")
                .attr("y",11.5)
                .attr("x", width - 19)
                .attr("width", 19)
                .attr("height", 19)
                .attr("fill",  function(d, i) { return color(i); });
            
            legendss.append("text")
                .attr("x", width - 35)
                .attr("y", 20.5)
                .attr("dy", "0.32em")
                .text(function(d) { return d; });

            
            /*var legendss = svg3.append("g")
                .attr("font-family", "sans-serif")
                .attr("font-size", 15)
                .attr("text-anchor", "end")
                .selectAll(".bar")
                .data([dimen_name[a][1],dimen_name[a][2]])
                .enter().append("g")
                .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });*/
//transitionStacked();
            d3.select(document.getElementById('stacked'))
                .on("change", changed);
            var timeout = d3.timeout(function() {
            d3.select("input[value=\"stacked\"]")
                .property("checked", false)
                .dispatch("change");
            }, 2000);

            


            function changed() {
              timeout.stop();
              if (document.getElementById('stacked').checked) transitionStacked();
              else transitionGrouped();
              //transitionGrouped();
            }
            function transitionGrouped() {
                yy=d3.scaleLinear()
                    .domain([0, yMax])
                    .rangeRound([height, 30]);
                
                
                rectt.transition()
                    .duration(500)
                    .delay(function(d, i) { return i * 10; })
                    .attr("x", function(d, i) { return xx(i) + xx.bandwidth() / n * this.parentNode.__data__.key+10; })//+10
                    .attr("width", xx.bandwidth() / n)
                    .transition()
                    .attr("y", function(d) { return yy(d[1] - d[0]); })
                    .attr("height", function(d) { return yy(0) - yy(d[1] - d[0]); });

                /*txt1.transition()
                .attr("x",function(d,i){return xx(i)+35;})*/

                /*txt2.transition()
                .attr("y",height-2)
                .attr("x",function(d,i){return xx(i)+65;})*/


                yaxis.transition()
                    .attr("transform", "translate(10,0)")
                    .call(d3.axisLeft(d3.scaleLinear()
                    .domain([0, yMax])
                    .rangeRound([height, 30])));

            }

            function transitionStacked() {
              yy.domain([0, y1Max]);

              rectt.transition()
                  .duration(500)
                  .delay(function(d, i) { return i * 10; })
                  .attr("y", function(d) { return yy(d[1]); })
                  .attr("height", function(d) { return yy(d[0]) - yy(d[1]); })
                .transition()
                  .attr("x", function(d, i) { return xx(i); })//+10
                  .attr("width", xx.bandwidth()-12);


              yaxis.transition()
                    .attr("transform", "translate(10,0)")
                    .call(d3.axisLeft(yy));

               /* txt1.transition()
                    .attr("x",function(d,i){return x(i)+48;})

                txt2.transition()
                    .attr("y",20)
                    .attr("x",function(d,i){return x(i)+48;})*/
            }
        });
    });

}

function view3_three(a,s){
    $("#view3").empty();
    d3.csv("data/"+file[a][1], function(data1) {
        d3.csv("data/"+file[a][2],function(data2){
            d3.csv("data/"+file[a][3],function(data3){
                
            
                var values1=[[],[],[]];
                var i;
                for(i=0;i<10;i++){
                    values1[0][i]=data1[s][year[i]]*1;
                    values1[1][i]=data2[s][year[i]]*1;
                    values1[2][i]=data3[s][year[i]]*1;

                }
                console.log(values1);

                var n = 3, // The number of series.
                    m = 10; // The number of values per series.
            // The xz array has m elements, representing the x-values shared by all series.
            // The yz array has n elements, representing the y-values of each of the n series.
            // Each yz[i] is an array of m non-negative numbers representing a y-value for xz[i].
            // The y01z array has the same structure as yz, but with stacked [y₀, y₁] instead of y.
            //var values=d3.range(n).map(function() { return bumps(); });
                //['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
                var xz = d3.range(m),
                    yz = values1,
                    y01z  = d3.stack().keys(d3.range(n))(d3.transpose(yz)),
                    yMax = d3.max(yz, function(y) { return d3.max(y); }),
                    y1Max = d3.max(y01z, function(y) { return d3.max(y, function(d) { return d[1]; }); });
                //console.log("xz:"+xz);
                //console.log("yz:"+yz);
                //console.log(y01z);
                console.log("yMax:"+yMax);
                console.log("y1Max:"+y1Max);




                var $briDiv=$("#view3");
                var svgwidth=$briDiv.width();
                var svgheight=$briDiv.height();
                var margin = {top: 20, right: 10, bottom: 30, left: 40};
                var width = svgwidth - margin.left - margin.right;
                var height = svgheight - margin.top - margin.bottom;

                var svg4 = d3.select("#view3").append("svg")
                    .attr("width", "100%")
                    .attr("height", "100%")
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .attr("viewBox", "0 0"+" "+svgwidth+" "+svgheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                svg4.append("text")
                     .text(state_name[s]+dimen_name[a][0])
                     .attr("class","title")
                     .attr("x",width/2-40)
                     .attr("y",25);

                var xx = d3.scaleBand()
                    .domain(xz)
                    //.range(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'])
                    .rangeRound([10, width])
                    .padding(0.1);

                var yy = d3.scaleLinear()
                    .domain([0, y1Max])
                    .rangeRound([height, 30]);



                var color = d3.scaleOrdinal()
                    .domain(d3.range(n))
                    .range(barColor);

                var series = svg4.selectAll(".series")
                    .data(y01z)
                    .enter().append("g")
                    //.attr("class","g")
                    .attr("fill", function(d, i) { return color(i); });

                var rectt = series.selectAll("rect")
                    .data(function(d) { return d; })
                    .enter().append("rect")
                    .attr("x", function(d, i) { return xx(i); })//+10
                    .attr("y", height)
                    .attr("width", xx.bandwidth()-12)
                    .attr("height", 0);

                console.log(y01z);
                var when_to_change=true;

                rectt.transition()
                    .delay(function(d, i) { return i * 10; })
                    .attr("y", function(d) { return yy(d[1]); })
                    .attr("height", function(d) { return yy(d[0]) - yy(d[1]); });
                rectt.on("mouseover",function(d,i){
                        var tmppp=[values1[0][i],values1[1][i],values1[2][i]];
                        change_view3_1_1.show_change_view3_over(a,tmppp,i);
                    })
                    .on("mouseout",function(d,i){
                        change_view3_2_1.show_change_view3_out();
                    })
                    .on("mousemove",function(d,i){
                        change_view3_3_1.show_change_view3_move();
                    });

                svg4.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + height + ")")
                    .call(d3.axisBottom(d3.scaleBand()
                        .domain(year)
                    //.range(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'])
                        .rangeRound([0, width])
                        .padding(0.1)));

                var yaxis=svg4.append("g")
                    .attr("class", "y axis")
                    .attr("transform", "translate(10,0)")
                    .call(d3.axisLeft(yy));

                svg4.append("g")
                    .append("text")
                    .attr("x", 10)  
                    .attr("y", 10)  
                    .text(units[a][0]);  

                var legendss=svg4.selectAll(".legend")
                    .data([dimen_name[a][1],dimen_name[a][2],dimen_name[a][3]])
                    .enter().append("g")
                    .attr("class","legend")
                    .attr("font-family", "sans-serif")
                    .attr("font-size", 15)
                    .attr("text-anchor", "end")
                    .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

                legendss.append("rect")
                    .attr("y",11.5)
                    .attr("x", width - 19)
                    .attr("width", 19)
                    .attr("height", 19)
                    .attr("fill",  function(d, i) { return color(i); });

                legendss.append("text")
                    .attr("x", width - 35)
                    .attr("y", 20.5)
                    .attr("dy", "0.32em")
                    .text(function(d) { return d; });


                /*var legendss = svg3.append("g")
                    .attr("font-family", "sans-serif")
                    .attr("font-size", 15)
                    .attr("text-anchor", "end")
                    .selectAll(".bar")
                    .data([dimen_name[a][1],dimen_name[a][2]])
                    .enter().append("g")
                    .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });*/
    //transitionStacked();
                d3.select(document.getElementById('stacked'))
                    .on("change", changed);
                var timeout = d3.timeout(function() {
                d3.select("input[value=\"stacked\"]")
                    .property("checked", false)
                    .dispatch("change");
                }, 2000);




                function changed() {
                  timeout.stop();
                  if (document.getElementById('stacked').checked) transitionStacked();
                  else transitionGrouped();
                  //transitionGrouped();
                }
                function transitionGrouped() {
                    yy=d3.scaleLinear()
                        .domain([0, yMax])
                        .rangeRound([height, 30]);


                    rectt.transition()
                        .duration(500)
                        .delay(function(d, i) { return i * 10; })
                        .attr("x", function(d, i) { return xx(i) + xx.bandwidth() / n * this.parentNode.__data__.key+10; })//+10
                        .attr("width", xx.bandwidth() / n)
                        .transition()
                        .attr("y", function(d) { return yy(d[1] - d[0]); })
                        .attr("height", function(d) { return yy(0) - yy(d[1] - d[0]); });

                    /*txt1.transition()
                    .attr("x",function(d,i){return xx(i)+35;})*/

                    /*txt2.transition()
                    .attr("y",height-2)
                    .attr("x",function(d,i){return xx(i)+65;})*/


                    yaxis.transition()
                        .attr("transform", "translate(10,0)")
                        .call(d3.axisLeft(d3.scaleLinear()
                        .domain([0, yMax])
                        .rangeRound([height, 30])));

                }

                function transitionStacked() {
                  yy.domain([0, y1Max]);

                  rectt.transition()
                      .duration(500)
                      .delay(function(d, i) { return i * 10; })
                      .attr("y", function(d) { return yy(d[1]); })
                      .attr("height", function(d) { return yy(d[0]) - yy(d[1]); })
                    .transition()
                      .attr("x", function(d, i) { return xx(i); })//+10
                      .attr("width", xx.bandwidth()-12);


                  yaxis.transition()
                        .attr("transform", "translate(10,0)")
                        .call(d3.axisLeft(yy));

                   /* txt1.transition()
                        .attr("x",function(d,i){return x(i)+48;})

                    txt2.transition()
                        .attr("y",20)
                        .attr("x",function(d,i){return x(i)+48;})*/
                }
            });
        });
    });
    
}

function view3_five(a,s){
    $("#view3").empty();
    d3.csv("data/"+file[a][1], function(data1) {
        d3.csv("data/"+file[a][2],function(data2){
            d3.csv("data/"+file[a][3],function(data3){
                d3.csv("data/"+file[a][4],function(data4){
                    d3.csv("data/"+file[a][0],function(data5){
                        
                        var values1=[[],[],[],[],[]];
                        var i;
                        for(i=0;i<10;i++){
                            values1[0][i]=data1[s][year[i]]*1;
                            values1[1][i]=data2[s][year[i]]*1;
                            values1[2][i]=data3[s][year[i]]*1;
                            values1[3][i]=data4[s][year[i]]*1;
                            values1[4][i]=(data5[s][year[i]]*1-values1[0][i]-values1[1][i]-values1[2][i]-values1[3][i]).toFixed(1);

                        }
                        console.log(values1);

                        var n = 5, // The number of series.
                            m = 10; // The number of values per series.
                    // The xz array has m elements, representing the x-values shared by all series.
                    // The yz array has n elements, representing the y-values of each of the n series.
                    // Each yz[i] is an array of m non-negative numbers representing a y-value for xz[i].
                    // The y01z array has the same structure as yz, but with stacked [y₀, y₁] instead of y.
                    //var values=d3.range(n).map(function() { return bumps(); });
                        //['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
                        var xz = d3.range(m),
                            yz = values1,
                            y01z  = d3.stack().keys(d3.range(n))(d3.transpose(yz)),
                            yMax = d3.max(yz, function(y) { return d3.max(y); }),
                            y1Max = d3.max(y01z, function(y) { return d3.max(y, function(d) { return d[1]; }); });
                        //console.log("xz:"+xz);
                        //console.log("yz:"+yz);
                        //console.log(y01z);
                        console.log("yMax:"+yMax);
                        console.log("y1Max:"+y1Max);




                        var $briDiv=$("#view3");
                        var svgwidth=$briDiv.width();
                        var svgheight=$briDiv.height();
                        var margin = {top: 20, right: 10, bottom: 30, left: 40};
                        var width = svgwidth - margin.left - margin.right;
                        var height = svgheight - margin.top - margin.bottom;

                        var svg4 = d3.select("#view3").append("svg")
                            .attr("width", "100%")
                            .attr("height", "100%")
                            .attr("preserveAspectRatio", "xMidYMid meet")
                            .attr("viewBox", "0 0"+" "+svgwidth+" "+svgheight)
                            .append("g")
                            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                        svg4.append("text")
                             .text(state_name[s]+dimen_name[a][0])
                             .attr("class","title")
                             .attr("x",width/2-40)
                             .attr("y",25);

                        var xx = d3.scaleBand()
                            .domain(xz)
                            //.range(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'])
                            .rangeRound([10, width])
                            .padding(0.1);

                        var yy = d3.scaleLinear()
                            .domain([0, y1Max])
                            .rangeRound([height, 30]);



                        var color = d3.scaleOrdinal()
                            .domain(d3.range(n))
                            .range(barColor);

                        var series = svg4.selectAll(".series")
                            .data(y01z)
                            .enter().append("g")
                            //.attr("class","g")
                            .attr("fill", function(d, i) { return color(i); });

                        var rectt = series.selectAll("rect")
                            .data(function(d) { return d; })
                            .enter().append("rect")
                            .attr("x", function(d, i) { return xx(i); })//+10
                            .attr("y", height)
                            .attr("width", xx.bandwidth()-12)
                            .attr("height", 0);

                        console.log(y01z);
                        var when_to_change=true;

                        rectt.transition()
                            .delay(function(d, i) { return i * 10; })
                            .attr("y", function(d) { return yy(d[1]); })
                            .attr("height", function(d) { return yy(d[0]) - yy(d[1]); });
                        rectt.on("mouseover",function(d,i){
                                var tmppp=[values1[0][i],values1[1][i],values1[2][i],values1[3][i],values1[4][i]];
                                change_view3_1_1.show_change_view3_over(a,tmppp,i);
                            })
                            .on("mouseout",function(d,i){
                                change_view3_2_1.show_change_view3_out();
                            })
                            .on("mousemove",function(d,i){
                                change_view3_3_1.show_change_view3_move();
                            });

                        svg4.append("g")
                            .attr("class", "x axis")
                            .attr("transform", "translate(0," + height + ")")
                            .call(d3.axisBottom(d3.scaleBand()
                                .domain(year)
                            //.range(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'])
                                .rangeRound([0, width])
                                .padding(0.1)));

                        var yaxis=svg4.append("g")
                            .attr("class", "y axis")
                            .attr("transform", "translate(10,0)")
                            .call(d3.axisLeft(yy));

                        svg4.append("g")
                            .append("text")
                            .attr("x", 10)  
                            .attr("y", 10)  
                            .text(units[a][0]);  

                        var legendss=svg4.selectAll(".legend")
                            .data([dimen_name[a][1],dimen_name[a][2],dimen_name[a][3],dimen_name[a][4],"其他"])
                            .enter().append("g")
                            .attr("class","legend")
                            .attr("font-family", "sans-serif")
                            .attr("font-size", 15)
                            .attr("text-anchor", "end")
                            .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

                        legendss.append("rect")
                            .attr("y",11.5)
                            .attr("x", width - 19)
                            .attr("width", 19)
                            .attr("height", 19)
                            .attr("fill",  function(d, i) { return color(i); });

                        legendss.append("text")
                            .attr("x", width - 35)
                            .attr("y", 20.5)
                            .attr("dy", "0.32em")
                            .text(function(d) { return d; });


                        /*var legendss = svg3.append("g")
                            .attr("font-family", "sans-serif")
                            .attr("font-size", 15)
                            .attr("text-anchor", "end")
                            .selectAll(".bar")
                            .data([dimen_name[a][1],dimen_name[a][2]])
                            .enter().append("g")
                            .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });*/
            //transitionStacked();
                        d3.select(document.getElementById('stacked'))
                            .on("change", changed);
                        var timeout = d3.timeout(function() {
                        d3.select("input[value=\"stacked\"]")
                            .property("checked", false)
                            .dispatch("change");
                        }, 2000);




                        function changed() {
                          timeout.stop();
                          if (document.getElementById('stacked').checked) transitionStacked();
                          else transitionGrouped();
                          //transitionGrouped();
                        }
                        function transitionGrouped() {
                            yy=d3.scaleLinear()
                                .domain([0, yMax])
                                .rangeRound([height, 30]);


                            rectt.transition()
                                .duration(500)
                                .delay(function(d, i) { return i * 10; })
                                .attr("x", function(d, i) { return xx(i) + xx.bandwidth() / n * this.parentNode.__data__.key+10; })//+10
                                .attr("width", xx.bandwidth() / n)
                                .transition()
                                .attr("y", function(d) { return yy(d[1] - d[0]); })
                                .attr("height", function(d) { return yy(0) - yy(d[1] - d[0]); });

                            /*txt1.transition()
                            .attr("x",function(d,i){return xx(i)+35;})*/

                            /*txt2.transition()
                            .attr("y",height-2)
                            .attr("x",function(d,i){return xx(i)+65;})*/


                            yaxis.transition()
                                .attr("transform", "translate(10,0)")
                                .call(d3.axisLeft(d3.scaleLinear()
                                .domain([0, yMax])
                                .rangeRound([height, 20])));

                        }

                        function transitionStacked() {
                          yy.domain([0, y1Max]);

                          rectt.transition()
                              .duration(500)
                              .delay(function(d, i) { return i * 10; })
                              .attr("y", function(d) { return yy(d[1]); })
                              .attr("height", function(d) { return yy(d[0]) - yy(d[1]); })
                            .transition()
                              .attr("x", function(d, i) { return xx(i); })//+10
                              .attr("width", xx.bandwidth()-12);


                          yaxis.transition()
                                .attr("transform", "translate(10,0)")
                                .call(d3.axisLeft(yy));

                           /* txt1.transition()
                                .attr("x",function(d,i){return x(i)+48;})

                            txt2.transition()
                                .attr("y",20)
                                .attr("x",function(d,i){return x(i)+48;})*/
                        }
                    });
                });
            });
        });
    });
}