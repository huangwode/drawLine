requirejs.config({
    baseUrl: '/Public/js'
});
var chartLine = {}

require(['trendChart'], function (trendChart) {
    // chartLine1 = new trendChart({css: {lines: [".line1"]}, lineWidth: 2, lineColor: "#BB8569"});
 
    for(var i = 1; i <= 10; i++){
        chartLine[i] = new trendChart({css: {lines: [".lineClass" + i]}, lineWidth: 2, lineColor: "#BB8569"});
    }  
    console.log(chartLine)
   
})
