import React, { useEffect, useState, usestate } from 'react'
import { token } from '../config'
import { toast } from 'react-toastify'
import { services } from '../assets/data/service'

const useFetchData = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    useEffect(() => {
        console.log(url, "result");

        const fetchData = async () => {
            console.log(url, "result2");

            setLoading(true);
            try {
                console.log(token, "result3");

                const res = await fetch(url, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                console.log(res, "result4");

                const result = await res.json();
                console.log(result, "result");

                if (!res.ok) {
                    throw new Error(result.message);
                }
                setData(result.data);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                setError(err.message);
            }
        }

        // const timeoutId = setTimeout(() => {
            fetchData();
        // }, 5000);

        // Cleanup the timeout if the component unmounts or if url changes
        // return () => clearTimeout(timeoutId);

    }, [url, token]);


    return {
        data,
        loading,
        error
    }
}

export default useFetchData
