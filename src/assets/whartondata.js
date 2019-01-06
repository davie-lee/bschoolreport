// Wharton Class Profile Data
export const WhartonProfile = {
  chart: {
    type: "area"
  },
  title: {
    text: "Total Students Enrolled"
  },
  subtitle: {
    text: "Source: Wharton MBA Careers 2010-2018"
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
      data: [823, 862, 818, 800, 842, 837, 859, 861, 852, 862]
    }
  ]
};

// Wharton Employment Summary Data
export const WhartonEmployment = {
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
    text: "Source: Wharton MBA Careers 2018"
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
        ["Job Offers", 633],
        ["Company Sponsored", 84],
        ["Self Employed", 34],
        ["Postponed Job Search", 17],
        ["Personal Reasons", 5],
        ["No Response", 40]
      ]
    }
  ]
};

// Wharton Employment by Industry Total
export const WhartonIndustry = {
  chart: {
    type: "bar"
  },
  title: {
    text: "Median Salary by Industry"
  },
  subtitle: {
    text: "Source: Wharton MBA Careers 2018"
  },
  xAxis: {
    categories: [
      "Consulting",
      "Consumer Goods & Retail",
      "Financial Services",
      "Healthcare",
      "Manufacturing",
      "Media & Entertainment",
      "Professional Services",
      "Real Estate",
      "Social Impact",
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
        125000,
        127500,
        140000,
        180000,
        120000,
        96475,
        130000
      ]
    }
  ]
};

// Wharton Employment by Industry Percent
export const WhartonIndustryPercent = {
  chart: {
    type: "bar"
  },
  title: {
    text: "Percent Accepts by Industry"
  },
  subtitle: {
    text: "Source: Wharton MBA Careers 2018"
  },
  xAxis: {
    categories: [
      "Consulting",
      "Consumer Goods & Retail",
      "Energy",
      "Financial Services",
      "Healthcare",
      "Manufacturing",
      "Media & Entertainment",
      "Professional Services",
      "Real Estate",
      "Social Impact",
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
      data: [25.0, 6.2, 0.3, 36.9, 5.8, 2.0, 1.5, 2.0, 4.2, 1.2, 14.9]
    }
  ]
};
