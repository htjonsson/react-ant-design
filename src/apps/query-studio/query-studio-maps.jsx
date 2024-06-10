import React from 'react';
import { 
    Typography, 
    Layout 
} from 'antd';
import ImageWithMap from '../../components/image-with-map';

const { Header, Sider } = Layout;

const contentStyle = {
    textAlign: 'left',
    borderRadius: '8px',
    padding: '12px',
    backgroundColor: 'white',
};

const siderStyle = {
    backgroundColor: 'white'
};

const QueryStudioMaps = () => {
    return (
        <Layout>
            <Sider width='450px' style={siderStyle}>
            </Sider>
            <Layout style={contentStyle}>
                <ImageWithMap />
            </Layout>
        </Layout>
    )
}

export default QueryStudioMaps



