// supabaseClient.js
import { createClient } from '@supabase/supabase-js';
const SUPABASE_URL = 'https://irdojqpdomutcjlodtkc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyZG9qcXBkb211dGNqbG9kdGtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY2NDQ0MTQsImV4cCI6MjA3MjIyMDQxNH0.zj4iYvKc89tR8cdq4KtWCf5DF5ZB4YIe9WLiSLRkaw4';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);