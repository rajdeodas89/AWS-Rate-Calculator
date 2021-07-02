import { Injectable } from '@angular/core'

export interface DataItem {
  id: number,
  name: string,
  ratePerhour1: number,
  ratePerhour2: number,
  baseStreamHour?: number,
  plusStreamHour?: number,
  cost?: number
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private rates_SD = new Array<DataItem>(
    {
      id: 1,
      name: 'North America',
      ratePerhour1: 0.0375,
      ratePerhour2: 0.035,
    },
    {
      id: 2,
      name: 'Europe',
      ratePerhour1: 0.0375,
      ratePerhour2: 0.035,
    },
    {
      id: 3,
      name: 'Brazil',
      ratePerhour1: 0.060,
      ratePerhour2: 0.055,
    },
    {
      id: 4,
      name: 'Japan HongKong Singapore Thailand',
      ratePerhour1: 0.065,
      ratePerhour2: 0.060,
    },
    {
      id: 5,
      name: 'Taiwan',
      ratePerhour1: 0.080,
      ratePerhour2: 0.075,
    },
    {
      id: 6,
      name: 'SouthKorea',
      ratePerhour1: 0.125,
      ratePerhour2: 0.1175,
    },
    {
      id: 7,
      name: 'Australia',
      ratePerhour1: 0.085,
      ratePerhour2: 0.080,
    },
    {
      id: 8,
      name: 'India',
      ratePerhour1: 0.085,
      ratePerhour2: 0.080,
    }
  )

  getSDRates(): Array<DataItem> {
    return this.rates_SD
  }

  private rates_HD = new Array<DataItem>(
    {
      id: 1,
      name: 'North America',
      ratePerhour1: 0.075,
      ratePerhour2: 0.070,
    },
    {
      id: 2,
      name: 'Europe',
      ratePerhour1: 0.075,
      ratePerhour2: 0.070,
    },
    {
      id: 3,
      name: 'Brazil',
      ratePerhour1: 0.120,
      ratePerhour2: 0.110,
    },
    {
      id: 4,
      name: 'Japan HongKong Singapore Thailand',
      ratePerhour1: 0.130,
      ratePerhour2: 0.120,
    },
    {
      id: 5,
      name: 'Taiwan',
      ratePerhour1: 0.160,
      ratePerhour2: 0.150,
    },
    {
      id: 6,
      name: 'SouthKorea',
      ratePerhour1: 0.250,
      ratePerhour2: 0.235,
    },
    {
      id: 7,
      name: 'Australia',
      ratePerhour1: 0.170,
      ratePerhour2: 0.160,
    },
    {
      id: 8,
      name: 'India',
      ratePerhour1: 0.170,
      ratePerhour2: 0.160,
    }
  )

  getHDRates(): Array<DataItem> {
    return this.rates_HD
  }

  private rates_FHD = new Array<DataItem>(
    {
      id: 1,
      name: 'North America',
      ratePerhour1: 0.150,
      ratePerhour2: 0.140,
    },
    {
      id: 2,
      name: 'Europe',
      ratePerhour1: 0.150,
      ratePerhour2: 0.140,
    },
    {
      id: 3,
      name: 'Brazil',
      ratePerhour1: 0.240,
      ratePerhour2: 0.220,
    },
    {
      id: 4,
      name: 'Japan HongKong Singapore Thailand',
      ratePerhour1: 0.260,
      ratePerhour2: 0.240,
    },
    {
      id: 5,
      name: 'Taiwan',
      ratePerhour1: 0.320,
      ratePerhour2: 0.300,
    },
    {
      id: 6,
      name: 'SouthKorea',
      ratePerhour1: 0.500,
      ratePerhour2: 0.470,
    },
    {
      id: 7,
      name: 'Australia',
      ratePerhour1: 0.340,
      ratePerhour2: 0.320,
    },
    {
      id: 8,
      name: 'India',
      ratePerhour1: 0.340,
      ratePerhour2: 0.320,
    }
  )
  getFHDRates(): Array<DataItem> {
    return this.rates_FHD
  }

  getItem(id: number): DataItem {
    return this.rates_SD.filter((item) => item.id === id)[0]
  }
}
