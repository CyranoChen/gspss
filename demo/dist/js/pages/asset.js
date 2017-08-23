/*
 * Author: Cyrano
 * Date: 21 Aug 2017
 * Description:
 *      This is a demo file used only for the asset of dashboard (asset.html)
 **/

$(function () {

    "use strict";

    /* jQueryKnob */
    $(".knob").knob();

    //The Calender
    $("#calendar").datepicker();


    var x = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    var plan = [300, 200, 100, 300, 400, 300, 300, 500, 600, 500, 400, 400];
    var exp = [200, 300, 500, 700, 600, 500, 300, 600, 0, 0, 0, 0];
    var act = [400, 300, 300, 900, 400, 400, 400, 0, 0, 0, 0, 0];
    var avg = [300, 267, 300, 633, 333, 412, 388, 423, 501, 465, .22, 395];
    var color1 = '#7cb5ec';
    var color2 = '#434348';
    var color3 = '#90ed7d';

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
