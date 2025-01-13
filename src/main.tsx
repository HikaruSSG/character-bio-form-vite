import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

//app title hook
document.title = 'Mio Character Bio Creator'

//Author
const author = document.createElement('meta')
author.name = 'author'
author.content = 'Hikaru'
document.head.appendChild(author)

//google search term
const searchTerm = document.createElement('meta')
searchTerm.name = 'keywords'
searchTerm.content = 'character bio creator, mio, hikaru, game character bio, custom character bio'
document.head.appendChild(searchTerm)


//favicon
const favicon = document.createElement('link')
favicon.rel = 'shortcut icon'
favicon.href = '/favicon.svg'
document.head.appendChild(favicon)

//robot navigation
const robots = document.createElement('meta')
robots.name = 'robots'
robots.content = 'index, follow'
document.head.appendChild(robots)

//google analytics

//SEO
const metaDescription = 'Create a custom character bio for your favorite Anime or Anime game characters.'
const meta = document.createElement('meta')
meta.name = 'description'
meta.content = metaDescription
document.head.appendChild(meta)

//render app


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
