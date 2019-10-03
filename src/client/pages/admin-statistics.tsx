import React from 'react';
import { AdminStatisticsScreen } from '../modules/admin';
import { withNamespaces } from '../i18n';

interface Props {}
interface State {}
class AdminStatistics extends React.PureComponent<Props, State> {
  static async getInitialProps(_context: any) {
    return {
      namespacesRequired: ['common', 'admin-statistics'],
    };
  }
  render() {
    return (
      <div>
        <AdminStatisticsScreen />
      </div>
    );
  }
}

export default withNamespaces('admin-statistics')(AdminStatistics);
