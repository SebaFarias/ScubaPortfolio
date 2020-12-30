import BackgroundOcean from '../components/backgroundOcean/BackgroundOcean'
import SkillsContainer from '../components/skills/SkillsContainer'
import ExperienceContainer from '../components/experience/ExperienceContainer'
import ProjectsContainer from '../components/projects/ProjectsContainer'
import Footer from '../components/footer/Footer'
import HeaderContainer from '../components/header/HeaderContainer'

const App = ()=>{ 
  
  return (
    <>
      <BackgroundOcean/>
      <HeaderContainer/>
      <SkillsContainer/>
      <ExperienceContainer/>
      <ProjectsContainer/>
      <Footer/>
    </>
  )
}

export default App