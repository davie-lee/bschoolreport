// Columbia Class Profile Data
export const ColumbiaProfile = {
  chart: {
    type: "area"
  },
  title: {
    text: "Total Students Enrolled"
  },
  subtitle: {
    text: "Source: Columbia Employment Report"
  },
  xAxis: {
    categories: [
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
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
      data: [723, 745, 750, 744, 745, 748, 777, 727]
    }
  ]
};

// Columbia Employment Summary Data
export const ColumbiaEmployment = {
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
    text: "Source: Columbia Employment Report"
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

// Columbia Employment by Industry Total
export const ColumbiaIndustry = {
  chart: {
    type: "bar"
  },
  title: {
    text: "Median Salary by Industry"
  },
  subtitle: {
    text: "Source: Columbia Employment Report"
  },
  xAxis: {
    categories: [
      "Consulting",
      "Financial Services",
      "Manufacturing",
      "Media/Technology",
      "Government / Nonprofit",
      "Healthcare",
      "Real Estate",
      "Retail",
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
        147000,
        125000,
        120000,
        120000,
        65000,
        122500,
        120000,
        105000,
        105000
      ]
    }
  ]
};

// Columbia Employment by Industry Percent
export const ColumbiaIndustryPercent = {
  chart: {
    type: "bar"
  },
  title: {
    text: "Percent Accepts by Industry"
  },
  subtitle: {
    text: "Source: Columbia Employment Report"
  },
  xAxis: {
    categories: [
      "Consulting",
      "Financial Services",
      "Manufacturing",
      "Media/Technology",
      "Government / Nonprofit",
      "Healthcare",
      "Real Estate",
      "Retail",
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
      data: [33.6, 32.2, 6.8, 15.7, 1.6, 1.8, 4.0, 1.8, 2.5]
    }
  ]
};
