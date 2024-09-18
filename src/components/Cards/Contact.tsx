import React, { useState } from 'react';
import emailjs from 'emailjs-com';

interface FormData {
  [key: string]: string; // اینجا از نوع Record<string, string> استفاده می‌کنیم
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        'service_4gyl2cl', // Replace with your EmailJS service ID
        'template_9z1pk3o', // Replace with your EmailJS template ID
        formData, // اینجا نوع formData صحیح شده و مشکلی پیش نمی‌آید
        '5hFw_3EOrCUHexwEU', // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setIsSent(true);
        },
        (err) => {
          console.log('FAILED...', err);
        },
      );

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div id="card-contact" className="card-inner animated">
      <section>
        <h1>
          <span>C</span>ontact me
        </h1>

        <div className="flex justify-center items-center">
          <form onSubmit={handleSubmit} className="p-2 rounded w-full max-w-lg">
            {isSent && (
              <p className="text-green-500 mb-4">
                Your message has been sent successfully!
              </p>
            )}

            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter the subject"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                rows={4}
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-secondary text-white py-2 px-4 rounded hover:bg-secondary/90 dark:text-black"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
