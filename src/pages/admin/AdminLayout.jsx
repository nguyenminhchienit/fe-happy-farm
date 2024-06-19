/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../../components/Admin/header/Header';
import Footer from '../../components/Admin/footer/Footer';
import Aside from '../../components/Admin/aside/Aside';
import useScript from '../../components/Admin/hooks/useScript';  // Ensure this path is correct
import Dashboard  from '../../components/Admin/dashboard/Dashboard';

const DefaultLayout = () => {
  useScript('/assets/vendor/apexcharts/apexcharts.min.js');
  useScript('/assets/vendor/bootstrap/js/bootstrap.bundle.min.js');
  useScript('/assets/vendor/chart.js/chart.umd.js');
  useScript('/assets/vendor/echarts/echarts.min.js');
  useScript('/assets/vendor/quill/quill.js');
  useScript('/assets/vendor/simple-datatables/simple-datatables.js');
  useScript('/assets/vendor/tinymce/tinymce.min.js');
  useScript('/assets/vendor/php-email-form/validate.js');
  useScript('/assets/js/main.js');

  return (
    <div>
      <Header />
      <Aside />
      <Dashboard/>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
