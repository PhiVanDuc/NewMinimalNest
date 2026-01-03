import publicFetch from "@/libs/fetch/public-fetch";

export const publicGetColors = async () => {
    return publicFetch.get<Colors>("/colors?page=1&limit=100");
}