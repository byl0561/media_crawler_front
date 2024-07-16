import {reactive} from "vue";
import type {MediaGroup} from "@/types";

export default function () {
    let movies = reactive<MediaGroup>(
        {
            name: "电影",
            mediaItemGroups: [
                {
                    name: "最新",
                    mediaItems: [
                        {
                            title: "test1",
                            subtitle: "sub",
                            img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tE10WMV3SK2kq79aLHztJhz0EM5.jpg",
                            score: 7.9,
                        },
                        {
                            title: "test1",
                            subtitle: "sub",
                            img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tE10WMV3SK2kq79aLHztJhz0EM5.jpg",
                            score: 7.9,
                        },
                        {
                            title: "test1",
                            subtitle: "sub",
                            img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tE10WMV3SK2kq79aLHztJhz0EM5.jpg",
                            score: 7.9,
                        },
                        {
                            title: "test1",
                            subtitle: "sub",
                            img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tE10WMV3SK2kq79aLHztJhz0EM5.jpg",
                            score: 7.9,
                        },
                        {
                            title: "test1",
                            subtitle: "sub",
                            img: "",
                            score: 7.9,
                        },
                        {
                            title: "test1",
                            subtitle: "sub",
                            img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tE10WMV3SK2kq79aLHztJhz0EM5.jpg",
                            score: 7.9,
                        }
                    ]
                },
                {
                    name: "合集",
                    mediaItems: [
                        {
                            title: "test1",
                            subtitle: "sub",
                            img: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tE10WMV3SK2kq79aLHztJhz0EM5.jpg",
                            score: 7.9,
                        }
                    ]
                }
            ]
        }
    )
    return {movies}
}

