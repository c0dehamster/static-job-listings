import { useState, useEffect } from "react"

import "./App.css"

import data from "./assets/data.json"

import { JobsList } from "./components/JobsList"
import { Header } from "./components/Header"

function App() {
	// Tried to use set for tags but couldn't make it work
	const [tags, setTags] = useState<Array<string>>([])
	const [jobs, setJobs] = useState(data)

	const handleSelectTag = (id: string) => {
		setTags(() => {
			if (tags.includes(id)) {
				return tags
			}

			return [...tags, id]
		})
	}

	const handleRemoveTag = (id: string) =>
		setTags(() => tags.filter(item => item !== id))

	const handleClear = () => setTags([])

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

			const includedTags = jobTags.filter(tag => tags.includes(tag))

			if (includedTags.length >= tags.length) return job
		})

		setJobs(dataFiltered)
	}

	// There must be a way to avoid useEffect

	useEffect(filterJobs, [tags])

	return (
		<div className="app">
			<Header {...{ tags, handleRemoveTag, handleClear }}></Header>
			<JobsList {...{ jobs, handleSelectTag }}></JobsList>
		</div>
	)
}

export default App
