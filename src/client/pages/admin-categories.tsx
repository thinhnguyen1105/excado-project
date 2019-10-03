import React from 'react';
import { AdminCategoriesScreen } from '../modules/admin';
import { withNamespaces } from '../i18n';

interface Props {}
interface State {}
class AdminCategories extends React.PureComponent<Props, State> {
  static async getInitialProps(_context: any) {
    return {
      namespacesRequired: ['common', 'admin-categories'],
    };
  }
  render() {
    return (
      <div>
        <AdminCategoriesScreen />
      </div>
    );
  }
}

export default withNamespaces('admin-categories')(AdminCategories);
