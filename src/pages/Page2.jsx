import { useState, useEffect, } from 'react'




export default function Page2() {
    const [data, setData] = useState([])
    const [search, setSearch] = useState(" ")



    useEffect(() => {
        const fetchData = () => {
            fetch("https://rickandmortyapi.com/api/character/?page=2").then(res => {
                return res.json()
            }).then(result => {
                setData(result.results)
                console.log(result.results);
            })
        }
        fetchData()
    }, [])


    const filtererCharacters = data.filter((person) => {
        if (search === "") {
            return true;
        }
        return person.name.toLowerCase().includes(search.toLowerCase());
    })


    console.log('filteredCharacters :>> ', filtererCharacters);





    return (
        <h2>hello</h2>
    )
}