// Harvard Class Profile Data
export const HarvardProfile = {
  chart: {
    type: "area"
  },
  title: {
    text: "Total Students Enrolled"
  },
  subtitle: {
    text: "Source: Harvard MBA Data & Statistics"
  },
  xAxis: {
    categories: [
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019"
    ],
    tickmarkPlacement: "on",
    title: {
      enabled: true,
      text: "Students",
      align: "high"
    }
  },
  yAxis: {
    title: {
      enabled: false
    }
  },
  tooltip: {
    split: true
  },
  plotOptions: {
    area: {
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "9px"
        }
      }
    }
  },
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  series: [
    {
      name: "Total Enrolled",
      color: "#2e86de",
      data: [900, 937, 903, 905, 919, 932, 935, 937, 934, 928]
    }
  ]
};

// Harvard Employment Summary Data
export const HarvardEmployment = {
  chart: {
    type: "pie",
    options3d: {
      enabled: true,
      alpha: 45
    }
  },
  title: {
    text: "Employment Profile"
  },
  subtitle: {
    text: "Source: Harvard MBA Data & Statistics"
  },
  plotOptions: {
    pie: {
      innerSize: 100,
      depth: 45,
      dataLabels: {
        enabled: true,
        format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        style: {
          fontSize: "9px"
        }
      }
    }
  },
  credits: {
    enabled: false
  },
  series: [
    {
      name: "Percent",
      data: [
        ["Seeking Employment", 696],
        ["Company Sponsored", 111],
        ["Self Employed", 74],
        ["Postponing Job Search", 19],
        ["Other", 28]
      ]
    }
  ]
};

// Harvard Employment by Industry Total
export const HarvardIndustry = {
  chart: {
    type: "bar"
  },
  title: {
    text: "Median Salary by Industry"
  },
  subtitle: {
    text: "Source: Harvard MBA Data & Statistics"
  },
  xAxis: {
    categories: [
      "Consulting",
      "Consumer Products",
      "Media & Entertainment",
      "Financial Services",
      "Healthcare",
      "Manufacturing",
      "Nonprofit/Government",
      "Retail/Trading",
      "Services",
      "Technology"
    ],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: "Dollar ($)",
      align: "high"
    }
  },
  tooltip: {
    valuePrefix: "$"
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "9px"
        }
      }
    }
  },
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  series: [
    {
      name: "2018",
      color: "#01a3a4",
      data: [
        150000,
        115000,
        130000,
        150000,
        125000,
        130000,
        95000,
        132500,
        120000,
        130000
      ]
    }
  ]
};

// Harvard Employment by Industry Percent
export const HarvardIndustryPercent = {
  chart: {
    type: "bar"
  },
  title: {
    text: "Percent Accepts by Industry"
  },
  subtitle: {
    text: "Source: Harvard MBA Data & Statistics"
  },
  xAxis: {
    categories: [
      "Consulting",
      "Consumer Products",
      "Media & Entertainment",
      "Financial Services",
      "Healthcare",
      "Manufacturing",
      "Nonprofit/Government",
      "Retail/Trading",
      "Services",
      "Technology"
    ],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: "Percent (%)",
      align: "high"
    }
  },
  tooltip: {
    valueSuffix: "%"
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "9px"
        }
      }
    }
  },
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  series: [
    {
      name: "2018",
      color: "#ee5253",
      data: [25, 3, 4, 29, 6, 5, 2, 3, 3, 19]
    }
  ]
};
