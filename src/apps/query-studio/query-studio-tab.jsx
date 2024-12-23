import React from 'react';
import { Tabs, } from 'antd';

import QueryStudioDatasource from './query-studio-datasource';
import QueryStudioDragNDrop from './query-studio-drag-n-drop';
import QueryStudioMaps from './query-studio-maps';
import QueryStudioSyntax from './query-studio-syntax';
import QueryStudioVariable from './query-studio-variable';
import QueryStudioSchedule from './query-studio-schedule';

const tabs = [
    {
        key: '1',
        label: 'Data Source',
        children: <QueryStudioDatasource/>
    },
    {
        key: '2',
        label: 'Variables',
        children: <QueryStudioVariable/>,
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
        children: <QueryStudioSyntax/>,
    },
    {
        key: '6',
        label: 'Schedule',
        children: <QueryStudioSchedule/>,
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