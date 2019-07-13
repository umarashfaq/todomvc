import React from 'react'
import { Header } from '../containers/Header'
import { MainSection } from '../containers/MainSection'

export interface AppProps {}

export const App: React.FC<AppProps> = () => (
  <div>
    <Header />
    <MainSection />
  </div>
)
