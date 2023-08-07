const nextConfig = {
    distDir: "build", // Set the custom build output directory
    EMAIL_JS_USER_ID: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
    EMAIL_JS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    EMAIL_JS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE
    
  };
  
  module.exports = nextConfig;
  