import React from 'react';
import { AdminAdsenseScreen } from '../modules/admin';
import { withNamespaces } from '../i18n';

interface Props {}
interface State {}
class AdminAdsense extends React.PureComponent<Props, State> {
  static async getInitialProps(_context: any) {
    return {
      namespacesRequired: ['common', 'admin-adsense'],
    };
  }
  render() {
    return (
      <div>
        <AdminAdsenseScreen />
      </div>
    );
  }
}

export default withNamespaces('admin-adsense')(AdminAdsense);
