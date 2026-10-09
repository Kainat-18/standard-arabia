// supabase-config.js
// 1. Go to https://supabase.com -> create a free account -> "New Project"
// 2. Once the project is ready, go to: Project Settings -> API
// 3. Copy "Project URL" and the "anon public" key and paste them below.

const SUPABASE_URL = "https://yshmzrgvonferaguaqap.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_QNo_eWqiE9RThGwSDNPZIQ_QMO92ORV";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
