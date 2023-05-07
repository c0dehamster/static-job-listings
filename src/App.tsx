import { useState } from "react"

import "./App.css"

import data from "./assets/data.json"

import { JobCard } from "./components/JobCard"
import { Header } from "./components/Header"

function App() {
	// Tried to use set for tags but couldn't make it work
	const [tags, setTags] = useState<Array<string>>([])
	const [jobs, setJobs] = useState(data)

	const handleSelectTag = (id: string) => {
		setTags(() => {
			if (!tags.includes(id)) {
				return [...tags, id]
			}

			return tags
		})
	}

	const handleRemoveTag = (id: string) =>
		setTags(() => tags.filter(item => item !== id))

	const filterJobs = () => {
		if (tags.length === 0) {
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

			const included =
				jobTags.filter(tag => tags.includes(tag)).length > 0

			if (included) return job
		})

		setJobs(dataFiltered)
	}

	return (
		<div className="app">
			{tags.length !== 0 ? (
				<Header
					{...{ tags: Array.from(tags), handleRemoveTag }}></Header>
			) : (
				""
			)}

			<main className="main">
				<ul className="jobs-list">
					{jobs.map(item => (
						<JobCard
							{...{ job: item, handleSelectTag }}
							key={item.id}></JobCard>
					))}
				</ul>
			</main>
		</div>
	)
}

export default App
