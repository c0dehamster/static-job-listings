import { useState } from "react"

import "./App.css"

import data from "./assets/data.json"

import { JobCard } from "./components/JobCard"
import { Header } from "./components/Header"

function App() {
	const [tags, setTags] = useState<Set<string>>(new Set([]))
	const [jobs, setJobs] = useState(data)

	const handleSelectTag = (id: string) => setTags(() => tags.add(id))
	const handleRemoveTag = (id: string) =>
		setTags(() => {
			tags.delete(id)
			return tags
		})

	const filterJobs = () => {
		if (tags.size === 0) {
			setJobs(data)
			return
		}

		const dataFiltered = data.filter(job => {
			const jobTags = [
				job.role,
				job.level,
				...job.languages,
				...job.tools,
			]

			const included = jobTags.filter(tag => tags.has(tag)).length > 0

			if (included) return job
		})

		setJobs(dataFiltered)
	}

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
