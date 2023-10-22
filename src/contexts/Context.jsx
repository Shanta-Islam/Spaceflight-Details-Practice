import React, { useEffect, useState } from "react";

const API_URL = `https://api.spacexdata.com/v3/launches`;


const AppContext = React.createContext();
const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [flightData, setFlightData] = useState([]);
    const [isError, setIsError] = useState({ show: "false", msg: "" });
    const getDatas = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);
            if (data) {
                setIsLoading(false);
                setFlightData(data);
            }
            else {
                setIsError({
                    show: true,
                    msg: data.error
                })
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    

useEffect(() => {
    getDatas(API_URL);
    
    

},[]);

return <AppContext.Provider value={{ isLoading, isError, flightData, setFlightData }}>
    {children}
</AppContext.Provider>
};



export { AppContext, AppProvider };