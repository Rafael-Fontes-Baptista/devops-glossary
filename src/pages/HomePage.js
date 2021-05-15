import React, { useState } from "react"
import CreateItem from "../components/CreateItem"
import ItemCard from "../components/ItemCard"

export default function HomePage() {
  const [items, set_items] = useState([])

  const addItem = (newItem) => {
    set_items((prevItems) => {
      return [...prevItems, newItem]
    })
  }

  const deleteItem = (id) => {
    set_items((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id
      })
    })
  }

  return (
    <div>
      <CreateItem onAdd={addItem} />
      {items.map((item, index) => {
        return (
          <ItemCard
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onDelete={deleteItem}
          />
        )
      })}
    </div>
  )
}
