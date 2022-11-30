class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
        this.businessObjects = {};
    }

    updateMarkers(businesses) {
        //this will stop markers from being set if there is no search query from fetchBusinesses
        if (!Array.isArray(businesses)) return null;
        let markerKeys = Object.keys(this.markers);

        markerKeys.forEach(markerKey => {
            this.markers[markerKey].setMap(null)
            delete this.markers[markerKey]
        })

        businesses.forEach(business => this.businessObjects[business.id] = business);

        businesses.forEach( (business,idx) => {
            if (!this.markers[business.id]) {
                this.businessObjects[business.id] = business;
                this.createMarkerfromBusiness(business, (idx + 1))
            }
        })
    }

    createMarkerfromBusiness(business, index) {
        let position = new google.maps.LatLng(business.lat, business.lng);
        let marker = new google.maps.Marker({
            position,
            map: this.map,
            businessId: business.id,
            label: {text: index.toString(), color: 'white'}
        })
        
        this.markers[business.id] = marker;
        this.markers[business.id].setMap(this.map);

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
            content,
            disableAutoPan: true
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

        marker.addListener("click", () => {
            window.location.href = `/#/businesses/${business.id}`
        })
    }

};


export default MarkerManager;

