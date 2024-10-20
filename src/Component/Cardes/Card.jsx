import "./Card.css"
export default function Card({ myCountries }) {
    const { name, maps, flags } = myCountries;
    function goMap() {
        window.open(maps.googleMaps, "_blank")
    }
    console.log(name)
    return (
        <div onClick={goMap} className="card">
            <div className="card-items">

                <img className="image" src={flags.png} alt="" />
                <p>Hello , I am from {name.common}</p>
            </div>
        </div>
    )
}
