import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email address";
    if (!formData.contactNumber.trim()) newErrors.contactNumber = "Contact number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setSubmitting(true);
    setSubmitStatus(null);

    // Replace these with your EmailJS credentials
    const SERVICE_ID = "service_5nmm3en";
    const TEMPLATE_ID = "template_96nsaq5";
    const USER_ID = "PxHOxz6cqdx5ckP6E"; // Also called user ID in EmailJS

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(
        (result) => {
          setSubmitStatus({ success: true, message: "Message sent successfully!" });
          setFormData({ name: "", email: "", contactNumber: "", message: "" });
        },
        (error) => {
          setSubmitStatus({ success: false, message: "Failed to send message. Please try again later." });
        }
      )
      .finally(() => setSubmitting(false));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 sm:p-8 md:p-10 bg-white rounded shadow space-y-6 w-full"
    >
      <h2 className="text-3xl font-semibold mb-6 text-center">Contact Us</h2>

      <div>
        <label className="block mb-2 font-medium" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className={`w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 transition-colors ${
            errors.name ? "border-red-500 ring-red-300" : "border-gray-300 ring-indigo-300"
          }`}
          disabled={submitting}
        />
        {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block mb-2 font-medium" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 transition-colors ${
            errors.email ? "border-red-500 ring-red-300" : "border-gray-300 ring-indigo-300"
          }`}
          disabled={submitting}
        />
        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block mb-2 font-medium" htmlFor="contactNumber">
          Contact Number
        </label>
        <input
          id="contactNumber"
          name="contactNumber"
          type="tel"
          value={formData.contactNumber}
          onChange={handleChange}
          className={`w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 transition-colors ${
            errors.contactNumber ? "border-red-500 ring-red-300" : "border-gray-300 ring-indigo-300"
          }`}
          disabled={submitting}
        />
        {errors.contactNumber && <p className="text-red-600 text-sm mt-1">{errors.contactNumber}</p>}
      </div>

      <div>
        <label className="block mb-2 font-medium" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className={`w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 transition-colors resize-none ${
            errors.message ? "border-red-500 ring-red-300" : "border-gray-300 ring-indigo-300"
          }`}
          disabled={submitting}
        />
        {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-indigo-600 text-white font-semibold py-3 rounded hover:bg-indigo-700 transition-colors disabled:opacity-50"
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>

      {submitStatus && (
        <p
          className={`mt-6 text-center font-medium ${
            submitStatus.success ? "text-green-600" : "text-red-600"
          }`}
        >
          {submitStatus.message}
        </p>
      )}
    </form>
  );
}
