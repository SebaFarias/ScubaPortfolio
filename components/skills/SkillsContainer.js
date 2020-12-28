import withPrevNext from '../../HOC/withPrevNext'
import skillsList from '../../data/skills'
import SkillsSelector from './SkillsSelector'
import SkillsContent from './SkillsContent'

const SkillsContainer = ({prev,next,selected}) => {

  return (
    <section className='skills'>
      <h2>Skills</h2>
      <div className='skills-container'>
        <SkillsSelector prev={prev} next={next} selected={selected}/>
        <SkillsContent name={skillsList[selected]}/>
      </div>
        <style jsx>{`
          .skills{
            background: coral;
          }
          .skills-container{
            display: flex;
            height: 85vh;
          }          
        `}</style>
    </section>
  )
}

export default withPrevNext(SkillsContainer,skillsList)