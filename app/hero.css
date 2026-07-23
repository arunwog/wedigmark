/* HERO SECTION */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #0b0b0b;
  color: #ffffff;
}

/* Soft background glow */
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 25%, rgba(255, 106, 0, 0.12), transparent 35%),
    radial-gradient(circle at 85% 75%, rgba(255, 106, 0, 0.08), transparent 30%);
  pointer-events: none;
}

/* Thin grid texture */
.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 70px 70px;
  mask-image: radial-gradient(circle at center, black 40%, transparent 90%);
  opacity: .35;
}

/* Content */
.hero-content {
  position: relative;
  z-index: 2;
  width: min(1200px, 92%);
  margin: auto;
}

.hero-label {
  display: inline-block;
  color: #ff6a00;
  font-size: .9rem;
  letter-spacing: .2em;
  text-transform: uppercase;
  margin-bottom: 1.2rem;
  font-weight: 600;
}

.hero-title {
  max-width: 900px;
  font-size: clamp(3rem, 8vw, 6.5rem);
  line-height: .95;
  font-weight: 800;
  letter-spacing: -0.05em;
}

.hero-title .accent {
  color: #ff6a00;
}

.hero-description {
  margin-top: 2rem;
  max-width: 620px;
  color: rgba(255,255,255,.72);
  font-size: 1.1rem;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
  flex-wrap: wrap;
}

.btn-primary {
  background: #ff6a00;
  color: white;
  padding: .95rem 1.7rem;
  border-radius: 999px;
  transition: .25s ease;
  font-weight: 600;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(255,106,0,.3);
}

.btn-secondary {
  border: 1px solid rgba(255,255,255,.15);
  padding: .95rem 1.7rem;
  border-radius: 999px;
  color: white;
  transition: .25s ease;
}

.btn-secondary:hover {
  border-color: #ff6a00;
  color: #ff6a00;
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding: 8rem 0 5rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .btn-primary,
  .btn-secondary {
    text-align: center;
  }
}
