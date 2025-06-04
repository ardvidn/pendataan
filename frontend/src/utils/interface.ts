export interface logged {
  code: number;
  loggedIn: boolean;
  data: {
    id: number;
    username: string;
    role: string;
    iat: number;
    exp: number;
  };
  message: string;
}

export interface ResponseData {
  code: number;
  data: {
    dat_op_pajak: DatOpPajak;
    wajib_pajak: WajibPajak;
    dat_op_bangunan: DatOpBangunan[];
  };
  message: string;
}
export interface Geom {
  type: string;
  coordinates: number[];
}

export interface DatOpPajak {
  nop: string;
  kd_prov?: string;
  kd_kab?: string;
  kd_kec?: string;
  kd_kel?: string;
  kd_blok?: string;
  no_urut?: string;
  kd_jns_op?: string;
  nop_join: string;
  jalan_op: string;
  total_luas_bumi: number;
  total_luas_bng: number;
  blok_kav_no_op: string;
  rw_op: string;
  rt_op: string;
  kd_status_wp: string;
  kd_znt: string;
  jns_bumi: string;
  jns_transaksi_op: string;
  no_sertifikat: string;
  tgl_sertifikat: Date;
  nop_asal: string;
  kd_status_cabang: boolean;
  no_persil: string;
  longitude: number;
  latitude: number;
  geom: {
    type: string;
    coordinates: [number, number];
  };
  jns_peruntukan: string;
  user_pelayanan: string;
  kd_jns_pelayanan: string;
  kd_pelayanan: string;
  keterangan: string;
  nop_relasi: string;
  hotel: number;
  restoran: number;
  hiburan: number;
  reklame: number;
  ppj: number;
  mblbi: number;
  parkir: number;
  pat: number;
  walet: number;
  foto_op: string[];
  log_by: string;
  persen_njkp: number;
  is_pangan_ternak: boolean;
  is_verif: boolean;
  ket_verif: string;
  ket_pangan_ternak: string;
  kd_prov_baru: string;
  kd_kab_baru: string;
  kd_kec_baru: string;
  kd_kel_baru: string;
  kd_blok_baru: string;
  no_urut_baru: string;
  kd_jns_op_baru: string;
  nop_baru: string;
  dusun_op: string;
  no_identitas: string;
}

export interface WajibPajak {
  wajib_pajak: {
    jns_wp: string;
    jns_identitas: string;
    nm_wp: string;
    jns_kelamin_wp: string;
    tempat_lahir_wp: string;
    tanggal_lahir_wp: Date;
    alamat_wp: string;
    blok_wp: string;
    rt_wp: string;
    rw_wp: string;
    kd_provinsi: string;
    kd_kabupaten: string;
    kd_kecamatan: string;
    kd_kelurahan: string;
    telp_wp: string;
    kodepos_wp: string;
    email_wp: string;
    pekerjaan_wp: number;
    npwp: string;
    nm_penanggung_jawab: string;
    posisi_penanggung_jawab: string;
    foto_wp: string;
    log_by: string;
    dusun_wp: string;
    nop: string;
    no_identitas_lama: string;
    no_identitas: string;
  };
}

export interface DatOpBangunan {
  dat_op_bangunan: {
    no_bng: number;
    nop: string;
    kd_jpb: string;
    no_formulir_lspop: string;
    bng_thn_dibangun: number;
    bng_thn_renovasi: string;
    bng_luas: number;
    bng_jml_lantai: number;
    bng_kd_kondisi: string;
    bng_kd_konstruksi: string;
    bng_kd_atap: string;
    bng_kd_dinding: string;
    bng_kd_lantai: string;
    bng_kd_langit_langit: string;
    bng_nilai_sistem: number;
    bng_ins_transaksi: string;
    bng_keterangan: string;
    jpb2_kls: string;
    jpb3_tinggi_kolom: number;
    jpb3_lbr_bentang: number;
    jpb3_luas_mezzanine: number;
    jpb3_keliling_dinding: number;
    jpb3_daya_dukung_lantai: number;
    jpb9_kls: string;
    log_by: string;
  };
}

export interface ApiResponse<T> {
  code: number;
  data: T[];
}

export interface BuildingData {
  id?: string;
  no_bng: string;
  kd_jpb: string;
  bng_luas: string;
  bng_jml_lantai: string;
  bng_thn_dibangun: string;
  bng_thn_renovasi: string;
  bng_kd_kondisi: string;
  bng_kd_konstruksi: string;
  bng_kd_atap: string;
  bng_kd_dinding: string;
  bng_kd_lantai: string;
  bng_kd_langit_langit: string;
  jnsTransaksiBng: string;
}

export interface Provinsi {
  KD_PROV: string;
  NM_PROV: string;
}

export interface Kabupaten {
  KD_PROV: string;
  KD_KAB: string;
  NM_KAB: string;
}

export interface Kecamatan {
  KD_PROV: string;
  KD_KAB: string;
  KD_KEC: string;
  NM_KEC: string;
}

export interface Kelurahan {
  KD_PROV: string;
  KD_KAB: string;
  KD_KEC: string;
  KD_KEL: string;
  NM_KEL: string;
}

export interface ZNT {
  kdPropinsi: string;
  kdDati2: string;
  kdKecamatan: string;
  kdKelurahan: string;
  kdZnt: string;
  thnNirZnt: string;
  kdKanwil: string;
  kdKantor: string;
  jnsDokumen: string;
  noDokumen: string;
  nir: number;
}

export interface WajibPajak {
  id: string;
  name: string;
}

export interface RoleOptions {
  id?: number;
  Role: string;
  Akses: boolean;
}

export interface UserOptions {
  id?: number;
  username: string;
  password?: string;
  role: string;
  status: boolean;
}
