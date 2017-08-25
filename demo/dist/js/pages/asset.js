/*
 * Author: Cyrano
 * Date: 21 Aug 2017
 * Description:
 *      This is a demo file used only for the asset of dashboard (asset.html)
 **/

$(function () {

    "use strict";

    //-----------------
    //- SPARKLINE BAR -
    //-----------------
    $('.sparkbar').each(function () {
        var $this = $(this);
        $this.sparkline('html', {
            type: 'bar',
            height: $this.data('height') ? $this.data('height') : '30',
            barColor: $this.data('color')
        });
    });

    $('.sparkpie').sparkline('html', { type: 'pie', height: '30' });

    /* jQueryKnob */
    $(".knob").knob();

    /* Morris.js Charts */
    // Sales chart
    var line = new Morris.Line({
        element: 'line-chart',
        resize: true,
        data: [
          { y: '2011 Q1', item1: 2666 },
          { y: '2011 Q2', item1: 2778 },
          { y: '2011 Q3', item1: 4912 },
          { y: '2011 Q4', item1: 3767 },
          { y: '2012 Q1', item1: 6810 },
          { y: '2012 Q2', item1: 5670 },
          { y: '2012 Q3', item1: 4820 },
          { y: '2012 Q4', item1: 15073 },
          { y: '2013 Q1', item1: 10687 },
          { y: '2013 Q2', item1: 8432 }
        ],
        xkey: 'y',
        ykeys: ['item1'],
        labels: ['Item 1'],
        lineColors: ['#efefef'],
        lineWidth: 2,
        hideHover: 'auto',
        gridTextColor: "#fff",
        gridStrokeWidth: 0.4,
        pointSize: 4,
        pointStrokeColors: ["#efefef"],
        gridLineColor: "#efefef",
        gridTextFamily: "Open Sans",
        gridTextSize: 10
    });

    Highcharts.setOptions({
        lang: {
            drillUpText: '< 返回 “{series.name}”'
        }
    });

    var map = null,
        geochina = 'https://data.jianshukeji.com/jsonp?filename=geochina/';

    $.getJSON(geochina + 'china.json&callback=?', function (mapdata) {
        var data = [];

        // 随机数据
        Highcharts.each(mapdata.features, function (md, index) {
            var tmp = {
                name: md.properties.name,
                value: Math.floor((Math.random() * 100) + 1) // 生成 1 ~ 100 随机值
            };
            if (md.properties.drilldown) {
                tmp.drilldown = md.properties.drilldown;
            }
            data.push(tmp);
        });

        map = new Highcharts.Map('map-container', {
            chart: {
                events: {
                    drilldown: function (e) {
                        console.log(e);
                        // 异步下钻
                        if (e.point.drilldown) {
                            var pointName = e.point.properties.fullname;
                            map.showLoading('下钻中，请稍后...');
                            // 获取二级行政地区数据并更新图表
                            $.getJSON(geochina + e.point.drilldown + '.json&callback=?', function (data) {
                                data = Highcharts.geojson(data);
                                Highcharts.each(data, function (d) {
                                    d.value = Math.floor((Math.random() * 100) + 1); // 生成 1 ~ 100 随机值
                                });
                                map.hideLoading();
                                map.addSeriesAsDrilldown(e.point, {
                                    name: e.point.name,
                                    data: data,
                                    dataLabels: {
                                        enabled: true,
                                        format: '{point.name}'
                                    }
                                });
                                map.setTitle({
                                    text: pointName
                                });
                            });
                        }
                    },
                    drillup: function () {
                        map.setTitle({
                            text: '中国'
                        });
                    }
                }
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            credits: {
                enabled: false
            },
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },
            tooltip: {
                useHTML: true,
                headerFormat: '<table><tr><td>{point.name}</td></tr>',
                pointFormat: '<tr><td>全称</td><td>{point.properties.fullname}</td></tr>' +
                '<tr><td>行政编号</td><td>{point.properties.areacode}</td></tr>' +
                '<tr><td>父级</td><td>{point.properties.parent}</td></tr>' +
                '<tr><td>经纬度</td><td>{point.properties.longitude},{point.properties.latitude}</td></tr>',
                footerFormat: '</table>'
            },
            colorAxis: {
                min: 0,
                minColor: '#fff',
                maxColor: '#006cee',
                labels: {
                    style: {
                        "color": "blue", "fontWeight": "bold"
                    }
                }
            },
            series: [{
                data: data,
                mapData: mapdata,
                joinBy: 'name',
                name: '中国',
                states: {
                    hover: {
                        color: '#a4edba'
                    }
                }
            }]
        });
    });
});
