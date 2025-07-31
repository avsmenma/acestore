import React from 'react';
import { Cloud, Server, Zap, Shield, Globe, Users, Check, MessageCircle, Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react';

export default function AceStoreWebsite() {

  const packages = [
    {
      name: "Starter VPS",
      price: "Rp 150.000",
      period: "/bulan",
      cpu: "1 vCPU",
      ram: "1 GB RAM",
      storage: "20 GB SSD",
      bandwidth: "1 TB Transfer",
      location: "Singapore",
      features: ["99.9% Uptime", "24/7 Support", "Free Setup", "Linux/Windows"]
    },
    {
      name: "Business VPS",
      price: "Rp 300.000",
      period: "/bulan",
      cpu: "2 vCPU",
      ram: "4 GB RAM", 
      storage: "40 GB SSD",
      bandwidth: "2 TB Transfer",
      location: "Singapore/Jakarta",
      features: ["99.9% Uptime", "24/7 Support", "Free Setup", "Linux/Windows", "Free SSL"],
      popular: true
    },
    {
      name: "Enterprise VPS",
      price: "Rp 600.000",
      period: "/bulan",
      cpu: "4 vCPU",
      ram: "8 GB RAM",
      storage: "80 GB SSD",
      bandwidth: "4 TB Transfer",
      location: "Multi Region",
      features: ["99.9% Uptime", "24/7 Support", "Free Setup", "Linux/Windows", "Free SSL", "Daily Backup"]
    }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: "Performa Tinggi",
      description: "VPS dengan teknologi terdepan dari Alibaba Cloud untuk performa maksimal"
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: "Keamanan Terjamin", 
      description: "Perlindungan berlapis dengan sistem keamanan enterprise grade"
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: "Global Network",
      description: "Server tersebar di berbagai lokasi strategis untuk latensi rendah"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Support 24/7",
      description: "Tim ahli siap membantu Anda kapan saja melalui Discord dan live chat"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <nav className="bg-slate-900 text-white px-6 py-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-2 rounded-lg">
              <Server className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">ACE STORE</h1>
              <p className="text-sm text-gray-300">Alibaba Cloud VPS Provider</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-orange-400 transition-colors">Home</a>
            <a href="#packages" className="hover:text-orange-400 transition-colors">Paket VPS</a>
            <a href="#about" className="hover:text-orange-400 transition-colors">Tentang Kami</a>
            <a href="#contact" className="hover:text-orange-400 transition-colors">Kontak</a>
          </div>
          <a
            href="https://discord.gg/9vamez5R8s"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Join Discord</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 to-orange-500 bg-clip-text text-transparent">
                    VPS Berkualitas
                  </span>
                  <br />
                  Dengan Teknologi Alibaba Cloud
                </h1>
                <p className="text-xl text-gray-300">
                  Dapatkan performa server terbaik untuk bisnis Anda dengan VPS Alibaba Cloud yang cepat, aman, dan terpercaya.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl">
                  Lihat Paket VPS
                </button>
                <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                  Konsultasi Gratis
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">99.9%</div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">5+</div>
                  <div className="text-sm text-gray-400">Lokasi Server</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-xl p-6 text-slate-900">
                  <div className="flex items-center justify-center mb-6">
                    <img 
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/alibaba/alibaba-original.svg"
                      alt="Alibaba Cloud"
                      className="w-16 h-16"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4">Powered by Alibaba Cloud</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Cloud className="w-4 h-4 text-blue-600" />
                      <span>Enterprise Grade</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-orange-500" />
                      <span>High Performance</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-blue-600" />
                      <span>Secure Network</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4 text-orange-500" />
                      <span>Global CDN</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Mengapa Memilih ACE STORE?</h2>
            <p className="text-xl text-gray-600">Kami memberikan layanan VPS terbaik dengan dukungan penuh untuk kesuksesan bisnis Anda</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="mb-6 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Paket VPS Alibaba Cloud</h2>
            <p className="text-xl text-gray-600">Pilih paket yang sesuai dengan kebutuhan bisnis Anda</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  pkg.popular ? 'border-2 border-orange-500 scale-105' : 'border border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Paling Populer
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-blue-600">{pkg.price}</span>
                      <span className="text-gray-500">{pkg.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">CPU</span>
                      <span className="font-semibold text-slate-900">{pkg.cpu}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">RAM</span>
                      <span className="font-semibold text-slate-900">{pkg.ram}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Storage</span>
                      <span className="font-semibold text-slate-900">{pkg.storage}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Bandwidth</span>
                      <span className="font-semibold text-slate-900">{pkg.bandwidth}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Lokasi</span>
                      <span className="font-semibold text-slate-900">{pkg.location}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-4 rounded-lg font-semibold text-lg transition-all ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}>
                    Pilih Paket
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Tentang ACE STORE</h2>
              <div className="space-y-6 text-lg text-gray-300">
                <p>
                  ACE STORE adalah penyedia layanan VPS terpercaya yang menggunakan infrastruktur Alibaba Cloud. 
                  Kami berkomitmen memberikan solusi hosting yang reliable, cepat, dan aman untuk mendukung 
                  pertumbuhan bisnis digital Anda.
                </p>
                <p>
                  Dengan pengalaman bertahun-tahun di industri hosting, kami memahami kebutuhan unik setiap 
                  klien dan menyediakan layanan yang disesuaikan dengan kebutuhan spesifik Anda.
                </p>
                <p>
                  Tim support profesional kami siap membantu Anda 24/7 melalui berbagai channel komunikasi, 
                  termasuk server Discord khusus untuk komunitas pelanggan ACE STORE.
                </p>
              </div>
              
              <div className="mt-8">
                <a
                  href="https://discord.gg/9vamez5R8s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Bergabung dengan Discord</span>
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Mengapa Memilih Kami?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500 rounded-full p-2 mt-1">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Infrastruktur Premium</h4>
                      <p className="text-gray-300">Server berkualitas tinggi dengan teknologi Alibaba Cloud</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500 rounded-full p-2 mt-1">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Support Responsif</h4>  
                      <p className="text-gray-300">Tim ahli siap membantu kapan saja melalui Discord</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500 rounded-full p-2 mt-1">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Harga Kompetitif</h4>
                      <p className="text-gray-300">Paket fleksibel dengan harga terjangkau</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Siap Memulai dengan VPS Terbaik?</h2>
          <p className="text-xl mb-8 opacity-90">
            Bergabunglah dengan ribuan pelanggan yang sudah merasakan kualitas layanan ACE STORE
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Mulai Sekarang
            </button>
            <a
              href="https://discord.gg/9vamez5R8s"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Join Discord Community</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-2 rounded-lg">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">ACE STORE</h3>
                  <p className="text-sm text-gray-400">Alibaba Cloud VPS Provider</p>
                </div>
              </div>
              <p className="text-gray-400">
                Penyedia layanan VPS terpercaya dengan infrastruktur Alibaba Cloud untuk performa maksimal bisnis Anda.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-orange-400 transition-colors text-left">VPS Hosting</button></li>
                <li><button className="hover:text-orange-400 transition-colors text-left">Cloud Server</button></li>
                <li><button className="hover:text-orange-400 transition-colors text-left">Dedicated Server</button></li>
                <li><button className="hover:text-orange-400 transition-colors text-left">Domain Registration</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-orange-400 transition-colors text-left">Knowledge Base</button></li>
                <li><button className="hover:text-orange-400 transition-colors text-left">Discord Community</button></li>
                <li><button className="hover:text-orange-400 transition-colors text-left">Live Chat</button></li>
                <li><button className="hover:text-orange-400 transition-colors text-left">Status Page</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-orange-500" />
                  <span>support@acestore.id</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-orange-500" />
                  <span>+62 812-3456-7890</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-4 h-4 text-orange-500" />
                  <span>Discord: ACE STORE</span>
                </div>
              </div>
              
              <div className="mt-6">
                <h5 className="font-semibold mb-3">Follow Us</h5>
                <div className="flex space-x-4">
                  <button className="text-gray-400 hover:text-orange-400 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="text-gray-400 hover:text-orange-400 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="text-gray-400 hover:text-orange-400 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 ACE STORE. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Privacy Policy</button>
              <button className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Terms of Service</button>
              <button className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Cookie Policy</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}