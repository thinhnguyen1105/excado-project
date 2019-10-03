import React from 'react';
import { AdminNewsScreen } from '../modules/admin';
import { withNamespaces } from '../i18n';

interface Props {}
interface State {}
class AdminNews extends React.PureComponent<Props, State> {
  static async getInitialProps(_context: any) {
    return {
      namespacesRequired: ['common', 'admin-news'],
    };
  }
  render() {
    return (
      <div>
        <AdminNewsScreen />
      </div>
    );
  }
}

export default withNamespaces('admin-news')(AdminNews);
