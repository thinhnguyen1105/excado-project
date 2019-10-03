import React from 'react';
import { AdminUploadExcelScreen } from '../modules/admin';
import { withNamespaces } from '../i18n';

interface Props {}
interface State {}
class AdminUploadExcel extends React.PureComponent<Props, State> {
  static async getInitialProps(_context: any) {
    return {
      namespacesRequired: ['common', 'admin-upload-excel'],
    };
  }

  render() {
    return (
      <div>
        <AdminUploadExcelScreen />
      </div>
    );
  }
}

export default withNamespaces('admin-upload-excel')(AdminUploadExcel);
