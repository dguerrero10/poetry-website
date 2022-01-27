import { useCallback, useState } from "react"
import { signIn } from 'next-auth/client';

const useAPI = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [responseState, setResponseState] = useState({
        success: null,
        snackbarIsOpen: false,
        message: ''
    });

    const sendRequest = useCallback(async (requestConfig, applyData) => {
        setIsLoading(true);

        if (requestConfig.signIn) {
            try {
                const response = await signIn('credentials', {
                    redirect: false,
                    email: enteredEmail,
                    password: enteredPassword
                });
                if (!response.error) return;
            } catch (err) { return setIsLoading(isLoading => !isLoading) };
        }

        try {
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : 'GET',
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
            });

            if (!response.ok) throw new Error('Request failed');

            const data = await response.json();

            setResponseState((prevState) => ({
                ...prevState,
                success: data.success,
                snackbarIsOpen: data.message ? true : false,
                message: data.message ? data.message : null
            }));

            applyData(data);

        } catch (err) {
            setResponseState((prevState) => ({
                ...prevState,
                success: false,
                snackbarIsOpen: data.message ? true : false,
                message: err.message || 'Something went wrong.'
            }));
        }
        setIsLoading(isLoading => !isLoading);
    }, []);

    return {
        isLoading,
        responseState,
        setResponseState,
        sendRequest
    }
}

export default useAPI