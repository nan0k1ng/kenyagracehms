// scripts/auth.js

// Supabase project credentials
const SUPABASE_URL = 'https://irdojqpdomutcjlodtkc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyZG9qcXBkb211dGNqbG9kdGtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY2NDQ0MTQsImV4cCI6MjA3MjIyMDQxNH0.zj4iYvKc89tR8cdq4KtWCf5DF5ZB4YIe9WLiSLRkaw4';

// Create Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Bind login form after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('admin-login-form');
  const errorBox = document.getElementById('error-message');

  // ✅ If form is missing, stop here
  if (!form) {
    console.error('Login form not found in DOM');
    return;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorBox.textContent = '';

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (!email || !password) {
      errorBox.textContent = '❌ Enter both email and password.';
      return;
    }

    try {
      // Attempt login
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw new Error(error.message);

      const userId = data?.user?.id;
      if (!userId) throw new Error('User ID missing.');

      // Check role in users table
      const { data: roleData, error: roleError } = await supabase
        .from('users')
        .select('role')
        .eq('id', userId)
        .single();

      if (roleError) throw new Error(roleError.message);

      if (roleData?.role !== 'Admin') {
        await supabase.auth.signOut();
        throw new Error('Access denied. Admins only.');
      }

      // ✅ Redirect on success
      window.location.href = '../../dashboards/admin.html';
    } catch (err) {
      console.error(err);
      errorBox.textContent = `❌ ${err.message}`;
    }
  });
});
