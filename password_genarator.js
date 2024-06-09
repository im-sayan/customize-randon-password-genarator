const crypto = require('crypto');
const fs = require('fs');

// Define the character set for the password
  const charset = 'ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz0123456789';

// Define the length of the password
const length = 28;

// Generate an array of passwords
const passwordCount = 1;
const passwords = [];

for (let i = 0; i < passwordCount; i++) { 
  // Generate the password
  let password = '';
  for (let j = 0; j < length; j++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  passwords.push(password);
}

// Log the passwords
console.log("Generated passwords:", passwords);

// Save the passwords to a text file
const filePath = 'passwords.txt';
fs.writeFileSync(filePath, passwords.join('\n'));
console.log(`Passwords saved to ${filePath}`);
