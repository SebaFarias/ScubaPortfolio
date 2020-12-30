
const HeaderContainer = () => {
  return (
    <section className='header'>
      <h1>Aquí va a ir la Portada</h1>
      <div className='header-container'>
      </div>
      <style jsx>{`
        .header{
          margin: -110vh 0;
          margin-left: 5vw;
          margin-bottom: 20vh;
          width: 100%;
          background: #f3c279;
        }
        .header-container{
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

export default HeaderContainer