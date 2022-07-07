export interface ILink {
  to: string;
  text: string;
  external?: boolean;
}

export interface IAlbum {
  id: string;
  title: string;
  thumbnail?: string;
}

export interface IImage {
  id: string;
  path: string;
}
