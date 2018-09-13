import React from 'react';
import { connect } from 'dva';
import logo from 'assets/images/logo.png';
import './style.less';
import BaseComponent from 'components/BaseComponent';
import { Notification } from 'components';
import $$ from 'cmn-utils';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
const notice = Notification.notice;

@connect()
export default class Home extends BaseComponent {
  notice = (e) => {
    this.close = notice(e.target.innerText, e.target.innerText);
  }

  closeNotice = () => {
    this.close && this.close();
  }

  render() {
    const user = $$.getStore('user');
    
    return ( 
      <div className="home-page">
        <img src={logo} alt="" />
        <div>Welcome Home {user.name}</div>
        <hr />
        <WingBlank>
          <Button type="primary" onClick={this.notice}>success</Button><WhiteSpace />
          <Button type="warning" onClick={this.notice}>error</Button><WhiteSpace />
          <Button onClick={this.notice}>warn</Button><WhiteSpace />
          <Button onClick={this.notice}>default</Button><WhiteSpace />
          <Button onClick={this.notice}>dark</Button><WhiteSpace />
          <Button onClick={this.closeNotice}>close</Button><WhiteSpace />
        </WingBlank>
      </div>
    )
  }
}