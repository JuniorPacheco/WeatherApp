import '../styles/Spinner.css'
import ImageSunPresentation from '../img/day-clear.png'
import ImageMoonPresentation from '../img/night-clear.png'

const Spinners = () => {
  return (
    <main className='presentation'>
      <p>Weather App</p>
      <div className='presentation__images'>
        <img src={ImageSunPresentation} alt="Sun image for presentation App" />
        <img src={ImageMoonPresentation} alt="Moon image for presentation App" />
      </div>
      <div className="sk-cube-grid">
        <div className="sk-cube sk-cube1"></div>
        <div className="sk-cube sk-cube2"></div>
        <div className="sk-cube sk-cube3"></div>
        <div className="sk-cube sk-cube4"></div>
        <div className="sk-cube sk-cube5"></div>
        <div className="sk-cube sk-cube6"></div>
        <div className="sk-cube sk-cube7"></div>
        <div className="sk-cube sk-cube8"></div>
        <div className="sk-cube sk-cube9"></div>
      </div>
      <p className='authors'>Created by Junior Pacheco</p>
      <p className='authors'>Designer: Mikołaj Niżnik</p>
    </main>
  )
}

export default Spinners