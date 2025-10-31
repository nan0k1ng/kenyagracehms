// reports.js

document.addEventListener('DOMContentLoaded', () => {
    const reportBtn = document.getElementById('generate-report-btn');
    const reportOutput = document.getElementById('report-output');
  
    reportBtn.addEventListener('click', () => {
      // Simulate report generation
      const report = `
        Total Patients: 2
        Most Common Condition: Hypertension
        Last Backup: 2025-08-01
      `;
      reportOutput.textContent = report;
    });
  });
  