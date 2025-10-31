// logs.js
// Logs user actions to Supabase logs table

async function logAction(action, actorEmail) {
  const { error } = await supabase.from('logs').insert([
    { action, actor: actorEmail, timestamp: new Date().toISOString() }
  ]);
  if (error) console.error('Log failed:', error.message);
}
