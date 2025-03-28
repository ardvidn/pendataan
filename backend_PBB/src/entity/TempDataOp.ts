import { Column, Entity, Index } from "typeorm";

@Index(
  "temp_data_op_pkey",
  ["bundelPelayanan", "kdBlokPemohon", "kdDati2Pemohon", "kdJnsOpPemohon", "kdKantor", "kdKanwil", "kdKecamatanPemohon", "kdKelurahanPemohon", "kdPropinsiPemohon", "noUrutPelayanan", "noUrutPemohon", "tempJnsData", "thnPelayanan"],
  { unique: true }
)
@Index("t1_1_ak", ["bundelPelayanan", "kdBlokPemohon", "kdDati2Pemohon", "kdJnsOpPemohon", "kdKantor", "kdKanwil", "kdKecamatanPemohon", "kdKelurahanPemohon", "kdPropinsiPemohon", "noUrutPelayanan", "noUrutPemohon", "thnPelayanan"], {})
@Index(
  "t1_2_ak",
  ["bundelPelayanan", "kdBlokPemohon", "kdDati2Pemohon", "kdJnsOpPemohon", "kdKantor", "kdKanwil", "kdKecamatanPemohon", "kdKelurahanPemohon", "kdPropinsiPemohon", "noUrutPelayanan", "noUrutPemohon", "tempJnsData", "thnPelayanan"],
  { unique: true }
)
@Entity("temp_data_op", { schema: "public" })
export class TempDataOp {
  @Column("character", { primary: true, name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { primary: true, name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", { primary: true, name: "thn_pelayanan", length: 4 })
  thnPelayanan!: string;

  @Column("character", { primary: true, name: "bundel_pelayanan", length: 4 })
  bundelPelayanan!: string;

  @Column("character", { primary: true, name: "no_urut_pelayanan", length: 3 })
  noUrutPelayanan!: string;

  @Column("character", {
    primary: true,
    name: "kd_propinsi_pemohon",
    length: 2,
  })
  kdPropinsiPemohon!: string;

  @Column("character", { primary: true, name: "kd_dati2_pemohon", length: 2 })
  kdDati2Pemohon!: string;

  @Column("character", {
    primary: true,
    name: "kd_kecamatan_pemohon",
    length: 3,
  })
  kdKecamatanPemohon!: string;

  @Column("character", {
    primary: true,
    name: "kd_kelurahan_pemohon",
    length: 3,
  })
  kdKelurahanPemohon!: string;

  @Column("character", { primary: true, name: "kd_blok_pemohon", length: 3 })
  kdBlokPemohon!: string;

  @Column("character", { primary: true, name: "no_urut_pemohon", length: 4 })
  noUrutPemohon!: string;

  @Column("character", { primary: true, name: "kd_jns_op_pemohon", length: 1 })
  kdJnsOpPemohon!: string;

  @Column("character", { primary: true, name: "temp_jns_data", length: 1 })
  tempJnsData!: string;

  @Column("smallint", { name: "temp_siklus_sppt" })
  tempSiklusSppt!: number;

  @Column("character varying", { name: "temp_nm_wp", length: 30 })
  tempNmWp!: string;

  @Column("character varying", { name: "temp_jalan_op", length: 30 })
  tempJalanOp!: string;

  @Column("character varying", {
    name: "temp_blok_kav_no_op",
    nullable: true,
    length: 15,
  })
  tempBlokKavNoOp!: string | null;

  @Column("character", { name: "temp_rw_op", nullable: true, length: 2 })
  tempRwOp!: string | null;

  @Column("character", { name: "temp_rt_op", nullable: true, length: 3 })
  tempRtOp!: string | null;

  @Column("character varying", { name: "temp_jalan_wp", length: 30 })
  tempJalanWp!: string;

  @Column("character varying", {
    name: "temp_blok_kav_no_wp",
    nullable: true,
    length: 15,
  })
  tempBlokKavNoWp!: string | null;

  @Column("character", { name: "temp_rw_wp", nullable: true, length: 2 })
  tempRwWp!: string | null;

  @Column("character", { name: "temp_rt_wp", nullable: true, length: 3 })
  tempRtWp!: string | null;

  @Column("character varying", {
    name: "temp_kelurahan_wp",
    nullable: true,
    length: 30,
  })
  tempKelurahanWp!: string | null;

  @Column("character varying", {
    name: "temp_kota_wp",
    nullable: true,
    length: 30,
  })
  tempKotaWp!: string | null;

  @Column("character varying", {
    name: "temp_kd_pos_wp",
    nullable: true,
    length: 5,
  })
  tempKdPosWp!: string | null;

  @Column("character varying", {
    name: "temp_npwp",
    nullable: true,
    length: 15,
  })
  tempNpwp!: string | null;

  @Column("character varying", { name: "temp_subjek_pajak_id", length: 30 })
  tempSubjekPajakId!: string;

  @Column("character", { name: "kd_kls_tanah", length: 3 })
  kdKlsTanah!: string;

  @Column("character", { name: "thn_awal_kls_tanah", length: 4 })
  thnAwalKlsTanah!: string;

  @Column("character", { name: "kd_kls_bng", length: 3 })
  kdKlsBng!: string;

  @Column("character", { name: "thn_awal_kls_bng", length: 4 })
  thnAwalKlsBng!: string;

  @Column("bigint", { name: "temp_luas_bumi" })
  tempLuasBumi!: string;

  @Column("bigint", { name: "temp_luas_bangunan" })
  tempLuasBangunan!: string;

  @Column("bigint", { name: "temp_njop_bumi" })
  tempNjopBumi!: string;

  @Column("bigint", { name: "temp_njop_bangunan" })
  tempNjopBangunan!: string;

  @Column("bigint", { name: "temp_njop" })
  tempNjop!: string;

  @Column("bigint", { name: "temp_njoptkp" })
  tempNjoptkp!: string;

  @Column("bigint", { name: "temp_pbb_terhutang" })
  tempPbbTerhutang!: string;

  @Column("bigint", { name: "temp_besar_denda", nullable: true })
  tempBesarDenda!: string | null;

  @Column("bigint", { name: "temp_faktor_pengurang", nullable: true })
  tempFaktorPengurang!: string | null;

  @Column("bigint", { name: "temp_pbb_yg_harus_dibayar" })
  tempPbbYgHarusDibayar!: string;

  @Column("timestamp without time zone", { name: "temp_tgl_jatuh_tempo" })
  tempTglJatuhTempo!: Date;
}
