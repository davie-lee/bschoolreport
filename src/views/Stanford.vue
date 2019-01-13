<template>
  <div>
    <Selector/>
    <!-- Charts -->
    <div class="container">
      <div class="columns">
        <Profile collegeref="stanford"/>
        <Employment collegeref="stanford"/>
      </div>
      <div class="columns">
        <Industry collegeref="stanford"/>
        <IndustryPercent collegeref="stanford"/>
      </div>
    </div>
  </div>
</template>

<script>
// School Selector
import Selector from "@/components/Selector";
import Profile from "../components/charts/Profile";
import Employment from "../components/charts/Employment";
import Industry from "../components/charts/Industry";
import IndustryPercent from "../components/charts/IndustryPercent";

export default {
  components: {
    Selector,
    Employment,
    Industry,
    Profile,
    IndustryPercent
  }
};
</script>
