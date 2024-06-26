import { z } from "zod";

export const companySchema = z.object({
  companyName: z.string(),
  companyWebsite: z.string(),
  brandName: z.string(),
  headLine: z.string(),
  subHeadLine: z.string(),
  heroImage: z.string(),
  headLineStyle: z.string(),
  subHeadLineStyle: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.string(),
  facebook: z.string(),
  instagram: z.string(),
  youtube: z.string(),
  createdAt: z.string(),
});

export const productSchema = z.object({
  companyName: z.string(),
  productName: z.string(),
  productDescription: z.string(),
  productLink: z.string(),
  productPrice: z.string(),
  productCategory: z.string(),
  productInventory: z.number(),
  productReviews: z.number(),
  productRatings: z.number(),
});

export const categorySchema = z.object({
  companyName: z.string(),
  name: z.string(),
  description: z.string(),
  image: z.string(),
});

export const reviewSchema = z.object({
  companyName: z.string(),
  name: z.string(),
  review: z.string(),
});

export const faqSchema = z.object({
  companyName: z.string(),
  question: z.string(),
  answer: z.string(),
});

export const lastViewSchema = z.object({
  companyName: z.string(),
});

interface Imagery {
  headline: string;
  subheadline: string;
  image: string;
}

interface ContactInformation {
  email: string;
  phone: string;
  address: string;
}

type SocialMediaLinks = Record<number, string>;

interface HeroSection {
  contentImagery: Imagery;
}

interface ContactSection {
  contentImagery: {
    contactInformation: ContactInformation;
    socialMediaLinks: SocialMediaLinks;
  };
}

interface Product {
  name: string;
  description: string;
  image: string;
  price: number;
}

interface Category {
  name: string;
  description: string;
  image: string;
}

interface Review {
  name: string;
  review: string;
}

interface FAQ {
  question: string;
  answer: string;
}

export interface MyData {
  heroSection: HeroSection;
  contactSection: ContactSection;
  productsSection: {
    contentImagery: Product[];
  };
  categoriesSection: {
    categories: Category[];
  };
  reviewsSection: {
    contentImagery: {
      testimonials: Review[];
    };
  };
  faqSection: {
    contentImagery: {
      "questions-answers": FAQ[];
    };
  };
}
