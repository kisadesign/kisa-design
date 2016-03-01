/**
 * Created by markbensley on 29/02/16.
 */
function initMap() {
    var myLocation = {lat : 51.5539439, lng : -0.1447536},
        markerImage = '../img/maps-icon.png';

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        scrollwheel: false,
        mapTypeControl: false,
        center: myLocation,
        //styles: [{
        //    featureType: 'poi',
        //    stylers: [{ visibility: 'off' }]  // Turn off points of interest.
        //}, {
        //    featureType: 'transit.station',
        //    stylers: [{ visibility: 'off' }]  // Turn off bus stations, train stations, etc.
        //}],
        disableDoubleClickZoom: true
    });

    var myMarker = new google.maps.Marker({
        position : myLocation,
        map : map
        //icon : markerImage
    });



}