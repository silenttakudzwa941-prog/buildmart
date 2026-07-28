import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { ArrowLeft, Link } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-12 max-w-4xl prose prose-gray">
          {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-500 mb-6 font-medium"
        >
          <ArrowLeft size={16} /> Back to Shop {/* FIX 2: No <a> tag inside */}
        </Link>
        <h1 className="text-3xl font-bold mb-6">Privacy and Cookie Policy</h1>
        <p><strong>Last Updated:</strong> 28 July 2026</p>

        <p>We KAZMAT HARDWARE operates this website. This Privacy Policy explains how we collect, use, and protect your personal information in compliance with the Cyber and Data Protection Act [Chapter 11:24] of Zimbabwe.</p>

        <h2>1. Information We Collect</h2>
        <p>We collect information you voluntarily provide to us when you:</p>
        <ul>
          <li>Place an order via WhatsApp or this website</li>
          <li>Contact us through email or contact forms</li>
          <li>Subscribe to newsletters or promotions</li>
        </ul>
        <p>This may include: Name, Phone Number, Delivery Address, Email Address, and Order Details. We do NOT store payment card information on our servers.</p>

        <h2>2. How We Use Your Information</h2>
        <p>We use your data to:</p>
        <ul>
          <li>Process and deliver your orders</li>
          <li>Communicate about your order status</li>
          <li>Improve our products and customer service</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>3. Cookies</h2>
        <p>Our website uses cookies to enhance your browsing experience. Cookies are small files stored on your device. They help us remember your preferences and analyze site traffic. You can disable cookies in your browser settings, but some parts of the site may not function properly.</p>

        <h2>4. Data Sharing and Security</h2>
        <p>We do not sell, trade, or rent your personal information to third parties. We implement reasonable security measures to protect your data. However, no method of transmission over the internet is 100% secure.</p>

        <h2>5. Your Rights</h2>
        <p>Under Zimbabwean law, you have the right to request access to, correction of, or deletion of your personal data. To do so, contact us at [your email].</p>

        <h2>6. Contact Us</h2>
        <p>If you have questions about this Privacy Policy, please contact us:
        <br/>Email: info@kazmat.co.zw
        <br/>Phone: +263 786 507 755
        <br/>WhatsApp: +263 786 507 755
        <br/>Facebook: facebook.com/kazmathardware
        <br/>Address: 47 Elm Street, Marondera</p>
      </div>
      <Footer />
    </>
  )
}