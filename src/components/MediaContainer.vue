<script setup lang="ts">
import type {MediaGroup} from "@/types";
import {reactive} from "vue";
import MediaItemsGroup from "@/components/MediaItemsGroup.vue";

let medias = reactive<MediaGroup[]>(
    [
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
        }
      ]
    }
   ]
)
</script>

<template>
  <div class="movie-items">
    <div class="container">
      <div class="row ipad-width">
        <div class="col-md">
          <MediaItemsGroup :mediaGroup="medias[0]" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.movie-items {
  padding: 180px 0 70px 0;
  background-color: #020d18;
}

.row {
  margin-left: -15px;
  margin-right: -15px;
}

@media (max-width: 991px) {
  .ipad-width {
    max-width: 550px;
    margin: 0 auto;
  }
}

.col-md {
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
}
@media (min-width: 992px) {
  .col-md {
    float: left;
    width: 100%;
  }
}
</style>