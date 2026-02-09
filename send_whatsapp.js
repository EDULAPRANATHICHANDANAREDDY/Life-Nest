const twilio = require('twilio');

// Directly put your SID and Auth Token here
const accountSid = 'AC06c88528d933fa9f373743e7cba25f5d'; 
const authToken = 'a2222024d95efb51a3f293369185f835';

const client = twilio(accountSid, authToken);

async function sendMessage() {
  try {
    const message = await client.messages.create({
      from: 'whatsapp:+14155238886',  // Twilio Sandbox number
      to: 'whatsapp:+918688456089',   // Your personal WhatsApp number
      body: 'Hello! We are from Team LifeNest. Thank you for cooperating and saving a life!'
    });

    console.log('Message SID:', message.sid);
  } catch (error) {
    console.error('Error sending message:', error);
  }
}

sendMessage();
