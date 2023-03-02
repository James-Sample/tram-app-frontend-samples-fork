import React, { useState } from "react";
import getTramData from "../../requests/getData";

const TramStopSelect = () => {
  const [station, setStation] = useState("Select Tram Stop");

  getTramData(station);

  const handleSelectStation = (event) => {
    setStation(event.target.value);
  };
  return (
    <div>
      <label htmlFor="tram-stop-select">
        Select Tram Stop
        <select
          id="tram-stop-select"
          name="tram-stop-select"
          value={station}
          onChange={handleSelectStation}
        >
          <option value="Abraham Moss">Abraham Moss</option>
          <option value="Altrincham">Altrincham</option>
          <option value="Anchorage">Anchorage</option>
          <option value="Ashton Moss">Ashton Moss</option>
          <option value="Ashton West">Ashton West</option>
          <option value="Ashton-under-Lyne">Ashton-under-Lyne</option>
          <option value="Audenshaw">Audenshaw</option>
          <option value="Baguley">Baguley</option>
          <option value="Barlow Moor Road">Barlow Moor Road</option>
          <option value="Barton Dock Road">Barton Dock Road</option>
          <option value="Benchill">Benchill</option>

          <option value="Besses o' th' Barn">Besses o th Barn</option>
          <option value="Bowker Vale">Bowker Vale</option>
          <option value="Broadway">Broadway</option>
          <option value="Brooklands">Brooklands</option>
          <option value="Burton Road">Burton Road</option>
          <option value="Bury">Bury</option>
          <option value="Cemetery Road">Cemetery Road</option>
          <option value="Central Park">Central Park</option>
          <option value="Chorlton">Chorlton</option>
          <option value="Clayton Hall">Clayton Hall</option>
          <option value="Cornbrook">Cornbrook</option>
          <option value="Crossacres">Crossacres</option>
          <option value="Crumpsall">Crumpsall</option>
          <option value="Dane Road">Dane Road</option>

          <option value="Deansgate-Castlefield">Deansgate-Castlefield</option>
          <option value="Derker">Derker</option>
          <option value="Didsbury Village">Didsbury Village</option>
          <option value="Droylsden">Droylsden</option>
          <option value="East Didsbury">East Didsbury</option>
          <option value="Eccles">Eccles</option>
          <option value="Edge Lane">Edge Lane</option>
          <option value="Etihad Campus">Etihad Campus</option>
          <option value="Exchange Quay">Exchange Quay</option>
          <option value="Exchange Square">Exchange Square</option>
          <option value="Failsworth">Failsworth</option>
          <option value="Firswood">Firswood</option>
          <option value="Freehold">Freehold</option>
          <option value="Harbour City">Harbour City</option>
          <option value="Heaton Park">Heaton Park</option>
          <option value="Hollinwood">Hollinwood</option>
          <option value="Holt Town">Holt Town</option>

          <option value="Imperial War Museum">Imperial War Museum</option>

          <option value="Kingsway Business Park">Kingsway Business Park</option>
          <option value="Ladywell">Ladywell</option>
          <option value="Langworthy">Langworthy</option>

          <option value="Manchester Airport">Manchester Airport</option>
          <option value="Market Street">Market Street</option>
          <option value="Martinscroft">Martinscroft</option>
          <option value="MediaCityUK">MediaCityUK</option>
          <option value="Milnrow">Milnrow</option>
          <option value="Monsall">Monsall</option>
          <option value="Moor Road">Moor Road</option>
          <option value="Navigation Road">Navigation Road</option>
          <option value="New Islington">New Islington</option>
          <option value="Newbold">Newbold</option>
          <option value="Newhey">Newhey</option>

          <option value="Newton Heath and Moston">
            Newton Heath and Moston
          </option>
          <option value="Northern Moor">Northern Moor</option>
          <option value="Old Trafford">Old Trafford</option>
          <option value="Oldham Central">Oldham Central</option>

          <option value="Oldham King Street">Oldham King Street</option>
          <option value="Oldham Mumps">Oldham Mumps</option>
          <option value="Parkway">Parkway</option>
          <option value="Peel Hall">Peel Hall</option>
          <option value="Piccadilly">Piccadilly</option>

          <option value="Piccadilly Gardens">Piccadilly Gardens</option>
          <option value="Pomona">Pomona</option>
          <option value="Prestwich">Prestwich</option>
          <option value="Queens Road">Queens Road</option>
          <option value="Radcliffe">Radcliffe</option>
          <option value="Robinswood Road">Robinswood Road</option>

          <option value="Rochdale Railway Station">
            Rochdale Railway Station
          </option>

          <option value="Rochdale Town Centre">Rochdale Town Centre</option>
          <option value="Roundthorn">Roundthorn</option>
          <option value="Sale">Sale</option>
          <option value="Sale Water Park">Sale Water Park</option>
          <option value="Salford Quays">Salford Quays</option>
          <option value="Shadowmoss">Shadowmoss</option>
          <option value="Shaw and Crompton">Shaw and Crompton</option>
          <option value="Shudehill">Shudehill</option>
          <option value="South Chadderton">South Chadderton</option>
          <option value="St Peter's Square">St Peters Square</option>

          <option value="St Werburgh's Road">St Werburghs Road</option>
          <option value="Stretford">Stretford</option>

          <option value="The Trafford Centre">The Trafford Centre</option>
          <option value="Timperley">Timperley</option>
          <option value="Trafford Bar">Trafford Bar</option>
          <option value="Velopark">Velopark</option>
          <option value="Victoria">Victoria</option>
          <option value="Village">Village</option>
          <option value="Weaste">Weaste</option>
          <option value="West Didsbury">West Didsbury</option>
          <option value="Westwood">Westwood</option>
          <option value="Wharfside">Wharfside</option>
          <option value="Whitefield">Whitefield</option>
          <option value="Withington">Withington</option>
          <option value="Wythenshawe Park">Wythenshawe Park</option>

          <option value="Wythenshawe Town Centre">
            Wythenshawe Town Centre
          </option>
        </select>
      </label>
    </div>
  );
};

export default TramStopSelect;
