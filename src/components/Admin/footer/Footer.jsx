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

const Footer = () => {
    return (


    <footer id="footer" className="footer">
    
    
    <div className="copyright">
      © Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
    </div>
    
    
    <div className="credits">
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
    <a href="#" className="back-to-top d-flex align-items-center justify-content-center active"><i className="bi bi-arrow-up-short"></i></a>

    </footer>
    

);
};

export default Footer;
