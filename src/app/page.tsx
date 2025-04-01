
import React from 'react';
import { 
  Sprout, Users, MessageCircle, Handshake, Brain, CreditCard, ArrowRight, Menu,
  ChevronRight, Star, Shield, TrendingUp, Clock, CheckCircle2
} from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-3">
              <div className="flex items-center bg-green-50 p-2 rounded-lg">
                <Sprout className="h-10 w-10 text-green-600" />
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">Vrishti</span>
                <p className="text-sm text-gray-600">Connecting Farms to Markets</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 font-medium">How it Works</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 font-medium">Testimonials</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium">Contact</a>
              <div className="flex items-center space-x-4">
               <a href='./Farmerlogin'><button className="bg-white border-2 border-green-600 text-green-600 px-6 py-2.5 rounded-lg hover:bg-green-50 transition duration-300 font-semibold">
                  Login
                </button> </a> 
              <a href='./Buyersignup'> <button className="bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition duration-300 font-semibold shadow-md hover:shadow-lg">
                  Sign Up
                </button> </a> 
              </div>
            </div>
            <div className="md:hidden">
              <Menu className="h-8 w-8 text-gray-600" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white pt-20 ">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-50" />
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Farmer in field"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-green-700 mix-blend-multiply opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 ">
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white mb-4">Revolutionizing</span>
                <span className="block text-green-200">Agricultural Commerce</span>
   
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-center text-xl text-green-50 sm:max-w-3xl leading-relaxed">
                Connect directly with farmers and buyers, enable smart contract farming, and make secure payments - all in one revolutionary platform.
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                 <a href='./Buyersignup'><button className="flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg shadow-lg text-green-700 bg-white hover:bg-green-50 transform hover:scale-105 transition duration-300">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button> </a> 
                  <button className="flex items-center justify-center px-8 py-4 border-2 border-green-200 text-base font-semibold rounded-lg text-white hover:bg-green-600 hover:border-transparent transform hover:scale-105 transition duration-300">
                    Watch Demo
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
                <div className="bg-white/10 backdrop-blur-lg rounded-lg px-4 py-6">
                  <p className="text-3xl font-bold text-white">10,000+</p>
                  <p className="mt-2 text-green-200">Active Farmers</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg px-4 py-6">
                  <p className="text-3xl font-bold text-white">₹100Cr+</p>
                  <p className="mt-2 text-green-200">Transaction Value</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg px-4 py-6">
                  <p className="text-3xl font-bold text-white">50,000+</p>
                  <p className="mt-2 text-green-200">Successful Trades</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-green-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Trusted by farmers and buyers across the country
            </h2>
            <p className="mt-3 text-xl text-green-200">
              Join thousands who are already transforming their agricultural business
            </p>
          </div>
          <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
            <div className="flex flex-col">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-green-200">
                Active Farmers
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">10,000+</dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-green-200">
                Successful Trades
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">50,000+</dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-green-200">
                Transaction Value
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">₹100Cr+</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="relative">
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How AgroConnect Works
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
              Simple, transparent, and efficient process to connect farmers with buyers
            </p>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                For Farmers
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Get better prices for your produce and access to a wider market
              </p>

              <dl className="mt-10 space-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      <Users className="h-6 w-6" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Create Your Profile</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Sign up and create your detailed farmer profile with your specialties and produce
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">List Your Produce</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    List your current and future produce with detailed information
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                      <Handshake className="h-6 w-6" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Accept Contracts</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Review and accept contract farming opportunities from verified buyers
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0">
              <img
                className="relative mx-auto rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Farmer working"
              />
            </div>
          </div>

          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                  For Buyers
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  Direct access to farmers and fresh produce with quality assurance
                </p>

                <dl className="mt-10 space-y-10">
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                        <Shield className="h-6 w-6" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Verify & Connect</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      Get verified as a buyer and connect with farmers directly
                    </dd>
                  </div>

                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                        <MessageCircle className="h-6 w-6" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Communicate & Negotiate</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      Chat with farmers and negotiate terms in real-time
                    </dd>
                  </div>

                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                        <CreditCard className="h-6 w-6" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Secure Payments</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      Make secure payments through our integrated payment system
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                <img
                  className="relative mx-auto rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Buyer inspection"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Everything you need to grow your business
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Comprehensive tools and features to streamline agricultural commerce
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
                <Users className="h-12 w-12 text-green-600" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Smart Profiles</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Detailed profiles for farmers and buyers with verification system
                </p>
              </div>

              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
                <MessageCircle className="h-12 w-12 text-green-600" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Real-time Chat</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Direct communication between farmers and buyers
                </p>
              </div>

              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
                <Handshake className="h-12 w-12 text-green-600" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Contract Management</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Easy contract creation and management system
                </p>
              </div>

              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
                <Brain className="h-12 w-12 text-green-600" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">AI Farming Advice</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Get personalized farming advice powered by AI
                </p>
              </div>

              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
                <CreditCard className="h-12 w-12 text-green-600" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Secure Payments</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Integrated payment system for safe transactions
                </p>
              </div>

              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
                <Sprout className="h-12 w-12 text-green-600" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Growth Support</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Comprehensive support for agricultural growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-16 lg:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                Hear from our happy users
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
                Success stories from farmers and buyers using our platform
              </p>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400" />
                      <Star className="h-5 w-5 text-yellow-400" />
                      <Star className="h-5 w-5 text-yellow-400" />
                      <Star className="h-5 w-5 text-yellow-400" />
                      <Star className="h-5 w-5 text-yellow-400" />
                    </div>
                    <p className="mt-3 text-base text-gray-500">
                      "AgroConnect has transformed how I sell my produce. Direct access to buyers means better prices and faster payments."
                    </p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Rajesh Kumar</p>
                      <p className="text-sm text-gray-500">Wheat Farmer, Punjab</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400" />
                      <Star className="h-5 w-5 text-yellow-400" />
                      <Star className="h-5 w-5 text-yellow-400" />
                      <Star className="h-5 w-5 text-yellow-400" />
                      <Star className="h-5 w-5 text-yellow-400" />
                    </div>
                    <p className="mt-3 text-base text-gray-500">
                      "The AI farming advice has helped me improve my crop yield significantly. The platform is easy to use and very helpful."
                    </p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Priya Patel</p>
                      <p className="text-sm text-gray-500">Organic Farmer, Gujarat</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400" />
                      <Star className="h-5 w-5 text-yellow-400" />
                      <Star className="h-5 w-5 text-yellow-400" />
                      <Star className="h-5 w-5 text-yellow-400" />
                      <Star className="h-5 w-5 text-yellow-400" />
                    </div>
                    <p className="mt-3 text-base text-gray-500">
                      "As a buyer, I love the transparency and ease of communication. The contract management system is particularly helpful."
                    </p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Amit Shah</p>
                      <p className="text-sm text-gray-500">Wholesale Buyer, Maharashtra</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-green-200">Join our platform today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a href='./Buyersignup'><button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 transition duration-300">
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </button> </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#about" className="text-base text-gray-300 hover:text-white">About</a></li>
                <li><a href="#careers" className="text-base text-gray-300 hover:text-white">Careers</a></li>
                <li><a href="#contact" className="text-base text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#help" className="text-base text-gray-300 hover:text-white">Help Center</a></li>
                <li><a href="#terms" className="text-base text-gray-300 hover:text-white">Terms of Service</a></li>
                <li><a href="#privacy" className="text-base text-gray-300 hover:text-white">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#blog" className="text-base text-gray-300 hover:text-white">Blog</a></li>
                <li><a href="#guides" className="text-base text-gray-300 hover:text-white">Guides</a></li>
                <li><a href="#webinars" className="text-base text-gray-300 hover:text-white">Webinars</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#privacy" className="text-base text-gray-300 hover:text-white">Privacy</a></li>
                <li><a href="#terms" className="text-base text-gray-300 hover:text-white">Terms</a></li>
                <li><a href="#security" className="text-base text-gray-300 hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              © 2025 AgroConnect. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;