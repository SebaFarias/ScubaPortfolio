import Waves from './Waves'

const HeroContainer = () => {
  return (
    <section className='hero'>
      <h1>Aquí va a ir la Portada</h1>
      <div className='hero-container'>
        {/* <Waves/> */}
      </div>
      <style jsx>{`
        .hero{
          margin: 0;
        }
        .hero-container{
          display: flex;
          height: 100%;
        }  
        h1{
          margin: 0;
        }
      `}</style>
    </section>  
  )
}

export default HeroContainer