import { useContext } from "react";
import SingleCard from "./SingleCard";
import { AppContext } from "../contexts/Context";

const Home = () => {
    const { flightData } = useContext(AppContext);
    return (
        <div className="container">
            <div>
                <h2 className="display-6 text-center mt-10">Spaceflight details</h2>
                <p className="lead text-center">Find out the elaborate features of all the past big spaceflights.</p>
            </div>
            <div className="row">
                <div className="col-md-3 col-sm-12">
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search" />

                </div>
                <div className="col-md-3 col"></div>
                <div className="col-md-3 col-sm-12">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>By Launch Status</option>
                        <option value="1">Failed</option>
                        <option value="2">Success</option>
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