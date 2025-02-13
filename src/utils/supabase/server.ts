import { createBrowserClient } from '@supabase/ssr'


export async function createClient() {

  return createBrowserClient(
    "https://djzzumdwqyllnuitqbkp.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqenp1bWR3cXlsbG51aXRxYmtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0NTM0MzUsImV4cCI6MjA1NTAyOTQzNX0.RIMmFfMFQdlQbF3K-dpHKyeEDm99APSRLcTDhvUaNic",
  );
}