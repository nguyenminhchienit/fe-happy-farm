import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';




//  <!-- Favicons -->
import '/public/assets/img/favicon.png'
import '/public/assets/img/apple-touch-icon.png'

// <!-- Google Fonts -->
  // import 'https://fonts.gstatic.com'
  // import 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i'


// Vendor CSS Files
import '/public/assets/vendor/bootstrap/css/bootstrap.min.css';
import '/public/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '/public/assets/vendor/boxicons/css/boxicons.min.css';
import '/public/assets/vendor/quill/quill.snow.css';
import '/public/assets/vendor/quill/quill.bubble.css';
import '/public/assets/vendor/remixicon/remixicon.css';
import '/public/assets/vendor/simple-datatables/style.css';

// Template Main CSS File
import '/public/assets/css/style.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
