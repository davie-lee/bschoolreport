<template>
  <div>
    <vue-headful
      title="MBA Employment Reports - University of Michigan, Ross School of Business"
      description="Free resource for prospective MBA students"
    />
    <Selector/>
    <!-- Charts -->
    <div class="container">
      <h1 class="title is-4">University of Michigan, Ross School of Business</h1>
      <div class="columns">
        <Industry collegeref="ross"/>
        <IndustryPercent collegeref="ross"/>
      </div>
      <div class="columns">
        <Function collegeref="ross"/>
        <FunctionPercent collegeref="ross"/>
      </div>
      <div class="columns">
        <FinanceBreakdown collegeref="ross"/>
        <JobLocation collegeref="ross"/>
      </div>
      <div class="columns">
        <Employment collegeref="ross"/>
        <MajorEmployer collegeref="ross"/>
      </div>
      <div class="columns">
        <Profile collegeref="ross"/>
        <Women collegeref="ross"/>
      </div>
      <div class="columns">
        <AverageAge collegeref="ross"/>
        <AverageGMAT collegeref="ross"/>
      </div>
      <div class="columns">
        <AvgWorkWE collegeref="ross"/>
        <AverageGPA collegeref="ross"/>
      </div>
      <div class="columns">
        <InternationalStudents collegeref="ross"/>
        <Countries collegeref="ross"/>
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
