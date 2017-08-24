/*
 * Author: Cyrano
 * Date: 21 Aug 2017
 * Description:
 *      This is a demo file used only for the gas of dashboard (gas.html)
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
    bindChartGasOut();

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

    function bindChartGasOut() {
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

        $('#chart-gas-out').highcharts({
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

    // Build the chart
    // Make monochrome colors and set them as default for all pies
    Highcharts.getOptions().plotOptions.pie.colors = ['#006bab', '#4bafeb'];

    Highcharts.chart('pie-chart-in', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        tooltip: {
            pointFormat: '<b>{point.y}km<sup>3</sup> ({point.percentage:.1f}%)</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    distance: -50
                },
                showInLegend: false
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: '大鹏气',
                y: 1210
            }, {
                name: '西二气',
                y: 2960,
                sliced: true,
                selected: true
            }]
        }]
    });

    // Build the chart
    // Make monochrome colors and set them as default for all pies
    Highcharts.getOptions().plotOptions.pie.colors = ['#56528b', '#8a87be', '#bdbbe7'];

    Highcharts.chart('pie-chart-out', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        tooltip: {
            pointFormat: '<b>{point.y}km<sup>3</sup> ({point.percentage:.1f}%)</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    distance: -50
                },
                showInLegend: false
            }
        },
        series: [{
            name: '气量',
            colorByPoint: true,
            data: [{
                name: '城市燃气',
                y: 2690,
                sliced: true,
                selected: true
            }, {
                name: '钰湖电厂',
                y: 620
            }, {
                name: '宝昌电厂',
                y: 1590
            }]
        }]
    });
});
