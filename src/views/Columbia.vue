<template>
  <div>
    <!-- Charts -->
    <div class="container">
      <div class="columns">
        <Profile collegeref="columbia"/>
        <Industry collegeref="columbia"/>
      </div>
      <div class="columns">
        <IndustryPercent collegeref="columbia"/>
      </div>
    </div>
  </div>
</template>

<script>
import Profile from "../components/charts/Profile";
// import Employment from "../components/charts/Employment";
import Industry from "../components/charts/Industry";
import IndustryPercent from "../components/charts/IndustryPercent";

export default {
  components: {
  //  Employment,
    Industry,
    IndustryPercent,
    Profile
  }
};
</script>
