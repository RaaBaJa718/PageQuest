export interface GoogleAPIVolumeInfo {
  title: string;
  authors?: string[];
  description?: string;
  imageLinks?: {
    thumbnail?: string;
  };
  infoLink?: string; // <-- Add this line
}

// If you have a GoogleAPIBook interface, it might look like:
export interface GoogleAPIBook {
  id: string;
  volumeInfo: GoogleAPIVolumeInfo;
}
