import React, { useState } from 'react';
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

const x = 3;
const y = 2;
const z = 1;
const defaultData = [];

const generateData = (_level, _preKey, _tns) => {
    const preKey = _preKey || '0';
    const tns = _tns || defaultData;
    const children = [];
    
    for (let i = 0; i < x; i++) {
        const key = `${preKey}-${i}`;
        tns.push({
        title: key,
        key,
    });

    if (i < y) {
        children.push(key);
    }
    }
    
    if (_level < 0) {
        return tns;
    }
    
    const level = _level - 1;
    
    children.forEach((key, index) => {
        tns[index].children = [];
        return generateData(level, key, tns[index].children);
    });
};
generateData(z);

const contentStyle = {
    textAlign: 'left',
    borderRadius: '8px',
    padding: '12px',
    backgroundColor: 'white',
};

const siderStyle = {
    textAlign: 'left',
    backgroundColor: 'white'
};

const QueryStudioDragNDrop = () => {
    const [gData, setGData] = useState(defaultData);

    const onDragEnter = (info) => {
        // console.log(info);
        // expandedKeys, set it when controlled is needed
        // setExpandedKeys(info.expandedKeys)
    };

    const allowDrop = (info) => {
        // console.log(info); 
        
        var debug = {}

        debug.dragNodeDepth = info.dragNode.key.split('-').length;
        debug.dropNodeDepth = info.dropNode.key.split('-').length;
        
        console.log(debug);

        if (debug.dragNodeDepth >= debug.dropNodeDepth) 
        {
            if (debug.dragNodeDepth === debug.dropNodeDepth && info.dropPosition == 0) {
                return false;
            }

            console.log(info); 
            return true;
        }
        return false;
    }

    const onDrop = (info) => {
        // console.log(info);
        const dropKey = info.node.key;
        const dragKey = info.dragNode.key;
        const dropPos = info.node.pos.split('-');
        const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]); // the drop position relative to the drop node, inside 0, top -1, bottom 1
    
        const loop = (data, key, callback) => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].key === key) {
                    return callback(data[i], i, data);
                }
                if (data[i].children) {
                    loop(data[i].children, key, callback);
                }
            }
        };
        const data = [...gData];
    
        // Find dragObject
        let dragObj;
        loop(data, dragKey, (item, index, arr) => {
            arr.splice(index, 1);
            dragObj = item;
        });
        if (!info.dropToGap) {
            // Drop on the content
            loop(data, dropKey, (item) => {
                item.children = item.children || [];
                // where to insert. New item was inserted to the start of the array in this example, but can be anywhere
                item.children.unshift(dragObj);
            });
        } else {
            let ar = [];
            let i;
            loop(data, dropKey, (_item, index, arr) => {
                ar = arr;
                i = index;
            });
            if (dropPosition === -1) {
                // Drop on the top of the drop node
                ar.splice(i, 0, dragObj);
            } else {
                // Drop on the bottom of the drop node
                ar.splice(i + 1, 0, dragObj);
            }
        }
        setGData(data);
    };    

    return (
        <Layout>
            <Sider width='450px' style={siderStyle}>
                <Tree
                    defaultExpandAll
                    draggable
                    blockNode
                    onDragEnter={onDragEnter}
                    onDrop={onDrop}
                    allowDrop={allowDrop}
                    treeData={gData}
                />
            </Sider>
            <Layout style={contentStyle}>
            </Layout>
        </Layout>
    )
}

export default QueryStudioDragNDrop



