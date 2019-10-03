import React from 'react';
import { Row, Spin } from 'antd';
import './Map.less';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { config } from '@client/config';
import { withNamespaces } from '@client/i18n';

interface MyMapComponentProps {
  isMarkerShown: boolean;
  googleMapURL: string;
  loadingElement: JSX.Element;
  containerElement: JSX.Element;
  mapElement: JSX.Element;
  locationGeocode: {
    lng: number;
    lat: number;
  };
}
const MyMapComponent = withScriptjs(withGoogleMap((props: MyMapComponentProps) =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={props.locationGeocode}
  >
    {props.isMarkerShown && <Marker position={props.locationGeocode} />}
  </GoogleMap>,
));

interface Props {
  location: string;
  geocode: {
    lng: number;
    lat: number;
  };
  t: (key: string) => string;
}
interface State {
  locationGeocode: {
    lng: number;
    lat: number;
  };
}
class Map extends React.PureComponent<Props, State> {
  state: State = {
    locationGeocode: this.props.geocode ? this.props.geocode : {lat: 21.0277644, lng: 105.8341598},
  };

  render () {
    return (
      <Row className='outline-map'>
        <Row className='title'>
          <strong>{this.props.t('shop-info:map')}</strong>
        </Row>
        <MyMapComponent
          isMarkerShown={true}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config.googleMaps.apiKey}&libraries=geometry,drawing,places`}
          locationGeocode={this.state.locationGeocode}
          loadingElement={(
            <div style={{
              height: `100%`,
              textAlign: 'center',
            }}>
              <Spin />
            </div>
          )}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </Row>
    );
  }
}

export default withNamespaces('shop-info')(Map);
