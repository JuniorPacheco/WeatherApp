const NavBar = ({principalData, setPrincipalData, setSection}) => {

  const handleChangeTemperatureUnit = () => {
    const dataTemperature = principalData.temperature.split('°');
    const temperature = Number(dataTemperature[0]);
    const unit = dataTemperature[1];
    const copyPrincipalData = {...principalData};
    if(unit === 'C'){
      copyPrincipalData.temperature = `${((temperature * 9/5) + 32 ).toFixed(2)}°F`;
      setPrincipalData(copyPrincipalData);
    }else {
      copyPrincipalData.temperature = `${((temperature - 32)* 5/9).toFixed(2)}°C`
      setPrincipalData(copyPrincipalData);
    }
  }
  return (
    <>
      <i 
      onClick={() => setSection('principal')}
      className='bx bx-home-alt'
      ></i>
      <i 
      onClick={() => setSection('searcher')}
      className='bx bx-map-alt' 
      ></i>
      <i 
      onClick={() => setSection('moreInformation')}
      className='bx bx-sort-up'
      ></i>
      <i 
      onClick={handleChangeTemperatureUnit}
      className='bx bx-transfer'
      ></i>
    </>
  )
}

export default NavBar