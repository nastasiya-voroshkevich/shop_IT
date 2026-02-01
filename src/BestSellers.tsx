import { useEffect, useState } from "react";
import axios from "axios";
export type Product = {
  _id: string;
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
};
export const BestSellers = () => {

//   const products = [
//     {
//       _id: "664476983793ba7564c50ba2",
//       id: 8,
//       title: "Zip hoodie",
//       price: 91.99,
//       description: "Этот зип-худи, изготовленный из мягкого и уютного материала, предлагает идеальное сочетание стиля и комфорта для прохладной погоды. Его удобный крой с молнией спереди и капюшоном позволяет легко регулировать тепло, делая его идеальным выбором для повседневного ношения или для слоя одежды во время активных занятий на открытом воздухе.",
//       category: "men's clothing",
//       image: "https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/e12cebe8-7d13-4842-98ab-f71e0df6a2f4_8-zip-hoodie.png",
//       rating: {
//         rate: 4.7,
//         count: 120
//       },
//       createdAt: "2024-05-15T08:47:20.180Z",
//       updatedAt: "2024-05-15T12:20:34.117Z",
//       __v: 0
//     },
//     {
//       _id: "664476983793ba7564c50ba2",
//       id: 8,
//       title: "Zip hoodie",
//       price: 91.99,
//       description: "Этот зип-худи, изготовленный из мягкого и уютного материала, предлагает идеальное сочетание стиля и комфорта для прохладной погоды. Его удобный крой с молнией спереди и капюшоном позволяет легко регулировать тепло, делая его идеальным выбором для повседневного ношения или для слоя одежды во время активных занятий на открытом воздухе.",
//       category: "men's clothing",
//       image: "https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/e12cebe8-7d13-4842-98ab-f71e0df6a2f4_8-zip-hoodie.png",
//       rating: {
//         rate: 4.7,
//         count: 120
//       },
//       createdAt: "2024-05-15T08:47:20.180Z",
//       updatedAt: "2024-05-15T12:20:34.117Z",
//       __v: 0
//     }
//   ];

  const [products, setProducts] = useState<Product[]>([])

useEffect(() => {
    axios.get("https://masterclass.kimitsu.it-incubator.io/api/products")
      .then((res) => {
        const products = res.data;
        setProducts(products)
      });
}, []);

  return (
    <div className={'bestSellers'}>
    <h2>BestSellers</h2>
    <div className={'cards'}>
        {products.map((el) => {
            return (
             <div className="card" key={el.id}>

             <img src={el.image} alt="img" />
          <h4>{el.title}</h4>
          <p className="price">${el.price}</p>
          <button>Show more</button>
          </div>
         )
})}

    </div>
    </div>
  );
};