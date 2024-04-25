import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { 
    Button, 
    Space,
} from 'antd';
import {
    HomeOutlined,
    LoadingOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    FolderOutlined,
    FieldStringOutlined,
    FilterFilled,
    SortAscendingOutlined,
} from '@ant-design/icons';



const QueryStudioTable = (props) => {
    return (
        <div className='query-studio-block'>
            <table className='query-studio-table'>
                <thead>
                    <tr>
                        {props.columns.map(column => (
                            <th key={column.key} className='query-studio-title'>
                                {column.title}
                                <Space>
                                    <FilterFilled />
                                    <SortAscendingOutlined />
                                </Space>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Array(10).fill(1).map((el, i) => (
                        <tr key={i}>
                            {props.columns.map(column => (
                                <td key={column.key} className={column.className}>{column.placeholder}</td>
                            ))}
                        </tr>
                    ))}         
                </tbody>
            </table>
        </div>
    )
}

export default QueryStudioTable;

QueryStudioTable.propTypes = {
    columns: PropTypes.array.isRequired
};