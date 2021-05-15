import React from "react"

export default function ItemCard(props) {
  const handleClick = () => {
    props.onDelete(props.id)
  }
  return (
    <div className="item-card">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button onClick={handleClick}>delete</button>
    </div>
  )
}
