import React from "react";
import { Spin } from 'antd';
import './index.less'
class Loading extends React.PureComponent {
  render() {
      return(
        <div className="loading">
            <Spin size="large"></Spin>
        </div>
      )
  }
}
export default Loading;
