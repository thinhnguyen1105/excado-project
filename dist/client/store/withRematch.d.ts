import React from 'react';
import { Provider } from 'react-redux';
export declare const getOrCreateStore: (initStore: any, initialState: any) => any;
export declare const withRematch: <P>(...args: any) => (Component: any) => {
    (props?: P): React.ComponentElement<import("react-redux").ProviderProps<import("redux").Action<any>>, Provider<import("redux").Action<any>>>;
    getInitialProps(props?: any): Promise<{
        store: any;
        initialState: any;
        initialProps: any;
    }>;
};
