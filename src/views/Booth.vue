<template>
  <div>
    <!-- Charts -->
    <div class="container">
      <div class="columns">
        <Profile collegeref="booth"/>
        <Employment collegeref="booth" />
      </div>
      <div class="columns">
        <Industry collegeref="booth"/>
        <IndustryPercent collegeref="booth"/>
      </div>
    </div>

  </div>
</template>

<script>
import Profile from "../components/charts/Profile";
import Employment from "../components/charts/Employment";
import Industry from "../components/charts/Industry";
import IndustryPercent from "../components/charts/IndustryPercent";

export default {
  components: {
    Employment,
    Industry,
    Profile,
    IndustryPercent
  }
};
</script>
