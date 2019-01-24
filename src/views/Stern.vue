<template>
  <div>
    <vue-headful
      title="MBA Employment Reports - NYU Stern School of Business"
      description="Free resource for prospective MBA students"
    />
    <Selector/>
    <!-- Charts -->
    <div class="container">
      <h1 class="title is-4">NYU Stern School of Business</h1>
      <div class="columns">
        <Industry collegeref="stern"/>
        <IndustryPercent collegeref="stern"/>
      </div>
      <div class="columns">
        <Function collegeref="stern"/>
        <FunctionPercent collegeref="stern"/>
      </div>
      <div class="columns">
        <FinanceBreakdown collegeref="stern"/>
        <JobLocation collegeref="stern"/>
      </div>
      <div class="columns">
        <Employment collegeref="stern"/>
        <MajorEmployer collegeref="stern"/>
      </div>
      <div class="columns">
        <Profile collegeref="stern"/>
        <Women collegeref="stern"/>
      </div>
      <div class="columns">
        <AverageAge collegeref="stern"/>
        <AverageGMAT collegeref="stern"/>
      </div>
      <div class="columns">
        <AvgWorkWE collegeref="stern"/>
        <AverageGPA collegeref="stern"/>
      </div>
      <div class="columns">
        <InternationalStudents collegeref="stern"/>
        <Countries collegeref="stern"/>
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
import MajorEmployer from "../components/charts/MajorEmployers";

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
    Women,
    MajorEmployer
  }
};
</script>
