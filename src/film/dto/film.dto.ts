export interface phimDto {
  ma_phim: number;
  ten_phim: string;
  trailer: string;
  hinh_anh: string;
  mo_ta: string;
  ngay_khoi_chieu: Date;
  danh_gia: number;
  hot: boolean;
  dang_chieu: boolean;
  sap_chieu: boolean;
}

export interface bannerDto {
  ma_banner: number;
  ma_phim: number;
  hinh_anh: string;
}
