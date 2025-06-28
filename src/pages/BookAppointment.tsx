import { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, Mail, MapPin, CreditCard, Check, ChevronDown, MessageCircle } from 'lucide-react';

type Service = {
  title: string;
  price: number;
  duration: string;
};

const services: Service[] = [
  { title: "IV WELLNESS", price: 300, duration: "60 min" },
  { title: "FACIAL REJUVENATION", price: 150, duration: "75 min" },
  { title: "BODY CONTOURING", price: 450, duration: "90 min" },
  { title: "CHROMOTHERAPY", price: 120, duration: "45 min" },
  { title: "WELLNESS CONSULTATION", price: 200, duration: "60 min" },
  { title: "CRYOTHERAPY", price: 180, duration: "15 min" },
  { title: "HYPERBARIC OXYGEN THERAPY", price: 250, duration: "90 min" },
  { title: "INFRARED SAUNA", price: 350, duration: "45 min" },
  { title: "DETOX BODY WRAP", price: 170, duration: "60 min" },
  { title: "OXYGEN INFUSION FACIAL", price: 210, duration: "60 min" },
  { title: "MANICURE & PEDICURE", price: 80, duration: "90 min" },
  { title: "ANTI-AGING TREATMENT", price: 350, duration: "75 min" },
  { title: "MASSAGE THERAPY", price: 120, duration: "60 min" },
  { title: "CHEMICAL PEEL", price: 200, duration: "45 min" },
  { title: "WAXING", price: 180, duration: "30 min" },
  { title: "PRP FACIAL", price: 250, duration: "90 min" },
  { title: "MICRODERM ABRASION", price: 170, duration: "45 min" },
  { title: "RF MICRONEEDLING", price: 210, duration: "60 min" },
  { title: "HEAD SPA", price: 80, duration: "45 min" },
  { title: "AROMATHERAPY SESSION", price: 110, duration: "60 min" },
  { title: "BRIDAL SERVICES", price: 450, duration: "180 min" },
  { title: "LASER HAIR REMOVAL", price: 250, duration: "30 min" },
  { title: "VITAMIN INJECTIONS", price: 450, duration: "15 min" }
];

const timeSlots: string[] = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
];

