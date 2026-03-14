import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// 1. Updated Firebase Configuration for Salon ERP
const firebaseConfig = {
    apiKey: "AIzaSyAgxtcZrJy3uYe2HD4T5pz0ePmqKG3wAs4",
    authDomain: "salon-erp-98816.firebaseapp.com",
    projectId: "salon-erp-98816",
    storageBucket: "salon-erp-98816.firebasestorage.app",
    messagingSenderId: "906094502169",
    appId: "1:906094502169:web:eec9703c7c6a0d455e6588"
};

// 2. Global Salon Settings
export const APP_CONFIG = {
    business: {
        name: "Salon Unix Pvt Ltd",
        phone: "+9607765181",
        whatsapp: "9607765181", 
        address: "Maradana, Colombo",
        bankDetails: "Bank: Hatton National Bank (HNB)\nBranch: Maradana\nAccount Name: Salon Unix Pvt Ltd\nAccount No: 108020108655",
        logo: "images/logo.png", // Ensure you have a salon logo
        heroImage: "images/salon_hero.jpg"
    },
    
    // API Keys
    imgbbKey: "b1283efce28f0536e9a5d11427ea91e6",

    // System Logic
    bookingLeadTime: 30, // Reminder minutes
    categories: ["Hair Care", "Skin Care", "Nail Art", "Bridal", "Facial", "Products", "Massage"]
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export default app;