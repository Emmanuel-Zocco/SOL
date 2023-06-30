import React from 'react';
import { useEffect } from 'react';
import { Element } from 'react-scroll';
import Header from './components/header';
import HeroSection from './components/heroSection';
import FeaturedProjects from './components/FeaturedProjects';
import Biografia from './components/Biografia';
import Contacto from './components/Contacto';
import './App.css';
import { initializeApp } from 'firebase/app';


function App() {
  useEffect(() => {
    // Configuración de tu aplicación de Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyDfWvRcn1hRda3uTNRcl3MR4cHbGgw5CVs",
      authDomain: "solbio-6c774.firebaseapp.com",
      projectId: "solbio-6c774",
      storageBucket: "solbio-6c774.appspot.com",
      messagingSenderId: "428428790633",
      appId: "1:428428790633:web:c5c6c253b54bd55ea78bf8"
    };

    // Inicializa Firebase
    initializeApp(firebaseConfig);
    
    // Aquí puedes realizar otras operaciones relacionadas con Firebase si es necesario
    // Por ejemplo, puedes acceder a los servicios de Firebase, como Firestore o Realtime Database.
  }, []);

  // Resto del código del componente App
  return (
    <div>
       <Header />
      <Element name="inicio" style={{ marginBottom: '250px', marginTop:'200px' }}>
        <HeroSection />
      </Element>
      <Element name="biografia" style={{ marginBottom: '50px' }}>
        <Biografia />
      </Element>
      <Element name="proyectos" style={{ marginBottom: '50px' }}>
        <FeaturedProjects />
      </Element>
      <Element name="contacto" style={{ marginBottom: '50px' }}>
        <Contacto />
      </Element>
    </div>
  );
}

export default App;

  