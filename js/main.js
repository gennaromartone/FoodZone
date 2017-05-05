(function (global) {

  mapModule = function () {
    var input = $('#search_location');
    var privateProp = 'sono una proprieta privata';
    function privateFunction() {
      return 'io funzione';
    }
    var geocoder = new google.maps.Geocoder();
    return {
      publicProp: 'io prop pubblica',
      publicMetodo: function () {
        return 'io metodo pubblico';
      },
      initialize: function () { new google.maps.places.Autocomplete(input[0]) },

      find: function () {
        if (!navigator.geolocation) {
          return;
        }
        $('.locate-me').addClass('loading');
        success = function (position) {
          var lat, lng;
          lat = position.coords.latitude;
          lng = position.coords.longitude;
          var latlng = { lat: parseFloat(lat), lng: parseFloat(lng) };
          geocoder.geocode({ 'location': latlng }, function (results, status) {
            if (status === 'OK') {
              if (results[0]) {
                input[0].value = results[0].formatted_address;
              } else {
                window.alert('No results found');
              }
            } else {
              window.alert('Geocoder failed due to: ' + status);
            }
          });

          return $('.locate-me').removeClass('loading');
        };
        error = function () {
          $('.locate-me').removeClass('loading');
          return filters.startup();
        };
        navigator.geolocation.getCurrentPosition(success, error);
      }
    }
  }();


  $('.locate-me').click(function () {
    mapModule.find();
    //  alert('Clicked ');
  });

  google.maps.event.addDomListener(window, 'load', mapModule.initialize);

  Marker = (function (_super) {
    __extends(Marker, _super);

    function Marker() {
      this.position = __bind(this.position, this);
      return Marker.__super__.constructor.apply(this, arguments);
    }

    Marker.prototype["default"] = {
      id: '',
      obj: '',
      lat: '',
      lng: '',
      title: ''
    };

    Marker.prototype.position = function (lat,lang) {
      return new google.maps.LatLng(lat, lang);
    };

    return Marker;
  });

    var jsMAIN = function () {

      var map; var arrymarker=[];

      this.toggleBounce = function (nome) {
        var mark = arrymarker[nome];
        if (mark.getAnimation() !== null) {
          mark.setAnimation(null);
        } else {
          mark.setAnimation(google.maps.Animation.BOUNCE);
        }
      }


      this.createMarkers = function(aziende){

        for(var i=0; i<aziende.length; i++){

        var azienda = aziende[i];  

console.log("lat: "+azienda.Lat);

        var  marker = new google.maps.Marker({
            position: new google.maps.LatLng(azienda.Lat,azienda.Lang),
            url: '/',
            animation: google.maps.Animation.DROP,
            title: azienda.Nome
          });

         arrymarker[azienda.Nome] = marker;
          marker.setMap(this.map);  
        }

      }
      
      this.initMap = function () {
       // alert(JSON.stringify(aziende));
       // console.log(JSON.stringify(aziende));
       // console.log(JSON.stringify(aziende[0]));
        /* position Amsterdam */
        var latlng = new google.maps.LatLng(52.3731, 4.8922);

        var mapOptions = {
          center: latlng,
          scrollWheel: false,
          zoom: 13
        };

        var marker = new google.maps.Marker({
          position: latlng,
          url: '/',
          animation: google.maps.Animation.DROP,
          title: 'title'
        });

        this.map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
        marker.setMap(this.map);

      }
    }

    if (("function" === typeof define) && (define["amd"])) /* AMD Support */ {
      define(function () {
        return jsMAIN;
      });
    } else if ("undefined" !== typeof exports) /* Node Support */ {
      if (("undefined" !== typeof module) && module["exports"]) {
        module["exports"] = jsMAIN;
        exports = jsMAIN;
      }
      else {
        exports = jsMAIN;
      }
    } else { /* Browsers and Web Workers*/
      global["jsMAIN"] = jsMAIN;
    }

  }(this)); // ESEMPIO DI FUNZIONE ANONIMA RICHIAMATA SUBITO
