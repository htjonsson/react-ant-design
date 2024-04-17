import React from 'react';
import { Tabs, Tree, Typography, Empty, } from 'antd';
import QueryStudioDatasource from './query-studio-datasource';

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
    textAlign: 'center',
    lineHeight: '120px',
    minHeight: 'calc(100VH - 64px)',
    color: '#fff',
    backgroundColor: 'white',
    padding: '12px',
    paddingLeft: '40px'
};

const QueryStudioMain = () => {

    const onChange = (key) => {
        console.log(key);
    };

    return (
        <div style={contentStyle}>
            <Tabs defaultActiveKey="1" items={tabs} onChange={onChange} />
        </div>    
    )
}

export default QueryStudioMain