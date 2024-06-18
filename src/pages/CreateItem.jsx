// pages/CreateItem.jsx
import { useState } from "react";
import { useEffect } from "react";

export default function CreateItem() {
  const [values, setValues] = useState({
    task: "",
    due: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const addItem = (event) => {
    event.preventDefault();
    fetch(`${import.meta.env.VITE_BACKEND_API_URI}/api/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...values,
        status: "todo",
      }),
    });
  };

  return (
    <form onSubmit={addItem}>
      <div className="input_area">
        <label>Task</label>
        <input
          type="text"
          name="task"
          value={values.task}
          onChange={handleChange}
        />
      </div>
      <div className="input_area">
        <label>Due</label>
        <input
          type="text"
          name="due"
          value={values.due}
          onChange={handleChange}
        />
      </div>
      <button>Create</button>
    </form>
  );
}