// Define form data type
type FormData = {
  service: string;
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes: string;
  paymentMethod: 'card' | 'cash';
};

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    service: '',
    date: '',
    time: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: '',
    paymentMethod: 'card'
  });

  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    handleInputChange('service', service.title);
    setDropdownOpen(false);
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const sendToWhatsApp = () => {
    const whatsappNumber = "+923070282493";
    const message = `*Crown N Core Booking Request*

*Service Details:*
🔸 Service: ${formData.service}
🔸 Price: $${selectedService?.price || ''}
🔸 Duration: ${selectedService?.duration || ''}

*Appointment Schedule:*
📅 Date: ${formatDate(formData.date)}
⏰ Time: ${formData.time}

*Client Information:*
👤 Name: ${formData.firstName} ${formData.lastName}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}

*Payment Method:*
💳 ${formData.paymentMethod === 'card' ? 'Credit Card' : 'Pay at Spa'}

${formData.notes ? `*Special Notes:*
📝 ${formData.notes}` : ''}

*Total Amount: $${selectedService?.price || 0}*

Please confirm this booking appointment. Thank you! ✨`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = () => {
    sendToWhatsApp();
    alert('Booking details sent to WhatsApp! We will confirm your appointment shortly.');
  };

  const generateDates = (): string[] => {
    const dates: string[] = [];
    const today = new Date();
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
  };

  const formatDate = (dateString: string): string => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-black rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-900 rounded-full opacity-5 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gray-800 rounded-full opacity-5 animate-pulse animation-delay-4000"></div>
      </div>

      <div className={`relative z-10 container mx-auto px-6 py-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-4 tracking-tight">
            Book Your
            <span className="text-gray-600"> Experience</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Transform your wellness journey with our premium spa services
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-500 border-2 ${
                  currentStep >= step 
                    ? 'bg-black text-white border-black shadow-lg scale-110' 
                    : 'bg-white text-gray-400 border-gray-300'
                }`}>
                  {currentStep > step ? <Check size={20} /> : step}
                </div>
                {step < 4 && (
                  <div className={`h-1 w-24 md:w-32 mx-2 transition-all duration-500 ${
                    currentStep > step ? 'bg-black' : 'bg-gray-300'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-600 font-medium">
            <span>Service</span>
            <span>Date & Time</span>
            <span>Details</span>
            <span>Payment</span>
          </div>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-gray-100">
            <div>
              
              {/* Step 1: Service Selection */}
              {currentStep === 1 && (
                <div className="space-y-8 animate-fadeIn">
                  <h2 className="text-3xl font-bold text-black mb-8 text-center">Choose Your Service</h2>
                  
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-6 py-4 text-left text-black flex items-center justify-between hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    >
                      <span className="flex items-center">
                        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-lg">
                            {selectedService ? selectedService.title : 'Select a service'}
                          </div>
                          {selectedService && (
                            <div className="text-sm text-gray-600">
                              ${selectedService.price} • {selectedService.duration}
                            </div>
                          )}
                        </div>
                      </span>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {dropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-2xl max-h-80 overflow-y-auto z-50 shadow-xl">
                        {services.map((service, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => handleServiceSelect(service)}
                            className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-all duration-200 border-b border-gray-100 last:border-b-0 text-black"
                          >
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-medium">{service.title}</div>
                                <div className="text-sm text-gray-600">{service.duration}</div>
                              </div>
                              <div className="text-black font-bold">${service.price}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {selectedService && (
                    <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 animate-slideUp">
                      <h3 className="text-xl font-semibold text-black mb-2">{selectedService.title}</h3>
                      <div className="flex items-center space-x-4 text-gray-700">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {selectedService.duration}
                        </span>
                        <span className="flex items-center">
                          <CreditCard className="w-4 h-4 mr-1" />
                          ${selectedService.price}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Step 2: Date & Time */}
              {currentStep === 2 && (
                <div className="space-y-8 animate-fadeIn">
                  <h2 className="text-3xl font-bold text-black mb-8 text-center">Select Date & Time</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-black font-semibold mb-4 flex items-center text-lg">
                        <Calendar className="w-5 h-5 mr-2" />
                        Preferred Date
                      </label>
                      <select
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-6 py-4 text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-300"
                        required
                      >
                        <option value="">Choose a date</option>
                        {generateDates().map((date) => (
                          <option key={date} value={date} className="bg-white">
                            {formatDate(date)}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-black font-semibold mb-4 flex items-center text-lg">
                        <Clock className="w-5 h-5 mr-2" />
                        Preferred Time
                      </label>
                      <div className="grid grid-cols-3 gap-3 max-h-80 overflow-y-auto">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => handleInputChange('time', time)}
                            className={`p-3 rounded-xl text-sm font-medium transition-all duration-300 border-2 ${
                              formData.time === time
                                ? 'bg-black text-white border-black shadow-lg scale-105'
                                : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Personal Details */}
              {currentStep === 3 && (
                <div className="space-y-8 animate-fadeIn">
                  <h2 className="text-3xl font-bold text-black mb-8 text-center">Your Details</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-black font-semibold mb-2">First Name</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-6 py-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-300"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-black font-semibold mb-2">Last Name</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-6 py-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-300"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-black font-semibold mb-2 flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-6 py-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-300"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-black font-semibold mb-2 flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-6 py-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-black font-semibold mb-2">Special Requests or Notes</label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => handleInputChange('notes', e.target.value)}
                      rows={4}
                      className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-6 py-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-300 resize-none"
                      placeholder="Any special requests, health conditions, or preferences we should know about?"
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Payment & Summary */}
              {currentStep === 4 && (
                <div className="space-y-8 animate-fadeIn">
                  <h2 className="text-3xl font-bold text-black mb-8 text-center">Booking Summary</h2>
                  
                  <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
                    <h3 className="text-xl font-semibold text-black mb-4">Appointment Details</h3>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex justify-between">
                        <span>Service:</span>
                        <span className="text-black font-semibold">{formData.service}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Date:</span>
                        <span className="text-black font-semibold">{formData.date ? formatDate(formData.date) : 'Not selected'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="text-black font-semibold">{formData.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Client:</span>
                        <span className="text-black font-semibold">{formData.firstName} {formData.lastName}</span>
                      </div>
                      <hr className="border-gray-300" />
                      <div className="flex justify-between text-lg">
                        <span className="font-semibold">Total:</span>
                        <span className="text-2xl font-bold text-black">
                          ${selectedService?.price || 0}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-black font-semibold mb-4">Payment Method</label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => handleInputChange('paymentMethod', 'card')}
                        className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
                          formData.paymentMethod === 'card'
                            ? 'border-black bg-gray-100'
                            : 'border-gray-200 bg-white hover:bg-gray-50'
                        }`}
                      >
                        <CreditCard className="w-8 h-8 mx-auto mb-2 text-black" />
                        <div className="text-black font-medium">Credit Card</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleInputChange('paymentMethod', 'cash')}
                        className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
                          formData.paymentMethod === 'cash'
                            ? 'border-black bg-gray-100'
                            : 'border-gray-200 bg-white hover:bg-gray-50'
                        }`}
                      >
                        <MapPin className="w-8 h-8 mx-auto mb-2 text-black" />
                        <div className="text-black font-medium">Pay at Spa</div>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-12">
                <button
                  type="button"
                  onClick={prevStep}
                  className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    currentStep === 1
                      ? 'invisible'
                      : 'bg-gray-100 text-black hover:bg-gray-200 border-2 border-gray-200'
                  }`}
                >
                  Previous
                </button>

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={
                      (currentStep === 1 && !formData.service) ||
                      (currentStep === 2 && (!formData.date || !formData.time)) ||
                      (currentStep === 3 && (!formData.firstName || !formData.lastName || !formData.email || !formData.phone))
                    }
                    className="px-8 py-4 bg-black text-white font-semibold rounded-2xl hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:bg-gray-400"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="px-8 py-4 bg-green-600 text-white font-semibold rounded-2xl hover:bg-green-700 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Send to WhatsApp
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-600">
          {/* <p>Need help? Call us at (555) 123-4567 or email support@spa.com</p> */}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.5s ease-out forwards;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        /* Custom scrollbar */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 3px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 3px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
};
export default BookingPage;