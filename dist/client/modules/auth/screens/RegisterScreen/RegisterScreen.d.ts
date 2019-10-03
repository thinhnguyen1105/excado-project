import React from 'react';
import 'firebase/auth';
interface State {
    loading: {
        register: boolean;
    };
}
interface Props {
}
export declare class RegisterScreen extends React.Component<Props, State> {
    state: State;
    register: (values: any) => Promise<void>;
    render(): JSX.Element;
}
export {};
