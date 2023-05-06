import "./App.css"

import data from "./assets/data.json"

import { JobCard } from "./components/JobCard"
import { Header } from "./components/Header"

function App() {
	const handleSelectTag = (id: string) => {
		console.log(id)
	}

	return (
		<div className="app">
			<Header></Header>

			<main className="main">
				<ul className="jobs-list">
					{data.map(item => (
						<li key={item.id}>
							<JobCard
								{...{ job: item, handleSelectTag }}></JobCard>
						</li>
					))}
				</ul>
			</main>
		</div>
	)
}

export default App
