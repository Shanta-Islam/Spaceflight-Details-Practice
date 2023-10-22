import moment from 'moment/moment';
import PropTypes from 'prop-types';
const SingleCard = ({ Sdata }) => {
    return (
        <div className="col-md-6 col-lg-4">
            <div className="card p-2" style={{ width: 350 }}>
                <img src={Sdata.links.mission_patch} className="card-img-top mx-auto" style={{ width: 200 }}  alt="..." />
                <div className="card-body text-center">
                    <h6>Launch Date: {moment.utc(Sdata.launch_date_local).format("ll")}</h6>
                    <h5 className="card-title">{Sdata.mission_name}</h5>
                    <p>{Sdata.rocket.rocket_id}</p>
                    <p className="card-text">Launch Status:</p>
                    <p>{Sdata.launch_success ? <span className='badge bg-success'>Success</span> : <span className='badge bg-danger'>Failed</span>}</p>
                </div>
            </div>
        </div>
    );
};

SingleCard.propTypes = {
    Sdata: PropTypes.object.isRequired,
}
export default SingleCard;