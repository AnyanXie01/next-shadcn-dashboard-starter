// export async function fetchData() {
//   const APP_ID = 'ee7989c31a014099b75a238eac82a67e';
//   const APP_ID_TEST = '71fa07dc24634a30b697f535cbf2f9a3';
//   const API_KEY = 'sk-6f9c6d44174948968c7353d6cc5ba6da';
//   // const PROMPT = '介绍你自己'
//   const companyName = 'keysme';
//   const companyWebsite = 'https\\"://eysme.tmall.com/';
//   const productName = '机械键盘';
//   const productImage = [
//     'https://gw.alicdn.com/imgextra/i3/2215581294150/O1CN01Ugq0Pk1gWkd236WSa_!!0-item_pic.jpg_Q75.jpg',
//     'https://gw.alicdn.com/imgextra/i3/2215581294150/O1CN01fwopeW1gWkdcdZpQ4_!!0-item_pic.jpg_Q75.jpg',
//     'https://gw.alicdn.com/imgextra/i1/2215581294150/O1CN01qKwnaK1gWkd5kn2VY_!!0-item_pic.jpg_Q75.jpg',
//     'https://gw.alicdn.com/imgextra/O1CNA16YuQXV1fCJLBykP9R_!!2236973970-0-psf.jpg_Q75.jpg'
//   ];
//   const PROMPT = `company_name: ${companyName} company_website: ${companyWebsite} product: ${productName}
//         product_image: ${productImage.join(
//           ' '
//         )} 我想帮一家${productName}制造商制作出海独立站内容，制造商名为${companyName}, 有四款不同的${productName}产品。请调用工作流来来生成对应英文格式的json，并直接返回json结果`;
//   const res = await fetch(
//     `https://dashscope.aliyuncs.com/api/v1/apps/${APP_ID_TEST}/completion`,
//     {
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${API_KEY}`,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         input: {
//           prompt: PROMPT
//         },
//         parameters: {},
//         debug: {}
//       })
//     }
//   );
//   const json = await res.json();
//   console.log(json);
//   return json;
// }
// export const test = () => {
//   console.log('test');
// };
// // await fetchData();
