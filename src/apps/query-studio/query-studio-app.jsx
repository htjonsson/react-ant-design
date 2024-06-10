import { useState } from 'react'
import { Layout, version, } from 'antd';

import QueryStudioMain from './query-studio-main';

const { Header, Content } = Layout;

const layoutStyle = {
};

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#0958d9',
    
};

const contentStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    minHeight: 'calc(100VH - 64px)',
    color: '#fff',
    backgroundColor: '#4096ff',
};

const QueryStudioApp = () => {
    return (
        <Layout style={layoutStyle}>
            <Header style={headerStyle}>REACT-ANT-DESIGN - {version}</Header>
            <Content style={contentStyle}>
                <QueryStudioMain />
            </Content>
        </Layout>
    )
}

export default QueryStudioApp
