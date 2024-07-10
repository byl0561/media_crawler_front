<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import MediaContainer from "@/components/MediaContainer.vue";
</script>

<template>
  <Header/>
  <MediaContainer/>
  <Footer/>
</template>

<style>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
font,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td {
  border: 0;
  font-family: inherit;
  font-size: 100%;
  font-style: inherit;
  font-weight: inherit;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
}
body,
button,
input,
select,
textarea {
  font-family: 'OpenSans', sans-serif;
  line-height: 1.5;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
nav,
section {
  display: block;
}

body {
  overflow-x: hidden;
}
body {
  font-size: 150px;
  font-size: 15rem;
  font-size: 15px;
  font-size: 1.5rem;
  color: #333;
}

.container {
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}

img {
  -ms-interpolation-mode: bicubic;
  border: 0;
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}

p {
  margin-bottom: 10px;
  font-family: 'Nunito', sans-serif;
  font-size: 14px;
  color: #abb7c4;
  font-weight: 300;
  text-transform: none;
  line-height: 24px !important;
}

ul {
  list-style: none;
  margin-left: 0;
}
</style>
