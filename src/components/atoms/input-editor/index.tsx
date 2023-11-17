'use client';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './styles.css';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function InputEditor(props: Props) {
  const { value, onChange } = props;
  return (
    <div className="editor">
      <CKEditor
        editor={ClassicEditor}
        data={value}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
          onChange(data);
        }}
      />
    </div>
  );
}
