import styles from './index.css';
import React from 'react';
import { SearchBar } from 'antd-mobile';
class SearchBarExample extends React.Component {
  state = {
    value: '美食',
    focused: false,
  };
  onChange= (value) => {
    this.setState({ value });
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
    </div>);
  }
}


export default function() {
  return (
    <SearchBarExample/>
  );
}
