import type {MediaGroup, MediaItem, MediaItemGroupData} from "@/types";
import {diffAnime} from "@/http/api";

export default function () {
    function animeHttpToMedia(anime: any): MediaItem {
        return {
            title: anime.title,
            img: anime.poster,
            score: anime.score,
        }
    }

    async function getLostAnime(): Promise<MediaItemGroupData> {
        const group: MediaItemGroupData = {
            valid: true,
            mediaItems: [],
        }
        const httpRes = await diffAnime()
        if (!httpRes.success) {
            group.valid = false
            return group
        }

        if (httpRes.data == null) {
            return group
        }

        for (let item of httpRes.data.missing_animates) {
            group.mediaItems.push(animeHttpToMedia(item))
        }

        return group
    }

    async function getOutdatedAnime(): Promise<MediaItemGroupData> {
        const group: MediaItemGroupData = {
            valid: true,
            mediaItems: [],
        }
        const httpRes = await diffAnime()
        if (!httpRes.success) {
            group.valid = false
            return group
        }

        if (httpRes.data == null) {
            return group
        }

        for (let item of httpRes.data.extra_animates) {
            group.mediaItems.push(animeHttpToMedia(item))
        }

        return group
    }

    const anime: MediaGroup = {
        name: "动漫",
        mediaItemFunctionGroups: [
            {
                name: "最新",
                acquireData: getLostAnime,
            },
            // {
            //     name: "续集",
            //     acquireData: null,
            // },
            {
                name: "过时",
                acquireData: getOutdatedAnime,
            }
        ]
    }

    return {anime}
}