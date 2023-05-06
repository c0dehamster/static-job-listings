import "./App.css"

import data from "./assets/data.json"

import { JobCard } from "./components/JobCard"
import { Header } from "./components/Header"

function App() {
	const handleSelectTag = (id: string) => console.log(id)
	const tags: Set<string> = new Set([])

	const dataFiltered = data.filter(job => {
		const jobTags = [job.role, job.level, ...job.languages, ...job.tools]
		const included = jobTags.filter(tag => tags.has(tag)).length > 0

		if (included) return job
	})

	const jobs = tags.size === 0 ? data : dataFiltered

	const header =
		tags.size !== 0 ? <Header {...{ tags: Array.from(tags) }}></Header> : ""

	return (
		<div className="app">
			{header}

			<main className="main">
				<ul className="jobs-list">
					{jobs.map(item => (
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
