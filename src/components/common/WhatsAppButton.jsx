import React, { useState } from 'react'
import { X, Send } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const WHATSAPP_NUMBER = '+917895641234' // Replace with your WhatsApp number
  const WHATSAPP_MESSAGE = 'Hello! I would like to know more about your services.'

  const handleSendMessage = () => {
    const phone = WHATSAPP_NUMBER.replace(/[^\d+]/g, '')
    const text = message || WHATSAPP_MESSAGE
    const encodedMessage = encodeURIComponent(text)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
    setMessage('')
    setIsOpen(false)
  }

  const handleQuickMessage = (text) => {
    const phone = WHATSAPP_NUMBER.replace(/[^\d+]/g, '')
    const encodedMessage = encodeURIComponent(text)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
  }

  const quickMessages = [
    { emoji: '🚕', text: 'Book a ride now!' },
    { emoji: '❓', text: 'I have a question' },
    { emoji: '💬', text: 'Contact support' },
  ]

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src="https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/whatsapp.svg" 
                alt="WhatsApp" 
                className="w-6 h-6"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 z-40 w-80 md:w-96 bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-400 to-green-600 px-6 py-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <img 
                    src="https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/whatsapp.svg" 
                    alt="WhatsApp" 
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Sign Taxi</h3>
                  <p className="text-xs text-green-50">Typically replies instantly</p>
                </div>
              </div>
            </div>

            {/* Quick Messages */}
            <div className="px-4 py-3 bg-green-50 border-b border-green-100">
              <p className="text-xs font-semibold text-slate-600 mb-3">Quick replies:</p>
              <div className="flex flex-wrap gap-2">
                {quickMessages.map((item, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleQuickMessage(item.text)}
                    className="text-xs bg-white hover:bg-green-50 text-slate-700 px-3 py-1.5 rounded-full border border-green-200 transition-all duration-200 hover:border-green-400 hover:text-green-600 font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{item.emoji} {item.text}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Message Input */}
            <div className="p-4 space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-600 block mb-2">
                  Send us a message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      handleSendMessage()
                    }
                  }}
                  placeholder="Type your message here..."
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent resize-none text-sm bg-slate-50 placeholder-slate-400"
                  rows="3"
                />
              </div>

              <motion.button
                onClick={handleSendMessage}
                className="w-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} />
                Send to WhatsApp
              </motion.button>

              {/* Info Text */}
              <p className="text-xs text-slate-500 text-center">
                We usually respond within a few minutes
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-30 bg-black bg-opacity-20 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default WhatsAppButton
