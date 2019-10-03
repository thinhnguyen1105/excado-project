import * as React from 'react';
const Fragment = React.Fragment;
import { ProfileState, ProfileEffects, ProfileReducers } from '@client/store';
import { Header, MainContent } from '@client/components';
import Footer from '@client/components/CommonLayout/Footer';
import { Brand, CommonKeyword } from '../../services/service-proxies';
import CurrentTime from '@client/components/CommonLayout/CurrentTime';
import { getServiceProxy } from '@client/services';

interface Props {
  topBrands: Brand[];
  searchKeyword: string;
  profileState: ProfileState;
  profileReducers: ProfileEffects & ProfileReducers;
  hasSideBar: boolean;
  hasMenuItems: boolean;
  fullName?: string;
  updateFilters: (payload: {[key: string]: string|number}) => void;
}
interface State {
  commonKeywords: CommonKeyword[];
}
class CommonLayout extends React.PureComponent<Props, State> {
  state: State = {
    commonKeywords: [],
  };

  componentDidMount () {
    this.getCommonKeywords();
  }

  getCommonKeywords = async () => {
    try {
      const serviceProxy = getServiceProxy();
      const commonKeywords = await serviceProxy.getCommonKeywords(4, 'count|desc', undefined, undefined);
      this.setState({
        commonKeywords: commonKeywords.data,
      });
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.log(error);
    }
  }

  render() {
    return (
      <Fragment>
        <CurrentTime/>
        <Header
          commonKeywords={this.state.commonKeywords}
          searchKeyword={this.props.searchKeyword}
          updateFilters={this.props.updateFilters}
          profileState={this.props.profileState}
          profileReducers={this.props.profileReducers}
          fullName={this.props.fullName}
        />
          <MainContent
            topBrands={this.props.topBrands}
            hasSideBar={this.props.hasSideBar}
            hasMenuItems={this.props.hasMenuItems}
          >
            {this.props.children}
          </MainContent>
         <div style={{marginBottom: '350px'}} className='push' />
        <Footer/>
      </Fragment>
    );
  }
}

export default CommonLayout;
