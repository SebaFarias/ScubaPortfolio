import SkillsList from "./SkillsList"

const SkillsSelector = ({prev,next,selected}) => {

  return (
    <div className={'selector-container'}>
      <button onClick={prev}>previus</button>
      <SkillsList/>  
      <button onClick={next}>next</button>
      <style jsx>{`
        .selector-container{
          display: flex;
          margin: auto;
        }
      `}</style>
    </div>
  )
}

export default SkillsSelector