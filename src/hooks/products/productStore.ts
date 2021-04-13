import { ChangeEvent, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../reducers";
import { productActions } from "../../slices/productSlice";
// import { setNoki } from "../../slices/productSlice";

export const productStore = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, any, Action>>()
  const noki = useSelector((state: RootState) => state.product.noki)
  const includeNum = useSelector((state: RootState) => state.product.includeNum)

  const updateNoki = useCallback(
    (noki: string) => {
      console.log('setnoki')
      dispatch(productActions.setNoki(noki))
    },
    [dispatch]
  )

  const updateIncludeNum = useCallback(
    (includeNum: string) => {
      dispatch(productActions.setIncludeNum(includeNum))
    },
    [dispatch]
  )

  return {
    updateNoki,
    updateIncludeNum,
    noki,
    includeNum
  }
}