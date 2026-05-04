interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };
  smartWatch: T;
  bike?: X
}


interface NonBrand {
    heartRate: string;
    stopWatch: boolean;
}

const poorDeveloper: Developer<NonBrand, {brand: string}> = {
  name: "Mr poor",
  salary: 20,
  device: {
    brand: "lenovo",
    model: "A21",
    releasedYear: "2024",
  },
  smartWatch: {
    heartRate: "100",
    stopWatch: true,
  },
  bike: {
    brand: 'yemaha'
  }
  
};
const richDeveloper: Developer<{
  heartRate: string;
  callSupport: boolean;
  calculator: boolean;
  ai: true;
}> = {
  name: "Mr Rich",
  salary: 100,
  device: {
    brand: "Apple",
    model: "m4 air",
    releasedYear: "1026",
  },
  smartWatch: {
    heartRate: "100",
    calculator: true,
    callSupport: true,
    ai: true,
  },
};
