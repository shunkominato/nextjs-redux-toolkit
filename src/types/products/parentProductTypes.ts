export type Product = {
  id: string,
  name: string,
  is_fix: boolean
}

export type Kamimei = Product[]

export type Kakou2s = {
  kakou_type: number,
  is_pay: boolean,
  line_num: number,
  punch_num: number,
  is_kadomaru: false,
  machine_num: number,
  jump_machine_num: number,
  is_pp: false,
  is_haku: false,
  is_holo: false,
  is_book: false,
  is_fold: false,
  price: number,
  noki: string,
  busu: string,
  longer_dir_max: string,
  longer_dir_min: string,
  shoter_dir_max: string,
  shoter_dir_min: string,
  is_qdc_able: boolean,
  is_need_num: boolean,
  relation_params: string,
  id: number,
  name: string,
  is_fix: string
}

export type SelectAbleKakou2sObj = {
  items: Kakou2s[],
  required_flg: boolean,
  id: string,
  name: string,
  is_fix: string
}

export type SelectAbleKakou2s = SelectAbleKakou2sObj[]

