const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const money = (val) => "₦" + parseFloat(val).toLocaleString();

// Shared auth guard
async function checkAuth() {
    const { data: { session } } = await sb.auth.getSession();
    if (!session) location.href = 'login.html';
    return session.user;
}
