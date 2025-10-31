// backup.js

document.addEventListener('DOMContentLoaded', () => {
    const backupBtn = document.getElementById('backup-btn');
    const status = document.getElementById('backup-status');
  
    backupBtn.addEventListener('click', () => {
      // Simulate backup process
      status.textContent = '✅ Backup completed on ' + new Date().toLocaleString();
    });
  });
  