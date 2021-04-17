import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useForm, NestedValue } from "react-hook-form";
import { useTodoListStore } from "../hooks/useTodoListStore";
import { productStore } from "../hooks/products/productStore";
import { Input } from "../components/Todo/Input";
import { List } from "../components/Todo/List";
import { getParentProducts } from "../service/domain/products/parentProducts";
import { BASE_URL, CHILD_PRODUCT_URL, PARENT_PRODUCT_URL, USER_CART_FORMAT_URL } from "../constants/config";
import { kakouFormat } from "../service/domain/products/kakouFormat";
import { getChildProducts } from "../service/domain/products/childProducts";
import { getUserCartFormt } from "../service/domain/products/userCartFormat";
import style from '../styles/ui/title.module.scss'
import grobalStyle from '../styles/grobal.module.scss'
import Products from "../components/molecules/Products";
import { Product } from "../types/products/parentProductTypes";
import { useCallback, useState } from "react";
import SelectBlock from "../components/molecules/SelectBlock";

type FormData = {
  todo: string;
};

type Props = {
  data: string;
};

const Home: NextPage<any> = ({ parentProducts, childProduct, kakou2s, userCartFormat }) => {
  const { register, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      todo: "",
    },
  });
  const {
    addTodo,
    asyncAddTodo,
    isPending,
    asyncInstaThunk,
    USD,
  } = useTodoListStore();

  const { updateNoki, updateIncludeNum, noki, includeNum } = productStore();
  const includeNumOptions = [
    {
      id: '1',
      name: '1',
      is_fix: false,
    },
    {
      id: '2',
      name: '2',
      is_fix: false,
    },
    {
      id: '3',
      name: '3',
      is_fix: false,
    },
    {
      id: '4',
      name: '4',
      is_fix: false,
    },
  ];
  console.log('------')
  console.log(includeNum)
  console.log('------')

  const [parentProduct, setParentProduct] = useState('190')


  const onChangeParentProduct = useCallback(
    (id: string) => {
      setParentProduct(id)
    },
    [setParentProduct]
  )

  return (
    <div className={grobalStyle.base}>
      <Head>
        <title>Sample Next with TypeScript &amp; RTK</title>
      </Head>
      <h1 className={style.title}>STEP1 封筒（入れ物）の種類を選択してください</h1>
      <Products radioName="parentProduct" products={parentProducts.select_able_kami_meis as Product[]} onChange={(id: string) => onChangeParentProduct(id)}/>

      <h1 className={style.title}>STEP2 納期コースを選択してください</h1>
      <SelectBlock label="ご希望の納期" value={noki} options={parentProducts.select_able_nokis} onChange={(e) => updateNoki(e)}/>

      <h1 className={style.title}>STEP3 中に入れる印刷物の点数を選択してください</h1>
      <SelectBlock label="封入する商品数" value={noki} options={includeNumOptions} onChange={(e) => updateIncludeNum(e)}/>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const parentProductUrl = `${BASE_URL}${PARENT_PRODUCT_URL}`
  const parentProducts = await getParentProducts(parentProductUrl);
  const kakou2s = kakouFormat(parentProducts.select_able_kakou2s)

  const childProductUrl = `${BASE_URL}${CHILD_PRODUCT_URL}`
  const childProduct = await getChildProducts(childProductUrl)

  const userCartFormatUrl = `${BASE_URL}${USER_CART_FORMAT_URL}`
  const userCartFormat = await getUserCartFormt(userCartFormatUrl)

  const props = {
    parentProducts,
    childProduct,
    kakou2s,
    userCartFormat
  };

  return { props };

};

export default Home;
