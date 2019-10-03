import React from 'react';
import { AdminShopsScreen } from '../modules/admin';
import { withNamespaces } from '../i18n';

interface Props {}
interface State {}
class AdminShops extends React.PureComponent<Props, State> {
  static async getInitialProps(_context: any) {
    return {
      namespacesRequired: ['common', 'admin-shops'],
    };
  }

  render() {
    return (
      <div>
        <AdminShopsScreen />
      </div>
    );
  }
}

export default withNamespaces('admin-shops')(AdminShopsScreen);
