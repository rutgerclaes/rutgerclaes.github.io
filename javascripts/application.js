(function() {
  var adjustHeights;

  adjustHeights = function() {
    var height;
    height = $(window).height();
    return $('[data-viewport]').each(function() {
      var padding;
      padding = 0.5 * (height - $(this).data('height'));
      return $(this).css({
        'min-height': height + 'px',
        'padding-top': padding
      });
    });
  };

  $(window).resize(adjustHeights);

  $(window).load(function() {
    return $('[data-viewport]').each(function() {
      return $(this).data('height', $(this).height());
    });
  });

  $(window).load(adjustHeights);

}).call(this);
