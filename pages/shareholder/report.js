import React from 'react'
import Layout from '../shareholder'
import PropTypes from 'prop-types'
import { FaFilePdf, FaFileExcel } from 'react-icons/fa'

const ReportCard = ({ title, description, type, file }) => {
  const icon = type === 'sales' ? <FaFileExcel /> : <FaFilePdf />

  return (
    <Layout>
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center">
      <div className="mr-4 text-indigo-500">{icon}</div>
      <div>
        <div className="font-bold">{title}</div>
        <div className="text-gray-500">{description}</div>
        <div className="mt-4">
          <a href={file} className="text-indigo-500 font-bold">
            Download
          </a>
        </div>
      </div>
    </div>
    </Layout>
  )
}

ReportCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['sales', 'financial']).isRequired,
  file: PropTypes.string.isRequired,
}

export default ReportCard



