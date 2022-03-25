// this is for custom markers
// const iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';


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
        businesses.forEach( (business,idx) => {
            if (!markerKeys.includes(business.id)) {
                businessObjects[business.id] = business;
                this.createMarkerfromBusiness(business, (idx + 1))
            }
        })
    }   

    // helper func to create marker and set it on map
    createMarkerfromBusiness(business, index) {
        this.markers[business.id] = business;

        const position = new google.maps.LatLng(business.lat, business.lng);
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            businessId: business.id,
            label: {text: index.toString(), color: 'white'}
        })

        marker.setMap(this.map);

        // content to be put inside info window
        const content = '<div id="map-info-window">' +
                            '<div>' +
                                '<img id="map-info-window-photo" src=' +
                                    business.photoURLs[0] +
                                '/>' +
                                '<div id="map-info-window-name">' +
                                    business.name +
                                '</div>' +
                                '<div id="map-info-window-hours">' +
                                    business.hours +
                                '</div>' +
                                '<div id="map-info-window-category">' +
                                    business.category +
                                '</div>' +
                            '</div>' +
                        '</div>'

        const infoWindow = new google.maps.InfoWindow({
            content
        });

        marker.addListener("mouseover", () => {
            infoWindow.open({
                anchor: marker,
                map: this.map,
                shouldFocus: false
            })
        })

        marker.addListener("mouseout", () => {
            infoWindow.close()
        })
    }

};


export default MarkerManager;

