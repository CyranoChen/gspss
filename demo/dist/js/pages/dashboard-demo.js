/*
 * Author: Cyrano
 * Date: 18 Aug 2017
 * Description:
 *      This is a demo file used only for the main dashboard (dashboard.html)
 **/

$(function () {

    "use strict";

    //Make the dashboard widgets sortable Using jquery UI
    $(".connectedSortable").sortable({
        placeholder: "sort-highlight",
        connectWith: ".connectedSortable",
        handle: ".box-header, .nav-tabs",
        forcePlaceholderSize: true,
        zIndex: 999999
    });
    $(".connectedSortable .box-header, .connectedSortable .nav-tabs-custom").css("cursor", "move");

    //jQuery UI sortable for the todo list
    $(".todo-list").sortable({
        placeholder: "sort-highlight",
        handle: ".handle",
        forcePlaceholderSize: true,
        zIndex: 999999
    });

    //bootstrap WYSIHTML5 - text editor
    $(".textarea").wysihtml5();

    $('.daterange').daterangepicker({
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        startDate: moment().subtract(29, 'days'),
        endDate: moment()
    }, function (start, end) {
        window.alert("You chose: " + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    });

    /* jQueryKnob */
    $(".knob").knob();

    /* SPARKLINE CHARTS
 * ----------------
 * Create a inline charts with spark line
 */

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

    /* jVector Maps
 * ------------
 * Create a world map with markers
 */
    $('#world-map-markers').vectorMap({
        map: 'world_mill_en',
        normalizeFunction: 'polynomial',
        hoverOpacity: 0.7,
        hoverColor: false,
        backgroundColor: 'transparent',
        regionStyle: {
            initial: {
                fill: 'rgba(210, 214, 222, 1)',
                "fill-opacity": 1,
                stroke: 'none',
                "stroke-width": 0,
                "stroke-opacity": 1
            },
            hover: {
                "fill-opacity": 0.7,
                cursor: 'pointer'
            },
            selected: {
                fill: 'yellow'
            },
            selectedHover: {}
        },
        markerStyle: {
            initial: {
                fill: '#00a65a',
                stroke: '#111'
            }
        },
        markers: [
          { latLng: [41.90, 12.45], name: 'Vatican City' },
          { latLng: [43.73, 7.41], name: 'Monaco' },
          { latLng: [-0.52, 166.93], name: 'Nauru' },
          { latLng: [-8.51, 179.21], name: 'Tuvalu' },
          { latLng: [43.93, 12.46], name: 'San Marino' },
          { latLng: [47.14, 9.52], name: 'Liechtenstein' },
          { latLng: [7.11, 171.06], name: 'Marshall Islands' },
          { latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis' },
          { latLng: [3.2, 73.22], name: 'Maldives' },
          { latLng: [35.88, 14.5], name: 'Malta' },
          { latLng: [12.05, -61.75], name: 'Grenada' },
          { latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines' },
          { latLng: [13.16, -59.55], name: 'Barbados' },
          { latLng: [17.11, -61.85], name: 'Antigua and Barbuda' },
          { latLng: [-4.61, 55.45], name: 'Seychelles' },
          { latLng: [7.35, 134.46], name: 'Palau' },
          { latLng: [42.5, 1.51], name: 'Andorra' },
          { latLng: [14.01, -60.98], name: 'Saint Lucia' },
          { latLng: [6.91, 158.18], name: 'Federated States of Micronesia' },
          { latLng: [1.3, 103.8], name: 'Singapore' },
          { latLng: [1.46, 173.03], name: 'Kiribati' },
          { latLng: [-21.13, -175.2], name: 'Tonga' },
          { latLng: [15.3, -61.38], name: 'Dominica' },
          { latLng: [-20.2, 57.5], name: 'Mauritius' },
          { latLng: [26.02, 50.55], name: 'Bahrain' },
          { latLng: [0.33, 6.73], name: 'São Tomé and Príncipe' }
        ]
    });


    //jvectormap data
    var visitorsData = {
        "US": 398, //USA
        "SA": 400, //Saudi Arabia
        "CA": 1000, //Canada
        "DE": 500, //Germany
        "FR": 760, //France
        "CN": 300, //China
        "AU": 700, //Australia
        "BR": 600, //Brazil
        "IN": 800, //India
        "GB": 320, //Great Britain
        "RU": 3000 //Russia
    };


    //World map by jvectormap
    $('#world-map').vectorMap({
        map: 'world_mill_en',
        backgroundColor: "transparent",
        regionStyle: {
            initial: {
                fill: '#e4e4e4',
                "fill-opacity": 1,
                stroke: 'none',
                "stroke-width": 0,
                "stroke-opacity": 1
            }
        },
        series: {
            regions: [{
                values: visitorsData,
                scale: ["#92c1dc", "#ebf4f9"],
                normalizeFunction: 'polynomial'
            }]
        },
        onRegionLabelShow: function (e, el, code) {
            if (typeof visitorsData[code] != "undefined")
                el.html(el.html() + ': ' + visitorsData[code] + ' new visitors');
        }
    });

    //Sparkline charts
    var myvalues = [1000, 1200, 920, 927, 931, 1027, 819, 930, 1021];
    $('#sparkline-1').sparkline(myvalues, {
        type: 'line',
        lineColor: '#92c1dc',
        fillColor: "#ebf4f9",
        height: '50',
        width: '80'
    });
    myvalues = [515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921];
    $('#sparkline-2').sparkline(myvalues, {
        type: 'line',
        lineColor: '#92c1dc',
        fillColor: "#ebf4f9",
        height: '50',
        width: '80'
    });
    myvalues = [15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21];
    $('#sparkline-3').sparkline(myvalues, {
        type: 'line',
        lineColor: '#92c1dc',
        fillColor: "#ebf4f9",
        height: '50',
        width: '80'
    });

    //The Calender
    $("#calendar").datepicker();

    //SLIMSCROLL FOR CHAT WIDGET
    $('#chat-box').slimScroll({
        height: '270px'
    });

    //Fix for charts under tabs
    $('.box ul.nav a').on('shown.bs.tab', function () {
        area.redraw();
        line.redraw();
    });

    /* The todo list plugin */
    $(".todo-list").todolist({
        onCheck: function (ele) {
            window.console.log("The element has been checked");
            return ele;
        },
        onUncheck: function (ele) {
            window.console.log("The element has been unchecked");
            return ele;
        }
    });

});
