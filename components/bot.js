import React from 'react';
import Chatbot from 'react-best-chatbot';

 const theme = {
  primaryColor: "#FFFFFF",
  secondaryColor: "#22C55E",
  textPrimaryColor: "#22C55E",
  textSecondaryColor: "#FFFFFF",
  containerStyle: {
    width: 310,
    boxShadow: "none"
  }
};
  
const steps = [
   {
    id: 1,
    content: "Hi!",
    goTo: 2,
  },
  {
    id: 2,
    content: "What can I help you with?",
    options: [
      {
        content: "Login Issue",
        value: 1,
        goTo: "login",
      },
      {
        content: "General Issue",
        value: 2,
        goTo: "general",
      },
      {
        content: "Payment related issue",
        value: 3,
        goTo: "payment",
      },
    ],
  },
  {
    id: "login",
    content: "A Technician assigned to you",
    goTo: 2,
  },
  {
    id: "general",
    content: "Kindly Describe your issue",
    receiveInput: true,
    goto:5,
  },
  {
    id: 5,
    content: "A Technician assigned to you",
  },
  {
    id: "payment",
    content: "A Technician assigned to you",
    end: true,
  },
];


const options = {
  header: "Techthella Bot",
  endContent: "See ya 👋",
  
};

const CustomChatbot = () => (
  <Chatbot steps={steps} options={options}  />
);



export default CustomChatbot;