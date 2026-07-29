import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ReturnsPolicy() {
   return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12 max-w-4xl prose-gray">
         {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-500 mb-6 font-medium"
        >
          <ArrowLeft size={16} /> Back to Shop {/* FIX 2: No <a> tag inside */}
        </Link>
        <h1 className="text-3xl font-bold mb-6">Returns and Refund Policy</h1>
        <p><strong>Last Updated:</strong> 28 July 2026</p>

        <p>At KAZMAT HARDWARE, we strive to provide quality electrical products and services. If you are not completely satisfied with your purchase, this policy outlines your rights.</p>

        <h2>1. Eligibility for Returns</h2>
        <p>You may return an item within 7 days of delivery if:</p>
        <ul>
          <li>The product is faulty, defective, or damaged on arrival</li>
          <li>The wrong item was delivered</li>
          <li>The product is unused, in its original packaging, and with proof of purchase/receipt</li>
        </ul>
        <p>Electrical items that have been installed or used cannot be returned unless faulty.</p>

        <h2>2. Non-Returnable Items</h2>
        <p>The following cannot be returned:</p>
        <ul>
          <li>Cut cables, custom orders, and clearance sale items</li>
          <li>Products damaged due to misuse or incorrect installation</li>
        </ul>

        <h2>3. Refunds</h2>
        <p>Once we receive and inspect the returned item, we will notify you of the approval or rejection of your refund. Approved refunds will be processed to your original method of payment within 5-7 business days. Delivery fees are non-refundable.</p>

        <h2>4. Exchanges</h2>
        <p>We will gladly exchange an item for the same product if it is faulty. If you prefer a different product, a store credit or refund will be issued for the price difference.</p>

        <h2>5. How to Initiate a Return</h2>
        <p>To start a return, please contact us via WhatsApp at [your number] or email [your email] with your order number and reason for return. We will provide return instructions and address.</p>

        <h2>6. Contact Us</h2>
        <p>For any questions about returns and refunds:
        <br/>Email: info@kazmat.co.zw
        <br/>Phone: +263 786 507 755</p>
      </div>
      <Footer />
    </>
  )
  
}