// Osu! User Interface
export interface OsuUser {
  id: number;
  username: string;
  avatar_url: string;
  banner_url?: string;
  country_code: string;
  preferred_genres?: string[];
  preferred_map_styles?: string[];
  notes?: string;
  is_admin: boolean;
}

// Osu! Map Interface
export interface OsuMap {
  id: number;
  title: string;
  artist: string;
  mapper_id: number;
  mapper_name: string;
  cover_url: string;
  length: number; // in seconds
  bpm: number;
  status: string;
  url: string;
}

// Modding Request Interface
export interface ModdingRequest {
  id: string;
  user_id: number;
  username: string;
  map: OsuMap;
  status: RequestStatus;
  notes?: string;
  modder_id?: number;
  modder_notes?: string[];
  created_at: string;
  updated_at: string;
}

// Request Status
export type RequestStatus = 
  | 'pending'
  | 'accepted'
  | 'rejected'
  | 'completed';

// Session User
export interface SessionUser {
  id: number;
  username: string;
  avatar_url: string;
  is_admin: boolean;
} 