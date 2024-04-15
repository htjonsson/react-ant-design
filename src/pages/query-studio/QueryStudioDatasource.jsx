import React from 'react';
import { Tree, Typography, Empty, Divider, Card, Layout } from 'antd';

const { Header, Sider } = Layout;
const { Text } = Typography;

const treeData = [
    {
        title: <Text strong>Products (query)</Text>,
        key: 'products',
        disableCheckbox: true,
        children: [
            {
                title: 'Product line',
                key: 'products-line'
            },
            {
                title: 'Product type',
                key: 'products-type'
            },            
            {
                title: 'Product',
                key: 'products-product'
            }, 
            {
                title: 'Product color',
                key: 'products-color'
            }, 
            {
                title: 'Product size',
                key: 'products-size'
            }, 
            {
                title: 'Product brand',
                key: 'products-brand'
            }
        ],
    },
];

const tabs = [
    {
        key: '1',
        label: 'Data Source',
        children: <><Tree defaultExpandAll={true} checkable treeData={treeData}/><Empty /></>
    },
    {
        key: '2',
        label: 'Variables',
        children: 'Content of Tab Pane 2',
    },
    {
        key: '3',
        label: 'Maps',
        children: 'Content of Tab Pane 3',
    },
    {
        key: '4',
        label: 'Advanced',
        children: 'Content of Tab Pane 4',
    },
    {
        key: '5',
        label: 'Schedule',
        children: 'Content of Tab Pane 5',
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

    const onChange = (key) => {
        console.log(key);
    };

    return (
        <Layout>
            <Sider width='450px' style={siderStyle}>
                <Tree defaultExpandAll={true} checkable treeData={treeData}/>
            </Sider>
            <Layout style={contentStyle}>
                <pre>{JSON.stringify(treeData, null, 4)}</pre>
            </Layout>
        </Layout>
    )
}

export default QueryStudioDatasource