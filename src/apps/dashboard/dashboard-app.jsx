import { Layout, version, } from 'antd';

const { Header, Content } = Layout;

const layoutStyle = {
};

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#8a09d9',
    
};

const contentStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    minHeight: 'calc(100VH - 64px)',
    color: '#fff',
    backgroundColor: 'white',
};

const DashboardApp = () => {
    return (
        <Layout style={layoutStyle}>
            <Header style={headerStyle}>REACT-ANT-DESIGN - {version}</Header>
            <Content style={contentStyle}>
                <div>Dashboard</div>
            </Content>
        </Layout>
    )
}

export default DashboardApp
