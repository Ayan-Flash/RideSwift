// Setup Admin Account Script
// Run this once to create the admin account in Supabase

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rcrqobztwmelhsugpygq.supabase.co'
const supabaseServiceKey = 'YOUR_SERVICE_ROLE_KEY_HERE' // You need to get this from Supabase dashboard

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

async function createAdminAccount() {
  try {
    const { data, error } = await supabase.auth.admin.createUser({
      email: 'admin@example.com',
      password: 'Admin@2005',
      email_confirm: true,
      user_metadata: {
        full_name: 'System Administrator',
        role: 'admin'
      }
    })

    if (error) {
      console.error('Error creating admin account:', error)
    } else {
      console.log('Admin account created successfully:', data)
    }
  } catch (error) {
    console.error('Unexpected error:', error)
  }
}

// Uncomment the line below and run: node setup-admin.js
// createAdminAccount()

console.log(`
🔧 Admin Account Setup Instructions:

1. Go to your Supabase dashboard: https://supabase.com/dashboard
2. Select your project: rcrqobztwmelhsugpygq
3. Go to Settings > API
4. Copy the "service_role" key (not the anon key)
5. Replace YOUR_SERVICE_ROLE_KEY_HERE in this file with that key
6. Uncomment the last line: createAdminAccount()
7. Run: node setup-admin.js

OR manually create the admin account:
📧 Email: admin@example.com
🔑 Password: Admin@2005

The login page will automatically detect these credentials and log the user in as admin!
`)