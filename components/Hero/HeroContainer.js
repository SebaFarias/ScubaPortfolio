
const HeroContainer = () => {
  return (
    <section className='hero'>
      <h1>Aquí va a ir la Portada</h1>
      <div className='hero-container'>
      </div>
      <style jsx>{`
        .hero{
          margin: 0;
          background: #f3c279;
        }
        .hero-container{
          display: flex;
          height: 100%;
        }  
        h1{
          margin: 0;
          text-align: center;
        }
      `}</style>
    </section>  
  )
}

export default HeroContainer