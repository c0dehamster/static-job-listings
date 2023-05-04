import "./App.css"

import { JobCard } from "./components/JobCard"
import { Header } from "./components/Header"

function App() {
	return (
		<div className="app">
			<Header></Header>

			<main className="main">
				<ul className="jobs-list">
					<JobCard></JobCard>
					<JobCard></JobCard>
				</ul>
			</main>
		</div>
	)
}

export default App
