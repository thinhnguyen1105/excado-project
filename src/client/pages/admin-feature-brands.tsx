import React from 'react';
import { AdminFeatureBrandsScreen } from '../modules/admin';
import { withNamespaces } from '../i18n';

interface Props {}
interface State {}
class AdminFeatureBrands extends React.PureComponent<Props, State> {
  static async getInitialProps(_context: any) {
    return {
      namespacesRequired: ['common', 'admin-feature-brands'],
    };
  }
  render() {
    return (
      <div>
        <AdminFeatureBrandsScreen />
      </div>
    );
  }
}

export default withNamespaces('admin-feature-brands')(AdminFeatureBrands);
