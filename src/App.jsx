import React from 'react'

import './global.css';

import { Header } from './Components/Header';

import { Post } from './Components/Posts'

export function App() {

  return (
    <>
      <Header />

      <Post 
        author="Nilo Marcos" 
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, iure sint! Doloribus ad magnam cupiditate id"
      />

      <Post 
        author="Ivan Guimarães" 
        content="Novo post legal"
      />
      
    </>
  )
}
