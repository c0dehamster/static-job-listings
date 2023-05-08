import { Job } from "../models"
import { JobCard } from "./JobCard"

export const JobsList = (props: {
	jobs: Array<Job>
	handleSelectTag: (filter: string) => void
}) => {
	const { jobs, handleSelectTag } = props

	return (
		<main className="main">
			<ul className="jobs-list">
				{jobs.map(item => (
					<JobCard
						{...{ job: item, handleSelectTag }}
						key={item.id}></JobCard>
				))}
			</ul>
		</main>
	)
}
