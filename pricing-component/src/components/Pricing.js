import React, { useState, useEffect } from 'react';
import '../styles.css';

const Pricing = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
  };

  return (
    <div className={`container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <button
        onClick={toggleDarkMode}
        className="toggle-button"
        aria-label="Toggle dark mode"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      <h1>API Pricing</h1>
      <p>
        Our API pricing is based on the model used and the number of tokens
        processed. Here's a breakdown of the costs:
      </p>
      <table className="pricing-table" role="table" aria-label="API Pricing Table">
        <thead role="rowgroup">
          <tr role="row">
            <th role="columnheader">API</th>
            <th role="columnheader">Model</th>
            <th role="columnheader">Price per 1K Tokens</th>
          </tr>
        </thead>
        <tbody role="rowgroup">
          <tr role="row">
            <td role="cell">OpenAI</td>
            <td role="cell">GPT-3.5</td>
            <td role="cell">$0.002</td>
          </tr>
          <tr role="row">
            <td role="cell">OpenAI</td>
            <td role="cell">GPT-4</td>
            <td role="cell">$0.03</td>
          </tr>
          <tr role="row">
            <td role="cell">Together AI</td>
            <td role="cell">Llama-2-70b</td>
            <td role="cell">$0.0008</td>
          </tr>
          <tr role="row">
            <td role="cell">Together AI</td>
            <td role="cell">Llama-2-13b</td>
            <td role="cell">$0.0006</td>
          </tr>
        </tbody>
      </table>

      <p className="token-estimation">
        <strong>Token Estimation:</strong> On average, 1 token is approximately 4
        characters or 0.75 words. For precise pricing, we recommend using our token
        calculator tool.
      </p>
      <p className="billing-info">
        <strong>Billing:</strong> You will only be charged for the tokens used in
        generating the book. The API tracks token usage and bills accordingly.
        Detailed usage reports are available in your account dashboard.
      </p>
    </div>
  );
};

export default Pricing;
