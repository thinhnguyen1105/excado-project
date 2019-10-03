import React from 'react';
import { AdminRentalPeriodsScreen } from '../modules/admin';
import { withNamespaces } from '../i18n';

interface Props {}
interface State {}
class AdminRentalPeriods extends React.PureComponent<Props, State> {
  static async getInitialProps(_context: any) {
    return {
      namespacesRequired: ['common', 'admin-rental-periods'],
    };
  }

  render() {
    return (
      <div>
        <AdminRentalPeriodsScreen />
      </div>
    );
  }
}

export default withNamespaces('admin-rental-periods')(AdminRentalPeriods);
