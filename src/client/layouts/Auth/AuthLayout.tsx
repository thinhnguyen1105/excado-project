import React from 'react';
import './AuthLayout.less';
import { Divider } from 'antd';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Link } from '../../routes';

interface Props {
  pageName: 'login' | 'register';
}
interface State {
  clientOnly: boolean;
}
export class AuthLayout extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      clientOnly: false,
    };
  }

  componentDidMount = () => {
    this.setState({
      clientOnly: true,
    });
  }

  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: (
        _authResult: any,
        _redirectUrl?: string,
      ) => {
        (async () => {
          const idToken = await firebase.auth().currentUser!.getIdToken();

          const form = document.getElementById('form');
          const input = document.createElement('input');
          input.type = 'text';
          input.name = 'token';
          input.value = idToken;
          form!.appendChild(input);
          (form as any).submit();
        })();
        return false;
      },
      signInFailure: async (error: any) => {
        // tslint:disable-next-line:no-console
        console.log(error);
      },
    },
  };

  render() {
    return (
      <div className='auth-container'>
        <div className='form-wrapper'>
          <div className='logo'>
            <span>Techkids Software</span>
          </div>

          {this.props.children}

          <Divider dashed={true} />

          {this.state.clientOnly && <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} className='oauth-container' />}

          <div className='links-wrapper'>
            <a href='#' className='forgot'>Forgot password</a>
            {this.props.pageName === 'login' && (
              <Link route='/dang-ki'>
                <a className='login-register'>Create an account</a>
              </Link>
            )}
            {this.props.pageName === 'register' && (
              <Link route='/dang-nhap'>
                <a className='login-register'>Already have an account? Log in</a>
              </Link>
            )}
            <form id='form' method='post' action='/auth/login' style={{display: 'none'}} />
          </div>
        </div>
      </div>
    );
  }
}
