import React from 'react';
import { AdminReportsScreen } from '../modules/admin';
import { withNamespaces } from '../i18n';

interface Props {}
interface State {}
class AdminReports extends React.PureComponent<Props, State> {
  static async getInitialProps(_context: any) {
    return {
      namespacesRequired: ['common', 'admin-reports'],
    };
  }

  render() {
    return (
      <div>
        <AdminReportsScreen />
      </div>
    );
  }
}

export default withNamespaces('admin-reports')(AdminReports);
