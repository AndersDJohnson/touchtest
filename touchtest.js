$(function () {

  $(document).on('click', function (e) {
    $('<div>', {
      'class': 'coordinated coordinated-large click'
    }).css({
      left: e.pageX,
      top: e.pageY
    }).appendTo('body');
  });

  $(document).on('touchstart', function (e) {
    $.each(e.originalEvent.touches, function (i, touch) {
      $('<div>', {
        'class': 'coordinated coordinated-medium touch touchstart'
      }).css({
        left: touch.pageX,
        top: touch.pageY
      }).appendTo('body');
    });
  });

  $(document).on('touchmove', function (e) {
    $.each(e.originalEvent.changedTouches, function (i, touch) {
      $('<div>', {
        'class': 'coordinated touch touchmove'
      }).css({
        left: touch.pageX,
        top: touch.pageY
      }).appendTo('body');
    });
  });

  $(document).on('touchend', function (e) {
    $.each(e.originalEvent.changedTouches, function (i, touch) {
      $('<div>', {
        'class': 'coordinated coordinated-medium touch touchend'
      }).css({
        left: touch.pageX,
        top: touch.pageY
      }).appendTo('body');
    });
  });

})
