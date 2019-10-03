import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { initializeFirebaseApp, submitLoginForm } from '../core';

interface Props {}
interface State {}
class RefreshTokenIframe extends React.PureComponent<Props, State> {
  refreshTokenInterval: any;

  componentDidMount () {
    initializeFirebaseApp();
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.refreshTokenInterval = setInterval(() => {
          firebase.auth().currentUser!.getIdToken(true).then((idToken) => {
            submitLoginForm(idToken);
          });
        }, 30 * 60 * 1000);
      }
    });
  }

  componentWillUnmount () {
    clearInterval(this.refreshTokenInterval);
  }

  render () {
    return (
      <div>
        <form id='form' method='post' action='/auth/login' style={{display: 'none'}} />
      </div>
    );
  }
}

export default RefreshTokenIframe;
