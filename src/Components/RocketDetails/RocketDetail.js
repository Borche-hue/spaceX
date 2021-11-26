import React from "react";
import RocketDeatailHeader from "../RocketDetails/RocketDeatailHeader";
import '../components.css'

function RocketDetail({ selectedMission }) {
    return (
        <div>
            <RocketDeatailHeader selectedMission={selectedMission} />
            {(selectedMission.rocket) ? (
                <div className="rocket-details">
                    <div className="detail">
                        <label className="name">Name: </label>
                        <label className="rocket-detail">{selectedMission.rocket.rocket_name}</label>
                    </div>
                    <div className="detail">
                        <label className="type">Type: </label>
                        <label className="rocket-detail">{selectedMission.rocket.rocket_type}</label>
                    </div>
                    <div className="detail">
                        <label className="company">Made by: </label>
                        <label className="rocket-detail">{selectedMission.rocket.rocket.company}</label>
                    </div>
                    {selectedMission.rocket.second_stage.payloads.map((element, key) => {
                        return (
                            <div key={key} className="payload-details">
                                <div className="detail">
                                    <label className="payload-type">Payload Type: </label>
                                    <label className="rocket-detail">{(element.payload_type === null) ? 'N/A' : element.payload_type}</label>
                                </div>
                                <div className="detail">
                                    <label className="payload-mass-kg">Payload mass in kg: </label>
                                    <label className="rocket-detail">{(element.payload_mass_kg === null) ? 'N/A' : element.payload_mass_kg}</label>
                                </div>
                                <div className="detail">
                                    <label className="payload-mass-lbs">Payload mass in lbs: </label>
                                    <label className="rocket-detail">{(element.payload_mass_lbs === null) ? 'N/A' : element.payload_mass_lbs}</label>
                                </div>
                            </div>)
                    })}
                </div>
            ) : ('')}

        </div>
    )

}

export default RocketDetail;