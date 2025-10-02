import React, { useRef, useEffect } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

const CanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | undefined>(undefined) 
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      const particles: Particle[] = []
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.4 + 0.1
        })
      }
      particlesRef.current = particles
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const particles = particlesRef.current

      particles.forEach((particle, index) => {
        // Update particle position
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around screen edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`
        ctx.fill()

        // Draw connections to nearby particles - INCREASED DISTANCE AND VISIBILITY
        for (let j = index + 1; j < particles.length; j++) {
          const otherParticle = particles[j]
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Increased connection distance from 120 to 180
          if (distance < 180) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            // Increased opacity from 0.15 to 0.35 and made it more visible
            const opacity = (1 - distance / 180) * 0.35
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
            // Increased line width from 0.5 to 1 for better visibility
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      })
    }

    const animate = () => {
      drawParticles()
      animationRef.current = requestAnimationFrame(animate)
    }

    // Initialize
    resizeCanvas()
    createParticles()
    animate()

    // Handle resize
    const handleResize = () => {
      resizeCanvas()
      createParticles()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      if (animationRef.current !== undefined) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  )
}

export default CanvasBackground