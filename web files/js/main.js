

$(document).ready(function(){


  $('.reveal').click(function(){
    $('#pano').toggle(function(){
        $('.reveal').click(function(){
          $('#pano').toggle();
        });
    });
  });


  $('#main-logo').click(function(event){
      var $menu = $('#main-menu');
      var $li = $('#main-menu li a');
      var $exit = $('#main-menu img');
      event.preventDefault();
      $menu.slideDown(300);
      $li.slideDown(300);
      $exit.slideDown(300);

      $('#main-menu li a').click(function(event){
        $menu.slideUp(0);
      });
      $('#main-menu img').click(function(event){
        $exit.slideUp(300);
        $li.slideUp(300);
        $menu.slideUp(300);
      });

  });
});


$("#mainFooter img").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 2000);
});




// RUN STICKY HEADER
$('.main-header').sticky();



// RUN CAROUSEL
$('.slides').slick({
	fade: true,
	autoplay: true,
	arrows: true,
	dots: true
});

//Run Colorbox
$('a.cboxElement').colorbox({
    scalePhotos: true,
    maxWidth: '100%',
    maxHeight: '100%',
    arrowKey: true
});
$(document).on('cbox_open',function(){
  $(document.body).css('overflow','hidden');
}).on('cbox_closed',function(){
  $(document.body).css('overflow','');
});


// RUN GOOGLE MAPS
function initMap() {

	      	var myLatLng = {lat: 19.444, lng: -105.032};

	    // Create a new StyledMapType object, passing it an array of styles,
        // and the name to be displayed on the map type control.
        var styledMapType = new google.maps.StyledMapType(
          [
            {
              stylers: [
                { hue: '#00ffe6' },
                { saturation: -20 }
              ]
            },{
              featureType: 'road',
              elementType: 'geometry',
              stylers: [
                { lightness: 100 },
                { visibility: 'simplified' }
              ]
            },{
              featureType: 'road',
              elementType: 'labels',
              stylers: [
                { visibility: 'off' }
              ]
            }
          ],
          {name: 'Styled Map'});
	        var mapDiv = document.getElementById('contact-imageBlock');
		    var map = new google.maps.Map(mapDiv, {
	            center: {lat: 19.444, lng: -105.032},
	            zoom: 16,
	            center: myLatLng,
	             mapTypeControlOptions: {
          		  mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
         		}
	        });
	        var image = 'https://s10.postimg.org/74ewqivx5/map_marker.png';
		    var marker = new google.maps.Marker({
          		position: myLatLng,
          		map: map,
          		icon: image,
          		title: 'Casa Torre'
        	});
        	

		//Associate the styled map with the MapTypeId and set it to display.
		        map.mapTypes.set('styled_map', styledMapType);
		        map.setMapTypeId('styled_map');

	      }