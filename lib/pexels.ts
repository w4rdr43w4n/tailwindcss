"use server";
import { creatomate, pexels } from "@/config/keys";
import axios from "axios";
import { createClient, PhotosWithTotalResults, Videos } from "pexels";

type Photo = {
  id: number;
  src: string;
  title: string | null;
};
type Video = {
  id: number;
  src: string;
  title: string | null;
};

type photoFetchResponse = {
  isFetched: Boolean;
  Photos?: Photo[];
  errorMsg?: string;
};
type videoFetchResponse = {
  isFetched: Boolean;
  Videos?: Video[];
  errorMsg?: string;
};

export const getPhotos = async (
  query: string,
  count?: number
): Promise<photoFetchResponse> => {
  const client = createClient(pexels.api_key);
  try {
    const resp = (await client.photos.search({
      query,
      per_page: count,
    })) as PhotosWithTotalResults;
    if (resp) {
      const photosList = resp.photos.map((photo) => ({
        id: photo.id,
        title: photo.alt,
        src: photo.src.original,
      }));
      return { isFetched: true, Photos: photosList };
    }
    return { isFetched: false, errorMsg: "Images Not Fetched" };
  } catch (err: any) {
    return { isFetched: false, errorMsg: err.message };
  }
};
export const getVideos = async (
  query: string,
  count?: number
): Promise<videoFetchResponse> => {
  const client = createClient(pexels.api_key);
  try {
    const resp = (await client.videos.search({
      query,
      per_page: count,
    })) as Videos;
    if (resp) {
      const VidList = resp.videos.map((vid) => ({
        id: vid.id,
        title: vid.user.name,
        src: vid.video_files[0].link,
      }));
      return { isFetched: true, Videos: VidList };
    }
    return { isFetched: false, errorMsg: "Videos Not Fetched" };
  } catch (err: any) {
    return { isFetched: false, errorMsg: err.message };
  }
};
