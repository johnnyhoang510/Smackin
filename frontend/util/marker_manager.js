
class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(businesses) {
        let markerKeys = Object.keys(this.markers);
        let businessObjects = {};

        // set to obj for lookup time
        businesses.forEach(business => businessObjects[business.id] = business);


        //to set markers
        businesses.forEach(business => {
            if (!markerKeys.includes(business.id)) {
                businessObjects[business.id] = business;
                this.createMarkerfromBusiness(business)
            }
        })
    }   

    // helper func to create marker and set it on map
    createMarkerfromBusiness(business) {
        this.markers[business.id] = business;

        let position = new google.maps.LatLng(business.lat, business.lng);
        let marker = new google.maps.Marker({
            position,
            map: this.map,
            businessId: business.id
        })

        marker.setMap(this.map);
    }
};


export default MarkerManager;

