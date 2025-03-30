import React from 'react'

function Drink ({item}) {
  return (
    <section>
      <h1>{item}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{item == 'tea' ?  'leaf' : 'bean'}</dd>
        <dt>caffine content</dt>
        <dd>{name === 'tea' ? '15–70 mg/cup' : '80–185 mg/cup'}</dd>
      </dl>
    </section>
  );
}
function List() {
  return (
    <div>
      <Drink item = "tea"/>
    </div>
  )
}

export default List
