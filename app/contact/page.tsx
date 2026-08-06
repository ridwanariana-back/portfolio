"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending Message...");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY as string);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
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
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-6 md:px-12 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
            Get In Touch
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Contact{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
              Me
            </span>
          </h1>

          <p className="text-slate-400 max-w-md mx-auto text-sm md:text-base">
            Have questions or want to collaborate? Send me a message!
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-slate-900/60 border border-slate-800/80 p-8 md:p-10 rounded-2xl backdrop-blur-xl shadow-[0_0_40px_-10px_rgba(6,182,212,0.15)] relative">
          
          <form onSubmit={onSubmit} className="space-y-6">
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="block text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  Full Name
                </label>
                <input 
                  type="text" 
                  name="name"
                  required 
                  placeholder="Your Name"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-200 text-sm"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  Email Address
                </label>
                <input 
                  type="email" 
                  name="email"
                  required 
                  placeholder="abcde@example.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-200 text-sm"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="block text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Message
              </label>
              <textarea 
                name="message"
                required 
                rows={5}
                placeholder="Hello, I would like to discuss..."
                className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-200 text-sm resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full font-mono font-medium py-4 rounded-xl transition-all duration-300 flex justify-center items-center gap-3 text-sm tracking-wide ${
                isSubmitting 
                  ? "bg-slate-800 border border-slate-700 cursor-not-allowed text-slate-400" 
                  : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] active:scale-[0.99]"
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending Message...
                </>
              ) : (
                "Send Message"
              )}
            </button>

            {/* Feedback Status */}
            {result && (
              <p className={`text-center mt-4 text-xs font-mono ${
                result.includes("successfully") 
                  ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" 
                  : "text-rose-400"
              }`}>
                {result}
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}