export interface cineSytDto {
  ma_he_thong_rap: string;
  ten_he_thong_rap: string;
  logo: string;
}

export interface theaterClusDto {
  ma_cum_rap: string;
  ten_cum_rap: string;
  dia_chi: string;
  ma_he_thong_rap: string;
}

export interface showTBySyt {
  ma_lich_chieu: number;
  ma_rap: string;
  ma_phim: string;
  ngay_gio_chieu: Date;
  gia_ve: number;
}
