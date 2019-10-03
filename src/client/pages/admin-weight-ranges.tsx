import React from 'react';
import { AdminWeightRangesScreen } from '../modules/admin';
import { withNamespaces } from '../i18n';

interface Props {}
interface State {}
class AdminWeightRanges extends React.PureComponent<Props, State> {
  static async getInitialProps(_context: any) {
    return {
      namespacesRequired: ['common', 'admin-reports'],
    };
  }

  render() {
    return (
      <AdminWeightRangesScreen />
    );
  }
}

export default withNamespaces('admin-weight-ranges')(AdminWeightRanges);
