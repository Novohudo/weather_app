import './App.css';
import {useEffect, useState} from "react";

function App() {
	const [lat, setLat] = useState([]);
	const [long, setLong] = useState([]);
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
		})
	})

	return (
		<div className="App">
			f
		</div>
	);
}

export default App;
