import React, { PureComponent as Component } from 'react';
import { connect } from 'react-redux';
import { Button} from 'antd';
import './index.less';
import { loginActions } from '@/reducer/modules/user';

@connect(
    state => {
      return {
        loginData: state.user
      };
    },
    {
      loginActions
    }
)

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render(){
        return(
            <div className="login">
                <Button>login</Button>
            </div>
        )
    }
}

export default Login;