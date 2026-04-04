export const getChatResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes('kitchen') || lowerMessage.includes('modular')) {
    return "Our modular kitchens start from AED 45,000. We use premium Italian materials, German hardware, and offer a lifetime warranty. Would you like to book a free consultation or get a detailed quote?";
  }

  if (
    lowerMessage.includes('price') ||
    lowerMessage.includes('cost') ||
    lowerMessage.includes('quote') ||
    lowerMessage.includes('budget')
  ) {
    return "I'd be happy to help with pricing! Our projects typically range:\n\n• Modular Kitchen: AED 45K-150K\n• Luxury Interior: AED 100K-500K\n• Full Villa: AED 250K+\n• Smart Home: AED 50K-200K\n\nShall I connect you with our team for an exact quote via WhatsApp?";
  }

  if (
    lowerMessage.includes('book') ||
    lowerMessage.includes('consultation') ||
    lowerMessage.includes('appointment') ||
    lowerMessage.includes('meeting')
  ) {
    return "Perfect! I can help you book a complimentary 60-minute design consultation. Visit our booking page or I can send you directly to our WhatsApp for instant scheduling. Which would you prefer?";
  }

  if (lowerMessage.includes('portfolio') || lowerMessage.includes('work') || lowerMessage.includes('projects')) {
    return "We've completed 150+ luxury projects across Dubai! From Palm Jumeirah penthouses to Downtown villas. Check out our portfolio page to see our latest work, including 360° virtual tours. Would you like to see similar projects to yours?";
  }

  if (
    lowerMessage.includes('contact') ||
    lowerMessage.includes('call') ||
    lowerMessage.includes('phone') ||
    lowerMessage.includes('human') ||
    lowerMessage.includes('speak')
  ) {
    return "I'd love to connect you with our design team!\n\n📞 Call: +971 50 000 0000\n💬 WhatsApp: Available 24/7\n📧 Email: hello@rorixstudio.ae\n\nOr shall I redirect you to WhatsApp now?";
  }

  if (lowerMessage.includes('smart home') || lowerMessage.includes('automation')) {
    return "We specialize in luxury smart home integration with Lutron, Crestron, and Savant systems. Control lighting, climate, security, and entertainment seamlessly. Projects start from AED 50,000. Interested in a smart home consultation?";
  }

  if (lowerMessage.includes('timeline') || lowerMessage.includes('duration') || lowerMessage.includes('how long')) {
    return "Project timelines vary:\n\n• Kitchen: 6-8 weeks\n• Apartment: 8-12 weeks\n• Villa: 4-8 months\n\nWe pride ourselves on on-time delivery. Want to discuss your specific project timeline?";
  }

  if (lowerMessage.includes('warranty') || lowerMessage.includes('guarantee')) {
    return "All our work comes with comprehensive warranties:\n\n• Hardware: Lifetime warranty\n• Craftsmanship: 10 years\n• Materials: 5-10 years\n\nWe stand behind every project. Any specific concerns?";
  }

  return "Thank you for reaching out! Our design team is ready to help. I can connect you via WhatsApp for immediate assistance, or you can book a consultation through our website. What works best for you?";
};
