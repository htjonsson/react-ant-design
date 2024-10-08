import { Layout, version, } from 'antd';
import DevelopmentAppGridPage from './pages/development-app-grid-page';

const { Header, Content } = Layout;

const layoutStyle = {
};

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#58D909',  
};

const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100VH - 64px)',
    color: '#fff',
    backgroundColor: 'white',
};

const DevelopmentApp = () => {
    return (
        <Layout style={layoutStyle}>
            <Header style={headerStyle}>REACT-ANT-DESIGN - {version}</Header>
            <Content style={contentStyle}>
                <DevelopmentAppGridPage />
            </Content>
        </Layout>
    )
}

export default DevelopmentApp
