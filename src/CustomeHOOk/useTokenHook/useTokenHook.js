import { useEffect, useState } from "react";

const useTokenHook = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`https://icm-server.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.jwtToken) {
                        localStorage.setItem('icmToken', data.jwtToken);
                        setToken(data.jwtToken);
                    }
                });
        }
    }, [email]);
    return [token];
}

export default useTokenHook;