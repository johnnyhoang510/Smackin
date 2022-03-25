import React from "react";
import MarkerManager from "../../util/marker_manager";


class BusinessMap extends React.Component {
    
    componentDidMount() {
        const MAP_OPTIONS = {
            center: { lat: 37.8044, lng: -122.2712 }, // Oakland, CA
            zoom: 13,
            streetViewControl: false, //for streeview
            mapTypeControl: false, //change between satellite image
            fullscreenControl: false //button to toggle fullscreen
        };
        this.map = new google.maps.Map(this.mapNode, MAP_OPTIONS);
        this.MarkerManager = new MarkerManager(this.map);

        this.MarkerManager.updateMarkers(this.props.businesses);
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.businesses);
    }



    render() {
        
        return (
                <div ref={map => this.mapNode = map} id='map-container'>
                </div>
        )
    }
};


export default BusinessMap;