const SkillsContent = ({name}) => {
  return(
    <div className="skill-content">
      <p>
        Contenido de {name}
      </p>
      <style jsx>{`
        .skill-content{
          margin: auto;
        }
      `}</style>
    </div>
  )
}

export default SkillsContent