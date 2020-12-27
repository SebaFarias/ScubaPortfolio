import React , { useState } from 'react'

const withPrevNext = (WrappedComponent,list) => { 

  const WithPrevNext = () => {
    const listNames = Object.keys(list) 
    const [ selected , setSelected ] = useState(listNames[0])
    const length = listNames.length
    const index = listNames.indexOf(selected)
  
    const next = () => {
      const newIndex = index + 1 >= length ? 0 : index + 1
      setSelected(listNames[newIndex])
    }
    const prev = () => {    
      const newIndex = index - 1 < 0 ? length - 1 : index - 1
      setSelected(listNames[newIndex])
    }
    const select = selectedIndex => {
      if(selectedIndex<0) return setSelected(listNames[0])
      if(selectedIndex>=length) return setSelected(listNames[length-1])
      setSelected(listNames[selectedIndex])
    }
    return(
      <WrappedComponent
        prev={prev}
        next={next}
        selected={selected}
        select={select}
        {...WrappedComponent.props}    
      />
    )
  }
  return WithPrevNext
}
export default withPrevNext