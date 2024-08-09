import VirtualTour from "./components/VirtualTour";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";

function App() {
	return (
		<BrowserRouter>
			<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/virtual-tour" element={<VirtualTour />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
