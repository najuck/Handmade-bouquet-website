const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const sgMail = require('@sendgrid/mail');

const SENDGRID_KEY = functions.config()?.sendgrid?.key;
const TEMPLATE_ID = functions.config()?.sendgrid?.template;
const FROM = functions.config()?.sendgrid?.from || 'no-reply@yourdomain.com';

if (SENDGRID_KEY) {
  sgMail.setApiKey(SENDGRID_KEY);
} else {
  console.warn('SendGrid API key not set in functions config. Emails will not be sent.');
}

exports.sendOrderEmail = functions.firestore
  .document('orders/{orderId}')
  .onCreate(async (snap, ctx) => {
    const order = snap.data() || {};
    const customerInfo = order.customerInfo || {};

    const to = customerInfo.email || order.email || order.customerEmail;
    if (!to) {
      console.log('No recipient email found for order', ctx.params.orderId);
      return null;
    }

    const items = Array.isArray(order.items) ? order.items : [];
    const products = items
      .map(i => {
        const name = i.name || i.title || i.productName || `id:${i.id || ''}`;
        const qty = i.quantity || i.qty || 1;
        return `${name} x ${qty}`;
      })
      .join(', ');

    const total = order.totalAmount || order.total || order.amount || '';
    const addressParts = [];
    if (customerInfo.address) addressParts.push(customerInfo.address);
    if (customerInfo.city) addressParts.push(customerInfo.city);
    if (customerInfo.pincode) addressParts.push(customerInfo.pincode);
    const address = addressParts.join(', ');

    if (!SENDGRID_KEY) {
      console.log('Skipping send; SendGrid key missing. Prepared payload:', {
        to,
        customer_name: customerInfo.name,
        order_id: ctx.params.orderId,
        products,
        total,
        address,
      });
      return null;
    }

    const msg = {
      to,
      from: FROM,
      templateId: TEMPLATE_ID,
      dynamic_template_data: {
        customer_name: customerInfo.name || customerInfo.fullName || 'Customer',
        order_id: ctx.params.orderId,
        products,
        total,
        address,
      },
    };

    try {
      await sgMail.send(msg);
      console.log('Order email sent to', to, 'for order', ctx.params.orderId);
      return null;
    } catch (err) {
      console.error('Error sending order email', err);
      throw err;
    }
  });
