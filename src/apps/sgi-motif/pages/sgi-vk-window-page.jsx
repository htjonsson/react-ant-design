import { useState } from 'react';
import { Input, Radio, Form, Switch, Checkbox, } from 'antd';

const trueFalseOption = [
  ];

const SgiVkWindowPage = () => {
    return (
        <Form
            name="basic"
            labelCol={{ span: 8, }}
            wrapperCol={{ span: 16, }}
            style={{ maxWidth: 600, }}
            layout="horizontal"
            autoComplete="off"
        >

            <Form.Item label="autoRouteCallbacks" name="autoRouteCallbacks" >
                <Switch />
            </Form.Item>

            <Form.Item label="coprimaryWindow" name="coprimaryWindow" >
                <Switch />
            </Form.Item>

            <Form.Item label="disableIconify" name="disableIconify" >
                <Switch />
            </Form.Item>

            <Form.Item label="disableWindowResize" name="disableWindowResize" >
                <Switch />
            </Form.Item>

            <Form.Item label="forceChildClass" name="forceChildClass" >
                <Switch />
            </Form.Item>        

            <Form.Item label="hideTitleBar" name="hideTitleBar" >
                <Switch />
            </Form.Item>                             

            <Form.Item label="hideWMBorder" name="hideWMBorder" >
            <Switch />
            </Form.Item>    

            <Form.Item label="showPopupHelp" name="showPopupHelp" >
                <Switch />
            </Form.Item>                    

            <Form.Item label="title" name="title" >
                <Input />
            </Form.Item>  

        </Form>
    )
}

export default SgiVkWindowPage