<template>
  <div>
    <vue-headful
      title="MBA Employment Reports - The Ohio State University, Fisher College of Business"
      description="Free resource for prospective MBA students"
    />
    <Selector/>
    <!-- Charts -->
    <div class="container">
      <h1 class="title is-4">The Ohio State University, Fisher College of Business</h1>
      <div class="columns">
        <Industry collegeref="fisher"/>
        <IndustryPercent collegeref="fisher"/>
      </div>
      <div class="columns">
        <Function collegeref="fisher"/>
        <FunctionPercent collegeref="fisher"/>
      </div>
      <div class="columns">
        <FinanceBreakdown collegeref="fisher"/>
        <JobLocation collegeref="fisher"/>
      </div>
      <div class="columns">
        <Employment collegeref="fisher"/>
        <MajorEmployer collegeref="fisher"/>
      </div>
      <div class="columns">
        <Profile collegeref="fisher"/>
        <Women collegeref="fisher"/>
      </div>
      <div class="columns">
        <AverageAge collegeref="fisher"/>
        <AverageGMAT collegeref="fisher"/>
      </div>
      <div class="columns">
        <AvgWorkWE collegeref="fisher"/>
        <AverageGPA collegeref="fisher"/>
      </div>
      <div class="columns">
        <InternationalStudents collegeref="fisher"/>
        <Countries collegeref="fisher"/>
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
