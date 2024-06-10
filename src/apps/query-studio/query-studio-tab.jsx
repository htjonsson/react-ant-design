import React from 'react';
import { Tabs, Tree, Typography, Empty, } from 'antd';
import QueryStudioDatasource from './query-studio-datasource';
import QueryStudioDragNDrop from './query-studio-drag-n-drop';
import QueryStudioMaps from './query-studio-maps';

const tabs = [
    {
        key: '1',
        label: 'Data Source',
        children: <QueryStudioDatasource/>
    },
    {
        key: '2',
        label: 'Variables',
        children: 'Content of Tab Pane 2',
    },
    {
        key: '3',
        label: 'Filter',
        children: 'Content of Filter Tab Pane' ,
    },    
    {
        key: '4',
        label: 'Maps',
        children: <QueryStudioMaps/>,
    },
    {
        key: '5',
        label: 'Advanced',
        children: 'Content of Tab Pane 4',
    },
    {
        key: '6',
        label: 'Schedule',
        children: 'Content of Tab Pane 5',
    },  
    {
        key: '7',
        label: 'Drag And Drop',
        children: <QueryStudioDragNDrop/>,
    },              
];

const contentStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    minHeight: 'calc(100VH - 64px)',
    color: '#fff',
    backgroundColor: 'white',
    padding: '12px',
    paddingLeft: '40px'
};

const QueryStudioTab = () => {

    const onChange = (key) => {
        console.log(key);
    };

    return (
        <div style={contentStyle}>
            <Tabs defaultActiveKey="1" items={tabs} onChange={onChange} /> 
        </div>    
    )
}

export default QueryStudioTab