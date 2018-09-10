/*$(function() {
  $('input[name="daterange"]').daterangepicker({
    opens: 'right',
    ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    "linkedCalendars": false,
    "alwaysShowCalendars": true,
    "autoUpdateInput": false,
    "startDate": "08/13/2018",
    "endDate": "08/19/2018"
  }, function(start, end, label) {
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });

   function cb(start, end) {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' | ' + end.format('MMMM D, YYYY'));
    }
});*/

$(function() {

    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
       // $('#reportrange span').html('<span class=\"flex-hr-stretch\">' + start.format('DD.MM.YYYY') + '</span><span class=\"line\"></span><span class=\"flex-hr-stretch\">' + end.format('DD.MM.YYYY') + '</span>');
       $('#reportrange #from-date').html(start.format('DD.MM.YYYY'));
       $('#reportrange #to-date').html(end.format('DD.MM.YYYY'));
    }

    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
           'Today': [moment(), moment()],
           'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
           'Last 7 Days': [moment().subtract(6, 'days'), moment()],
           'Last 30 Days': [moment().subtract(29, 'days'), moment()],
           'This Month': [moment().startOf('month'), moment().endOf('month')],
           'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        "alwaysShowCalendars": true
    }, cb);

    cb(start, end);

});