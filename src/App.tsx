import "./App.css"

import data from "./assets/data.json"

import { JobCard } from "./components/JobCard"
import { Header } from "./components/Header"

function App() {
	return (
		<div className="app">
			<Header></Header>

			<main className="main">
				<ul className="jobs-list">
					{data.map(item => (
						<li key={item.id}>
							<JobCard {...item}></JobCard>
						</li>
					))}
				</ul>
			</main>
		</div>
	)
}

export default App
