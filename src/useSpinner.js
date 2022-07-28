import { useState, useEffect, useContext, createContext } from "react";

import Spinner from "./components/spinner";

export function UseSpinner(timeout = 2000) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false);
            }, timeout);
        }
    }, [loading]);

    return {
        spinner: <Spinner loading={loading} />,
        setLoading,
    };
}
