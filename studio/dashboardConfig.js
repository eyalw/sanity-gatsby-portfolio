export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6218f97c7eb4070a0edc6e01',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-iotftkty',
                  apiId: 'c6e94562-8496-4e7f-8b06-681f7053c9e4'
                },
                {
                  buildHookId: '6218f97cf166f60c899fbbf3',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-emwy3nhq',
                  apiId: '973494ac-45cf-484e-b151-e1997d8ba0c1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eyalw/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-emwy3nhq.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
