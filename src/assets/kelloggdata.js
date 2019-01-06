// Kellogg Class Profile Data
export const KelloggProfile = {
  chart: {
    type: "area"
  },
  title: {
    text: "Total Students Enrolled"
  },
  subtitle: {
    text: "Source: Kellogg Employment Report"
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
      data: [475, 498, 506, 479, 474, 466, 464, 488, 479]
    }
  ]
};

// Kellogg Employment Summary Data
export const KelloggEmployment = {
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
    text: "Source: Kellogg Employment Report"
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
        ["Seeking Employment", 558],
        ["Company Sponsored", 94],
        ["Continuing Education", 4],
        ["Postponed Job Search", 1],
        ["Self Employed", 13],
        ["Other", 2],
        ["No Response", 2]
      ]
    }
  ]
};

// Kellogg Employment by Industry Total
export const KelloggIndustry = {
  chart: {
    type: "bar"
  },
  title: {
    text: "Median Salary by Industry"
  },
  subtitle: {
    text: "Source: Kellogg Employment Report"
  },
  xAxis: {
    categories: [
      "Consulting",
      "Consumer Packaged Goods",
      "Financial Services",
      "Healthcare",
      "Manufacturing",
      "Media & Entertainment",
      "Other",
      "Real Estate",
      "Retail",
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
        147000,
        107000,
        125000,
        120000,
        120000,
        125000,
        122500,
        117500,
        108000,
        130000
      ]
    }
  ]
};

// Kellogg Employment by Industry Percent
export const KelloggIndustryPercent = {
  chart: {
    type: "bar"
  },
  title: {
    text: "Percent Accepts by Industry"
  },
  subtitle: {
    text: "Source: Kellogg Employment Report"
  },
  xAxis: {
    categories: [
      "Consulting",
      "Consumer Packaged Goods",
      "Financial Services",
      "Healthcare",
      "Manufacturing",
      "Media & Entertainment",
      "Other",
      "Real Estate",
      "Retail",
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
      data: [30.1, 7.0, 13.7, 7.4, 4.4, 1.1, 0.8, 2.7, 2.5, 28.3]
    }
  ]
};
