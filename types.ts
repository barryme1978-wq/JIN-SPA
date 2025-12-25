
export interface Service {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  image: string;
}

export interface Testimonial {
  id: number;
  author: string;
  rating: number;
  text: string;
}

export interface NavItem {
  label: string;
  href: string;
}
