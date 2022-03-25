const lang = {
    FR: {
        navbar: {
            home: 'Accueil',
            education: 'Cursus',
            experience: 'Expérience',
            projects: 'Projets',
            contact: 'Contact'
        },
        home: {
            resume: 'Une personne passionnée qui aime toujours en apprendre davantage sur le développement de projets durables et évolutifs pour créer un impact.',
            whatIDo: 'Ce que je fais ?',
            development: {
                title: 'Développement',
                skills: [
                    {
                        skill: "Développement d'applications web scalables en React.js"
                    },
                    {
                        skill: "Gestion et adaptation des solutions techniques"
                    },
                    {
                        skill: "Respect des pratiques courantes d'optimisation"
                    }
                ]
            },
            design: {
                title: 'UI/UX Design',
                skills: [
                    {
                        skill: "Concevoir des interfaces utilisateurs pour des applications web"
                    },
                    {
                        skill: "Respect des méthodologies UI/UX"
                    },
                    {
                        skill: "Compréhension des besoins utilisateurs"
                    }


                ]
            }
        },
        education: {
            education: 'Cursus',
            subtitle: 'Qualifications et certifications',
            degreesReceived: 'Diplômes',
            cardDegrees: [
                {
                    title: 'Licence Informatique',
                    subtitle: 'Conservatoire National des Arts et Métiers - NICE',
                    year: '2021',
                    logo: 'https://www.adcf.org/images/AA-Visuel-AdCFdirect/934/Cnam.jpg',
                    order: 1
                },
                {
                    title: 'MBA1 Management Commerce et Entrepreneuriat',
                    subtitle: 'IPAC - Annecy',
                    year: '2014',
                    logo: 'https://evenementsoi.files.wordpress.com/2019/09/logo-ipac.png',
                    order: 3
                },
                {
                    title: 'Bachelor Marketing et Communication',
                    subtitle: 'IPAC - NICE',
                    year: '2013',
                    logo: 'https://evenementsoi.files.wordpress.com/2019/09/logo-ipac.png',
                    order: 5
                },
                {
                    title: 'B.T.S Négociation et Relation Client',
                    subtitle: 'Esicad, Nice',
                    year: '2012',
                    logo: 'https://file.diplomeo-static.com/file/00/00/01/77/17705.svg',
                    order: 2
                },
                {
                    title: 'B.A.C Pro Communication Graphique',
                    subtitle: 'Euromédia, Mandelieu',
                    year: '2010',
                    logo: 'https://s3-eu-west-1.amazonaws.com/clientsassets/digischool/alternance/prod/company/1528960956.png',
                    order: 4
                },
                {
                    title: 'B.E.P Arts Graphiques',
                    subtitle: 'Don Bosco, Nice',
                    year: '2008',
                    logo: 'https://archive.donbosconice.eu/sites/archive.donbosconice.eu/local/cache-vignettes/L140xH140/siteon0-32084.png?1644571378',
                    order: "last"
                },
            ],
            certification: 'Certifications',
            certificationCard: [
                {
                    img: 'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/000000/external-udemycom-is-an-online-learning-and-teaching-platform-logo-shadow-tal-revivo.png',
                    title: 'Udemy ',
                    subtitle: '- React.Js -',
                    background: 'bg-dark',
                    link: 'https://www.udemy.com/certificate/UC-9a3bfd0d-4ab5-4779-9329-b30bd38c1190/'
                },
                {
                    img: 'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/000000/external-udemycom-is-an-online-learning-and-teaching-platform-logo-shadow-tal-revivo.png',
                    title: 'Udemy ',
                    subtitle: '- Développeur web -',
                    background: 'bg-dark',
                    link: 'https://www.udemy.com/certificate/UC-dd73713d-4b9a-493d-a113-1e347c073ac4/'
                },
                {
                    img: 'https://cdn.worldvectorlogo.com/logos/codingame-1.svg',
                    title: 'CodeinGame',
                    subtitle: '- Challenges -',
                    background: 'bg-dark',
                    link: 'https://www.codingame.com/profile/78f1051bf8bad76d0afef3131c1b1f592260304'
                },
                {
                    img: 'https://docs.codewars.com/logo.svg',
                    title: 'Codewars',
                    subtitle: '- Challenges -',
                    background: 'bg-dark',
                    link: 'https://www.codewars.com/users/Keongy'
                },
            ],
        },
        experience: {
            experience: 'Expérience',
            subtitle: 'Travail et stage',
            resume: "Après des études d'infographie, j'ai continué mon cursus dans le domaine du commerce. C'est en 2018 que j'ai décidé de me reconvertir dans un domaine qui me passionne : le développement informatique. J'ai commencé par un stage en tant que développeur web puis j'ai eu l'opportunité de mettre en place un projet de e-commerce. Je suis également développeur freelance.",
            timeline: {
                part1: [
                    {
                        title: 'Développeur web ',
                        subtitle: 'OP-Consulting · Freelance',
                        description: `Développeur freelance depuis mars 2021.`,
                        year: '2022'
                    },
                    {
                        title: 'Responsable digital',
                        subtitle: "Chef's Signature France",
                        description:
                            "Mise en place d'un projet de plateforme e-commerce reliant plusieurs restaurants / dark kitchen.",
                        year: '2021'
                    },
                    {
                        title: 'Développeur Front-End',
                        subtitle: 'Mytip, Nice',
                        description: `Stage de 6 mois en tant que Développeur web pour la refonte complète d'une application web sous Vue.js. `,
                        year: '2019'
                    },
                    {
                        title: 'Ingénieur commercial',
                        subtitle: 'Cloud Eco, Sophia-antipolis',
                        description: `Vente de solution télécom.`,
                        year: '2017'
                    }
                ],
                part2: [
                    {
                        title: 'Responsable développement commercial',
                        subtitle: 'Riviera Beach Magazine, St-tropez',
                        description: `Responsable du développement commercial.`,
                        year: '2016'
                    },
                    {
                        title: 'Account Manager',
                        subtitle: 'Xerox, Monaco',
                        description: `Manager de comptes chez Xerox Monaco.`,
                        year: '2015'
                    },
                    {
                        title: 'Commercial',
                        subtitle: 'Platinium habitat',
                        description: `Commercial dans la vente de fenêtres, climatisations...`,
                        year: '2012'
                    },
                    {
                        title: 'Commercial',
                        subtitle: 'Atelier du Mistral',
                        description: `Commercial en alternance dans un magasin de meubles sur mesure.`,
                        year: '2010'
                    }
                ]
            }
        },
        projects: {
            title: 'Projets',
            resume: "J'ai décidé de me spécialiser sur React.js. La majorité de mes projets sont conçus en utilisant ce language ainsi que Node.js et Npx create-react-app. J'ai également utilisé des API REST et d'autres outils tel que Bootstrap, Firebase, Redux...",
            reactProject: 'Projets React.js',
            wordpressProject: 'Projets Wordpress',
            card: [
                {
                    link: 'portefolio',
                    title: 'Portefolio',
                    description: "Mon site web perso rassemblant mon cursus, mes expériences ainsi qu'une partie de mes projets réalisés.",
                    date: 'Crée le 16/02/20222',
                    logo:
                    {
                        logos: [{
                            img: 'https://img.icons8.com/color/48/000000/react-native.png',
                            title: 'React'
                        },
                        {
                            img: "https://img.icons8.com/color/48/000000/sass-avatar.png",
                            title: 'Sass'
                        },
                        {
                            img: "https://img.icons8.com/color/48/000000/nodejs.png",
                            title: 'Node.js'
                        }
                        ],
                    }
                },
                {
                    link: 'marvel-quiz',
                    title: 'marvel-quiz',
                    description: "Application utilisant l'API Marvel, Firebase pour les inscriptions / authentifications. Questionnaire sur les héros de Marvel utilisant le principe de QCM avec différents niveaux de difficultés et un scoreboard qui résume les bonnes et mauvaises réponses... ",
                    date: 'Crée le 11/01/20222',
                    logo:
                    {
                        logos: [{
                            img: 'https://img.icons8.com/color/48/000000/react-native.png',
                            title: 'React'
                        },
                        {
                            img: "https://img.icons8.com/color/48/000000/nodejs.png",
                            title: 'Node.js'
                        },
                        {
                            img: "https://img.icons8.com/color/48/000000/firebase.png",
                            title: 'Firebase'
                        }
                        ],
                    }
                },
                {
                    link: 'app-note',
                    title: 'App-note',
                    description: 'Application de type ToDoList plus complexe.',
                    date: 'Crée le 08/02/20222',
                    logo:
                    {
                        logos: [{
                            img: 'https://img.icons8.com/color/48/000000/react-native.png',
                            title: 'React'
                        },
                        {
                            img: "https://img.icons8.com/color/48/000000/nodejs.png",
                            title: 'Node.js'
                        },
                        {
                            img: "https://img.icons8.com/color/48/000000/redux.png",
                            title: 'Redux'
                        }
                        ],
                    }
                },
                {
                    link: 'infinite-gallery ',
                    title: 'infinite-gallery ',
                    description: "Galerie d'images utilisant l'API unsplash. Le principe est de charger d'autres images de l'API dès que l'utilisateur arrive en bas de la page. L'application possède également un champ de recherche pour les images à afficher.",
                    date: 'Crée le 27/01/20222',
                    logo:
                    {
                        logos: [{
                            img: 'https://img.icons8.com/color/48/000000/react-native.png',
                            title: 'React'
                        },
                        {
                            img: "https://img.icons8.com/color/48/000000/nodejs.png",
                            title: 'Node.js'
                        }
                        ],
                    }

                },
                {
                    link: 'twitch-clone',
                    title: 'twitch-clone',
                    description: 'Projet en cours...',
                    date: 'Crée le 14/02/20222',
                    logo:
                    {
                        logos: [{
                            img: 'https://img.icons8.com/color/48/000000/react-native.png',
                            title: 'React'
                        },
                        {
                            img: "https://img.icons8.com/color/48/000000/sass-avatar.png",
                            title: 'Sass'
                        },
                        {
                            img: "https://img.icons8.com/color/48/000000/nodejs.png",
                            title: 'Node.js'
                        }
                        ],
                    }
                },
                {
                    link: 'ecommerce-with-redux-',
                    title: 'e-commerce-with-redux',
                    description: 'Même application web que e-commerce en utilisant Redux...',
                    date: 'Crée le 08/02/20222',
                    logo:
                    {
                        logos: [{
                            img: 'https://img.icons8.com/color/48/000000/react-native.png',
                            title: 'React'
                        },
                        {
                            img: "https://img.icons8.com/color/48/000000/nodejs.png",
                            title: 'Node.js'
                        },
                        {
                            img: "https://img.icons8.com/color/48/000000/redux.png",
                            title: 'Redux'
                        }
                        ],
                    }
                },
                {
                    link: 'ecommerce',
                    title: 'e-commerce',
                    description: "Une application web de e-commerce simulant la vente de mugs. Avec un shop, un panier et une mise à jour des produits directement depuis/dans le panier.",
                    date: 'Crée le 01/02/20222',
                    logo:
                    {
                        logos: [{
                            img: 'https://img.icons8.com/color/48/000000/react-native.png',
                            title: 'React'
                        },
                        {
                            img: "https://img.icons8.com/color/48/000000/nodejs.png",
                            title: 'Node.js'
                        },
                        {
                            img: "https://img.icons8.com/color/48/000000/npm.png",
                            title: 'Npm'
                        }
                        ],
                    }

                },
                {
                    link: 'auth-fire-base',
                    title: 'auth-fire-base',
                    description: "Une simple application qui permet de s'enregistrer / s'identifier avec Firebase.",
                    date: 'Crée le 29/01/20222',
                    logo:
                    {
                        logos: [{
                            img: 'https://img.icons8.com/color/48/000000/react-native.png',
                            title: 'React'
                        },
                        {
                            img: "https://img.icons8.com/color/48/000000/nodejs.png",
                            title: 'Node.js'
                        },
                        {
                            img: "https://img.icons8.com/color/48/000000/firebase.png",
                            title: 'Firebase'
                        }
                        ]
                    },
                },
            ],
            seeMore: 'Voir plus...',
            cardWP: [
                {
                    title: 'Restaurant Signature',
                    background: './img/restaurant_signature.jpg'
                },
                {
                    title: 'Restaurant Signature',
                    background: './img/restaurant_signature.jpg'
                },
                {
                    title: 'Restaurant Signature',
                    background: './img/restaurant_signature.jpg'
                },
                {
                    title: 'Restaurant Signature',
                    background: './img/restaurant_signature.jpg'
                }
            ]
        },
        contact: {
            title: 'Contactez-moi',
            resume: "Je suis actuellement 'Open to work'. Vous pouvez m'envoyer un message, je vous répondrai dans les 24 heures.",
            button: 'Voir mon CV'
        }
    },

    EN: {
        navbar: {
            home: 'Home',
            education: 'Education',
            experience: 'Experience',
            projects: 'Projects',
            contact: 'Contact'
        },
        home: {
            resume: 'A passionate person who always loves to learn more about developing sustainable and scalable projects to create impact.',
            whatIDo: 'What i do ?',
            development: {
                title: 'Development',
                skills: [
                    {
                        skill: "Building scalable web applications with React.js"
                    },
                    {
                        skill: "Management and adaptation of technical solutions"
                    },
                    {
                        skill: "Adherence to common optimization practices"
                    }
                ]
            },
            design: {
                title: 'UI/UX Design',
                skills: [
                    {
                        skill: "Designing attractive user interface for web applications"
                    },
                    {
                        skill: "Compliance with UI/UX methodologies"
                    },
                    {
                        skill: "Understanding of user needs"
                    }
                ]
            }
        },
        education: {
            education: 'Education',
            subtitle: 'Basic Qualification and Certifcations',
            degreesReceived: 'Degrees Receveid',
            cardDegrees: [
                {
                    title: 'Bachelor’s degree of computer science',
                    subtitle: 'Conservatoire National des Arts et Métiers - NICE',
                    year: '2021',
                    logo: 'https://www.adcf.org/images/AA-Visuel-AdCFdirect/934/Cnam.jpg',
                    order: 1
                },
                {
                    title: 'Master’s degree in Business',
                    subtitle: 'IPAC - Annecy',
                    year: '2014',
                    logo: 'https://evenementsoi.files.wordpress.com/2019/09/logo-ipac.png',
                    order: 3
                },
                {
                    title: 'Bachelor’s degree in Marketing and Communication',
                    subtitle: 'IPAC - NICE',
                    year: '2013',
                    logo: 'https://evenementsoi.files.wordpress.com/2019/09/logo-ipac.png',
                    order: 5
                },
                {
                    title: 'Two-year technical degree in Negociation and Customer Relations',
                    subtitle: 'Esicad, Nice',
                    year: '2012',
                    logo: 'https://file.diplomeo-static.com/file/00/00/01/77/17705.svg',
                    order: 2
                },
                {
                    title: 'BTEC Graphic Communication',
                    subtitle: 'Euromédia, Mandelieu',
                    year: '2010',
                    logo: 'https://s3-eu-west-1.amazonaws.com/clientsassets/digischool/alternance/prod/company/1528960956.png',
                    order: 4
                },
                {
                    title: 'B.E.P in Graphic Art',
                    subtitle: 'Don Bosco, Nice',
                    year: '2008',
                    logo: 'https://archive.donbosconice.eu/sites/archive.donbosconice.eu/local/cache-vignettes/L140xH140/siteon0-32084.png?1644571378',
                    order: "last"
                },
            ],
            certification: 'Certifications',
            certificationCard: [
                {
                    img: 'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/000000/external-udemycom-is-an-online-learning-and-teaching-platform-logo-shadow-tal-revivo.png',
                    title: 'Udemy ',
                    subtitle: '- React.Js -',
                    background: 'bg-dark',
                    link: 'https://www.udemy.com/certificate/UC-9a3bfd0d-4ab5-4779-9329-b30bd38c1190/'
                },
                {
                    img: 'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/000000/external-udemycom-is-an-online-learning-and-teaching-platform-logo-shadow-tal-revivo.png',
                    title: 'Udemy ',
                    subtitle: '- Web Developer -',
                    background: 'bg-dark',
                    link: 'https://www.udemy.com/certificate/UC-dd73713d-4b9a-493d-a113-1e347c073ac4/'
                },
                {
                    img: 'https://cdn.worldvectorlogo.com/logos/codingame-1.svg',
                    title: 'CodeinGame',
                    subtitle: '- Challenges -',
                    background: 'bg-dark',
                    link: 'https://www.codingame.com/profile/78f1051bf8bad76d0afef3131c1b1f592260304'
                },
                {
                    img: 'https://docs.codewars.com/logo.svg',
                    title: 'Codewars',
                    subtitle: '- Challenges -',
                    background: 'bg-dark',
                    link: 'https://www.codewars.com/users/Keongy'
                },
            ],
        },
        experience: {
            experience: 'Experience',
            subtitle: 'Work and Internship',
            resume: "After studying computer graphics, I continued my studies in the field of commerce. It was in 2018 that I decided to retrain in a field that fascinates me: IT development. I started with an internship as a web developer then I had the opportunity to set up an e-commerce project. I am also a freelance developer.",
            timeline: {
                part1: [
                    {
                        title: 'Web developer',
                        subtitle: 'OP-Consulting · Freelance',
                        description: `Freelance developer since March 2021.`,
                        year: '2022'
                    },
                    {
                        title: 'Digital manager',
                        subtitle: "Chef's Signature France",
                        description:
                            "Implementation of an e-commerce platform project linking several restaurants / dark kitchen.",
                        year: '2021'
                    },
                    {
                        title: 'Front End Developer',
                        subtitle: 'Mytip, Nice',
                        description: `6-month internship as a Web Developer for the complete redesign of a web application under Vue.js.`,
                        year: '2019'
                    },
                    {
                        title: 'Sales Engineer',
                        subtitle: 'Cloud Eco, Sophia-antipolis',
                        description: `Sale of telecom solution.`,
                        year: '2017'
                    }
                ],
                part2: [
                    {
                        title: 'Business development manager',
                        subtitle: 'Riviera Beach Magazine, St-tropez',
                        description: `Responsible for business development.`,
                        year: '2016'
                    },
                    {
                        title: 'Account Manager',
                        subtitle: 'Xerox, Monaco',
                        description: `Account Manager at Xerox Monaco.`,
                        year: '2015'
                    },
                    {
                        title: 'Commercial',
                        subtitle: 'Platinium habitat',
                        description: `Commercial in the sale of windows, air conditioning...`,
                        year: '2012'
                    },
                    {
                        title: 'Commercial',
                        subtitle: 'Atelier du Mistral',
                        description: `Work-study commercial in a custom-made furniture store.`,
                        year: '2010'
                    }
                ]
            }
        },
        projects: {
            title: 'Projects',
            resume: "I decided to specialize in React.js. The majority of my projects are designed using this language as well as Node.js and Npx create-react-app. I also used REST APIs and other tools such as Bootstrap, Firebase, Redux...",
            reactProject: 'React.js Projects',
            wordpressProject: 'Wordpress Projects',
            card: [
                {
                    link: 'portefolio',
                    title: 'Portefolio',
                    description: "My personal website bringing together my curriculum, my experience as well as some of my completed projects.",
                    date: 'Created on 02/16/20222',
                    logo:
                    {
                        logos: [{
                            img: 'https://img.icons8.com/color/48/000000/react-native.png',
                            title: 'React'
                        },
                        {
                            img: "https://img.icons8.com/color/48/000000/sass-avatar.png",
                            title: 'Sass'
                        },
                        {
                            img: "https://img.icons8.com/color/48/000000/nodejs.png",
                            title: 'Node.js'
                        }
                        ],
                    }

                },
                {
                    link: 'marvel-quiz',
                    title: 'marvel-quiz',
                    description: "Application using Marvel API, Firebase for registrations/authentication. Questionnaire on marvel heroes using the MCQ principle with different levels of difficulty and a scoreboard that summarizes the right and wrong answers...",
                    date: 'Created on 11/01/20222',
                    logo:
                    {
                        logos: [{
                            img: 'https://img.icons8.com/color/48/000000/react-native.png',
                            title: 'React'
                        },
                        {
                            img: "https://img.icons8.com/color/48/000000/nodejs.png",
                            title: 'Node.js'
                        },
                        {
                            img: "https://img.icons8.com/color/48/000000/firebase.png",
                            title: 'Firebase'
                        }
                        ],
                    }
                },
                {
                    link: 'app-note',
                    title: 'App-note',
                    description: 'ToDoList type application in a little more complex.',
                    date: 'Created on 08/02/20222',
                    logo:
                    {
                        logos: [{
                            img: 'https://img.icons8.com/color/48/000000/react-native.png',
                            title: 'React'
                        },
                        {
                            img: "https://img.icons8.com/color/48/000000/nodejs.png",
                            title: 'Node.js'
                        },
                        {
                            img: "https://img.icons8.com/color/48/000000/redux.png",
                            title: 'Redux'
                        }
                        ],
                    }

                },
                {
                    link: 'infinite-gallery ',
                    title: 'infinite-gallery ',
                    description: "Image gallery using the unsplash API. The principle is to load other images from the api as soon as the user arrives at the bottom of the page. The app also has a search box for images to display.",
                    date: 'Created on 01/27/20222',
                    logo:
                    {
                        logos: [{
                            img: 'https://img.icons8.com/color/48/000000/react-native.png',
                            title: 'React'
                        },
                        {
                            img: "https://img.icons8.com/color/48/000000/nodejs.png",
                            title: 'Node.js'
                        }
                        ],
                    }

                },
                {
                    link: 'twitch-clone',
                    title: 'twitch-clone',
                    description: 'Ongoing project...',
                    date: 'Created on 02/14/20222',
                    logo:
                    {
                        logos: [{
                            img: 'https://img.icons8.com/color/48/000000/react-native.png',
                            title: 'React'
                        },
                        {
                            img: "https://img.icons8.com/color/48/000000/sass-avatar.png",
                            title: 'Sass'
                        },
                        {
                            img: "https://img.icons8.com/color/48/000000/nodejs.png",
                            title: 'Node.js'
                        }
                        ],
                    }

                },
                {
                    link: 'ecommerce-with-redux-',
                    title: 'ecommerce-with-redux',
                    description: 'Same web application as ecommerce using Redux...',
                    date: 'Created on 08/02/20222',
                    logo:
                    {
                        logos: [{
                            img: 'https://img.icons8.com/color/48/000000/react-native.png',
                            title: 'React'
                        },
                        {
                            img: "https://img.icons8.com/color/48/000000/nodejs.png",
                            title: 'Node.js'
                        },
                        {
                            img: "https://img.icons8.com/color/48/000000/redux.png",
                            title: 'Redux'
                        }
                        ],
                    }

                },
                {
                    link: 'ecommerce',
                    title: 'ecommerce',
                    description: "An e-commerce web application simulating the sale of mugs. With a shop, a basket with product updates directly in the basket.",
                    date: 'Created on 01/02/20222',
                    logo:
                    {
                        logos: [{
                            img: 'https://img.icons8.com/color/48/000000/react-native.png',
                            title: 'React'
                        },
                        {
                            img: "https://img.icons8.com/color/48/000000/nodejs.png",
                            title: 'Node.js'
                        },
                        {
                            img: "https://img.icons8.com/color/48/000000/npm.png",
                            title: 'Npm'
                        }
                        ],
                    }

                },
                {
                    link: 'auth-fire-base',
                    title: 'auth-fire-base',
                    description: "A simple application that allows to register / identify with Firebase.",
                    date: 'Created on 01/29/20222',
                    logo:
                    {
                        logos: [{
                            img: 'https://img.icons8.com/color/48/000000/react-native.png',
                            title: 'React'
                        },
                        {
                            img: "https://img.icons8.com/color/48/000000/nodejs.png",
                            title: 'Node.js'
                        },
                        {
                            img: "https://img.icons8.com/color/48/000000/firebase.png",
                            title: 'Firebase'
                        }
                        ]
                    },


                },
            ],
            seeMore: 'See more...',
            cardWP: [
                {
                    title: 'Restaurant Signature',
                    background: '../img/restaurant_signature.jpg'
                },
                {
                    title: 'Restaurant Signature',
                    background: './img/restaurant_signature.jpg'
                },
                {
                    title: 'Restaurant Signature',
                    background: './img/restaurant_signature.jpg'
                },
                {
                    title: 'Restaurant Signature',
                    background: './img/restaurant_signature.jpg'
                }
            ]
        },
        contact: {
            title: 'Contact Me',
            resume: "I am currently 'Open to work'. You can message me, I will get back to you within 24 hours.",
            button: 'See my resume'
        }
    },
}

export default lang