$("#period").daterangepicker({
  forceUpdate: true,
  minDate: moment().subtract(2, 'years'),
  callback: function (startDate, endDate, period) {
    $(this).val(startDate.format('L') + ' - ' + endDate.format('L'));
  }
});
