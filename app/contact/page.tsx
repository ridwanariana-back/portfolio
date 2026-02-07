"use client";
import React, { useState } from 'react';

export default function ContactPage() {
  const [result, setResult] = useState("");
  // State untuk mengontrol status loading tombol
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // 1. Aktifkan status loading
    setIsSubmitting(true);
    setResult("Sending Message...");
    
    const formData = new FormData(event.currentTarget);

    // 2. Menggunakan Access Key kamu
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY as string);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! 🎉");
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submit Error:", error);
      setResult("Network error. Please check your connection.");
    } finally {
      // 3. Matikan status loading setelah selesai
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">Contact Me</h1>
          <p className="text-slate-500 dark:text-slate-400">Have questions or want to collaborate? Send me a message!</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-200">Full Name</label>
              <input 
                type="text" 
                name="name"
                required 
                placeholder="Your Full Name"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-200">Your Email Address</label>
              <input 
                type="email" 
                name="email"
                required 
                placeholder="abcde@example.com"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-200">Message</label>
            <textarea 
              name="message"
              required 
              rows={5}
              placeholder="Hello, I would like to discuss about..."
              className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
            ></textarea>
          </div>

          {/* Tombol dengan Spinner */}
          <button 
            type="submit"
            disabled={isSubmitting}
            className={`w-full font-bold py-4 rounded-lg shadow-lg transform transition active:scale-95 flex justify-center items-center gap-3 ${
              isSubmitting 
                ? "bg-slate-400 cursor-not-allowed text-white" 
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>

          {result && (
            <p className={`text-center mt-4 font-medium ${
              result.includes("successfully") 
                ? "text-green-500" 
                : "text-red-500"
            }`}>
              {result}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}