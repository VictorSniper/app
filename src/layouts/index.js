import styles from './index.css';
import React from 'react';
import { connect } from 'dva';
import { TabBar, Icon } from 'antd-mobile';
import Link from 'umi/link';
import router from 'umi/router';

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
        { this.props.children }

      </div>
    );
  }

  render() {
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

  return {...state.data};
}

// 关联 model
export default connect(mapStateToProps)(BasicLayout);



