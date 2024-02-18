import { defineStore } from 'pinia'

export const useApplications = defineStore('applications', {
	state: () => ({
		listApplications: [
			{
				id: 1,
				picture: 'app-1.png',
				title: 'App 1',
			},
			{
				id: 2,
				picture: 'app-2.png',
				title: 'App 2',
			},
			{
				id: 3,
				picture: 'app-3.png',
				title: 'App 3',
			},
			{
				id: 4,
				picture: 'app-4.png',
				title: 'App 4',
			},
			{
				id: 5,
				picture: 'app-5.png',
				title: 'App 5',
			},
			{
				id: 6,
				picture: 'app-6.png',
				title: 'App 6',
			},
			{
				id: 7,
				picture: 'app-7.png',
				title: 'App 7',
			},
			{
				id: 8,
				picture: 'app-8.png',
				title: 'App 8',
			},
		],
	}),
})
