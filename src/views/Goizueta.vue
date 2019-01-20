<template>
  <div>
    <Selector/>
    <!-- Charts -->
    <div class="container">
      <div class="columns">
        <Profile collegeref="goizueta"/>
        <InternationalStudents collegeref="goizueta"/>
      </div>
      <div class="columns">
        <Women collegeref="goizueta"/>
        <Countries collegeref="goizueta"/>
      </div>
      <div class="columns">
        <AverageAge collegeref="goizueta"/>
        <AverageGMAT collegeref="goizueta"/>
      </div>
      <div class="columns">
        <AvgWorkWE collegeref="goizueta"/>
        <AverageGPA collegeref="goizueta"/>
      </div>
      <div class="columns">
        <Employment collegeref="goizueta"/>
        <FinanceBreakdown collegeref="goizueta"/>
      </div>
      <div class="columns">
        <Industry collegeref="goizueta"/>
        <IndustryPercent collegeref="goizueta"/>
      </div>
      <div class="columns">
        <Function collegeref="goizueta"/>
        <FunctionPercent collegeref="goizueta"/>
      </div>
      <div class="columns">
        <JobLocation collegeref="goizueta"/>
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
import AverageGPA from "../components/charts/AverageGPA";
import AverageAge from "../components/charts/AverageAge";
import AverageGMAT from "../components/charts/AverageGMAT";
import Countries from "../components/charts/Countries";
import Women from "../components/charts/Women";

export default {
  components: {
    Selector,
    Profile,
    InternationalStudents,
    AverageAge,
    AverageGMAT,
    AvgWorkWE,
    Employment,
    Industry,
    IndustryPercent,
    Function,
    FunctionPercent,
    FinanceBreakdown,
    JobLocation,
    AverageGPA,
    Countries,
    Women
  }
};
</script>
