import { type response } from "./response.type";
import { db } from "~/server/db/db";
import { eq } from "drizzle-orm";
import {
  categoryTable,
  companyTable,
  faqTable,
  productTable,
  reviewTable,
  lastViewTable,
} from "@/server/db/schema";
import { type MyData } from "./type";
export class Service {
  static async createWebsite({
    companyName,
    companyWebsite,
    brandName,
    productImage,
  }: {
    companyName: string;
    companyWebsite: string;
    brandName: string;
    productImage: string[];
  }) {
    console.log("calling coze");
    console.log(companyName);
    productImage.map((p) => {
      console.log(p);
    });
    const QUERY = `
    {
      "company_name": ${companyName},
      "company_website": ${companyWebsite},
      "product": ${brandName},
      "product_image": ${productImage.join(" ")}
    }
    我想帮一家${brandName}制造商制作出海独立站内容，制造商名为${companyName}, 有四款不同的${brandName}产品。请调用工作流来生成对应英文格式的json，并直接返回json结果`;

    const data = await fetch("https://api.coze.cn/open_api/v2/chat", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer pat_nsTrE39t0UOBXq9sH2D0qT7XpHi8K5NJgGURHtQuMVwnMBW1OzltMgYeTPa1cIt7",
        "Content-Type": "application/json",
        Accept: "*/*",
        Host: "api.coze.cn",
        Connection: "keep-alive",
      },
      body: JSON.stringify({
        conversation_id: "626262",
        bot_id: "7384730443289575424", // lark: 7382153061261279247, ali: 7383978759340752915
        user: "95962",
        query: QUERY,
        stream: false,
      }),
    });
    console.log("data", data);
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

    const o = JSON.parse(trimmedJson) as MyData;

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

    await db.insert(lastViewTable).values({
      id: 0,
      companyName,
    }).onConflictDoUpdate({
      target: lastViewTable.id,
      set: {
        companyName,
      },
    });

    // await db
    //   .insert(companyTable)
    //   .values({
    //     companyName,
    //     companyWebsite,
    //     brandName,
    //     headLine,
    //     subHeadLine,
    //     heroImage,
    //     headLineStyle: "text-5xl font-bold mb-4",
    //     subHeadLineStyle: "mb-8 text-xl",
    //     email,
    //     phone,
    //     address,
    //     facebook,
    //     instagram,
    //     youtube,
    //   })
    //   .onConflictDoUpdate({
    //     target: companyTable.companyName,
    //     set: {
    //       headLine,
    //       companyWebsite,
    //       brandName,
    //       subHeadLine,
    //       heroImage,
    //       headLineStyle: "text-5xl font-bold mb-4",
    //       subHeadLineStyle: "mb-8 text-xl",
    //       email,
    //       phone,
    //       address,
    //       facebook,
    //       instagram,
    //       youtube,
    //     },
    //   });

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
    // await Promise.all(
    //   rawProducts.map(async (product) => {
    //     await db.insert(productTable).values({
    //       companyName,
    //       productName: product.name,
    //       productDescription: product.description,
    //       productLink: product.image,
    //       productPrice: product.price,
    //       productCategory: "",
    //       productInventory: 100,
    //       productReviews: 100,
    //       productRatings: 5.0,
    //     });
    //   })
    // );

    const rawCategories = o.categoriesSection.categories;
    await Promise.all(
      rawCategories.map(async (category) => {
        await db.insert(categoryTable).values({
          companyName,
          name: category.name,
          description: category.description,
          image: category.image,
        });
      })
    );

    const rawReviews = o.reviewsSection.contentImagery.testimonials;
    await Promise.all(
      rawReviews.map(async (review) => {
        await db.insert(reviewTable).values({
          companyName,
          name: review.name,
          review: review.review,
        });
      })
    );

    const rawFaqs = o.faqSection.contentImagery["questions-answers"];
    await Promise.all(
      rawFaqs.map(async (faq) => {
        await db.insert(faqTable).values({
          companyName,
          question: faq.question,
          answer: faq.answer,
        });
      })
    );

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
  static async getLastCompanyName() {
    const lastCompanyName = await db.query.lastViewTable.findFirst({
      where: eq(lastViewTable.id, 0),
    });
    if (!lastCompanyName) {
      throw new Error("LastView table does not contain lastCompanyName");
    }
    return lastCompanyName?.companyName;
  }
}
