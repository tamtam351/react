import React from 'react'

const List = () => {
    const fruits=["Apple ",'Orange','banana','coconut','pineapple']

    const listItems = fruits.map(fruit => <li>{fruit}</li>)
  return (
    <div>
        <ul>{listItems}</ul>
    </div>
  )
}

export default List