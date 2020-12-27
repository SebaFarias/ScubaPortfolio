import React , {useState} from 'react'
import withPrevNext from '../../HOC/withPrevNext'
import skillsList from '../../data/skills'
import SkillsSelector from './SkillsSelector'
import SkillsContent from './SkillsContent'

const SkillsContainer = ({prev,next,selected}) => {

  return (
    <>
      <SkillsSelector prev={prev} next={next} selected={selected}/>
      <SkillsContent name={skillsList[selected]}/>
    </>
  )
}

export default withPrevNext(SkillsContainer,skillsList)