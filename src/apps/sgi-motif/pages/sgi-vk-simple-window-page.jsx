import { useState } from 'react';
import { Input, Radio, Form, Switch, Checkbox, } from 'antd';

const trueFalseOption = [
    {
      label: 'True',
      value: 'true',
    },
    {
      label: 'False',
      value: 'false',
    },
  ];

const SgiVkSimpleWindowPage = () => {
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
                <Radio.Group options={trueFalseOption} />
            </Form.Item>

            <Form.Item label="coprimaryWindow" name="coprimaryWindow" >
                <Radio.Group options={trueFalseOption} />
            </Form.Item>

            <Form.Item label="disableIconify" name="disableIconify" >
                <Radio.Group options={trueFalseOption} />
            </Form.Item>

            <Form.Item label="disableWindowResize" name="disableWindowResize" >
                <Radio.Group options={trueFalseOption} />
            </Form.Item>

            <Form.Item label="forceChildClass" name="forceChildClass" >
                <Radio.Group options={trueFalseOption} />
            </Form.Item>        

            <Form.Item label="hideTitleBar" name="hideTitleBar" >
                <Radio.Group options={trueFalseOption} />
            </Form.Item>                             

            <Form.Item label="hideWMBorder" name="hideWMBorder" >
                <Checkbox />
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

export default SgiVkSimpleWindowPage

{{/*
    InstanceName    
    ClassName       VkSimpleWindow
    -
    autoRouteCallbacks      ->   radioGroup
    coprimaryWindow         ->   radioGroup
    disableIconify          ->   radioGroup
    disableWindowResize     ->   radioGroup
    forceChildClass         ->   radioGroup
    hideTitleBar            ->   radioGroup        
    hideWMBorder            ->   radioGroup
    showPopupHelp           ->   radioGroup
    title                   ->   text
*/}}