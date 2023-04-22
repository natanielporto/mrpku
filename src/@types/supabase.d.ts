export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      MRPKU_recipe: {
        Row: {
          created_at: string | null
          id: string
          image: string | null
          name: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          image?: string | null
          name: string
        }
        Update: {
          created_at?: string | null
          id?: string
          image?: string | null
          name?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
