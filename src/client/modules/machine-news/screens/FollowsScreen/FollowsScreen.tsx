import React from 'react';
import { withNamespaces } from '@client/i18n';
import './FollowsScreen.less';
import CommonLayout from '@client/layouts/Page/CommonLayout';
import { withRematch, initStore, ProfileState, ProfileReducers, ProfileEffects, FollowState, FollowReducers, FollowEffects } from '@client/store';
import { CommonKeyword, Brand, FollowUser, FollowShop } from '@client/services/service-proxies';
import FollowsTitle from './components/FollowsTitle';
import { config } from '@client/config';
import Head from 'next/head';
import { Spin, Tabs, message } from 'antd';
import TabContent from './components/TabContent';
import * as jsCookie from 'js-cookie';
import { getServiceProxy } from '@client/services';

interface Props {
  commonKeywords: CommonKeyword[];
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  followState: FollowState;
  followReducer: FollowReducers & FollowEffects;
  topBrands: Brand[];
  searchKeyword: string;
  profileData: any;
  updateFilters: (payload: {[key: string]: string|number}) => void;
  t: (key: string) => string;
}
interface State {
  loading: boolean;
  activeTab: 'users'|'shops';
  users: {
    search: string;
    data: FollowUser[];
    before?: string;
    after?: string;
    first: number;
    sortBy: string;
  };
  shops: {
    search: string;
    data: FollowShop[];
    before?: string;
    after?: string;
    first: number;
    sortBy: string;
  };
}
class BaseFollowsScreen extends React.PureComponent<Props, State> {
  state: State = {
    loading: false,
    activeTab: 'users',
    users: {
      search: ``,
      data: [],
      before: undefined,
      after: undefined,
      first: 10,
      sortBy: 'createdAt|desc',
    },
    shops: {
      search: ``,
      data: [],
      before: undefined,
      after: undefined,
      first: 10,
      sortBy: 'createdAt|desc',
    },
  };

  componentDidMount () {
    this.getData();
  }

  activeTabChange = (newActiveTab: string) => {
    this.setState({
      activeTab: newActiveTab as any,
    }, () => {
      if (newActiveTab === 'users' && (!this.state.users.data || !this.state.users.data.length)) {
        this.getData();
      } else if (newActiveTab === 'shops' && (!this.state.shops.data || !this.state.shops.data.length)) {
        this.getData();
      }
    });
  }

  getNextpage = async () => {
    try {
      this.setState({
        loading: true,
      });

      const idToken = jsCookie.get('token');
      const serviceProxy = getServiceProxy(idToken);
      const followUsersResult = await serviceProxy.findFollow(
        this.props.profileState.authUser!.id,
        this.state.activeTab === 'users' ? `user` : 'shop',
        undefined,
        this.state.activeTab === 'users' ? this.state.users.first : this.state.shops.first,
        this.state.activeTab === 'users' ? this.state.users.sortBy : this.state.shops.sortBy,
        undefined,
        this.state.activeTab === 'users' ? this.state.users.after : this.state.shops.after,
      );

      if (this.state.activeTab === 'users') {
        this.setState({
          loading: false,
          users: {
            ...this.state.users,
            data: followUsersResult.data,
            before: followUsersResult.before,
            after: followUsersResult.after,
          },
        });
      } else {
        this.setState({
          loading: false,
          shops: {
            ...this.state.shops,
            data: followUsersResult.data,
            before: followUsersResult.before,
            after: followUsersResult.after,
          },
        });
      }
    } catch (error) {
      this.setState({
        loading: false,
      });
      message.error(error.message);
    }
  }

  getPrevPage = async () => {
    try {
      this.setState({
        loading: true,
      });

      const idToken = jsCookie.get('token');
      const serviceProxy = getServiceProxy(idToken);
      const followUsersResult = await serviceProxy.findFollow(
        this.props.profileState.authUser!.id,
        this.state.activeTab === 'users' ? `user` : 'shop',
        undefined,
        this.state.activeTab === 'users' ? this.state.users.first : this.state.shops.first,
        this.state.activeTab === 'users' ? this.state.users.sortBy : this.state.shops.sortBy,
        this.state.activeTab === 'users' ? this.state.users.before : this.state.shops.before,
        undefined,
      );

      if (this.state.activeTab === 'users') {
        this.setState({
          loading: false,
          users: {
            ...this.state.users,
            data: followUsersResult.data,
            before: followUsersResult.before,
            after: followUsersResult.after,
          },
        });
      } else {
        this.setState({
          loading: false,
          shops: {
            ...this.state.shops,
            data: followUsersResult.data,
            before: followUsersResult.before,
            after: followUsersResult.after,
          },
        });
      }
    } catch (error) {
      this.setState({
        loading: false,
      });
      message.error(error.message);
    }
  }

  handleSearchChange = (value: string) => {
    if (this.state.activeTab === 'users') {
      this.setState({
        ...this.state,
        users: {
          ...this.state.users,
          search: value,
        },
      });
    } else {
      this.setState({
        ...this.state,
        shops: {
          ...this.state.shops,
          search: value,
        },
      });
    }
  }

