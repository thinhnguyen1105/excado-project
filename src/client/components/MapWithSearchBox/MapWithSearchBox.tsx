import React from 'react';
import { Spin } from 'antd';
import { compose, withProps, lifecycle } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import SearchBox from 'react-google-maps/lib/components/places/SearchBox';
import { get } from 'lodash';
import './MapWithSearchBox.less';
import { config } from '@client/config';

const MapWithSearchBox: any = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${config.googleMaps.apiKey}&libraries=geometry,drawing,places`,
    loadingElement: <div style={{
      height: `100%`,
      textAlign: 'center',
    }}>
      <Spin />
    </div>,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  lifecycle({
    componentWillMount() {
      const refs: any = {};

      this.setState({
        bounds: null,
        center: (this.props as any).geocode ? (this.props as any).geocode : {lat: 21.0277644, lng: 105.8341598},
        markers: [{position: (this.props as any).geocode ? (this.props as any).geocode : {lat: 21.0277644, lng: 105.8341598}}],
        onMapMounted: (ref: any) => {
          refs.map = ref;
        },
        onBoundsChanged: () => {
          this.setState({
            bounds: refs.map.getBounds(),
            center: refs.map.getCenter(),
          });
        },
        onSearchBoxMounted: (ref: any) => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();

          const newAddress = places[0]['formatted_address'].indexOf(places[0].name) > -1 ? places[0]['formatted_address'] : `${places[0].name}, ${places[0]['formatted_address']}`;
          (this.props as any).selectAddress('address', newAddress);
          (this.props as any).selectAddress('geocode', {lng: places[0].geometry.location.lng(), lat: places[0].geometry.location.lat()});

          const bounds = new (window as any).google.maps.LatLngBounds();

          places.forEach((place: any) => {
            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          const nextMarkers = places.map((place: any) => ({
            position: place.geometry.location,
          }));
          const nextCenter = get(nextMarkers, '0.position', (this.state as any).center);

          this.setState({
            center: nextCenter,
            markers: nextMarkers,
          });
        },
      });
    },
  }),
  withScriptjs,
  withGoogleMap,
)((props: any) => {
  return (
    <GoogleMap
      ref={props.onMapMounted}
      defaultZoom={16}
      center={props.center}
      onBoundsChanged={props.onBoundsChanged}
    >
      <SearchBox
        ref={props.onSearchBoxMounted}
        bounds={props.bounds}
        controlPosition={(window as any).google.maps.ControlPosition.TOP_LEFT}
        onPlacesChanged={props.onPlacesChanged}
      >
        <input
          type='text'
          defaultValue={(props as any).address}
          placeholder={`${props.t(`my-shop:input-shop-address`)} ...`}
          className='address-input'
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `240px`,
            height: `32px`,
            marginTop: `10px`,
            marginLeft: `10px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `elipses`,
          }}
        />
      </SearchBox>
      {props.markers.map((marker: any, index: any) =>
        <Marker key={index} position={marker.position} draggable={true} />,
      )}
    </GoogleMap>
  );
},
);

export default MapWithSearchBox;
