(function () {
    'use strict';

    var app = angular.module('examples', ['chart.js']);

    app.controller('TabsCtrl', function ($scope) {
        $scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        $scope.active = true;
        $scope.exceptionReason = "Order(DN-11503) has been create order plan";
        $scope.data = [
            [65, 59, 90, 81, 56, 55, 40]
        ];
        $scope.backgroundColor = [
            [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)'
            ]
        ],
        $scope.options = {

            //布尔——如果我们展示规模以上的图表数据
            scaleOverlay : false,
//布尔——如果我们想要用硬编码的范围覆盖
            scaleOverride : false,
//** 如果需要scaleOverride是正确的 **
//步骤的数量在一个硬编码的数量规模
            scaleSteps : null,
//数量-值硬编码的规模
            scaleStepWidth : null,
//数量规模起始值
            scaleStartValue : null,
//字符串,刻度线的颜色
            scaleLineColor : "rgba(0,0,0,.1)",
//像素数量标度线的宽度
            scaleLineWidth : 1,
//布尔——无论是规模上的标签
            scaleShowLabels : false,
//插值JS字符串,可以访问值
            scaleLabel : "<%=value%>",
//字符串,标尺刻度标尺刻度的字体声明
            scaleFontFamily : "'Arial'",
//规模数量的标签字体大小(以像素为单位)
            scaleFontSize : 12,
//字符串——规模标签字体风格
            scaleFontStyle : "normal",
//字符串——规模标签字体颜色
            scaleFontColor : "#666",
//布尔——无论是网格线在图所示
            scaleShowGridLines : true,
//字符串,网格线的颜色
            scaleGridLineColor : "rgba(0,0,0,.05)",
//网格线的宽度
            scaleGridLineWidth : 1,
//布尔——无论是点之间的线是弯曲的
            bezierCurve : false,
//布尔——是否显示为每个点一个点
            pointDot : true,
//每个点的像素点的数量,半径
            pointDotRadius : 3,
//数字像素宽度的点中风
            pointDotStrokeWidth : 0,
//布尔——是否显示数据集的中风
            datasetStroke : false,
//像素宽度的数量数据集
            datasetStrokeWidth : 2,
//布尔——是否用颜色填充数据集
            datasetFill : true,
//布尔——无论是动画图表
//             animation : true,
//数字,数字动画的步骤
            animationSteps : 60,
//字符串——动画放松效果
            animationEasing : "easeOutQuart",
//函数——火灾当动画完成
            onAnimationComplete : null,

        showScale: false,
            // bezierCurve: false,
            // pointDot : true,
            responsive: true,
            tooltips: {
                cornerRadius: 56,
                caretSize: 56,
                xPadding: 16,
                yPadding: 10,
                backgroundColor: 'rgba(0, 150, 100, 0.9)',
                titleFontStyle: 'normal',
                titleMarginBottom: 15
            },
            yAxis: [{
                formatter:'{value}%',
                axisLabel: {formatter: '{value}%'}
            }],
            title: {
                display: true,
                text: 'Kindmate - Chart Static Donate'
            },
           /* tooltips: {
                enabled: true,
                mode: 'index',
                position: 'nearest',
                custom: false
            },*/
            // showTooltips:false,
            animation: {
                duration: 100,
                onComplete: function() {
                    var chartInstance = this.chart,
                        ctx = chartInstance.ctx;

                    ctx.font = Chart.helpers.fontString(
                        Chart.defaults.global.defaultFontSize,
                        Chart.defaults.global.defaultFontStyle,
                        Chart.defaults.global.defaultFontFamily
                    );
                    ctx.textAlign = "center";
                    ctx.textBaseline = "bottom";
                    ctx.fillStyle = "#F5A623";
                    this.data.datasets.forEach(function(dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function(bar, index) {
                            ctx.fillText(
                                `${dataset.data[index]}`,
                                bar._model.x,
                                bar._model.y - 5
                            );
                        });
                    });
                }
            },

            scales: {
                yAxis: [{
                    formatter:'{value}%',
                    axisLabel: {formatter: '{value}%'}
                }

                ],
                yAxes: [
                    {
                        id: 'y-axis-1',
                        type: 'linear',
                        display: true,
                        position: 'left',
                        formatter:'{value}%',
                        axisLabel:{formatter:'{value}%'}
                    },
                    {
                        id: 'y-axis-2',
                        type: 'linear',
                        display: true,
                        position: 'right'
                    }
                ]
            }
        };
        $scope.colours = [
            {
                fillColor: "rgba(247,70,74,0)", // 背景色
                strokeColor: "#ef7a00", // 线
                pointColor: "#ef7a00", // 点
                pointStrokeColor: "#fff6f9", // 点的包围圈
            },
            {
                fillColor: "rgba(247,70,74,0)", // 背景色
                strokeColor: "#95ef75", // 线
                pointColor: "#00ef76", // 点
                pointStrokeColor: "#fff6f9", // 点的包围圈
            },  {
                fillColor: "rgba(247,70,74,0)", // 背景色
                strokeColor: "#ef3b07", // 线
                pointColor: "#0017ef", // 点
                pointStrokeColor: "#fff6f9", // 点的包围圈
            },  {
                fillColor: "rgba(247,70,74,0)", // 背景色
                strokeColor: "#ef7a00", // 线
                pointColor: "#ef7a00", // 点
                pointStrokeColor: "#fff6f9", // 点的包围圈
            },  {
                fillColor: "rgba(247,70,74,0)", // 背景色
                strokeColor: "#ef7a00", // 线
                pointColor: "#ef7a00", // 点
                pointStrokeColor: "#fff6f9", // 点的包围圈
            },  {
                fillColor: "rgba(247,70,74,0)", // 背景色
                strokeColor: "#ef7a00", // 线
                pointColor: "#ef7a00", // 点
                pointStrokeColor: "#fff6f9", // 点的包围圈
            },  {
                fillColor: "rgba(247,70,74,0)", // 背景色
                strokeColor: "#ef7a00", // 线
                pointColor: "#ef7a00", // 点
                pointStrokeColor: "#fff6f9", // 点的包围圈
            },
        ];
    });

})();