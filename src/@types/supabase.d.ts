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
      MRPKU_config: {
        Row: {
          release_notes: string | null
          updated_at: string
          version: string
        }
        Insert: {
          release_notes?: string | null
          updated_at?: string
          version: string
        }
        Update: {
          release_notes?: string | null
          updated_at?: string
          version?: string
        }
      }
      MRPKU_recipe: {
        Row: {
          category: string
          created_at: string | null
          extra: Json | null
          id: string
          image: string | null
          ingredients: string[] | null
          name: string
          preparation: string
          updated_at: string
        }
        Insert: {
          category: string
          created_at?: string | null
          extra?: Json | null
          id?: string
          image?: string | null
          ingredients?: string[] | null
          name: string
          preparation: string
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string | null
          extra?: Json | null
          id?: string
          image?: string | null
          ingredients?: string[] | null
          name?: string
          preparation?: string
          updated_at?: string
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
