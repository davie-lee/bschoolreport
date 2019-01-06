// Sloan Class Profile Data
export const SloanProfile = {
  chart: {
    type: "area"
  },
  title: {
    text: "Total Students Enrolled"
  },
  subtitle: {
    text: "Source: MIT Sloan Employment Report"
  },
  xAxis: {
    categories: [
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
      data: [402, 404, 413, 406, 406, 400, 409]
    }
  ]
};

// Sloan Employment Summary Data
export const SloanEmployment = {
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
    text: "Source: MIT Sloan Employment Report"
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
        ["Seeking Employment", 307],
        ["Company Sponsored", 44],
        ["Self Employed", 39],
        ["Postponed Job Search", 2],
        ["Continuing Education", 7],
        ["No Response", 3]
      ]
    }
  ]
};

// Sloan Employment by Industry Total
export const SloanIndustry = {
  chart: {
    type: "bar"
  },
  title: {
    text: "Median Salary by Industry"
  },
  subtitle: {
    text: "Source: MIT Sloan Employment Report"
  },
  xAxis: {
    categories: [
      "Consulting",
      "Software/Internet",
      "Investment Management",
      "Private Equity/Venture Capital",
      "Investment Banking",
      "Retail",
      "Diversified Financial Services",
      "Media & Entertainment",
      "Automotive/Aerospace",
      "Oil/Energy",
      "Consumer Products",
      "Manufacturing",
      "Healthcare",
      "Electronic Manufacturing",
      "Nonprofit",
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
        130000,
        132500,
        125000,
        125000,
        120000,
        115000,
        125000,
        135000,
        120000,
        122000,
        122500,
        130000,
        140000,
        90000,
        155000
      ]
    }
  ]
};

// Sloan Employment by Industry Percent
export const SloanIndustryPercent = {
  chart: {
    type: "bar"
  },
  title: {
    text: "Percent Accepts by Industry"
  },
  subtitle: {
    text: "Source: MIT Sloan Employment Report"
  },
  xAxis: {
    categories: [
      "Consulting",
      "Software/Internet",
      "Investment Management",
      "Private Equity/Venture Capital",
      "Investment Banking",
      "Retail",
      "Diversified Financial Services",
      "Media & Entertainment",
      "Automotive/Aerospace",
      "Oil/Energy",
      "Consumer Products",
      "Manufacturing",
      "Healthcare",
      "Electronic Manufacturing",
      "Nonprofit",
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
      data: [
        31.6,
        26.7,
        6.9,
        3.8,
        3.8,
        2.8,
        1.7,
        1.4,
        5.6,
        4.2,
        3.1,
        2.8,
        1.7,
        1.4,
        1.4,
        1.1
      ]
    }
  ]
};
