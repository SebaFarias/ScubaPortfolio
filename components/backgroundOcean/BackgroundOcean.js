import useOceanBGColor from '../../Hooks/useOceanBGColor'


const BackgroundOcean = () => {
  
  const TOP_COLORS_VALUES = [[192,90,43],[178,87,71],[190,91,46]]
  const MAX_VARIATION = [42,-3,-34]
  const [ style , update ] = useOceanBGColor(TOP_COLORS_VALUES,MAX_VARIATION)

  update()

  return(
    <div className='background-ocean'>
      <style jsx>{`
        .background-ocean{
          position: absolute;
          top: ${style.top}px;
          background: ${style.background};
          left: -10vw;
          width: 120vw;
          height: 120vh;
          margin: -10vh -10vw;
          z-index: -1;
        }
      `}</style>
    </div>
  )
}

export default BackgroundOcean