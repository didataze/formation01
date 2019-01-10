export class mesureData {
  representation_capteur_algo: RepresentationCapteurAlgo[];
  ecart_mesure: EcartMesure[];
  distribution_ecarts: DistributionEcart[];
}

export interface DistributionEcart {
  occurence: number;
  ecart: number;
}

export interface EcartMesure {
  sDate: string;
  ecart: number;
}

export interface RepresentationCapteurAlgo {
  sDate: string;
  capteur: number;
  image: number;
}
