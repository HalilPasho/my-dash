import { CONTENT_EDITOR } from "./actions";

const initialState = {
  editorContent: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTENT_EDITOR:
      let newContent = action.payload;

      return {
        ...state,
        editorContent: newContent,
      };
    default:
      return state;
  }
};

export default reducer;
