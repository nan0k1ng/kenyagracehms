// patientRecords.js

// Sample patient data (mocked for now)
const patients = [
    { name: 'Jane Mwikali', age: 34, condition: 'Diabetes', lastVisit: '2025-08-20' },
    { name: 'Peter Odhiambo', age: 52, condition: 'Hypertension', lastVisit: '2025-08-15' },
  ];
  
  // Function to render patient rows into the table
  function renderPatients(data) {
    const tableBody = document.getElementById('patient-table-body');
    tableBody.innerHTML = ''; // Clear previous rows
  
    data.forEach(patient => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${patient.name}</td>
        <td>${patient.age}</td>
        <td>${patient.condition}</td>
        <td>${patient.lastVisit}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // Function to filter patients by name
  function filterPatients(query) {
    const filtered = patients.filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    renderPatients(filtered);
  }
  
  // Attach search listener
  document.addEventListener('DOMContentLoaded', () => {
    renderPatients(patients); // Initial render
  
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', e => {
      filterPatients(e.target.value);
    });
  });
  