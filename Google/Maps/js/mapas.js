window.addEventListener('load', function(){

  var map;
  var div = document.getElementById('map');
  var miPosition = {
    lat:0,
    lng:0
  }

  var btnPosicion = document.getElementById("btnPosicion");
  btnPosicion.addEventListener('click', ()=>{
    let marker = new google.maps.Marker({
      position:miPosition,
      map:map,
    })
  });


  function initMap() {
      map = new google.maps.Map(div, {
        center: miPosition,
        zoom: 13
      });

}

//usando la geolocalizacion qiue es nativo de javascript

let getLocation = ()=>{
  if(navigator.geolocation)
  {
    //significa que el navegador tiene disponible la geolocalizacion
    navigator.geolocation.getCurrentPosition((position)=>{
  
      miPosition.lat = position.coords.latitude;
      miPosition.lng = position.coords.longitude;

      initMap();

    },(error)=>{
      console.log("error", error);
    });
  }
  else
  {
    //el navegador no soporta la geolocalizacion
    alert("tu nageador no soporta geolocalizacion");
  }
}

getLocation();

});


