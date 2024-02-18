import { defineStore } from 'pinia'

export const useApplications = defineStore('applications', {
	state: () => ({
		listApplications: [
			{
				id: 1,
				picture: 'app-1.webp',
				title: 'App 1',
			},
			{
				id: 2,
				picture: 'app-2.webp',
				title: 'App 2',
			},
			{
				id: 3,
				picture: 'app-3.webp',
				title: 'App 3',
			},
			{
				id: 4,
				picture: 'app-4.webp',
				title: 'App 4',
			},
			{
				id: 5,
				picture: 'app-5.webp',
				title: 'App 5',
			},
			{
				id: 6,
				picture: 'app-6.webp',
				title: 'App 6',
			},
			{
				id: 7,
				picture: 'app-7.webp',
				title: 'App 7',
			},
			{
				id: 8,
				picture: 'app-8.webp',
				title: 'App 8',
			},
		],
	}),
})
