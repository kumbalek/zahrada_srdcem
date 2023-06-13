export default {
  widgets: [
    {name: 'structure-menu'},
    {name: 'sendgrid-widget'},
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
                  buildHookId: '5eaef10c8aa2b7c5e891fb68',
                  title: 'Sanity Studio',
                  name: 'zahrada-srdcem-2-studio',
                  apiId: '92eff564-e9d1-4094-bb3f-92f5cf0f50af'
                },
                {
                  buildHookId: '5eaef10ce83a65bc7c88bbbb',
                  title: 'Blog Website',
                  name: 'zahrada-srdcem-2',
                  apiId: 'f3c75d92-bbc9-4990-9498-412468d8ff64'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kumbalek/zahrada-srdcem-2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://zahrada-srdcem-2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
