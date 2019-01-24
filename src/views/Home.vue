<template>
  <div>
    <vue-headful
      title="MBA Employment Reports - Home"
      description="Free resource for prospective MBA students"
    />
    <Selector/>
    <!-- Charts -->
    <div class="container">
      <h1 class="title is-4">MBA Hiring Trends & Projections</h1>
      <p class="subtitle is-7">
        For explanation of these charts, please refer to
        <a
          href="https://www.gmac.com/market-intelligence-and-research/market-research/corporate-recruiters-survey"
          target="new"
        >GMAC Corporate Recruiters Survey Report</a>.
      </p>
      <div class="columns">
        <HiringConsulting collegeref="hiring_industry"/>
        <HiringFinance collegeref="hiring_industry"/>
      </div>
      <div class="columns">
        <HiringTech collegeref="hiring_industry"/>
        <HiringNonprofit collegeref="hiring_industry"/>
      </div>
    </div>
  </div>
</template>

<script>
// School Selector
import Selector from "@/components/Selector";

// Chart Components
import HiringConsulting from "../components/charts/HiringConsulting";
import HiringFinance from "../components/charts/HiringFinance";
import HiringNonprofit from "../components/charts/HiringNonprofit";
import HiringTech from "../components/charts/HiringTech";

export default {
  components: {
    Selector,
    HiringConsulting,
    HiringFinance,
    HiringNonprofit,
    HiringTech
  }
};
</script>
