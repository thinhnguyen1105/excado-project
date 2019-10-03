export interface DownloadPayload {
  fileUrls: ItemDetails[];
}

interface ItemDetails {
  path: string;
  name: string;
}
