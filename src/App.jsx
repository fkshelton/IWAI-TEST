import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    fenceType: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will contact you soon.')
    setFormData({ name: '', phone: '', email: '', fenceType: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const services = [
    {
      name: 'Wood Fencing',
      description: 'Classic and versatile, perfect for privacy and natural beauty.',
      icon: '🌲'
    },
    {
      name: 'Vinyl Fencing',
      description: 'Low maintenance and durable, available in various styles.',
      icon: '🏠'
    },
    {
      name: 'Chain Link',
      description: 'Affordable and practical for security and pet containment.',
      icon: '🔗'
    },
    {
      name: 'Ornamental Iron',
      description: 'Elegant and strong, adds sophistication to any property.',
      icon: '⚡'
    }
  ]

  const galleryImages = [
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop'
  ]

  const whyChooseUs = [
    {
      title: 'Licensed & Insured',
      description: 'Fully licensed and insured for your peace of mind.',
      icon: '✓'
    },
    {
      title: '15 Years Experience',
      description: 'Over 15 years serving the Denver community.',
      icon: '⭐'
    },
    {
      title: 'Free Estimates',
      description: 'No obligation quotes on all fencing projects.',
      icon: '💰'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Financing Banner */}
      <div className="bg-navy text-white py-3 text-center">
        <p className="text-sm sm:text-base font-semibold">
          💳 Financing Available - Make Your Dream Fence Affordable Today!
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-dark to-navy text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Summit Fence Co
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl mb-4 text-blue-200">
              Denver's Trusted Fencing Experts
            </p>
            <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
              Quality fencing solutions for your home. Licensed, experienced, and dedicated to excellence.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white hover:bg-gray-100 text-navy font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-dark mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional fencing installation for every need and budget
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-xl transition duration-300 border border-navy-light"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-navy-dark mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-dark mb-4">
              Why Choose Summit Fence Co?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="text-5xl text-navy mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-navy-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="gallery" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-dark mb-4">
              Our Work
            </h2>
            <p className="text-lg text-gray-600">
              See the quality and craftsmanship we bring to every project
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300 aspect-video bg-gray-200"
              >
                <img
                  src={image}
                  alt={`Fence project ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 sm:py-20 bg-blue-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-dark mb-4">
              Get Your Free Quote
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                Phone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="fenceType" className="block text-gray-700 font-semibold mb-2">
                Fence Type *
              </label>
              <select
                id="fenceType"
                name="fenceType"
                value={formData.fenceType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
              >
                <option value="">Select a fence type</option>
                <option value="wood">Wood Fencing</option>
                <option value="vinyl">Vinyl Fencing</option>
                <option value="chain-link">Chain Link</option>
                <option value="ornamental-iron">Ornamental Iron</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-navy hover:bg-navy-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 shadow-lg"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-200">Summit Fence Co</h3>
              <p className="text-gray-300">
                Quality fencing for Denver homes since 2009
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-200">Contact</h4>
              <p className="text-gray-300 mb-2">
                Phone: (303) 555-FENCE
              </p>
              <p className="text-gray-300 mb-2">
                Service Area: Denver & Surrounding Areas
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-200">Hours</h4>
              <p className="text-gray-300 mb-2">
                Monday - Friday: 7:00 AM - 6:00 PM
              </p>
              <p className="text-gray-300 mb-2">
                Saturday: 8:00 AM - 4:00 PM
              </p>
              <p className="text-gray-300">
                Sunday: Closed
              </p>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 Summit Fence Co. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
