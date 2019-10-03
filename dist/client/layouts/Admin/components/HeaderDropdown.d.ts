import React from 'react';
import './HeaderDropdown.less';
import 'firebase/auth';
declare const HeaderDropdown: {
    (props?: {}): React.ComponentElement<import("react-redux").ProviderProps<import("redux").Action<any>>, import("react-redux").Provider<import("redux").Action<any>>>;
    getInitialProps(props?: any): Promise<{
        store: any;
        initialState: any;
        initialProps: any;
    }>;
};
export { HeaderDropdown, };
