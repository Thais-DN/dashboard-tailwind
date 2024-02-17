import React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";
import { Button } from '../../Button';

interface TextFormattingToolbarProps {
  text: string;
  setText: (text: string) => void;
}

const TextFormattingToolbar: React.FC<TextFormattingToolbarProps> = ({ text, setText }) => {

    const applyFormatting = (before: string, after?: string) => {
        const textarea = document.getElementById('bio') as HTMLTextAreaElement;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const beforeText = text.substring(0, start);
        const selectedText = text.substring(start, end);
        const afterText = text.substring(end);
      
        // Se não houver texto selecionado, aplique a formatação no cursor atual
        const newText = selectedText.length === 0
          ? beforeText + before + afterText
          : beforeText + before + selectedText + (after ?? before) + afterText;
      
        setText(newText);
      
        // Ajuste a seleção para que o usuário possa continuar digitando dentro da formatação
        const newEnd = selectedText.length === 0 ? start + before.length : end + before.length + (after?.length ?? before.length);
        textarea.setSelectionRange(newEnd, newEnd);
        textarea.focus();
      };
      
  
      const onBold = () => {
        applyFormatting('**');
      };
      
      const onItalic = () => {
        applyFormatting('*');
      };
      
      const onInsertLink = () => {
        const url = prompt('Enter the URL');
        if (url) {
          applyFormatting('[', `](${url})`);
        }
      };
      
      const onList = () => {
        applyFormatting('* ');
      };
      
      const onOrderedList = () => {
        applyFormatting('1. ');
      };
      

  return (
    <div className="flex items-center gap-1">
      <Button variant="ghost" type="button" onClick={onBold}>
        <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3}/>
      </Button>
      <Button variant="ghost" type="button" onClick={onItalic}>
        <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3}/>
      </Button>
      <Button variant="ghost" type="button" onClick={onInsertLink}>
        <Link className="h-4 w-4 text-zinc-500" strokeWidth={3}/>
      </Button>
      <Button variant="ghost" type="button" onClick={onList}>
        <List className="h-4 w-4 text-zinc-500" strokeWidth={3}/>
      </Button>
      <Button variant="ghost" type="button" onClick={onOrderedList}>
        <ListOrdered className="h-4 w-4 text-zinc-500" strokeWidth={3}/>
      </Button>
    </div>
  );
};

export default TextFormattingToolbar;
