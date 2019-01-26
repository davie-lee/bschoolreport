<template>
  <div>
    <vue-headful
      title="MBA Employment Reports - Home"
      description="Free resource for prospective MBA students"
    />
    <Selector/>
    <!-- Charts -->
    <div class="container">
      <h1 class="title is-4">MBA Job Placement Trends</h1>
      <div class="columns">
        <HiringConsulting collegeref="hiring_industry"/>
        <HiringTech collegeref="hiring_industry"/>
      </div>
      <div class="columns">
        <HiringIB collegeref="hiring_finance"/>
        <HiringPEVC collegeref="hiring_industry"/>
      </div>
    </div>
  </div>
</template>

<script>
// School Selector
import Selector from "@/components/Selector";

// Chart Components
import HiringConsulting from "../components/charts/HiringConsulting";
import HiringIB from "../components/charts/HiringIB";
import HiringPEVC from "../components/charts/HiringPEVC";
import HiringTech from "../components/charts/HiringTech";

export default {
  components: {
    Selector,
    HiringConsulting,
    HiringIB,
    HiringPEVC,
    HiringTech
  }
};
</script>
