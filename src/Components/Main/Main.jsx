import React from 'react';
import './Main.css';
import Nav from '../Nav/Nav';

function Main() {
  return (
    <div className="main">
        <div className="heading">
            <h1>Book Generator API</h1>
        </div>
        <Nav /> {/* Add the Nav component here */}
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
                <h1>Endpoints</h1>
                <p>Generate Book</p>
                <div className="generate_book">
                    <div>POST</div>
                    <div>/api/generate-book</div>
                </div>
                <p>Request Body</p>
            </div>

            <div id="tutorial" className="tutorial">
                <h1>Tutorial</h1>
                <div className="step_1">
                    <h2>Step 1: Obtain an API Key</h2>
                    <p>Generate an API key using the button in the Authentication section above.</p>
                </div>
                <div className="step_2">
                    <h2>Step 2: Make a Request</h2>
                    <p>Use your preferred programming language or tool to make a POST request to the /api/generate-book endpoint. Include your API key in the header and the required parameters in the request body.</p>
                </div>
                <div className="step_3">
                    <h2>Step 3: Handle the Response</h2>
                    <p>The API will return a response with a job ID. You can use this ID to check the status of your book generation job.</p>
                </div>
                <div className="step_4">
                    <h2>Step 4: Retrieve the Generated Book</h2>
                    <p>Once the job is complete, you can retrieve the generated book using the job ID (endpoint to be implemented).</p>
                </div>
            </div>

            <div id="code-examples" className="code_examples"></div>
            <div id="pricing"></div>
        </div>
    </div>
  );
}

export default Main;
