import React, { useState } from "react";

function CreateArea(props) {
  const [inputText, setInputText] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInputText(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form
        onSubmit={event => {
          props.onButtonClick(inputText);
          setInputText({ title: "", content: "" });
          event.preventDefault();
        }}
      >
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={inputText.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputText.content}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
