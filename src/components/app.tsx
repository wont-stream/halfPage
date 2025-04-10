import Container from "./container";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

import "./app.css";

export default () => {
	return (
		<>
			<Navbar />
			<Container />
			<Sidebar />
		</>
	);
};
