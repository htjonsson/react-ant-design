import React from 'react';
import { 
    Typography,
    Layout,
} from 'antd';

const { Header, Sider } = Layout;
const { Text, Title, } = Typography;

import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const contentStyle = {
    textAlign: 'left',
    borderRadius: '8px',
    padding: '12px',
    backgroundColor: 'white',
    fontSize: '13px',
};

const siderStyle = {
    backgroundColor: 'white'
};

const FormBuilderSyntaxHighlighter = () => {
    const codeString = '/*\n * Copyright 1989, 1992 O\'Reilly and Associates, Inc.\n * See ../Copyright for complete rights and liability information.\n */\n\n/*\n * xgoodbye.c - simple program to put up a banner on the display\n *      and callback an application function.\n */\n\n#include <stdio.h>\n/*\n * Include files required for all Toolkit programs\n */\n#include <X11/Intrinsic.h>  /* Intrinsics Definitions */\n#include <Xm/Xm.h>  /* Standard Motif definitions */\n\n/*\n * Public include file for widgets we actually use in this file.\n */\n#include <Xm/PushB.h>    /* Motif PushButton Widget */\n\n/*\n * Quit button callback function\n */\n/* ARGSUSED */\nvoid Quit(w, client_data, call_data)\nWidget w;\nXtPointer client_data, call_data;\n{ \n    fprintf(stderr, "It was nice knowing you.\n");\n    exit(0); \n}\n\nmain(argc, argv)\nint argc;\nchar **argv;\n{\n    XtAppContext app_context;\n    Widget topLevel, goodbye;\n\n    /*\n     * Register the default language procedure\n     */\n    XtSetLanguageProc(NULL, (XtLanguageProc)NULL, NULL);\n\n    topLevel = XtVaAppInitialize(\n            &app_context,           /* Application context */\n            "XGoodbye",             /* Application class */\n            NULL, 0,                /* command line option list */\n            &argc, argv,            /* command line args */\n            NULL,                   /* for missing app-defaults file */\n            NULL);                  /* terminate varargs list */\n\n    goodbye = XtVaCreateManagedWidget(\n            "goodbye",              /* arbitrary widget name */\n            xmPushButtonWidgetClass,     /* widget class from PushB.h */\n            topLevel,               /* parent widget*/\n            NULL);                  /* terminate varargs list */\n        \n    XtAddCallback(goodbye, XmNactivateCallback, Quit, 0 /* client_data */);\n\n    /*\n     *  Create windows for widgets and map them.\n     */\n    XtRealizeWidget(topLevel);\n\n    /*\n     *  Loop for events.\n     */\n    XtAppMainLoop(app_context);\n}';

    return (
        <Layout>
            <Sider width='450px' style={siderStyle}>
                
            </Sider>
            <Layout style={contentStyle}>
                <SyntaxHighlighter language="cpp" style={docco}>
                    {codeString}
                </SyntaxHighlighter>   
            </Layout>
        </Layout>     
    )
}

export default FormBuilderSyntaxHighlighter