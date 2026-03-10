function CountryCard({countryObj}) {
  return (
    <div className="min-h-50 flex flex-col justify-center items-center rounded-xl shadow-lg p-5 bg-slate-100">
        <img src={countryObj.flags.svg} alt={countryObj.flags.alt} width={"200px"} />
        <h3 className="text-lg"><b>Name</b> : {countryObj.name.common}</h3>
        <p className=""><b>Capital</b> : {countryObj.capital}</p>
        <p className=""><b>Population</b> : {countryObj.population}</p>
        <p className=""><b>Region</b> : {countryObj.region}</p>
    </div>
  )
}

export default CountryCard