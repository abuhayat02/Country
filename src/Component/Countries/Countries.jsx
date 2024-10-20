import { useEffect } from "react";
import { useState } from "react"
import Card from "../Cardes/Card";
import "./Countries.css"

export default function Countries() {

    const [allCountries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h1>Countries {allCountries.length}</h1>
            <div className="containar">
                {
                    allCountries.map(items => <Card key={items.ccn3} myCountries={items}></Card>)
                }
            </div>
        </div>
    )
}
