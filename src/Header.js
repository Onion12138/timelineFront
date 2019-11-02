import React, {Component} from 'react';
import { PageHeader, Button } from 'antd';
class Header extends Component{
    render() {
        return (
            <div>
            <PageHeader
            style={{
                border: '1px solid rgb(235, 237, 240)',
            }}
            onBack={() => null}
            title="Timeline"
            subTitle="latest news for you"
            />
            <Button type="primary">更新</Button>
            </div>
        );
    }
}
export default Header;