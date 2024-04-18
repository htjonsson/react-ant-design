import React from 'react';
import { 
    Tree, 
    Typography, 
    Empty, 
    Divider, 
    Card, 
    Layout 
} from 'antd';
import {
    HomeOutlined,
    LoadingOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    FolderOutlined,
    FieldStringOutlined,
  } from '@ant-design/icons';

const { Header, Sider } = Layout;
const { Text } = Typography;

const treeData = [
    {
        title: <Text strong>Products (query)</Text>,
        key: 'products',
        icon: <FolderOutlined/>,
        disableCheckbox: true,
        children: [
            {
                title: 'Product line',
                key: 'products-line',
                icon: <FieldStringOutlined />,
            },
            {
                title: 'Product type',
                key: 'products-type',
                icon: <FieldStringOutlined />,
            },            
            {
                title: 'Product',
                key: 'products-product',
                icon: <FieldStringOutlined />,
            }, 
            {
                title: 'Product color',
                key: 'products-color',
                icon: <FieldStringOutlined />,
            }, 
            {
                title: 'Product size',
                key: 'products-size',
                icon: <FieldStringOutlined />,
            }, 
            {
                title: 'Product brand',
                key: 'products-brand',
                icon: <FieldStringOutlined />,
            }
        ],
    },
];


const contentStyle = {
    textAlign: 'left',
    borderRadius: '8px',
    padding: '12px'
};

const siderStyle = {
    backgroundColor: 'white'
}

const QueryStudioDatasource = () => {

    const onCheck = (keys, e) => {
        console.log(keys);
        alert(keys);
        console.log(JSON.stringify(e, null, 4));
    };

    const onSelect = () => {
        console.log('onSelect');
    }

    const onRightClick = ({event, node}) => {
        console.log('onRightClick');
        console.log(JSON.stringify(node, null, 4));
    }

    return (
        <Layout>
            <Sider width='450px' style={siderStyle}>
                <Tree defaultExpandAll={true} showIcon checkable treeData={treeData} onCheck={onCheck} onRightClick={onRightClick}/>
            </Sider>
            <Layout style={contentStyle}>
                <pre>{JSON.stringify(treeData, null, 4)}</pre>
            </Layout>
        </Layout>
    )
}

export default QueryStudioDatasource