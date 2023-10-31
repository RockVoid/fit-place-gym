export enum SelectedPage {
  Home = "home",
  Benefits = "beneficios",
  OurClasses = "nossasaulas",
  ContacUs = "contato"
}

export interface BenefitType {
  icon: JSX.Element,
  title: string,
  description: string
}

export interface ClasseType {
  name: string,
  description?: string,
  image: string,
}