import { useState } from 'react';
import { Input, Form, Button, Flex, } from 'antd';

const SgiClassInformationPage = () => {
    return (
        <>
            <Form
                name="basic"
                labelCol={{ span: 8, }}
                wrapperCol={{ span: 16, }}
                style={{ maxWidth: 600, }}
                layout="horizontal"
                autoComplete="off"
            >

                <Form.Item label="Class Name" name="class_name" >
                    <Input />
                </Form.Item>

                <Form.Item label="Library Path and Name " name="library_path_and_name " >
                    <Input />
                </Form.Item>

                <Form.Item label="Library to be Linked " name="library_to_be_linked " >
                    <Input />
                </Form.Item>

                <Form.Item label="Header File" name="header_file" >
                    <Input />
                </Form.Item>

                <Form.Item label="Other Required Headers " name="other_required_headers" >
                    <Input />
                </Form.Item>

                <Form.Item label="Palette" name="palette" >
                    <Input />
                </Form.Item>

                <Form.Item label="Icon Name " name="icon_name" >
                    <Input />
                </Form.Item>

                <Form.Item label="Desktop Icon Drop List " name="desktop_icon_drop_list " >
                    <Input />
                </Form.Item>            

            </Form>

            <Flex gap="small" wrap>
                <Button type="primary">Save/Generate</Button>
                <Button>Install Locally</Button>
                <Button>Close</Button>
            </Flex>
        </>        
    )
}

export default SgiClassInformationPage

{{/*
    Class Information
    
    Class Name                  -> text
    Library Path and Name       -> text
    Library to be Linked        -> text
    Header File                 -> text
    Other Required Headers      -> text
    Palette                     -> text
    Icon Name                   -> text
    Desktop Icon Drop List      -> text

    Save/Generate               -> button
    Install Locally             -> button
    Close                       -> button

    Enter a list of files types, as defined in ftr rules, and the corresponding
    resource name for each.  For example, AsciiText:text, ImageFile:image
*/}}        

