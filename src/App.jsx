import React from 'react'
import { Header } from './Components/Header';
import { SidebarComponent } from './Components/SidebarComponent';
import { Post } from './Components/Posts'

import styles from './App.module.css';

export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <SidebarComponent />
      
        <main>
          <Post 
            author="Nilo Marcos" 
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, iure sint! Doloribus ad magnam cupiditate id"
          />
          
          <Post 
            author="Nilo Marcos" 
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, iure sint! Doloribus ad magnam cupiditate id"
          />
        </main>
      </div>
    </>
  )
}
