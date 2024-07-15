export interface MediaItem {
    title: string;
    subtitle: string;
    img: string;
    score: number;
}

export interface MediaItemGroup {
    name: string;
    mediaItems: MediaItem[];
}

export interface MediaGroup {
    name: string;
    mediaItemGroups: MediaItemGroup[];
}