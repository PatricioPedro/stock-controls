
import useSupabase from 'boot/supabase'

import { ref } from 'vue'

const user = ref(null)

export default function useAuthUser() {

    const { supabase } = useSupabase()

    const login = async ({ email, password }) => {
        const { user, error } = await supabase.auth.signIn({ email, password })
        if (error) throw error
        return user
    }

    const loginWithProvider = async (provider) => {

        const { user, error } = await supabase.auth.signIn({ provider })
        if (error) throw error
        return user

    }
    const register = async ({ email, password, ...meta }) => {
        const { user, error } = await supabase.auth.signUp({ email, password }, {
            data: meta,
            redirectTo: `${window.location.origin}/home`
        })

        if (error) throw error
        return user
    }

    const isLoggedIn = () => {
        return !!user.value
    }

    const logout = async () => {

        const { error } = await supabase.auth.signOut()

        if (error) throw error
    }

    const sendPasswordRestEmail = async (email) => {

        const { user, error } = await supabase.auth.api.resetPasswordForEmail(email)

        if (error) throw error
        return user
    }

    const update = async (data) => {
        const { user, error } = await supabase.auth.update(data)
        if (error) throw error
        return user
    }

    return {
        user,
        login,
        logout,
        isLoggedIn,
        update,
        register,
        sendPasswordRestEmail,
        loginWithProvider
    }
}