  getData = async () => {
    try {
      this.setState({
        loading: true,
      });

      const idToken = jsCookie.get('token');
      const serviceProxy = getServiceProxy(idToken);
      const followUsersResult = await serviceProxy.findFollow(
        this.props.profileState.authUser!.id,
        this.state.activeTab === 'users' ? `user` : 'shop',
        undefined,
        this.state.activeTab === 'users' ? this.state.users.first : this.state.shops.first,
        this.state.activeTab === 'users' ? this.state.users.sortBy : this.state.shops.sortBy,
        undefined,
        undefined,
      );

      if (this.state.activeTab === 'users') {
        this.setState({
          loading: false,
          users: {
            ...this.state.users,
            data: followUsersResult.data,
            before: followUsersResult.before,
            after: followUsersResult.after,
          },
        });
      } else {
        this.setState({
          loading: false,
          shops: {
            ...this.state.shops,
            data: followUsersResult.data,
            before: followUsersResult.before,
            after: followUsersResult.after,
          },
        });
      }
    } catch (error) {
      this.setState({
        loading: false,
      });
      message.error(error.message);
    }
  }

  unfollow = async (id: string, followId: string) => {
    try {
      this.setState({
        loading: true,
      });

      if (this.state.activeTab === 'users') {
        await this.props.followReducer.unfollowUser({
          authId: this.props.profileState.authUser!.id,
          userId: id,
        });

        this.setState({
          loading: false,
          users: {
            ...this.state.users,
            data: this.state.users.data.filter((item) => item._id !== followId),
          },
        });
      } else {
        await this.props.followReducer.unfollowShop({
          authId: this.props.profileState.authUser!.id,
          shopId: id,
        });

        this.setState({
          loading: false,
          shops: {
            ...this.state.shops,
            data: this.state.shops.data.filter((item) => item._id !== followId),
          },
        });
      }
    } catch (error) {
      this.setState({
        loading: false,
      });
      message.error(error.message);
    }
  }

  render () {
    return (
      <div className='follows-screen'>
        <Head>
          <title>{`Danh sách theo dõi | timmay.vn`}</title>
          <meta property='fb:app_id' content={config.facebookAppId} />
          <meta property='og:url' content={`timmay.vn`} />
          <meta property='og:type' content='website' />
          <meta property='og:title' content={`Danh sách theo dõi | timmay.vn`} />
          <meta property='og:image:url' content={'/static/images/logo-timmay.png'} />
          <meta property='og:image:width' content='800' />
          <meta property='og:image:height' content='600' />
        </Head>
        <CommonLayout
          updateFilters={this.props.updateFilters}
          topBrands={this.props.topBrands}
          searchKeyword={this.props.searchKeyword}
          hasSideBar={true}
          hasMenuItems={true}
          profileState={this.props.profileState}
          profileReducers={this.props.profileReducers}
        >
          <FollowsTitle t={this.props.t} />

          <Spin spinning={this.state.loading}>
            <Tabs
              activeKey={this.state.activeTab}
              tabBarStyle={{ background: '#fff', margin: 0 }}
              onChange={this.activeTabChange}
            >
              <Tabs.TabPane tab={this.props.t('follows:users')} key='users'>
                <TabContent
                  activeTab={this.state.activeTab}
                  data={this.state.activeTab === 'users' ? this.state.users.data : this.state.shops.data}
                  searchKeyword={this.state.activeTab === 'users' ? this.state.users.search : this.state.shops.search}
                  placeholder={this.state.activeTab === 'users' ? this.props.t(`follows:searchUsers`) : this.props.t(`follows:searchShops`)}
                  before={this.state.activeTab === 'users' ? this.state.users.before : this.state.shops.before}
                  after={this.state.activeTab === 'users' ? this.state.users.after : this.state.shops.after}
                  getNextPage={this.getNextpage}
                  getPrevPage={this.getPrevPage}
                  handleSearchChange={this.handleSearchChange}
                  getData={this.getData}
                  unfollow={this.unfollow}
                  t={this.props.t}
                />
              </Tabs.TabPane>
              <Tabs.TabPane tab={this.props.t('follows:shops')} key='shops'>
                <TabContent
                  activeTab={this.state.activeTab}
                  data={this.state.activeTab === 'users' ? this.state.users.data : this.state.shops.data}
                  searchKeyword={this.state.activeTab === 'users' ? this.state.users.search : this.state.shops.search}
                  placeholder={this.state.activeTab === 'users' ? this.props.t(`follows:searchUsers`) : this.props.t(`follows:searchShops`)}
                  before={this.state.activeTab === 'users' ? this.state.users.before : this.state.shops.before}
                  after={this.state.activeTab === 'users' ? this.state.users.after : this.state.shops.after}
                  getNextPage={this.getNextpage}
                  getPrevPage={this.getPrevPage}
                  handleSearchChange={this.handleSearchChange}
                  getData={this.getData}
                  unfollow={this.unfollow}
                  t={this.props.t}
                />
              </Tabs.TabPane>
            </Tabs>
          </Spin>
        </CommonLayout>
      </div>
    );
  }
}

const mapState = (_rootState: any) => {
  return {
    //
  };
};

const mapDispatch = (_rootReducer: any) => {
  return {
    //
  };
};

export const FollowsScreen = withRematch(initStore, mapState, mapDispatch)(withNamespaces(['common', 'follows'])(BaseFollowsScreen));
