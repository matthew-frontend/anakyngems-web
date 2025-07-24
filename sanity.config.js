import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'
import darkBlueTheme from './sanity/theme/dark-blue'

export default defineConfig({
  name: 'anakyngems-cms',
  title: 'ANAKYNGEMS CMS',
  
  projectId: '1xk2cwmy', // Your project ID from Sanity
  dataset: 'production',
  apiVersion: '2024-01-01',
  
  basePath: '/admin', // Admin panel will be at /admin
  
  theme: darkBlueTheme,
  
  plugins: [
    structureTool(),
    visionTool()
  ],
  
  studio: {
    components: {
      layout: (props) => {
        // Inject custom CSS
        if (typeof document !== 'undefined') {
          const existingLink = document.querySelector('#sanity-custom-styles')
          if (!existingLink) {
            const link = document.createElement('link')
            link.id = 'sanity-custom-styles'
            link.rel = 'stylesheet'
            link.href = '/sanity-studio.css'
            document.head.appendChild(link)
          }
        }
        return props.renderDefault(props)
      }
    }
  },
  
  schema: {
    types: schemaTypes,
  }
})