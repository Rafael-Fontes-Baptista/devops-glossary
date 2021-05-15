import React, { useState } from "react"

export default function CreateItem(props) {
  const [item, set_item] = useState({
    title: "",
    content: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    set_item((prevData) => {
      return {
        ...prevData,
        [name]: value,
      }
    })
  }

  const submitItem = (e) => {
    props.onAdd(item)
    set_item({
      title: "",
      content: "",
    })
    e.preventDefault()
  }

  return (
    <div>
      <form className="create-item">
        <input
          type="text"
          name="title"
          placeholder="Type a title here..."
          value={item.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="description here..."
          value={item.content}
          onChange={handleChange}
          required
        />
        <button type="submit" onClick={submitItem}>
          Add
        </button>
      </form>
    </div>
  )
}
