import React from "react";

function RocketDetailHeader({ selectedMission }) {
    console.log(selectedMission)
    return (
        <nav className="navbar">
            <div className="rocketDetails-header">
                <h1>Details about the ROCKET used on a {selectedMission.mission_name}</h1>
            </div>
        </nav>
    )
}

export default RocketDetailHeader;