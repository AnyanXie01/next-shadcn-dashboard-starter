import { type response } from "./response.type";
import { db } from "~/server/db";
import { eq } from "drizzle-orm";
import {
  categoryTable,
  companyTable,
  faqTable,
  productTable,
  reviewTable,
} from "@/server/db/schema";
export class Service {
  // {
  //   companyName,
  //   companyWebsite,
  //   brandName,
  //   productImage,
  // }: {
  //   companyName: string;
  //   companyWebsite: string;
  //   brandName: string;
  //   productImage: string[];
  // }
  static async createWebsite() {
    console.log("calling coze");
    // const companyName = "keysme";
    // const companyWebsite = 'https\\"://eysme.tmall.com/';
    // const brandName = "机械键盘";
    // const productImage = [
    //   "https://gw.alicdn.com/imgextra/i3/2215581294150/O1CN01Ugq0Pk1gWkd236WSa_!!0-item_pic.jpg_Q75.jpg",
    //   "https://gw.alicdn.com/imgextra/i3/2215581294150/O1CN01fwopeW1gWkdcdZpQ4_!!0-item_pic.jpg_Q75.jpg",
    //   "https://gw.alicdn.com/imgextra/i1/2215581294150/O1CN01qKwnaK1gWkd5kn2VY_!!0-item_pic.jpg_Q75.jpg",
    //   "https://gw.alicdn.com/imgextra/O1CNA16YuQXV1fCJLBykP9R_!!2236973970-0-psf.jpg_Q75.jpg",
    // ];

    // const query = `company_name: ${companyName} company_website: ${companyWebsite} product: ${brandName}
    //       product_image: ${productImage.join(" ")} 我想帮一家${brandName}制造商制作出海独立站内容，制造商名为${companyName}, 有四款不同的${brandName}产品。请调用工作流来来生成对应英文格式的json，并直接返回json结果`;
    const companyName = "Tonepie";
    const companyWebsite = 'https"://tonepie.com/';
    const brandName = "自动猫砂盆";
    const productImage = `[
        "https://pub-342b3b8ce2b7489f9956e8987813d7c6.r2.dev/litter_1.jpg",
        "https://pub-342b3b8ce2b7489f9956e8987813d7c6.r2.dev/litter_2.jpg",
        "https://pub-342b3b8ce2b7489f9956e8987813d7c6.r2.dev/litter_3.jpg",
        "https://pub-342b3b8ce2b7489f9956e8987813d7c6.r2.dev/litter_4.jpg"
      ]`;

    const QUERY = `
    {
      "company_name": ${companyName},
      "company_website": ${companyWebsite},
      "product": ${brandName},
      "product_image": ${productImage}
    }
    我想帮一家${brandName}制造商制作出海独立站内容，制造商名为${companyName}, 有四款不同的${brandName}产品。请调用工作流来生成对应英文格式的json，并直接返回json结果`;

    const data = await fetch("https://api.coze.cn/open_api/v2/chat", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer pat_hSWQrV1TmLn3ij2SABWZAcAOaLJydjvS18MjkpZLhmwSSEuuKRKWDEAbsjU05GYA",
        "Content-Type": "application/json",
        Accept: "*/*",
        Host: "api.coze.cn",
        Connection: "keep-alive",
      },
      body: JSON.stringify({
        conversation_id: "626262",
        bot_id: "7382153061261279247", // lark: 7382153061261279247, ali: 7383978759340752915
        user: "95962",
        query: QUERY,
        stream: false,
      }),
    });
    const res = (await data.json()) as response;
    console.log(res);
    let json = "";
    res.messages.forEach((message) => {
      if (message.type === "answer") {
        json = message.content;
      }
    });
    console.log("---------------------------json-----------------------------");
    console.log("json", json);
    console.log("---------------------------json-----------------------------");
    console.log("Finish");
    const regex = /```json([\s\S]*?)```/g;
    const trimmedJson = regex.exec(json)![1] ?? "";
    const o = JSON.parse(trimmedJson);

    const headLine = o.heroSection.contentImagery.headline;
    const subHeadLine = o.heroSection.contentImagery.subheadline;
    const heroImage = o.heroSection.contentImagery.image;
    const email = o.contactSection.contentImagery.contactInformation.email;
    const phone = o.contactSection.contentImagery.contactInformation.phone;
    const address = o.contactSection.contentImagery.contactInformation.address;
    const socialMediaLinks = o.contactSection.contentImagery.socialMediaLinks;
    const facebook = socialMediaLinks[0];
    const instagram = socialMediaLinks[1];
    const youtube = socialMediaLinks[2];

    await db
      .insert(companyTable)
      .values({
        companyName,
        headLine,
        companyWebsite,
        brandName,
        subHeadLine,
        heroImage,
        headLineStyle: "text-5xl font-bold mb-4",
        subHeadLineStyle: "mb-8 text-xl",
        email,
        phone,
        address,
        facebook,
        instagram,
        youtube,
      })
      .onConflictDoUpdate({
        target: companyTable.companyName,
        set: {
          headLine,
          companyWebsite,
          brandName,
          subHeadLine,
          heroImage,
          headLineStyle: "text-5xl font-bold mb-4",
          subHeadLineStyle: "mb-8 text-xl",
          email,
          phone,
          address,
          facebook,
          instagram,
          youtube,
        },
      });

    await db
      .delete(productTable)
      .where(eq(productTable.companyName, companyName));
    await db
      .delete(categoryTable)
      .where(eq(categoryTable.companyName, companyName));
    await db
      .delete(reviewTable)
      .where(eq(reviewTable.companyName, companyName));
    await db.delete(faqTable).where(eq(faqTable.companyName, companyName));

    const rawProducts = o.productsSection.contentImagery;
    rawProducts.map(async (product: any) => {
      await db.insert(productTable).values({
        companyName,
        productName: product.name,
        productDescription: product.description,
        productLink: product.image,
        productPrice: product.price,
        productCategory: "",
        productInventory: 100,
        productReviews: 100,
        productRatings: 5.0,
      });
    });

    const rawCategories = o.categoriesSection.categories;
    rawCategories.map(async (category: any) => {
      await db.insert(categoryTable).values({
        companyName,
        name: category.name,
        description: category.description,
        image: category.image,
      });
    });

    const rawReviews = o.reviewsSection.contentImagery.testimonials;
    rawReviews.map(async (review: any) => {
      await db.insert(reviewTable).values({
        companyName,
        name: review.name,
        review: review.review,
      });
    });

    const rawFaqs = o.faqSection.contentImagery["questions-answers"];
    rawFaqs.map(async (faq: any) => {
      await db.insert(faqTable).values({
        companyName,
        question: faq.question,
        answer: faq.answer,
      });
    });

    console.log("=== Done ===");
  }
  static async getCompanyByCompanyName({
    companyName,
  }: {
    companyName: string;
  }) {
    return await db.query.companyTable.findFirst({
      where: eq(companyTable.companyName, companyName),
    });
  }

  static async getProductsByCompanyName({
    companyName,
  }: {
    companyName: string;
  }) {
    return await db.query.productTable.findMany({
      where: eq(productTable.companyName, companyName),
    });
  }

  static async getCategoriesByCompanyName({
    companyName,
  }: {
    companyName: string;
  }) {
    return await db.query.categoryTable.findMany({
      where: eq(categoryTable.companyName, companyName),
    });
  }

  static async getReviewsByCompanyName({
    companyName,
  }: {
    companyName: string;
  }) {
    return await db.query.reviewTable.findMany({
      where: eq(reviewTable.companyName, companyName),
    });
  }

  static async getFaqsByCompanyName({ companyName }: { companyName: string }) {
    return await db.query.faqTable.findMany({
      where: eq(faqTable.companyName, companyName),
    });
  }
}
