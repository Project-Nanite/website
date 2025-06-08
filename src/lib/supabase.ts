import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our waitlist data
export interface WaitlistEntry {
  id?: string
  email: string
  name?: string
  company?: string
  use_case?: string
  experience_level?: string
  created_at?: string
  updated_at?: string
}

// Function to add someone to the waitlist
export async function addToWaitlist(data: Omit<WaitlistEntry, 'id' | 'created_at' | 'updated_at'>) {
  const { data: result, error } = await supabase
    .from('waitlist')
    .insert([data])
    .select()

  if (error) {
    throw error
  }

  return result
}

// Function to check if email already exists (optional)
export async function checkEmailExists(email: string) {
  const { data, error } = await supabase
    .from('waitlist')
    .select('email')
    .eq('email', email)
    .single()

  if (error && error.code !== 'PGRST116') { // PGRST116 = no rows returned
    throw error
  }

  return !!data
}
