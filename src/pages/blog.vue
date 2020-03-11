<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/lynx.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container brand">
          <img class="n-logo" src="img/logo.png" alt="logo"/> Blog DEMO
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Let's talk about lynxes</h2>
            <h5 class="description overlap">
              Lynx have a short tail, characteristic tufts of black hair on the tips of their ears, large,
              padded paws for walking on snow and long whiskers on the face. Under their neck they have a ruff
              which has black bars resembling a bow tie, although this is often not visible.
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                style="background-image: url('img/lynxes.jfif')"
              >
                <!-- First image on the left side -->
                <p class="blockquote blockquote-primary">
                  The four living species of the genus Lynx are believed to have evolved from the "Issoire lynx",
                   which lived in Europe and Africa during the late Pliocene to early Pleistocene. The Pliocene felid
                    Felis rexroadensis from North America has been proposed as an even earlier ancestor; however, this
                     was larger than any living species, and is not currently classified as a true lynx.
                  <br />
                  <br />
                  <small class="overlap">-NOAA</small>
                </p>
              </div>
              <!-- Second image on the left side of the article -->
              <div
                class="image-container"
                style="background-image: url('img/lynx_2.jpg')"
              ></div>
            </div>
            <div class="col-md-5">
              <!-- First image on the right side, above the article -->
              <div
                class="image-container image-right"
                style="background-image: url('img/lynx_1.jfif')"
              ></div>
              <h3>
                Behavior and diet
              </h3>
              <p>
                The lynx is usually solitary, although a small group of lynx may travel and hunt together occasionally.
                 Mating takes place in the late winter and once a year the female gives birth to between one and four kittens.
                  
              </p>
              <p>
                The gestation time of the lynx is about 70 days. The young stay with the mother for one more winter, a total of around nine months,
                   before moving out to live on their own as young adults. The lynx creates its den in crevices or under ledges. It feeds on a wide range
                    of animals from white-tailed deer, reindeer, roe deer, small red deer, and chamois, to smaller, more usual prey: snowshoe hares, fish,
                     foxes, sheep, squirrels, mice, turkeys and other birds, and goats. It also eats ptarmigans, voles, and grouse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-team text-center">
      <div class="container">
        <h2 class="title">Contact team</h2>
        <div class="team">
          <div class="row">
            <div class="col-md-4">
              <div class="team-player">
                <img
                  src="img/diego.jpg"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Diego Ferrand</h4>
                <p class="category text-primary">Backend - Data</p>
                <p class="description overlap">
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#">links</a> for people to be able to follow
                  them outside the site.
                </p>
                <a href="https://twitter.com/diferrand" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-twitter"></i
                ></a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="team-player">
                <img
                  src="img/designer.jpg"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Agustin Morelle</h4>
                <p class="category text-primary">Designer</p>
                <p class="description">
                  Full-Stack Developer
                </p>
                <a href="https://www.facebook.com/agustinmorelle01" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-facebook-square"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-twitter"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
export default {
  name: 'demo',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
    };
  }
};
</script>
<style>

</style>
