// Booth Class Profile Data
export const BoothProfile = {
  chart: {
    type: "area"
  },
  title: {
    text: "Total Students Enrolled"
  },
  subtitle: {
    text: "Source: Booth Employment Statistics"
  },
  xAxis: {
    categories: ["2013", "2014", "2015", "2016", "2017", "2018", "2019"],
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
      data: [579, 572, 580, 583, 586, 580]
    }
  ]
};

// Booth Employment Summary Data
export const BoothEmployment = {
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
    text: "Source: Booth Employment Statistics"
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
        ["Seeking Employment", 490],
        ["Company Sponsored", 50],
        ["Self Employed", 19],
        ["Postponed Job Search", 1],
        ["Continuing Education", 3],
        ["Other", 1],
        ["No Response", 40]
      ]
    }
  ]
};

// Booth Employment by Industry Total
export const BoothIndustry = {
  chart: {
    type: "bar"
  },
  title: {
    text: "Median Salary by Industry"
  },
  subtitle: {
    text: "Source: Booth Employment Statistics"
  },
  xAxis: {
    categories: [
      "Consulting",
      "Consumer Goods & Retail",
      "Energy",
      "Financial Services",
      "Healthcare",
      "Media & Entertainment",
      "Real Estate",
      "Retail",
      "Technology",
      "Transportation"
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
        120000,
        125000,
        125000,
        125000,
        96000,
        130000,
        115000
      ]
    }
  ]
};

// Booth Employment by Industry Percent
export const BoothIndustryPercent = {
  chart: {
    type: "bar"
  },
  title: {
    text: "Percent Accepts by Industry"
  },
  subtitle: {
    text: "Source: Booth Employment Statistics"
  },
  xAxis: {
    categories: [
      "Consulting",
      "Consumer Goods & Retail",
      "Energy",
      "Financial Services",
      "Healthcare",
      "Media & Entertainment",
      "Real Estate",
      "Retail",
      "Technology",
      "Transportation"
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
      data: [31, 4.3, 1.5, 31.6, 2.1, 1.7, 1.7, 20.3, 1.9]
    }
  ]
};
