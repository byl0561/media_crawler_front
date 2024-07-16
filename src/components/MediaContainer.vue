<script setup lang="ts">
import MediaItemsGroup from "@/components/MediaItemsGroup.vue";
import useMovie from "@/hooks/useMovie";

const {movies} = useMovie()
</script>

<template>
  <div class="movie-items">
    <div class="container">
      <div class="row ipad-width">
        <div class="col-md">
          <MediaItemsGroup :mediaGroup="movies" />
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