import React from 'react'

const List2 = () => {
    const fruits = [
        {name: 'Apple', calories: '95'},
        {name: 'Orange', calories: '45'},
        {name: 'Banana', calories: '105'},
        {name: 'Coconut', calories: '159'},
        {name: 'Pineapple', calories: '37'}
    ]

    // fruits.sort((a, b) => a.name.localeCompare(b.name))
    // fruits.sort((a, b) => a.calories - b.calories)



const localeFruits = fruits.filter(fruit => fruit.calories<100)


    // const listItems = fruits.map((each,i) => <li key={i}>{each.name} &nbsp;
    //                                          <b>{each.calories}</b></li>)
    const listItems = localeFruits.map(localeFruits => <li key={localeFruits}>{localeFruits.name} &nbsp;
                                             <b>{localeFruits.calories}</b></li>)
  return (
    <div>
        <ul>{listItems}</ul>
    </div>
  )
}

export default List2