/*
 * Author: Cyrano
 * Date: 21 Aug 2017
 * Description:
 *      This is a demo file used only for the security of dashboard (security.html)
 **/

$(function () {

    "use strict";

    var x = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    var plan = [300, 200, 100, 300, 400, 300, 300, 500, 600, 500, 400, 400];
    var exp = [200, 300, 500, 700, 600, 500, 300, 600, 0, 0, 0, 0];
    var act = [400, 300, 300, 900, 400, 400, 400, 0, 0, 0, 0, 0];
    var avg = [300, 267, 300, 633, 333, 412, 388, 423, 501, 465, .22, 395];
    var color1 = '#7cb5ec';
    var color2 = '#434348';
    var color3 = '#90ed7d';

    bindChartGasIn();

    function bindChartGasIn() {
        var objMonth = document.getElementById("month");
        var month = objMonth.options[objMonth.selectedIndex].text;
        var objDay = document.getElementById("day");
        var day = objDay.options[objDay.selectedIndex].text;

        if (day !== "" && month === "") {
            alert("请选择月份");
            return;
        } else if (month === "7月" && day === "1") {
            x = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', "11:00", '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
            plan = [3, 2, 1, 3, 4, 3, 3, 5, 6, 5, 4, 4, 3, 2, 1, 3, 4, 3, 3, 5, 6, 5, 4, 4];
            exp = [2, 3, 5, 7, 6, 5, 3, 6, 4, 5, 3, 7, 2, 3, 5, 7, 6, 5, 3, 6, 4, 5, 3, 7];
            act = [4, 3, 3, 9, 4, 4, 4, 5, 6, 7, 3, 3, 4, 3, 3, 9, 4, 4, 4, 5, 6, 7, 3, 3];
            avg = [3, 2.67, 3, 6.33, 3.33, 4.12, 3.88, 4.23, 5.01, 4.65, 4.22, 3.95, 3, 2.67, 3, 6.33, 3.33, 4.12, 3.88, 4.23, 5.01, 4.65, 4.22, 3.95];
            color1 = '#f7a35c';
            color2 = '#8085e9';
            color3 = '#f15c80';
        } else if (day === "" && month === "7月") {
            x = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
            plan = [3, 2, 1, 3, 4, 3, 3, 5, 6, 5, 4, 4, 3, 2, 1, 3, 4, 3, 3, 5, 6, 5, 4, 4, 6, 5, 4, 4, 3, 2, 1];
            exp = [2, 3, 5, 7, 6, 5, 3, 6, 4, 5, 3, 7, 2, 3, 5, 7, 6, 5, 3, 6, 4, 5, 3, 7, 5, 3, 7, 2, 3, 5, 7];
            act = [4, 3, 3, 9, 4, 4, 4, 5, 6, 7, 3, 3, 4, 3, 3, 9, 4, 4, 4, 5, 6, 7, 3, 3, 4, 4, 5, 6, 7, 3, 3];
            avg = [3, 2.67, 3, 6.33, 3.33, 4.12, 3.88, 4.23, 5.01, 4.65, 4.22, 3.95, 3, 2.67, 3, 6.33, 3.33, 4.12, 3.88, 4.23, 5.01, 4.65, 4.22, 3.95, 4.12, 3.88, 4.23, 5.01, 4.65, 4.22, 3.95];
            color1 = '#e4d354';
            color2 = '#8085e8';
            color3 = '#8d4653';
        }

        $('#chart-gas-in').highcharts({
            title: {
                text: ''
            },
            xAxis: {
                categories: x
            },
            credits: {
                enabled: false
            },
            plotOptions: {
            },
            labels: {
                items: [{
                    html: '',
                    style: {
                        left: '100px',
                        top: '18px',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                    }
                }]
            },
            series: [{
                type: 'column',
                name: '计划值',
                data: plan,
                color: color1
            }, {
                type: 'column',
                name: '预计值',
                data: exp,
                color: color2
            }, {
                type: 'column',
                name: '实际值',
                data: act,
                color: color3
            }, {
                type: 'spline',
                name: '平均值',
                data: avg,
                marker: {
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[3],
                    fillColor: 'white'
                }
            }]
        });
    }

    //-------------
    //- PIE CHART -
    //-------------
    // Get context with jQuery - using jQuery's .get() method.
    var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
    var pieChart = new Chart(pieChartCanvas);
    var PieData = [
      {
          value: 2,
          color: "#dd4b39",
          highlight: "#ff543f",
          label: "严重"
      },
      {
          value: 5,
          color: "#ff851b",
          highlight: "#ffb677",
          label: "主要"
      },
      {
          value: 4,
          color: "#f39c12",
          highlight: "#feec8a",
          label: "警告"
      },
      {
          value: 6,
          color: "#00a65a",
          highlight: "#54e7a4",
          label: "一般"
      }
    ];
    var pieOptions = {
        //Boolean - Whether we should show a stroke on each segment
        segmentShowStroke: true,
        //String - The colour of each segment stroke
        segmentStrokeColor: "#fff",
        //Number - The width of each segment stroke
        segmentStrokeWidth: 3,
        //Number - The percentage of the chart that we cut out of the middle
        percentageInnerCutout: 50, // This is 0 for Pie charts
        //Number - Amount of animation steps
        animationSteps: 100,
        //String - Animation easing effect
        animationEasing: "easeOutBounce",
        //Boolean - Whether we animate the rotation of the Doughnut
        animateRotate: true,
        //Boolean - Whether we animate scaling the Doughnut from the centre
        animateScale: false,
        //Boolean - whether to make the chart responsive to window resizing
        responsive: true,
        // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
        maintainAspectRatio: true,
        //String - A legend template
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
    };
    //Create pie or douhnut chart
    // You can switch between pie and douhnut using the method below.
    pieChart.Doughnut(PieData, pieOptions);
});
