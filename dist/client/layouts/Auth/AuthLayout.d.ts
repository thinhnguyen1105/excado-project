import React from 'react';
import './AuthLayout.less';
import 'firebase/auth';
interface Props {
    pageName: 'login' | 'register';
}
interface State {
    clientOnly: boolean;
}
export declare class AuthLayout extends React.Component<Props, State> {
    constructor(props: any);
    componentDidMount: () => void;
    uiConfig: {
        signInFlow: string;
        signInOptions: string[];
        callbacks: {
            signInSuccessWithAuthResult: (_authResult: any, _redirectUrl?: string | undefined) => boolean;
            signInFailure: (error: any) => Promise<void>;
        };
    };
    render(): JSX.Element;
}
export {};
