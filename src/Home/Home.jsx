import { useContext, useState } from "react";
import SingleCard from "./SingleCard";
import { AppContext } from "../contexts/Context";
import { FaSearch } from "react-icons/fa";

const Home = () => {
    const { flightData, setFlightData } = useContext(AppContext);
    const [searchVal, setSearchVal] = useState("");
    const handleSearchClick = () => {

        if (searchVal === "") {
            setFlightData(flightData);
            return;
        }
        else {
            let filterBySearch = flightData.filter((item) => {

                if (item.rocket.rocket_name.toLowerCase().includes(searchVal.toLowerCase())) {
                    // console.log(item)
                    return true;
                }
            })
            setSearchVal == "";
            setFlightData(filterBySearch);

        }



    }

    const handleLaunchStatus = (e) => {
        e.preventDefault();
        let arr = [];
        let value = e.target.value;
        
        let filterByStatus = flightData.filter((item) => {
            if(item.launch_success.toString().includes(value)){
                arr.push(item);
                return arr;
            }
            
            setFlightData(arr);
        })
        
       
    }
    return (
        <div className="container">
            <div>
                <h2 className="display-6 text-center mt-10">Spaceflight details</h2>
                <p className="lead text-center">Find out the elaborate features of all the past big spaceflights.</p>
            </div>
            <div className="row">
                <div className="col-md-9 col"></div>
                <div className="col-md-3 col-sm-12 justify-content-end">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Show Upcoming Only
                        </label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 col-sm-12 d-flex">

                    <div className="input-group md-form form-sm form-1 pl-0">
                        <input
                            onChange={(e) => setSearchVal(e.target.value)}
                            className="form-control my-0 py-1"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <div className="input-group-prepend" style={{ cursor: 'pointer' }} onClick={handleSearchClick}>
                            <span className="input-group-text bg-primary lighten-3 " id="basic-text1">
                                <FaSearch className="text-white m-2" icon="search" />
                            </span>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col"></div>
                <div className="col-md-3 col-sm-12">
                    <select className="form-select" aria-label="Default select example" onChange={handleLaunchStatus}>
                        <option selected>By Launch Status</option>
                        <option value="false">Failed</option>
                        <option value="true">Success</option>
                    </select>
                </div>
                <div className="col-md-3 col-sm-12">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>By Launch Date</option>
                        <option value="1">Last week</option>
                        <option value="2">Last Month</option>
                        <option value="3">Last Year</option>
                    </select>
                </div>
            </div>
            <div className="row mt-5">

                {
                    flightData.map(Sdata => <SingleCard key={Sdata.flight_number} Sdata={Sdata}></SingleCard>)
                }


            </div>
        </div>
    );
};

export default Home;