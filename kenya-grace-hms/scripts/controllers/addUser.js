// scripts/controllers/addUser.js
import { createClient } from '@supabase/supabase-js';

// supabaseClient.js
const SUPABASE_URL = 'https://irdojqpdomutcjlodtkc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyZG9qcXBkb211dGNqbG9kdGtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY2NDQ0MTQsImV4cCI6MjA3MjIyMDQxNH0.zj4iYvKc89tR8cdq4KtWCf5DF5ZB4YIe9WLiSLRkaw4';

// ✅ Create Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ✅ Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('admin-login-form');
  const errorBox = document.getElementById('error-message');

  if (!form) {
    console.error('Login form not found.');
    return;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorBox.textContent = '';

    const email = document.getElementById('email').value.trim().toLowerCase();
    const password = document.getElementById('password').value;

    if (!email || !password) {
      showError('❌ Please enter both email and password.');
      return;
    }

    try {
      // ✅ Step 1: Authenticate
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({ email, password });
      if (authError) throw new Error(authError.message);

      const userId = authData?.user?.id;
      if (!userId) throw new Error('User ID missing after login.');

      // ✅ Step 2: Check role
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

      // ✅ Step 3: Redirect to dashboard
      window.location.href = 'dashboards/admin.html';
    } catch (err) {
      showError(`❌ ${err.message}`);
    }
  });

  function showError(message) {
    errorBox.textContent = message;
    errorBox.style.display = 'block';
    setTimeout(() => {
      errorBox.style.display = 'none';
      errorBox.textContent = '';
    }, 5000);
  }
});