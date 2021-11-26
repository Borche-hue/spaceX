import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
} from "@apollo/client";
import GetMissions from "./Components/GetMissions/GetMissions";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RocketDetail from './Components/RocketDetails/RocketDetail'
import { useState } from "react";

const link = from([
  new HttpLink({ uri: 'https://api.spacex.land/graphql/' })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

function App() {

  const [selectedMission, setSelectedMission ] = useState([])
 
  return <Router><ApolloProvider client={client}>
    <Routes>
      <Route path="/" element={<GetMissions setSelectedMission={setSelectedMission} />} />
      <Route path={`/details/:${selectedMission.id}`} element={<RocketDetail selectedMission={selectedMission}/>} />
    </Routes>
  </ApolloProvider>
  </Router>
}

export default App;
