import { Kakou2s, SelectAbleKakou2s } from "../../../types/products/parentProductTypes";

export const kakouFormat = (selectAbleKakou2s: SelectAbleKakou2s): Kakou2s[] => {
  let kakou2s: Kakou2s[] = [];
  console.log(selectAbleKakou2s)
  selectAbleKakou2s.forEach((x) => {
      x.items.forEach((y) => {
          kakou2s.push(y);
      })
  });

  return kakou2s;
}