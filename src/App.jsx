import React, { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  const [selectedPlan, setSelectedPlan] = useState("Standard");

  const pricingPlans = [
    { name: "Basic", price: "₹999", desc: "Simple Website" },
    { name: "Standard", price: "₹2999", desc: "Dynamic Website" },
    { name: "Premium", price: "₹9999 or more", desc: "Full Web App" }
  ];

  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <h2>Abhinav.dev</h2>
        <div>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Michael Abhinav 👋
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I build modern websites & web apps for your business
        </motion.p>

        <motion.a href="#contact" whileHover={{ scale: 1.1 }}>
          <button>Get Your Website</button>
        </motion.a>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <h2>My Services</h2>
        <div className="card-container">
          {["🌐 Website Development","📱 App Development","🎨 UI/UX Design","⚙️ Bug Fixing"]
          .map((item, i) => (
            <motion.div 
              className="card"
              key={i}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <div className="card-container">
          <motion.div className="card" whileHover={{ scale: 1.1 }}>
            <h3>Login System</h3>
            <p>React + Node.js authentication system</p>
          </motion.div>

          <motion.div className="card" whileHover={{ scale: 1.1 }}>
            <h3>Chat App</h3>
            <p>Real-time chat using Socket.io</p>
          </motion.div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing">
        <h2>Pricing</h2>
        <div className="card-container">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              className={`card ${selectedPlan === plan.name ? "highlight" : ""}`}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedPlan(plan.name)}
            >
              <h3>{plan.name}</h3>
              <p>{plan.price}</p>
              <p>{plan.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>

        <form 
          action="https://formspree.io/f/mbdpkyre" 
          method="POST"
        >
          <input type="hidden" name="_subject" value="New Client Message 🚀" />
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message 🚀</button>
        </form>
      </section>


      <div>
        <footer style={{
          textAlign: "center",
          padding: "20px",
          background: "#294079",
          marginTop: "100px"
        }}  >
          <p>&copy; 2026 Abhinav.dev.  All rights reserved.</p>  

        </footer>
      </div>

    </div>
    
  );
}

export default App;