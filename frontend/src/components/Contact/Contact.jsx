import React, { useState } from "react";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // State for loading indicator
  const [errorMessage, setErrorMessage] = useState(null); // State for error messages

  const containerStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    maxWidth: "400px",
    margin: "0 auto",
    backgroundColor: "#f9f9f9"
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box"
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    opacity: isSubmitting ? 0.6 : 1, // Disable button while submitting
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set loading state to true
    setErrorMessage(null); // Reset error message

    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      message: e.target[2].value,
    };

    try {
      const response = await fetch('http://localhost:5001/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        e.target.reset(); // Reset form fields after submission
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Error submitting form');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Error submitting form');
    } finally {
      setIsSubmitting(false); // Set loading state back to false
    }
  };

  return (
    <footer id="contact" style={containerStyle}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>

      {errorMessage && (
        <div style={{ color: "red", textAlign: "center", marginBottom: "10px" }}>
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          style={inputStyle}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          style={inputStyle}
          required
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          style={inputStyle}
          required
        ></textarea>
        <button type="submit" style={buttonStyle} disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </footer>
  );
};
