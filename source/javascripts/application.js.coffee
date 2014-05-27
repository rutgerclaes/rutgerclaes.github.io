adjustHeights = () ->
  height = $( window ).height()
  $( '[data-viewport]' ).each () ->
    padding = 0.5 * ( height - $( this ).data( 'height' ) )
    $( this ).css( 'min-height': height + 'px', 'padding-top': padding )

$( window ).resize adjustHeights

$( window ).load () ->
  $( '[data-viewport]' ).each () ->
    $( this ).data( 'height', $( this ).height() )

$( window ).load adjustHeights
