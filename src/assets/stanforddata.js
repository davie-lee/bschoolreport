// Stanford Class Profile Data
export const StanfordProfile = {
  chart: {
    type: "area"
  },
  title: {
    text: "Total Students Enrolled"
  },
  subtitle: {
    text: "Source: Stanford MBA Employment Report"
  },
  xAxis: {
    categories: [
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
      data: [385, 389, 397, 398, 406, 410, 407, 417]
    }
  ]
};

// Stanford Employment Summary Data
export const StanfordEmployment = {
  chart: {
    type: "pie",
    options3d: {
      enabled: true,
      alpha: 45
    }
  },
  title: {
    text: "Employment Summary"
  },
  subtitle: {
    text: "Source: Stanford MBA Employment Report"
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
      name: "Total",
      data: [
        ["Seeking Employment", 294],
        ["Company Sponsored", 28],
        ["Continuing Education", 18],
        ["Self Employed", 68],
        ["Postponed Job Search", 3],
        ["Personal Reasons", 4],
        ["No Response", 8]
      ]
    }
  ]
};

// Stanford Employment by Industry Total
export const StanfordIndustry = {
  chart: {
    type: "bar"
  },
  title: {
    text: "Median Salary by Industry"
  },
  subtitle: {
    text: "Source: Stanford MBA Employment Report"
  },
  xAxis: {
    categories: [
      "Consulting",
      "Consumer Packaged Goods",
      "Energy/Cleantech",
      "Finance",
      "Healthcare",
      "Media & Entertainment",
      "Nonprofit",
      "Real Estate",
      "Technology",
      "Other"
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
        151400,
        135000,
        125000,
        157500,
        130000,
        137500,
        106000,
        115000,
        135000,
        142000
      ]
    }
  ]
};

// Stanford Employment by Industry Percent
export const StanfordIndustryPercent = {
  chart: {
    type: "bar"
  },
  title: {
    text: "Percent Accepts by Industry"
  },
  subtitle: {
    text: "Source: Stanford MBA Employment Report"
  },
  xAxis: {
    categories: [
      "Consulting",
      "Consumer Packaged Goods",
      "Energy/Cleantech",
      "Finance",
      "Healthcare",
      "Media & Entertainment",
      "Nonprofit",
      "Real Estate",
      "Technology",
      "Other"
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
      data: [18, 2, 1, 31, 5, 3, 4, 1, 33, 3]
    }
  ]
};
