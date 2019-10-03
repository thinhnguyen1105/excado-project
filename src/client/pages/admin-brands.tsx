import React from 'react';
import { AdminBrandsScreen } from '../modules/admin';
import { withNamespaces } from '../i18n';

interface Props {}
interface State {}
class AdminBrands extends React.PureComponent<Props, State> {
  static async getInitialProps(_context: any) {
    return {
      namespacesRequired: ['common', 'admin-brands'],
    };
  }
  render() {
    return (
      <div>
        <AdminBrandsScreen />
      </div>
    );
  }
}

export default withNamespaces('admin-brands')(AdminBrands);
