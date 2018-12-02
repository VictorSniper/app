import styles from './index.css';
import React from 'react';
import { SearchBar } from 'antd-mobile';
import { Carousel } from 'antd';
class SearchBarExample extends React.Component {
  state = {
    value: '美食',
    focused: false,
  };
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
      <Carousel afterChange={this.carouselOnChange}>
        <div  className={styles.item} >
        </div>
        <div className={styles.item}>
        </div>
        <div className={styles.item}>
        </div>
      </Carousel>
    </div>);
  }
}


export default function() {
  return (
    <SearchBarExample/>
  );
}
