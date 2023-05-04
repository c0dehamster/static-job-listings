import "./App.css"
import { JobCard } from "./components/JobCard"

function App() {
	return (
		<div className="app">
			<main className="main">
				<ul className="jobs-list">
					<JobCard></JobCard>
				</ul>
			</main>
		</div>
	)
}

export default App
