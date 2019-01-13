<template>
  <div>
    <Selector/>
    <!-- Charts -->
    <div class="container">
      <div class="columns">
        <Profile collegeref="yale"/>
        <Employment collegeref="yale"/>
      </div>
      <div class="columns">
        <Industry collegeref="yale"/>
        <IndustryPercent collegeref="yale"/>
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
