<template>
  <div>
    <Selector/>
    <!-- Charts -->
    <div class="container">
      <div class="columns">
        <Profile collegeref="harvard"/>
        <InternationalStudents collegeref="harvard"/>
      </div>
      <div class="columns">
        <AvgWorkWE collegeref="harvard"/>
        <Employment collegeref="harvard"/>
      </div>
      <div class="columns">
        <Industry collegeref="harvard"/>
        <IndustryPercent collegeref="harvard"/>
      </div>
      <div class="columns">
        <Function collegeref="harvard"/>
        <FunctionPercent collegeref="harvard"/>
      </div>
      <div class="columns">
        <FinanceBreakdown collegeref="harvard"/>
        <JobLocation collegeref="harvard"/>
      </div>
    </div>
  </div>
</template>

<script>
// School Selector
import Selector from "@/components/Selector";

// Chart Components
import Profile from "../components/charts/Profile";
import InternationalStudents from "../components/charts/InternationalStudents";
import AvgWorkWE from "../components/charts/AvgWorkWE";
import Employment from "../components/charts/Employment";
import Industry from "../components/charts/Industry";
import IndustryPercent from "../components/charts/IndustryPercent";
import Function from "../components/charts/Function";
import FunctionPercent from "../components/charts/FunctionPercent";
import JobLocation from "../components/charts/JobLocation";
import FinanceBreakdown from "../components/charts/FinanceBreakdown";

export default {
  components: {
    Selector,
    Employment,
    Industry,
    Profile,
    InternationalStudents,
    AvgWorkWE,
    IndustryPercent,
    Function,
    FunctionPercent,
    FinanceBreakdown,
    JobLocation
  }
};
</script>
