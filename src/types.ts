export interface CityInfo {
  id: string;
  name: string;
  state: string;
  latitude: number; // For plotting relative coordinates
  longitude: number; // For plotting relative coordinates
  xPercent: number; // Relative X coordinate (0-100) on our SVG/Map container
  yPercent: number; // Relative Y coordinate (0-100) on our SVG/Map container
  industries: string[];
  immersions: string[];
  description: string;
}

export interface Session {
  time: string;
  name: string;
  theme?: string;
  host?: string;
}

export interface OrientationDay {
  dayNumber: number;
  date: string;
  dayName: string;
  venue?: string;
  sessions: Session[];
}

export interface ImmersionTeaser {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  type: string;
  description: string;
  link: string;
  buttonText: string;
}
