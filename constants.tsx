
import { Service, NavItem, Testimonial } from './types';

export const SPA_INFO = {
  name: "Jin Spa",
  address: "17904 W Little York Rd Ste D, Houston, TX 77084",
  phone: "832-708-5378",
  phoneRaw: "8327085378",
  hours: "Mon - Sun: 10:00 AM - 10:00 PM",
  email: "info@jinspahouston.com"
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#contact" },
];

export const SERVICES: Service[] = [
  {
    id: "swedish",
    name: "Swedish Massage",
    description: "A classic full-body relaxation massage using light to medium pressure and long, gliding strokes.",
    duration: "60 mins",
    price: "$60",
    image: "https://images.unsplash.com/photo-1544161515-4ae6ce6db874?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "deep-tissue",
    name: "Deep Tissue Massage",
    description: "Targeted pressure to reach deeper layers of muscle and fascia. Ideal for chronic aches and pains.",
    duration: "60 mins",
    price: "$70",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hot-stone",
    name: "Hot Stone Therapy",
    description: "Heated basalt stones placed on key points of the body to melt away tension and promote deep relaxation.",
    duration: "60 mins",
    price: "$80",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "thai",
    name: "Thai Massage",
    description: "An ancient healing system combining acupressure, Indian Ayurvedic principles, and assisted yoga postures.",
    duration: "60 mins",
    price: "$70",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "foot",
    name: "Foot Reflexology",
    description: "Application of pressure to specific points on the feet that correspond to different body organs and systems.",
    duration: "45 mins",
    price: "$50",
    image: "https://images.unsplash.com/photo-1537130508986-20f487fe939e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "combo",
    name: "Body & Foot Combo",
    description: "The ultimate relaxation experience combining our signature body massage with rejuvenating reflexology.",
    duration: "90 mins",
    price: "$100",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, author: "Sarah M.", rating: 5, text: "The best massage I've had in Houston. The atmosphere is so peaceful and professional." },
  { id: 2, author: "James L.", rating: 5, text: "Deep tissue massage was exactly what I needed. Very skilled therapists." },
  { id: 3, author: "Linda W.", rating: 5, text: "Jin Spa is my go-to place for relaxation. Clean, calm, and consistently excellent." }
];
