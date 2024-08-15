import React from 'react';
import './Main.css';
import Nav from '../Nav/Nav';

function Main() {
  return (
    <div className="main">
        <div className="heading">
            <h1>Book Generator API</h1>
        </div>
        <Nav className='nav'/> {/* Add the Nav component here */}
        <div className="main_content">
            <div id="overview" className="overview">
                <h2>OVERVIEW</h2>
                <p>The Book Generator API allows you to generate books on various topics using different language models. This documentation provides details on how to use the API, including authentication, available endpoints, and code examples.</p>
            </div>
            <div id="authentication" className="authentication">
                <h2>Authentication</h2>
                <p>To use the API, you need to include your API key in the header of each request:</p>
                <div className="api">
                    <div>
                        <p>X-API-Key: YOUR_API_KEY</p>
                    </div>
                </div>
                <p>To generate an API key, use the button below:</p>
                <button>Generate API Key</button>
                <div className="input"></div>
            </div>

            <div id="endpoints" className="endpoints">
                <h2>Endpoints</h2>
                <p>Generate Book</p>
                <div className="generate_book">
                    <div className='p'>POST</div>
                    <div className='generate'>/api/generate-book</div>
                </div>
                <p>Request Body</p>
                <div className="request">
                    <table>
                        <thead>
                            <tr>
                                <th>PARAMETER</th>
                                <th>TYPE</th>
                                <th>DESCRIPTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{color:'#07dec5'}}>api</td>
                                <td>string</td>
                                <td>The API provider to use. Options: "openai" or "together"</td>
                            </tr>
                            <tr>
                                <td style={{color:'#07dec5'}}>model</td>
                                <td>string</td>
                                <td>The specific model to use (e.g., "gpt-3.5-turbo", "gpt-4", "llama-2-70b")</td>
                            </tr>
                            <tr>
                                <td style={{color:'#07dec5'}}>topic</td>
                                <td>string</td>
                                <td>The main topic or theme of the book</td>
                            </tr>
                            <tr>
                                <td style={{color:'#07dec5'}}>language</td>
                                <td>string</td>
                                <td>The language in which the book should be generated</td>
                            </tr>
                            <tr>
                                <td style={{color:'#07dec5'}}>word_count</td>
                                <td>integer</td>
                                <td>The approximate number of words for the generated book</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="response">
                    <div className="response-header">
                        <p>Response</p>
                    </div>
                    <pre>
                    <code>
                        {"{\n\"message\": \"Book generation started\",\n\"status\": \"success\",\n\"job_id\": \"unique-job-identifier\"\n}"}
                    </code>
                    </pre>

                </div>
            </div>


            <div id="tutorial" className="tutorial">
                <h2>Tutorial</h2>
                    <h3>Step 1: Obtain an API Key</h3>
                    <p>Generate an API key using the button in the Authentication section above.</p>
                
                    <h3>Step 2: Make a Request</h3>
                    <p>Use your preferred programming language or tool to make a POST request to the /api/generate-book endpoint. Include your API key in the header and the required parameters in the request body.</p>
                
                    <h3>Step 3: Handle the Response</h3>
                    <p>The API will return a response with a job ID. You can use this ID to check the status of your book generation job.</p>
                
                    <h3>Step 4: Retrieve the Generated Book</h3>
                    <p>Once the job is complete, you can retrieve the generated book using the job ID (endpoint to be implemented).</p>
               
            </div>

            <div id="code-examples" className="code_examples">
  <h2>Code Examples</h2>

  <div className="code-example">
    <h3>Python</h3>
    <pre>
      <code>
{`import requests

API_ENDPOINT = "https://tryBookAI.com/api/generate-book"

headers = {
    "Content-Type": "application/json",
    "X-API-Key": API_KEY
}

data = {
    "topic": "The Future of Artificial Intelligence",
    "language": "English",
    "word_count": 5000
}

response = requests.post(API_ENDPOINT, json=data, headers=headers)
print(response.json())`}
      </code>
    </pre>
  </div>

  <div className="code-example">
    <h3>JavaScript (Node.js)</h3>
    <pre>
      <code>
{`const axios = require('axios');

const API_ENDPOINT = "https://tryBookAI.com/api/generate-book";

const headers = {
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY
};

const data = {
    topic: "The Future of Artificial Intelligence",
    language: "English",
    word_count: 5000
};

axios.post(API_ENDPOINT, data, { headers })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error generating book:', error);
    });`}
      </code>
    </pre>
  </div>
</div>


            <div id="pricing">
  <h2>API Pricing</h2>
  <p>Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:</p>
  
  <table>
    <thead>
      <tr>
        <th>API</th>
        <th>Model</th>
        <th>Price per 1K tokens</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>OpenAI</td>
        <td>GPT-3.5</td>
        <td>$0.002</td>
      </tr>
      <tr>
        <td>OpenAI</td>
        <td>GPT-4</td>
        <td>$0.03</td>
      </tr>
      <tr>
        <td>Together AI</td>
        <td>Llama-2-70b</td>
        <td>$0.0008</td>
      </tr>
      <tr>
        <td>Together AI</td>
        <td>Llama-2-13b</td>
        <td>$0.0006</td>
      </tr>
    </tbody>
  </table>
  
  <h3>Token Estimation</h3>
  <p>On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.</p>
  
  <h3>Billing</h3>
  <p>You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.</p>
</div>

        </div>
    </div>
  );
}

export default Main;
