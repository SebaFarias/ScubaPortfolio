import HeroContainer from '../components/Hero/HeroContainer'
import SkillsContainer from '../components/skills/SkillsContainer'
import ExperienceContainer from '../components/experience/ExperienceContainer'
import ProjectsContainer from '../components/projects/ProjectsContainer'
import BackgroundOcean from '../components/backgroundOcean/BackgroundOcean'

const App = ()=>{ 
  
  return (
    <>
      <BackgroundOcean/>
      <HeroContainer/>
      <SkillsContainer/>
      <ExperienceContainer/>
      <ProjectsContainer/>
    </>
  )
}

export default App