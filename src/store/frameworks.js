import { defineStore } from 'pinia'

export const useFrameworks = defineStore('frameworks', {
	state: () => ({
		listFrameworks: [
			{
				id: 1,
				picture: '../assets/img/frameworks/vue.jpg',
				title: 'Vue js',
				description:
					'Vue.js is an open source JavaScript framework for creating user interfaces. It is easily integrated into projects using other JavaScript libraries. It can function as a web framework for developing single-page applications in a reactive style.',
			},
			{
				id: 2,
				picture: '../assets/img/frameworks/react.jpg',
				title: 'React js',
				description:
					'React is an open source JavaScript library for developing user interfaces. Instagram Facebook, React is developed and supported by a community of individual developers and corporations. React can be used to develop single-page and mobile applications.',
			},
			{
				id: 3,
				picture: '../assets/img/frameworks/angular.jpg',
				title: 'Angular js',
				description:
					'AngularJS is an open source JavaScript framework. Designed for the development of single-page applications. Its goal is to expand browser applications based on the MVC template, as well as simplify testing and development.',
			},
		],
		listFrameworksNews: [
			{
				id: 1,
				picture: '../assets/img/news-frameworks/news-item-1.png',
				title: 'Setup a Meeting',
				description:
					'Fill out our contact form and have someone get back to you within 24 hours.',
				button: 'Schedule a Meeting',
			},
			{
				id: 2,
				picture: '../assets/img/news-frameworks/news-item-2.png',
				title: 'Ask a Question',
				description:
					'Have a question? Just fill out our contact us form and we will get back to you.',
				button: 'Ask a Question',
			},
		],
	}),
})
