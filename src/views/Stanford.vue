<template>
  <div>
    <Selector/>
    <!-- Charts -->
    <div class="container">
      <div class="columns">
        <Profile collegeref="stanford"/>
        <InternationalStudents collegeref="stanford"/>
      </div>
      <div class="columns">
        <AvgWorkWE collegeref="stanford"/>
        <AverageGMAT collegeref="stanford"/>
      </div>
      <div class="columns">
        <Employment collegeref="stanford"/>
        <FinanceBreakdown collegeref="stanford"/>
      </div>
      <div class="columns">
        <Industry collegeref="stanford"/>
        <IndustryPercent collegeref="stanford"/>
      </div>
      <div class="columns">
        <Function collegeref="stanford"/>
        <FunctionPercent collegeref="stanford"/>
      </div>
      <div class="columns">
        <JobLocation collegeref="stanford"/>
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
import AverageGMAT from "../components/charts/AverageGMAT";

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
    JobLocation,
    AverageGMAT
  }
};
</script>
