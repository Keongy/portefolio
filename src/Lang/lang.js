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
            resume: 'Une personne passionnée qui aime toujours travailler sur des produits de bout en bout qui développent des systèmes sociaux et techniques durables et évolutifs pour créer un impact.',
            whatIDo: 'CE que je fais ?',
            development: 'Développement'
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
                    img: 'https://cdn.worldvectorlogo.com/logos/codingame-1.svg',
                    title: 'CodeinGame',
                    subtitle: '- developpeur',
                    background: 'bg-dark'
                },
                {
                    img: 'https://docs.codewars.com/logo.svg',
                    title: 'Codewars',
                    subtitle: '- developpeur',
                    background: 'bg-dark'
                },
                {
                    img: 'https://blog.openclassrooms.com/en/wp-content/uploads/sites/4/2018/11/Blog_logo.jpg',
                    title: 'Openclassrooms ',
                    subtitle: '- developpeur',
                    background: 'bg-dark'
                },
                {
                    img: 'data:image/png;base64,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',
                    title: 'Udemy ',
                    subtitle: '- developpeur',
                    background: 'bg-dark'
                },
            ],
        },
        experience: {
            experience: 'Experience',
            subtitle: 'Travail, stage et volontariat',
            resume: "J'ai travaillé avec de nombreuses startups en évolution en tant que développeur ML et DL, concepteur et architecte logiciel. J'ai également travaillé avec des entreprises bien établies, principalement en tant que développeur d'IA. J'aime organiser des événements et c'est pourquoi je suis également impliqué dans de nombreuses communautés open source en tant que représentant.",
            timeline: [
                {
                    title: 'Développeur web ',
                    subtitle: 'OP-Consulting · Freelance',
                    description: `Développeur freelance depuis mars 2021`,
                    year: '2022'
                },
                {
                    title: 'Chef de projet digital',
                    subtitle: "Chef's Signature France",
                    description:
                        "Mise d'un place d'un projet de dark kitchen from scratch",
                    year: '2021'
                },
                {
                    title: 'Développeur Front-End',
                    subtitle: 'Mytip, Nice',
                    description: `Stage de 6 mois en tant que Développeur web pour la refonte complète d'une application web sous vue.js. `,
                    year: '2019'
                },
                {
                    title: 'Ingénieur commercial',
                    subtitle: 'Cloud Eco, Sophia-antipolis',
                    description: `Vente de solution telecom`,
                    year: '2017'
                },
                {
                    title: 'Responsable développement commercial',
                    subtitle: 'Riviera Beach Magazine, St-tropez',
                    description: `Responsable du développement commercialn notamment des partenaires...`,
                    year: '2016'
                },
                {
                    title: 'Account Manager',
                    subtitle: 'Xerox, Monaco',
                    description: `Manager de compte chez Xerox à Monaco`,
                    year: '2015'
                },
                {
                    title: 'Commercial',
                    subtitle: 'Platinium habitat',
                    description: `Vente de fenêtre etc...`,
                    year: '2012'
                },
                {
                    title: 'Commercial',
                    subtitle: 'Atelier du Mistral',
                    description: `Commercial en alternance dans un magasin de meuble sur messure`,
                    year: '2010'
                },

            ]
        },
        projects: {
            title: 'Projets',
            resume: "Mes projets utilisent une grande variété d'outils technologiques de pointe. Ma meilleure expérience consiste à créer des projets de science des données et à les déployer sur des applications Web à l'aide d'une infrastructure cloud.",
            card: [
                {
                    link: 'portefolio',
                    title: 'Portefolio',
                    description: 'Mon portefolio avec tout mes projets ainsi que mes expériences passées etc etc etc, ici tout est regroupé',
                    date: 'Crée le 02/03/20222',
                    logo: [
                        'https://img.icons8.com/color/48/000000/html-5--v1.png',
                        'https://img.icons8.com/color/48/000000/css3.png'
                    ]
                },
                {
                    link: 'app-note',
                    title: 'App-note',
                    description: 'Mon portefolio avec tout mes projets ainsi que mes expériences passées etc etc etc, ici tout est regroupé',
                    date: 'Crée le 02/03/20222',
                    logo: [
                        'https://img.icons8.com/color/48/000000/html-5--v1.png',
                        'https://img.icons8.com/color/48/000000/css3.png'
                    ]
                },
                {
                    link: 'infinite-gallery ',
                    title: 'infinite-gallery ',
                    description: 'Mon portefolio avec tout mes projets ainsi que mes expériences passées etc etc etc, ici tout est regroupé',
                    date: 'Crée le 02/03/20222',
                    logo: [
                        'https://img.icons8.com/color/48/000000/html-5--v1.png',
                        'https://img.icons8.com/color/48/000000/css3.png'
                    ]
                },
                {
                    link: 'twitch-clone',
                    title: 'twitch-clone',
                    description: 'Mon portefolio avec tout mes projets ainsi que mes expériences passées etc etc etc, ici tout est regroupé',
                    date: 'Crée le 02/03/20222',
                    logo: [
                        'https://img.icons8.com/color/48/000000/html-5--v1.png',
                        'https://img.icons8.com/color/48/000000/css3.png'
                    ]
                },
                {
                    link: 'ecommerce-with-redux',
                    title: 'ecommerce-with-redux',
                    description: 'Mon portefolio avec tout mes projets ainsi que mes expériences passées etc etc etc, ici tout est regroupé',
                    date: 'Crée le 02/03/20222',
                    logo: [
                        'https://img.icons8.com/color/48/000000/html-5--v1.png',
                        'https://img.icons8.com/color/48/000000/css3.png'
                    ]
                },
                {
                    link: 'ecommerce',
                    title: 'ecommerce',
                    description: 'Mon portefolio avec tout mes projets ainsi que mes expériences passées etc etc etc, ici tout est regroupé',
                    date: 'Crée le 02/03/20222',
                    logo: [
                        'https://img.icons8.com/color/48/000000/html-5--v1.png',
                        'https://img.icons8.com/color/48/000000/css3.png'
                    ]
                },
                {
                    link: 'auth-fire-base',
                    title: 'auth-fire-base',
                    description: 'Mon portefolio avec tout mes projets ainsi que mes expériences passées etc etc etc, ici tout est regroupé',
                    date: 'Crée le 02/03/20222',
                    logo: [
                        'https://img.icons8.com/color/48/000000/html-5--v1.png',
                        'https://img.icons8.com/color/48/000000/css3.png'
                    ]
                },
                {
                    link: 'marvel-quiz',
                    title: 'marvel-quiz',
                    description: 'Mon portefolio avec tout mes projets ainsi que mes expériences passées etc etc etc, ici tout est regroupé',
                    date: 'Crée le 02/03/20222',
                    logo: [
                        'https://img.icons8.com/color/48/000000/html-5--v1.png',
                        'https://img.icons8.com/color/48/000000/css3.png'
                    ]
                }
            ]
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
            resume: 'A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.',
            whatIDo: 'What i do ?',
            development: 'Développement'
        },
        education: {
            education: 'Education',
            subtitle: 'Basic Qualification and Certifcations',
            degreesReceived: 'Degrees',
            cardDegrees: [
                {
                    title: "Bachelor's degree in Computer Science",
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
                    order: 2
                },
                {
                    title: 'Bachelor Marketing et Communication',
                    subtitle: 'IPAC - NICE',
                    year: '2013',
                    logo: 'https://evenementsoi.files.wordpress.com/2019/09/logo-ipac.png',
                    order: 3
                },
                {
                    title: 'B.T.S Négociation et Relation Client',
                    subtitle: 'Esicad, Nice',
                    year: '2012',
                    logo: 'https://file.diplomeo-static.com/file/00/00/01/77/17705.svg',
                    order: 4
                },
                {
                    title: 'B.A.C Pro Communication Graphique',
                    subtitle: 'Euromédia, Mandelieu',
                    year: '2010',
                    logo: 'https://s3-eu-west-1.amazonaws.com/clientsassets/digischool/alternance/prod/company/1528960956.png',
                    order: 5
                },
                {
                    title: 'B.E.P Arts Graphiques',
                    subtitle: 'Don Bosco, Nice',
                    year: '2008',
                    logo: 'https://archive.donbosconice.eu/sites/archive.donbosconice.eu/local/cache-vignettes/L140xH140/siteon0-32084.png?1644571378',
                    order: 6
                },
            ],
            certification: 'Certifications',
            certificationCard: [
                {
                    title: 'CodeinGame',
                    subtitle: '- dev',
                    background: 'bg-warning'

                },
                {
                    title: 'Codewars',
                    subtitle: '- developpeur',
                    background: 'bg-warning'

                },
                {
                    title: 'Openclassrooms ',
                    subtitle: '- developpeur',
                    background: 'bg-warning'
                },
                {
                    title: 'Udemy ',
                    subtitle: '- developpeur',
                    background: 'bg-warning'
                },
            ],
        },
        experience: {
            experience: 'Experience',
            subtitle: 'Work, Internship and Volunteership',
            resume: "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
            timeline: [
                {
                    title: 'web developer',
                    subtitle: 'OP-Consulting · Freelance',
                    description: `Developer freelance since mars 2021`,
                    year: '2022'
                },
                {
                    title: 'Chef de projet digital',
                    subtitle: "Chef's Signature France",
                    description:
                        "Mise d'un place d'un projet de dark kitchen from scratch",
                    year: '2021'
                },
                {
                    title: 'Développeur Front-End',
                    subtitle: 'Mytip, Nice',
                    description: `Stage de 6 mois en tant que Développeur web pour la refonte complète d'une application web sous vue.js. `,
                    year: '2019'
                },
                {
                    title: 'Ingénieur commercial',
                    subtitle: 'Cloud Eco, Sophia-antipolis',
                    description: `Vente de solution telecom`,
                    year: '2017'
                },
                {
                    title: 'Responsable développement commercial',
                    subtitle: 'Riviera Beach Magazine, St-tropez',
                    description: `Responsable du développement commercialn notamment des partenaires...`,
                    year: '2016'
                },
                {
                    title: 'Account Manager',
                    subtitle: 'Xerox, Monaco',
                    description: `Manager de compte chez Xerox à Monaco`,
                    year: '2015'
                },
                {
                    title: 'Commercial',
                    subtitle: 'Platinium habitat',
                    description: `Vente de fenêtre etc...`,
                    year: '2012'
                },
                {
                    title: 'Commercial',
                    subtitle: 'Atelier du Mistral',
                    description: `Commercial en alternance dans un magasin de meuble sur messure`,
                    year: '2010'
                },

            ]
        },
        projects: {
            title: 'Projects',
            resume: 'My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.',
            card: [
                {
                    link: 'portefolio',
                    title: 'Portefolio',
                    description: 'Mon portefolio avec tout mes projets ainsi que mes expériences passées etc etc etc, ici tout est regroupé',
                    date: 'Crée le 02/03/20222',
                    logo: [
                        'https://img.icons8.com/color/48/000000/html-5--v1.png',
                        'https://img.icons8.com/color/48/000000/css3.png'
                    ]
                },
                {
                    link: 'app-note',
                    title: 'App-note',
                    description: 'Mon portefolio avec tout mes projets ainsi que mes expériences passées etc etc etc, ici tout est regroupé',
                    date: 'Crée le 02/03/20222',
                    logo: [
                        'https://img.icons8.com/color/48/000000/html-5--v1.png',
                        'https://img.icons8.com/color/48/000000/css3.png'
                    ]
                },
                {
                    link: 'infinite-gallery',
                    title: 'infinite-gallery ',
                    description: 'Mon portefolio avec tout mes projets ainsi que mes expériences passées etc etc etc, ici tout est regroupé',
                    date: 'Crée le 02/03/20222',
                    logo: [
                        'https://img.icons8.com/color/48/000000/html-5--v1.png',
                        'https://img.icons8.com/color/48/000000/css3.png'
                    ]
                },
                {
                    link: 'twitch-clone',
                    title: 'twitch-clone',
                    description: 'Mon portefolio avec tout mes projets ainsi que mes expériences passées etc etc etc, ici tout est regroupé',
                    date: 'Crée le 02/03/20222',
                    logo: [
                        'https://img.icons8.com/color/48/000000/html-5--v1.png',
                        'https://img.icons8.com/color/48/000000/css3.png'
                    ]
                },
                {
                    link: 'ecommerce-with-redux',
                    title: 'ecommerce-with-redux',
                    description: 'Mon portefolio avec tout mes projets ainsi que mes expériences passées etc etc etc, ici tout est regroupé',
                    date: 'Crée le 02/03/20222',
                    logo: [
                        'https://img.icons8.com/color/48/000000/html-5--v1.png',
                        'https://img.icons8.com/color/48/000000/css3.png'
                    ]
                },
                {
                    link: 'marvel-quiz',
                    title: 'marvel-quiz',
                    description: 'Mon portefolio avec tout mes projets ainsi que mes expériences passées etc etc etc, ici tout est regroupé',
                    date: 'Crée le 02/03/20222',
                    logo: [
                        'https://img.icons8.com/color/48/000000/html-5--v1.png',
                        'https://img.icons8.com/color/48/000000/css3.png'
                    ]
                }
            ]
        }
    },
}

export default lang