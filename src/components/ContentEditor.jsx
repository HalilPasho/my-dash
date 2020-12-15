import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import sss from "../123.jpg";
const EditorInput = () => {
  const handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
  };

  return (
    <Editor
      initialValue="<p>Enter content</p>"
      apiKey="rvip8at86ivwxsauelhsmejzkzlj5uodrw8yv0oco4un94sq"
      init={{
        height: 500,
        menubar: "insert",
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
