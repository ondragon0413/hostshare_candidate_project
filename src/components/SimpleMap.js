import React from "react";
import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(location) {
    const defaultProps = {
        center: { lat: location['location']['lat'], lng: location['location']['lng'] },
        zoom: 8,
        language: 'en'
    };
    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                {/* <AnyReactComponent
          lat={location['location']['lat']}
          lng={location['location']['lng']}
          text="My Marker"
        /> */}
            </GoogleMapReact>
        </div>
    );
}