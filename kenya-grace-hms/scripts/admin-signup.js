// scripts/admin-signup.js
// supabaseClient.js

const SUPABASE_URL = 'https://irdojqpdomutcjlodtkc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyZG9qcXBkb211dGNqbG9kdGtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY2NDQ0MTQsImV4cCI6MjA3MjIyMDQxNH0.zj4iYvKc89tR8cdq4KtWCf5DF5ZB4YIe9WLiSLRkaw4';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('admin-signup-form');
  const errorBox = document.getElementById('error-message');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fullName = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!fullName || !email || !password) {
      showError('❌ Please fill in all fields.');
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({ email, password });

      if (error) {
        showError(`❌ Signup failed: ${error.message}`);
        return;
      }
      
      const userId = data?.user?.id;
      
      const { error: insertError } = await supabase
        .from('users')
        .insert([{
          id: userId, // ✅ Matches auth.uid()
          name: fullName,
          email,
          role: 'Admin',
          password: password
        }]);
      
      

      if (error) {
        showError(`❌ Signup failed: ${error.message}`);
        return;
      }

      
      if (insertError) {
        showError(`⚠️ Auth succeeded but failed to insert into users table: ${insertError.message}`);
        return;
      }

      showError('✅ Signup successful! Check your email to confirm.', 'success');
      form.reset();
    } catch (err) {
      showError(`❌ Unexpected error: ${err.message}`);
    }
  });

  function showError(message, type = 'error') {
    errorBox.textContent = message;
    errorBox.className = type;
    errorBox.style.display = 'block';
    setTimeout(() => {
      errorBox.style.display = 'none';
      errorBox.textContent = '';
    }, 5000);
  }
});
