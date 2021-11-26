import React, { useEffect, useState } from "react";
import { useQuery } from '@apollo/client'
import { GET_MISSIONS } from '../../GraphQL/Queries'
import '../components.css'
import GetMissionsHeader from '../GetMissions/GetMissionsHeader';
import { useNavigate } from "react-router-dom";


function GetData({ setSelectedMission }) {
    const { data } = useQuery(GET_MISSIONS)
    const [allMissions, setAllMissions] = useState([]);
    const [isClicket, setIsClicked] = useState(false)

    useEffect(() => {
        if (data) {
            setAllMissions(data.launchesPast)
        }
    }, [data])

    const navigate = useNavigate();

    const fullDetails = (item, id) => {
        navigate(`/details/:${id}`)
        var newItem = item
        setSelectedMission(newItem)
        console.log(id)
    }

    console.log(allMissions)

    const mission = allMissions.map((mis, key) => {
        return <div key={key}>

            <div className="mission-name">
                <h2>Mission: {mis.mission_name}</h2>
            </div>

            <div className={`grid-item mission-${key}`}>
                <div className="lauchDetails">
                    <p className="launch-date">
                        Date: {mis.launch_date_local}
                    </p>
                    {(mis.links.flickr_images.length !== 0) ? (
                        <img
                            className="launch-image"
                            src={mis.links.flickr_images}
                            alt=""
                            width="100%"
                            height='400px' />
                    ) : (
                        <p>
                            <img
                                className="not-available"
                                alt=""
                                width="100%"
                                height='350px'
                            />
                            Image Not available
                        </p>
                    )}

                </div>

                <div className="details">
                    <div>
                        <p
                            className={(isClicket) ? 'expand' : ''}>
                            {mis.details}
                        </p>
                        <div>
                            <button
                                className="show-text"
                                onClick={() => setIsClicked(!isClicket)} >
                                {(isClicket) ? 'Hide text' : 'Read more'}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="article">
                    <a href={mis.links.article_link}
                        className="link-article"
                        target="_blank"
                        rel="noreferrer">
                        {(mis.links.article_link !== null) ? 'Read article ⭷' : 'No article found'}
                    </a>
                    <button onClick={() => fullDetails(mis, mis.id)}>Rocket used 🡆</button>
                </div>
            </div>
        </div>
    })

    return (<div>
        <GetMissionsHeader allMissions={allMissions} />
        <div className="grid-container">{mission}</div>
    </div>
    )
}

export default GetData;