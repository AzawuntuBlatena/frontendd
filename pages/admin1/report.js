// pages/index.js

import React from "react";
import ReportForm from "@/components/ReportForm";
import ReportTable from "@/components/ReportTable";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import Layout from '../admin1'

const Report = () => {
  const [shareholderActivities, setShareholderActivities] = React.useState([]);

  const handleShareholderActivitiesUpdate = (activities) => {
    setShareholderActivities(activities);
  };

  const handleDownloadReport = () => {
    const doc = new jsPDF();
    doc.autoTable({ html: "#shareholder-activities-table" });
    doc.save("share-management-report.pdf");
  };

  return (
    <Layout>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Share Management Report Generator</h1>
      <ReportForm onShareholderActivitiesUpdate={handleShareholderActivitiesUpdate} />
      <ReportTable shareholderActivities={shareholderActivities} />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={handleDownloadReport}>Download Report</button>
    </div>
    </Layout>
  );
};

export default Report;