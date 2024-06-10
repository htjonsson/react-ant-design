import React, {useState} from 'react';
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
import QueryStudioTable from '../../components/query-studio-table';


const { Header, Sider } = Layout;
const { Text, Title, } = Typography;

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

const metaData = [
    {
        title: 'Product line',
        key: 'products-line',
        type: 'string',
        className: 'query-studio-text',
        placeholder: 'xxxxxxxxxxxxx',
    },
    {
        title: 'Product type',
        key: 'products-type',
        type: 'string',
        className: 'query-studio-text',
        placeholder: 'xxxxxxxxxxxxx',
    },            
    {
        title: 'Product',
        key: 'products-product',
        type: 'string',
        className: 'query-studio-text',
        placeholder: 'xxxxxxxxxxxxx',
    }, 
    {
        title: 'Product color',
        key: 'products-color',
        type: 'date',
        className: 'query-studio-text',
        placeholder: 'dd-mm-yyyy',
    }, 
    {
        title: 'Product size',
        key: 'products-size',
        type: 'number',
        className: 'query-studio-number',
        placeholder: 'x,xxx,xxx.xx',
    }, 
    {
        title: 'Product brand',
        key: 'products-brand',
        type: 'string',
        className: 'query-studio-text',
        placeholder: 'xxxxxxxxxxxxx',
    }    
];

const contentStyle = {
    textAlign: 'left',
    borderRadius: '8px',
    padding: '12px',
    backgroundColor: 'white',
};

const siderStyle = {
    backgroundColor: 'white'
};

const QueryStudioDatasource = () => {
    const [columns, setColumns] = useState([]);
    const {title, setTitle} = useState("Title");
    const {subtitle, setSubtitle} = useState("Subtitle");

    const ModifyColumns = (key, isAdd) => {
        // Add or remove the columns depending what is checked
        if (isAdd === true) {
            var found = metaData.find(el => el.key === key);
            if (found) {
                setColumns([...columns, found]);
            }       
        }
        else {
            setColumns(columns.filter(x => x.key !== key));
        }       
    }

    const onCheck = (keys, e) => {
        // console.log(JSON.stringify(e, null, 4));
        ModifyColumns(e.node.key, e.checked);
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
                <QueryStudioTable columns={columns} />
            </Layout>
        </Layout>
    )
}

export default QueryStudioDatasource



