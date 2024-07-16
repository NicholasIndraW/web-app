import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

function CharList(){
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

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

    return(
        <React.Fragment>
            <div>Character List</div>
            {isLoading && <p>Loading characters...</p>}
            {error && <p>Error: {error}</p>}
            {characters.length > 0 && (
                <ul>
                {characters.map((character) => (
                    <li key={character.id}>
                        {character.name} -
                        <Link to={`/CharDetail/${character.id}`}> Character Detail</Link>
                    </li>
                ))}
                </ul>
            )}
        </React.Fragment>
    )
}

export default CharList;