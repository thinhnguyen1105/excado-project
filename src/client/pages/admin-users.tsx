import React from 'react';
import { AdminUsersScreen } from '../modules/admin';
import 'firebase/auth';
import { NextContext } from 'next';
import { withNamespaces } from '../i18n';

interface Props {}
interface State {}
class UsersPage extends React.PureComponent<Props, State> {
  static async getInitialProps (_context: NextContext) {
    return {
      namespacesRequired: ['common'],
    };
  }

  render () {
    return (
      <AdminUsersScreen />
    );
  }
}

export default withNamespaces('common')(UsersPage);
