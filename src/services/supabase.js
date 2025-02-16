import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jvtawgpqsbcmzmmcsbws.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2dGF3Z3Bxc2JjbXptbWNzYndzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0ODMxOTEsImV4cCI6MjA1NTA1OTE5MX0.XJRUq7lpVq9BJO-I7eGG4nHMGkO6OZzRxLXxU0LscVU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
