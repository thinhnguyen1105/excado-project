import React from 'react';
import { AdminModelsScreen } from '../modules/admin';
import { withNamespaces } from '../i18n';

interface Props {}
interface State {}
class AdminModels extends React.PureComponent<Props, State> {
  static async getInitialProps(_context: any) {
    return {
      namespacesRequired: ['common', 'admin-models'],
    };
  }
  render() {
    return (
      <div>
        <AdminModelsScreen />
      </div>
    );
  }
}

export default withNamespaces('admin-models')(AdminModels);
