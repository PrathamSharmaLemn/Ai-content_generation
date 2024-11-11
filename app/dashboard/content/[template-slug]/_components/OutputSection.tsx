"use client"
import React from "react";
import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import MarkdownIt from 'markdown-it';
import type { EditorProps } from 'react-markdown-editor-lite';

const MdEditor = dynamic<EditorProps>(() => import('react-markdown-editor-lite'), {
  ssr: false
});

import 'react-markdown-editor-lite/lib/index.css';

interface Props {
    aiOutput: string
}

function OutputSection({ aiOutput }: Props) {
    const mdParser = new MarkdownIt();

    const handleCopy = () => {
        navigator.clipboard.writeText(aiOutput);
    };

    return (
        <div className="bg-white shadow-lg border rounded-lg">
            <div className="flex justify-between items-center p-5">
                <h2 className="font-medium text-lg">Your Result</h2>
                <Button className="flex gap-2" onClick={handleCopy}>
                    <Copy className="w-4 h-4"/>Copy
                </Button>
            </div>
            <MdEditor
                value={aiOutput || 'Your Result will appear here!'}
                renderHTML={text => mdParser.render(text)}
                view={{ menu: false, md: false, html: true }}
                canView={{ 
                    menu: true, 
                    md: true, 
                    html: true, 
                    fullScreen: false, 
                    hideMenu: false,
                }}
                style={{ height: '600px' }}
                readOnly={true}
            />
        </div>
    )
}

export default OutputSection
