```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configurations ...
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,vue}', // Include all relevant file types
    './public/**/*.html', // Include any HTML files in the public directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```