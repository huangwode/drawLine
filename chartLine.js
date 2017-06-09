
requirejs.config({
    baseUrl: '/Public/js'
});
var chartLine=null;
require(['trendChart'], function (trendChart) {
    chartLine = new trendChart({css: {lines: [".hover2"]}, lineWidth: 2, lineColor: "#BB8569"});
})
