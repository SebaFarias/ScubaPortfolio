import SkillsList from "./SkillsList"

const SkillsSelector = ({prev,next,selected}) => {

  return (
    <div className={'skills selector-container'}>
      <button onClick={prev}>previus</button>
      <SkillsList/>  
      <button onClick={next}>next</button>
    </div>
  )
}

export default SkillsSelector