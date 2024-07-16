import React, { useState, useEffect } from "react";
import {Link, useParams} from 'react-router-dom';

function CharDetail(){
    const [character, setCharacter] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { characterId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
            if (!response.ok) {
            throw new Error(`Error fetching character: ${response.status}`);
            }
            const data = await response.json();
            setCharacter(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
        };

        fetchData();
    }, [characterId]);

    return(
        <React.Fragment>
            <div>Character Detail</div>
            {isLoading && <p>Loading character details...</p>}
            {error && <p>Error: {error}</p>}
            {character && (
                <div>
                <h2>{character.name}</h2>
                <img src={character.image} alt={character.name} />
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
                <p>Gender: {character.gender}</p>
                <p>Location: {character.location.name}</p>
                </div>
            )}
            <Link to="/">Change Character Location</Link>
        </React.Fragment>
    )
}

export default CharDetail;