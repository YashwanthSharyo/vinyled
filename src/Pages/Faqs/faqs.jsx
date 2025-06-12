import React, { useState } from 'react';
import './faqs.css';

const Faqs = () => {
  const [activeIndices, setActiveIndices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [allExpanded, setAllExpanded] = useState(false);

  const faqData = [
    {
      question: 'What is Vinyled?',
      answer: 'Vinyled is a platform for buying, selling, and discovering vinyl records, connecting music enthusiasts worldwide.',
    },
    {
      question: 'How do I sell a record on Vinyled?',
      answer: 'To sell a record, create an account, upload details and images of your record, set your price, and list it for sale.',
    },
    {
      question: 'Is it free to use Vinyled?',
      answer: 'Creating an account and browsing records is free. Transaction fees apply for completed sales.',
    },
    {
      question: 'How do I contact support?',
      answer: 'Contact support via the contact form on our website or by emailing support@vinyled.com.',
    },
    {
      question: 'Can I track my order?',
      answer: 'Yes, once your order is shipped, you’ll receive a tracking number via email to monitor its progress.',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const toggleAll = () => {
    setAllExpanded(!allExpanded);
    setActiveIndices(allExpanded ? [] : faqData.map((_, i) => i));
  };

  const filteredFaqs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="faqs-container">
      <h1>Frequently Asked Questions</h1>
      <div className="search-container">
        <div className="search-wrapper">
          <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search FAQs..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search FAQs"
          />
        </div>
        <button
          onClick={toggleAll}
          className="toggle-all-btn"
          aria-label={allExpanded ? 'Collapse all FAQs' : 'Expand all FAQs'}
        >
          {allExpanded ? 'Collapse All' : 'Expand All'}
        </button>
      </div>

      {filteredFaqs.length === 0 ? (
        <p className="no-results">No FAQs found matching your search.</p>
      ) : (
        <div className="accordion">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="accordion-item"
              role="region"
              aria-labelledby={`faq-question-${index}`}
            >
              <button
                id={`faq-question-${index}`}
                className={`accordion-title ${(activeIndices.includes(index) || allExpanded) ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndices.includes(index) || allExpanded}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{faq.question}</span>
                <svg
                  className={`accordion-icon ${(activeIndices.includes(index) || allExpanded) ? 'rotate' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`accordion-content ${(activeIndices.includes(index) || allExpanded) ? 'open' : ''}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Faqs;
