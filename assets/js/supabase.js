const SUPABASE_URL = "https://smxabmjoawhtyotufmgi.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNteGFibWpvYXdodHlvdHVmbWdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQxMTc4MjAsImV4cCI6MjA5OTY5MzgyMH0.8hYewh2Ya4hrcfKJ6qKJO6zZ8HdQ5jc1XJ6PrP_vyds";

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const money = (val) => "₦" + parseFloat(val).toLocaleString();

// Shared auth guard
async function checkAuth() {
    const { data: { session } } = await sb.auth.getSession();
    if (!session) location.href = 'login.html';
    return session.user;
}
