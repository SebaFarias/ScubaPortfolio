const SkillsSelector = ({prev,next}) => {

  return (
    <div className={'skills selector-container'}>
      <button onClick={prev}>previus</button>
      <h2>Selector</h2>  
      <button onClick={next}>next</button>
    </div>
  )
}

export default SkillsSelector