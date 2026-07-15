const SUPABASE_URL = "https://smxabmjoawhtyotufmgi.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNteGFibWpvYXdodHlvdHVmbWdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQxMTc4MjAsImV4cCI6MjA5OTY5MzgyMH0.8hYewh2Ya4hrcfKJ6qKJO6zZ8HdQ5jc1XJ6PrP_vyds";

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Money Formatter (Naira)
const money = (val) => {
    return "₦" + parseFloat(val).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
};

// Auth Guard: Use this at the top of every protected page (dashboard, recharge, etc.)
async function checkAuth() {
    const { data: { session }, error } = await sb.auth.getSession();
    
    if (error || !session) {
        window.location.href = 'login.html';
        return null;
    }
    
    // Check if user is an admin if needed (optional)
    return session.user;
}

// Logout Helper
async function logout() {
    await sb.auth.signOut();
    window.location.href = 'login.html';
}
