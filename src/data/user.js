const INFO = {
	main: {
		title: "My Portfolio",
		name: "Sourabh Srivatsa",
		email: "ksourabhsrivatsa@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/",
		linkedin: "https://linkedin.com/",
		instagram: "https://instagram.com/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
	},

	homepage: {
		title: "K Sourabh Srivatsa",
		description:
			"I am a CSE student passionate about the art of programming and design languages. Interested in AI/ML as well as Web Development",
	},

	about: {
		title: "I’m K Sourabh Srivatsa",
		description:
			"I am a Computer Science Student who works on interesting projects in the field of Artificial Intelligence, Machine Learning, and Web Development. Feel free to checkout my projects on my Github!",
			qualifications: [
				{
				  qualification: "B.Tech - CSE",
				  institution: "Keshav Memorial Institute of Technology",
				  grade: "8.63",
				},
				{
				  qualification: "SSC",
				  institution: "Sri Chaitanya Jr. College",
				  grade: "92.4%",
				},
				{
					qualification: "High School (CBSE)",
					institution: "Chinmaya Vidyalaya",
					grade: "86.4%"
				}
			]
	},

	projects: [
		{
			title: "Titanic Survival Prediction Model",
			description:
				"An ML model using Logistic Regression that predicts whether a person survived or not based on the Titanic dataset",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/K-Sourabh-Srivatsa/Titanic-Dataset-ML",
		},

		{
			title: "Mineral Processing Technology - Image Analytics",
			description:
				"Analyzing the mineral particles and finding out Smallest encapsulating Circle, Total Surface Area, the major axis, total perimeter and centroid of the particle",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/K-Sourabh-Srivatsa/Mineral-Processing-Technology---Image-Analytics",
		},

		{
			title: "Handwriting Classification on MNIST Dataset",
			description:
				"Classification of characters and numbers from handwriting on MNIST Dataset using Tensorflow, Keras",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/K-Sourabh-Srivatsa/MNIST-Handwriting-Classification",
		},

		{
			title: "Restaurant Management System",
			description:
				"A website made of HTML, CSS and Javascript to find online solutions to real world restaurant management processes",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: "https://github.com/K-Sourabh-Srivatsa/Restaurant-Management-System",
		},

		{
			title: "Image Classification using CNN",
			description:
				"Classifying images on CIFAR 10 Dataset using Convolutional Neural Networks",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/K-Sourabh-Srivatsa/CNN-Image-Classification",
		},
		{
			title: "PasterBot",
			description:
				"Program that pastes the last texted copied text item in a field with copy-paste functionality disabled (simulates typing, so can't be disabled)",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/K-Sourabh-Srivatsa/PasterBot",
		},
	],
};

export default INFO;
