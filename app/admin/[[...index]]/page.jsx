'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config.js'

export default function AdminPage() {
  // Debug: log config to see what's missing
  console.log('Sanity config:', config)
  
  return <NextStudio config={config} />
}