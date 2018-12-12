import styles from './index.css';
import React from 'react';
import { SearchBar,Grid,Carousel, WingBlank,List } from 'antd-mobile';

const data = Array.from(new Array(8)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));
const Item = List.Item;
const Brief = Item.Brief;
class SearchBarExample extends React.Component {
  state = {
    value: '美食',
    focused: false,
    data: ['1', '2', '3'],
    imgHeight: 176,
    disabled: false,
  };
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  onChange= (value) => {
    this.setState({ value });
  };
  carouselOnChange=(a, b, c)=> {
  console.log(a, b, c);
  };
  clear = () => {
    this.setState({ value: '' });
  };
  render() {
    return (<div className="need-left-right-margin">


      <SearchBar
        value={this.state.value}
        placeholder="搜索"
        onSubmit={value => console.log(value, 'onSubmit')}
        onClear={value => console.log(value, 'onClear')}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        showCancelButton
        onChange={this.onChange}
      />

        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>

      <Grid data={data} activeStyle={false} />
      <List renderHeader={() => 'Align Vertical Center'} className="my-list">
        <Item arrow="horizontal"
              multipleLine
              onClick={() => {}}
              platform="android"
        >
          JS—-this指向（一） <Brief>平时用this有些混乱，所以写个总结。 没有箭头函数之前，我们说this就是函数运行时所在的环境对象，但是在箭头函数中this就是定义时所在的对象，先说大家熟知的：函数运行时所在的环境对象。 1、作为函数调用，this指向全局对象</Brief>
        </Item>
        <Item
          arrow="horizontal"
          multipleLine
          onClick={() => {}}
          platform="android"
        >

          JS—-this指向（二）<Brief>箭头函数中this对象就是定义时所在的作用域，也就是说箭头函数本身没有this，内部的this就是外层代码块作用域中的this。</Brief>
        </Item>
        <Item
          arrow="horizontal"
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          multipleLine
          onClick={() => {}}
        >
          Title <Brief>subtitle</Brief>
        </Item>
      </List>
    </div>);
  }
}


export default function() {
  return (
    <SearchBarExample/>
  );
}
