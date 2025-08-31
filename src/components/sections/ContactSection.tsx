"use client";

import { Button, Badge } from "@/components";

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted");
  };

  return (
    <section className="relative bg-black py-20">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Contact Information */}
          <div>
            <Badge position="start">Contact Us</Badge>
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
              Fill Out The <span className="text-[#f6a91b]">Form</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Don&apos;t Be Afraid To Say Hello...
            </p>

            {/* Location Card */}
            <div className="bg-[#1a1a1a] border border-[#f6a91b]/30 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#f6a91b] rounded-lg flex items-center justify-center">
                  <span className="text-black text-xl">📍</span>
                </div>
                <div>
                  <p className="text-white text-sm">Location:</p>
                  <p className="text-white font-bold text-lg">Coventry, UK</p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-[#1a1a1a] border border-[#f6a91b]/30 rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#f6a91b] rounded-lg flex items-center justify-center">
                  <span className="text-black text-xl">✉️</span>
                </div>
                <div>
                  <p className="text-white text-sm">Email:</p>
                  <p className="text-white font-bold text-lg">
                    Support@Elitemindfunding.Com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-[#1a1a1a] border border-[#f6a91b]/30 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full bg-[#2a2a2a] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#f6a91b]"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-[#2a2a2a] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#f6a91b]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-[#2a2a2a] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#f6a91b]"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="+92-00-980"
                  className="w-full bg-[#2a2a2a] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#f6a91b]"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full bg-[#2a2a2a] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#f6a91b] resize-none"
                ></textarea>
              </div>
              <Button
                type="submit"
                variant="outline"
                className="w-full py-4 text-lg flex items-center justify-center gap-2"
              >
                Send it to us
                <span className="text-xl">→</span>
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section - Three Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Available Hours Card */}
          <div className="bg-[#1a1a1a] border border-[#f6a91b]/30 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-[#f6a91b] rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-black text-2xl font-bold">24</span>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">
              Available Hours
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              24/7 for Emails, Live Chat and Discord
            </p>
            <Button
              variant="outline"
              size="sm"
              className="w-full flex items-center justify-center gap-2"
            >
              <span className="text-green-500 text-lg">📱</span>
              Chat On Whatsapp
            </Button>
          </div>

          {/* Our Address Card */}
          <div className="bg-[#1a1a1a] border border-[#f6a91b]/30 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-[#f6a91b] rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-black text-2xl">📍</span>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Our Address</h3>
            <div className="text-gray-400 text-sm space-y-1">
              <p>Office No. 001, DDO IFZA Business Park</p>
              <p>Dubai Silicon Oasis, Dubai (UAE)</p>
              <p>PO BOX- 342001</p>
            </div>
          </div>

          {/* Email Us Card */}
          <div className="bg-[#1a1a1a] border border-[#f6a91b]/30 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-[#f6a91b] rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-black text-2xl">✉️</span>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Email us</h3>
            <p className="text-gray-400 text-sm mb-4">
              support@elitemindfunding.com
            </p>
            <Button
              variant="outline"
              size="sm"
              className="w-full flex items-center justify-center gap-2"
            >
              <span className="text-[#f6a91b] text-lg">✉️</span>
              Email Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
