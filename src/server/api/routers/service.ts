export class Service {
  static async createWebsite(
    {
        companyName,
        companyWebsite,
        productName,
        productImage,
    }: {
      companyName: string;
      companyWebsite: string;
      productName: string;
      productImage: string[];
    }) {

    // const companyName = "keysme";
    // const companyWebsite = 'https\\"://eysme.tmall.com/';
    // const productName = "机械键盘";
    // const productImage = [
    //   "https://gw.alicdn.com/imgextra/i3/2215581294150/O1CN01Ugq0Pk1gWkd236WSa_!!0-item_pic.jpg_Q75.jpg",
    //   "https://gw.alicdn.com/imgextra/i3/2215581294150/O1CN01fwopeW1gWkdcdZpQ4_!!0-item_pic.jpg_Q75.jpg",
    //   "https://gw.alicdn.com/imgextra/i1/2215581294150/O1CN01qKwnaK1gWkd5kn2VY_!!0-item_pic.jpg_Q75.jpg",
    //   "https://gw.alicdn.com/imgextra/O1CNA16YuQXV1fCJLBykP9R_!!2236973970-0-psf.jpg_Q75.jpg",
    // ];
    
    const query = `company_name: ${companyName} company_website: ${companyWebsite} product: ${productName} 
          product_image: ${productImage.join(" ")} 我想帮一家${productName}制造商制作出海独立站内容，制造商名为${companyName}, 有四款不同的${productName}产品。请调用工作流来来生成对应英文格式的json，并直接返回json结果`;
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
        conversation_id: "123321",
        bot_id: "7383978759340752915", //7382153061261279247
        user: "123123123",
        query: query,
        stream: false,
      }),
    });

    // const res = await data.json() as response;
    const res = await data.json();
    console.log("res", res);

    // Now we need to process the data
  }
}
