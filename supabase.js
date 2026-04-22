// ===== SUPABASE CONFIGURATION =====
const SUPABASE_URL = 'https://fakxnejeumtusaswclzy.supabase.co';
// PLEASE PASTE YOUR ANON KEY BELOW
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

window.SG_Auth = {
  client: _supabase,
  
  async signUp(email, password) {
    return await _supabase.auth.signUp({ email, password });
  },

  async signIn(email, password) {
    return await _supabase.auth.signInWithPassword({ email, password });
  },

  async signOut() {
    return await _supabase.auth.signOut();
  },

  async getSession() {
    const { data: { session } } = await _supabase.auth.getSession();
    return session;
  },

  onAuthStateChange(callback) {
    return _supabase.auth.onAuthStateChange(callback);
  }
};
