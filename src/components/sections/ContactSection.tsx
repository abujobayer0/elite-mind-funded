"use client";

import { motion } from "framer-motion";
import {
  Button,
  Badge,
  LocationIcon,
  MailIcon,
  Input,
  TimeIcon,
} from "@/components";

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted");
  };

  return (
    <section className="relative bg-black py-20">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Two Columns */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <Badge position="start">Contact Us</Badge>
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
              Fill Out The <span className="text-[#f6a91b]">Form</span>
            </h2>
            <p className="text-white text-sm mb-8">
              Don&apos;t Be Afraid To Say Hello...
            </p>

            {[
              {
                icon: <LocationIcon className="text-[#F6A91C]" />,
                label: "Location:",
                value: "Coventry, UK",
                marginBottom: true,
              },
              {
                icon: <MailIcon className="text-[#F6A91C]" />,
                label: "Email:",
                value: "Support@Elitemindfunding.Com",
                marginBottom: false,
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`border border-[#f6a91b]/30 rounded-2xl p-4 ${
                  item.marginBottom ? "mb-6" : ""
                } bg-gradient-to-r from-[rgba(246,169,28,0.2)] to-[rgba(3,0,31,0)] `}
              >
                <div className="flex items-center gap-1">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <span className="text-white text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-white text-sm">{item.label}</p>
                    <p className="text-white font-bold text-md">{item.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="flex flex-col p-[34px] gap-[16px] bg-white/[0.02] border-[0.5px] border-[#F6A91C]/80 backdrop-blur-[25px] rounded-[12px]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  label="First Name"
                  placeholder="First Name"
                />
                <Input type="text" label="Last Name" placeholder="Last Name" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="email" label="Email" placeholder="Email" />
                <Input type="tel" label="Phone" placeholder="+92-00-980" />
              </div>
              <Input
                variant="textarea"
                label="Message"
                placeholder="Message"
                rows={4}
              />
              <Button
                type="submit"
                variant="outline"
                className="w-full py-4 text-lg flex items-center justify-center gap-2 border-[#F6A91C]/80 border-1"
              >
                Send it to us
                <span className="text-xl">→</span>
              </Button>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom Section - Three Info Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          {[
            {
              icon: <TimeIcon />,
              title: "Available Hours",
              description: "24/7 for Emails, Live Chat and Discord",
              button: {
                text: "Chat On Whatsapp",
                icon: <span className="text-green-500 text-lg">📱</span>,
              },
            },
            {
              icon: <LocationIcon className="text-white" />,
              title: "Our Address",
              description: [
                "Office No. 001, DDO IFZA Business Park",
                "Dubai Silicon Oasis, Dubai (UAE)",
                "PO BOX- 342001",
              ],
              button: null,
            },
            {
              icon: <MailIcon className="text-white" />,
              title: "Email us",
              description: "support@elitemindfunding.com",
              button: {
                text: "Email Us",
                icon: <span className="text-[#f6a91b] text-lg">✉️</span>,
              },
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white/[0.02] border border-white/10 rounded-[14px] p-6 flex flex-col"
            >
              <div className="w-[54.52px] h-[53.86px] bg-gradient-to-b from-[rgba(9,9,9,0)] to-[rgba(246,169,28,0.4)] backdrop-blur-[16.6232px] rounded-[9.30901px] flex items-center justify-center mb-6">
                {card.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">
                {card.title}
              </h3>
              {Array.isArray(card.description) ? (
                <div className="text-gray-400 text-sm space-y-1">
                  {card.description.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 text-sm">{card.description}</p>
              )}
              <div className="h-3"></div>
              {card.button && (
                <Button
                  variant="outline"
                  size="sm"
                  className={`w-full flex items-center justify-center gap-2 border ${
                    card.title === "Email us"
                      ? "border-white/60 hover:bg-white/80"
                      : "border-[#F6A91C]/60"
                  } `}
                >
                  {card.button.icon}
                  {card.button.text}
                </Button>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
