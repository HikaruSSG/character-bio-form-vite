import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

//App Title
document.title = 'Mio App'

//app icon
const favicon = document.createElement('link')
favicon.rel = 'icon'
favicon.href = '/favicon.ico'
document.head.appendChild(favicon)

// Create the root application instance

//SEO
const meta = [
  { name: 'description', content: 'A simple and minimalistic app built with Next.js and Radix UI.' },
  { name: 'og:title', content: 'Mio App' },
  { name: 'og:description', content: 'A simple and minimalistic app built with Next.js and Radix UI.' },
  { name: 'og:image', content: 'https://example.com/openbox.jpg' },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: 'Mio App' },
  { name: 'twitter:description', content: 'A simple and minimalistic app built with Next.js and Radix UI.' },
  { name: 'twitter:image', content: 'https://example.com/openbox.jpg' },
]

//openbox
const openbox = document.createElement('div')
openbox.id = 'openbox'
openbox.style.display = 'none'
document.body.appendChild(openbox)

//twitter card
const twitterCard = document.createElement('div')
twitterCard.id = 'twitter-card'
twitterCard.style.display = 'none'
document.body.appendChild(twitterCard)

// Set meta tags
meta.forEach(metaTag => {
  const metaElement = document.createElement('meta')
  metaElement.setAttribute('name', metaTag.name)
  metaElement.setAttribute('content', metaTag.content)
  document.head.appendChild(metaElement)
})

//optomize
const app = document.getElementById('app')
if (app) {
  app.classList.remove('no-js')
}

// Set openbox
const openBoxButton = document.getElementById('openbox-button')
if (openBoxButton) {
  openBoxButton.addEventListener('click', () => {
    openbox.style.display = 'block'
  })
}

// Render the application

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
