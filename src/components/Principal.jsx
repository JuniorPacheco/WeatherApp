const Principal = ({ principalData, isDayOrNight}) => {
  return (
    <main className="principal">
        <header className="principal__header">
            <p>{principalData.fecha}</p>
            <p>{principalData.location}</p>
            <i className='bx bx-map grid-map' ></i>
        </header>
        <section className="principal__body">
            <img className={`${isDayOrNight ? 'day' : 'night'}`} src={principalData.image} alt="Icono representativo del clima" />
            <p
            className={`temperature ${isDayOrNight ? 'day' : 'night'}`}
            >{`${principalData.temperature}`}</p>
            <p style={{color: principalData.color}} className='weathername'>{principalData.weatherDescription}</p>
        </section>
    </main>
  )
}

export default Principal
