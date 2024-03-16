import { supabase } from '@/lib/supabase/initSupabase';

export async function checkAdmin() {
  try {
    const currentUser = await supabase.auth.getUser();

    if (currentUser.data.user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL) return true;
    else return false;
  } catch (error) {
    return false;
  }
}
