const NavBar = ({principalData, setPrincipalData}) => {
  const handleChangeTemperatureUnit = () => {
    const dataTemperature = principalData.temperature.split('°');
    const temperature = Number(dataTemperature[0]);
    const unit = dataTemperature[1];
    const copyPrincipalData = {...principalData};
    if(unit === 'K'){
      copyPrincipalData.temperature = `${(temperature - 273.15).toFixed(2)}°C`;
      setPrincipalData(copyPrincipalData);
    }else {
      copyPrincipalData.temperature = `${(temperature + 273.15).toFixed(2)}°K`
      setPrincipalData(copyPrincipalData);
    }
  }
  return (
    <>
      <i className='bx bx-home-alt'></i>
      <i className='bx bx-map' ></i>
      <i className='bx bx-sort-up'></i>
      <i 
      onClick={handleChangeTemperatureUnit}
      className='bx bx-transfer'
      ></i>
    </>
  )
}

export default NavBar