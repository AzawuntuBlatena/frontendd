
import React from "react";

const ReportTable = ({ shareholderActivities }) => {
  return (
    <table className="table-auto mb-4" id="shareholder-activities-table">
      <thead>
        <tr>
          <th className="px-4 py-2">Shareholder Name</th>
          <th className="px-4 py-2">Activity Type</th>
          <th className="px-4 py-2">Activity Year</th>
        </tr>
      </thead>
      <tbody>
        {shareholderActivities.map((activity, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{activity.shareholderName}</td>
            <td className="border px-4 py-2">{activity.activityType}</td>
            <td className="border px-4 py-2">{activity.activityYear}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReportTable;