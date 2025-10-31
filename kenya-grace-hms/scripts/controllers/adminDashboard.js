// adminDashboard.js

// Wait until the DOM is fully loaded before running any logic
document.addEventListener('DOMContentLoaded', () => {
  // 🔁 Helper function to navigate to another page
  function navigateTo(path) {
    // Changes the browser URL to the given path
    window.location.href = path;
  }

  // 🔐 Button: Logout
  const logoutBtn = document.querySelector('.logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      console.log('Logout triggered'); // Debug log
      alert('Logging out...');         // UX feedback
      navigateTo('../dashboards/login.html'); // Redirect
    });
  }

  // 👤 Button: Add User
  const addUserBtn = document.getElementById('go-to-add-user');
  if (addUserBtn) {
    addUserBtn.addEventListener('click', () => {
      navigateTo('../dashboards/add-user.html');  
    });
  }

  // 🏥 Button: View Patient Records
  const patientRecordsBtn = document.getElementById('go-to-patient-records');
  if (patientRecordsBtn) {
    patientRecordsBtn.addEventListener('click', () => {
      navigateTo('../dashboards/patient-records.html');
    });
  }

  // 📊 Button: Generate Report
  const reportsBtn = document.getElementById('go-to-reports');
  if (reportsBtn) {
    reportsBtn.addEventListener('click', () => {
      navigateTo('../dashboards/reports.html');
    });
  }

  // 💾 Button: Backup System
  const backupBtn = document.getElementById('go-to-backup');
  if (backupBtn) {
    backupBtn.addEventListener('click', () => {
      navigateTo('../dashboards/backup.html');
    });
  }

  // ♻️ Button: Restore System
  const restoreBtn = document.getElementById('go-to-restore');
  if (restoreBtn) {
    restoreBtn.addEventListener('click', () => {
      navigateTo('../dashboards/restore.html');
    });
  }

  // 📜 Button: View Audit Logs
  const auditLogsBtn = document.getElementById('go-to-audit-logs');
  if (auditLogsBtn) {
    auditLogsBtn.addEventListener('click', () => {
      navigateTo('../dashboards/audit-logs.html');
    });
  }
});
