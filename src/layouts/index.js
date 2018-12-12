import styles from './index.css';
import React from 'react';
import { connect } from 'dva';
import { TabBar, Icon } from 'antd-mobile';
import Link from 'umi/link';
import router from 'umi/router';
import NProgress from 'nprogress';
import ContentLoader, { Facebook,Instagram } from 'react-content-loader'
const MyInstagramLoader = () => <Instagram />
const MyLoader = () => (
  <ContentLoader
    height={1000}
    width={1060}
  ><Facebook/>
    <Instagram/>

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


        {/*{    this.props.loading.global ? (*/}
          {/*<ContentLoader 	height={900}>*/}
            {/*<rect x="0" y="0" rx="0" ry="0" width="100%" height="44" />*/}
            {/*<rect x="0" y="45" rx="2" ry="2" width="100%" height="160" />*/}

            {/*<rect x="0" y="230" rx="2" ry="2" width="94" height="64" />*/}
            {/*<rect x="25%" y="230" rx="2" ry="2" width="96" height="64" />*/}
            {/*<rect x="50%" y="230" rx="2" ry="2" width="96" height="64" />*/}

            {/*<rect x="75%" y="230" rx="2" ry="2" width="96" height="64" />*/}
          {/*</ContentLoader>*/}
          {/*) : (*/}
          {/*this.props.children*/}
          {/*) }*/}
        {
          this.props.children
        }

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



