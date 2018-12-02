import styles from './index.css';
import React from 'react';
import { connect } from 'dva';
import { TabBar, Icon } from 'antd-mobile';
import Link from 'umi/link';
import router from 'umi/router';
import NProgress from 'nprogress';
import ContentLoader, { Facebook } from 'react-content-loader'

const MyLoader = () => (
  <ContentLoader>
    {/* Pure SVG */}
    <rect x="0" y="60" rx="5" ry="5" width="70" height="70" />
    <rect x="80" y="77" rx="4" ry="4" width="300" height="13" />
    <rect x="80" y="100" rx="3" ry="3" width="250" height="10" />

  </ContentLoader>
)


class BasicLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
    };
  }


  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>


        {    this.props.loading.global ? (
          <Facebook/>
          ) : (
          this.props.children
          ) }

      </div>
    );
  }

  render() {
    let currHref = '';
    const href = window.location.href;    // 浏览器地址栏中地址
    if (currHref !== href) {  // currHref 和 href 不一致时说明进行了页面跳转
      NProgress.start();    // 页面开始加载时调用 start 方法
      if (!this.props.loading.global) {  // loading.global 为 false 时表示加载完毕
        NProgress.done();  // 页面请求完毕时调用 done 方法
        currHref = href;   // 将新页面的 href 值赋值给 currHref
      }
    }

    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          title="生活"
          key="生活"
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
          selected={this.state.selectedTab === 'blueTab'}
          badge={1}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
            router.push('/');
          }}
          data-seed="logId"
        >
          {this.renderContent('生活')}
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
          title="口碑"
          key="口碑"
          badge={'new'}
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
            });
            router.push('/list');
          }}
          data-seed="logId1"
        >
          {this.renderContent('口碑')}
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
          title="朋友"
          key="朋友"
          dot
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
            });
            router.push('/list');
          }}
        >
          {this.renderContent('朋友')}
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
          title="我的"
          key="我的"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'yellowTab',
            });
            router.push('/my');
          }}
        >
          {this.renderContent('我的')}
        </TabBar.Item>
      </TabBar>
    );
  }
}


function mapStateToProps(state) {
  console.log(state)

  return {...state.data,loading:state.loading};
}

// 关联 model
export default connect(mapStateToProps)(BasicLayout);



