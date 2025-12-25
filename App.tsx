
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import { GoogleGenAI } from "@google/genai";

const App: React.FC = () => {
  const [welcomeMessage, setWelcomeMessage] = useState<string>("Experience Tranquility at Jin Spa");

  useEffect(() => {
    const fetchAIGreeting = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: "Generate a very short (1 sentence), poetic, welcoming message for a high-end Asian Zen massage spa named Jin Spa.",
          config: {
            temperature: 0.8,
            topP: 0.95
          }
        });
        if (response.text) {
          setWelcomeMessage(response.text.replace(/"/g, ''));
        }
      } catch (error) {
        console.error("AI Greeting error:", error);
      }
    };
    fetchAIGreeting();
  }, []);

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main>
        <Hero welcomeMessage={welcomeMessage} />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default App;
