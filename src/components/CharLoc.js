import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CharLoc(){
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [filterLocation, setFilterLocation] = useState('');

    useEffect(() => {
        const fetchData = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            if (!response.ok) {
            throw new Error(`Error fetching data: ${response.status}`);
            }
            const data = await response.json();
            setCharacters(data.results);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
        };

        fetchData();
    }, []);

    const handleLocationChange = (event) => {
        setFilterLocation(event.target.value);
    };

    const filteredCharacters = characters.filter((character) =>
        character.location.name.toLowerCase().includes(filterLocation.toLowerCase())
    );

    return(
        <React.Fragment>
            <div>Character Location</div>
            {isLoading && <p>Loading characters...</p>}
            {error && <p>Error: {error}</p>}
            {characters.length > 0 && (
                <>
                <h2>Characters</h2>
                <input
                    type="text"
                    placeholder="Filter by Location"
                    value={filterLocation}
                    onChange={handleLocationChange}
                />
                <ul>
                    {filteredCharacters.map((character) => (
                    <li key={character.id}>
                        {character.location.name} - {character.name}
                    </li>
                    ))}
                </ul>
                </>
            )}
        </React.Fragment>
    )
}

export default CharLoc;