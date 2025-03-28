import { Column, Entity, Index } from "typeorm";

@Index("e12_1_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "statusPembayaranSkpSpop", "thnPajakSkpSpop"], { unique: true })
@Index("e12_2_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "statusTagihanSkpSpop"], { unique: true })
@Index("e12_3_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdKlsTanah", "kdPropinsi", "noUrut", "thnPajakSkpSpop"], { unique: true })
@Index("e12_6_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "pbbYgHarusDibayarSkpSpop", "thnPajakSkpSpop"], { unique: true })
@Index("e12_4_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdKlsBng", "kdPropinsi", "noUrut"], { unique: true })
@Index("skp_spop_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSkpSpop"], { unique: true })
@Index("e12_5_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSkpSpop"], { unique: true })
@Entity("skp_spop", { schema: "public" })
export class SkpSpop {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { primary: true, name: "kd_blok", length: 3 })
  kdBlok!: string;

  @Column("character", { primary: true, name: "no_urut", length: 4 })
  noUrut!: string;

  @Column("character", { primary: true, name: "kd_jns_op", length: 1 })
  kdJnsOp!: string;

  @Column("character", { primary: true, name: "thn_pajak_skp_spop", length: 4 })
  thnPajakSkpSpop!: string;

  @Column("smallint", { name: "siklus_skp_spop" })
  siklusSkpSpop!: number;

  @Column("character", { name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", { name: "kd_tp", length: 2 })
  kdTp!: string;

  @Column("character varying", { name: "nm_wp_skp_spop", length: 30 })
  nmWpSkpSpop!: string;

  @Column("character varying", { name: "jln_wp_skp_spop", length: 30 })
  jlnWpSkpSpop!: string;

  @Column("character varying", {
    name: "blok_kav_no_wp_skp_spop",
    nullable: true,
    length: 15,
  })
  blokKavNoWpSkpSpop!: string | null;

  @Column("character", { name: "rw_wp_skp_spop", nullable: true, length: 2 })
  rwWpSkpSpop!: string | null;

  @Column("character", { name: "rt_wp_skp_spop", nullable: true, length: 3 })
  rtWpSkpSpop!: string | null;

  @Column("character varying", {
    name: "kelurahan_wp_skp_spop",
    nullable: true,
    length: 30,
  })
  kelurahanWpSkpSpop!: string | null;

  @Column("character varying", {
    name: "kota_wp_skp_spop",
    nullable: true,
    length: 30,
  })
  kotaWpSkpSpop!: string | null;

  @Column("character varying", {
    name: "kd_pos_wp_skp_spop",
    nullable: true,
    length: 5,
  })
  kdPosWpSkpSpop!: string | null;

  @Column("character varying", {
    name: "npwp_skp_spop",
    nullable: true,
    length: 15,
  })
  npwpSkpSpop!: string | null;

  @Column("character varying", {
    name: "no_persil_skp_spop",
    nullable: true,
    length: 5,
  })
  noPersilSkpSpop!: string | null;

  @Column("character", {
    name: "kd_kls_tanah",
    length: 3,
    default: () => "'XXX'",
  })
  kdKlsTanah!: string;

  @Column("character", {
    name: "thn_awal_kls_tanah",
    length: 4,
    default: () => "'1986'",
  })
  thnAwalKlsTanah!: string;

  @Column("character", {
    name: "kd_kls_bng",
    length: 3,
    default: () => "'XXX'",
  })
  kdKlsBng!: string;

  @Column("character", {
    name: "thn_awal_kls_bng",
    length: 4,
    default: () => "'1986'",
  })
  thnAwalKlsBng!: string;

  @Column("timestamp without time zone", { name: "tgl_jatuh_tempo_skp_spop" })
  tglJatuhTempoSkpSpop!: Date;

  @Column("bigint", { name: "luas_bumi_skp_spop", default: () => "0" })
  luasBumiSkpSpop!: string;

  @Column("bigint", { name: "luas_bng_skp_spop", default: () => "0" })
  luasBngSkpSpop!: string;

  @Column("bigint", { name: "njop_bumi_skp_spop", default: () => "0" })
  njopBumiSkpSpop!: string;

  @Column("bigint", { name: "njop_bng_skp_spop", default: () => "0" })
  njopBngSkpSpop!: string;

  @Column("bigint", { name: "njop_skp_spop" })
  njopSkpSpop!: string;

  @Column("integer", { name: "njoptkp_skp_spop" })
  njoptkpSkpSpop!: number;

  @Column("numeric", { name: "njkp_skp_spop", precision: 5, scale: 2 })
  njkpSkpSpop!: string;

  @Column("bigint", { name: "pbb_terhutang_skp_spop" })
  pbbTerhutangSkpSpop!: string;

  @Column("bigint", { name: "besar_denda_skp_spop" })
  besarDendaSkpSpop!: string;

  @Column("bigint", { name: "faktor_pengurang_skp_spop", nullable: true })
  faktorPengurangSkpSpop!: string | null;

  @Column("bigint", { name: "pbb_yg_harus_dibayar_skp_spop" })
  pbbYgHarusDibayarSkpSpop!: string;

  @Column("character", {
    name: "status_pembayaran_skp_spop",
    length: 1,
    default: () => "'0'",
  })
  statusPembayaranSkpSpop!: string;

  @Column("character", {
    name: "status_tagihan_skp_spop",
    length: 1,
    default: () => "'1'",
  })
  statusTagihanSkpSpop!: string;

  @Column("timestamp without time zone", { name: "tgl_terbit_skp_spop" })
  tglTerbitSkpSpop!: Date;

  @Column("timestamp without time zone", {
    name: "tgl_cetak_skp_spop",
    default: () => "statement_timestamp()",
  })
  tglCetakSkpSpop!: Date;

  @Column("character", { name: "nip_pencetak_skp_spop", length: 18 })
  nipPencetakSkpSpop!: string;
}
