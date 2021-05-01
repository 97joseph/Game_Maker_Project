jQuery(document).ready(function($) {
  
  $('.lightbox-trigger').click(function(el) {
    el.preventDefault();
    
    var imageHref = $(this).attr('href');
    
    if ($('#lightbox').length > 0) {
      $('#content').html('<img src="' + imageHref + '" />');
      $('#lightbox').show();
    } else {
        var lightbox = '<div id="lightbox">' + '<div id="content">' +
			'<img src="' + imageHref +'" />' + '</div>' +	'</div>';
      $('body').append(lightbox);
    }
  });
    
  $('body').on('click', '#lightbox', function() {
		$('#lightbox').hide();
  });
});