import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchProjects = (username) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
                setProjects(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        if (username) {
            fetchRepos();
        }
    }, [username]);

    return { projects, loading, error };
};

export default useFetchProjects;
