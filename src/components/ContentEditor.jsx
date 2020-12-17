import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import sss from "../123.jpg";
import { useDispatch } from "react-redux";
import { CONTENT_EDITOR } from "../store/actions";

const EditorInput = () => {
  const dispatch = useDispatch();
  const [contentArea, setContentArea] = useState();

  const handleEditorChange = (content) => {
    setContentArea(content);
    dispatch({ type: CONTENT_EDITOR, payload: contentArea });
  };

  return (
    <Editor
      value={contentArea}
      apiKey="rvip8at86ivwxsauelhsmejzkzlj5uodrw8yv0oco4un94sq"
      init={{
        height: 500,
        menubar: "insert",
        outputFormat: "text",
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount",
        ],
        toolbar: `undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help | image`,
        selector: "textarea", // change this value according to your HTML

        image_list: [
          { title: "My image 1", value: sss },
          { title: "My image 2", value: "http://www.moxiecode.com/my2.gif" },
        ],
      }}
      onEditorChange={handleEditorChange}
    />
  );
};

export default EditorInput;
