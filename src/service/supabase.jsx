import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ncrrfxsdlzdvzjocqlwq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jcnJmeHNkbHpkdnpqb2NxbHdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIzMTAxNzgsImV4cCI6MjAzNzg4NjE3OH0.PNn3NmOreWnd33iY2Gt7TaijaFAz62O54hM0wsnFrS8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
