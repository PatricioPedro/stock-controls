import { createClient } from '@supabase/supabase-js'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zc2t0dG14eXJtdnNoeW9nbmlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTAxNDM4MDMsImV4cCI6MTk2NTcxOTgwM30.Ufd5p1S6JXzBk0gFebfgbsHokTW174IktQknSDDeQgc'
const supabaseURL = 'https://osskttmxyrmvshyognif.supabase.co'

const supabase = createClient(supabaseURL, supabaseKey)

export default function useSupabase (){
    return {
      supabase
    }
}