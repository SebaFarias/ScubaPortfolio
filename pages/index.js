import HeroContainer from '../components/hero/HeroContainer'
import SkillsContainer from '../components/skills/SkillsContainer'
import ExperienceContainer from '../components/experience/ExperienceContainer'
import ProjectsContainer from '../components/projects/ProjectsContainer'
import BackgroundOcean from '../components/backgroundOcean/BackgroundOcean'
import Footer from '../components/footer/Footer'

const App = ()=>{ 
  
  return (
    <>
      <BackgroundOcean/>
      <HeroContainer/>
      <SkillsContainer/>
      <ExperienceContainer/>
      <ProjectsContainer/>
      <Footer/>
    </>
  )
}

export default App