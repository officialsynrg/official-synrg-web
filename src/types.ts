export interface Member {
  id: string;
  name: string;
  role: string;
  bio: string;
  personality: string[];
  birthplace: string;
  birthdate: string;
  mbti: string;
  voiceType: string;
  quote: string;
  aesthetic: string; // Tailwind class or desc
  imageUrl: string;
}

export interface Song {
  id: string;
  title: string;
  type: 'Single' | 'EP' | 'Album' | 'Cover';
  releaseDate: string;
  description: string;
  coverUrl: string;
  audioUrl: string;
  lyrics: string;
  duration: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Competition' | 'Behind the Scenes' | 'Shoots';
  imageUrl: string;
  aspectRatio: 'aspect-square' | 'aspect-video' | 'aspect-[3/4]' | 'aspect-[4/3]';
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'Debut' | 'Event' | 'Achievement' | 'Announcement';
  summary: string;
  content: string;
  isImportant?: boolean;
}
