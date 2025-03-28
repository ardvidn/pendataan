import { Column, Entity, Index } from "typeorm";

@Index("x3_1_ak", ["hisIndeksPerubahanSkpSpop", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSkpSpop"], { unique: true })
@Index("his_skp_spop_pkey", ["hisIndeksPerubahanSkpSpop", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSkpSpop"], { unique: true })
@Index("x3_l6_fk", ["jnsSk", "kdKantor", "kdKanwil", "noSk"], {})
@Entity("his_skp_spop", { schema: "public" })
export class HisSkpSpop {
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

  @Column("smallint", { primary: true, name: "his_indeks_perubahan_skp_spop" })
  hisIndeksPerubahanSkpSpop!: number;

  @Column("smallint", { name: "his_siklus_skp_spop" })
  hisSiklusSkpSpop!: number;

  @Column("character", { name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", { name: "jns_sk", length: 1 })
  jnsSk!: string;

  @Column("character", { name: "no_sk", length: 30 })
  noSk!: string;

  @Column("character", { name: "his_kd_tp", length: 2 })
  hisKdTp!: string;

  @Column("character varying", { name: "his_nm_wp_skp_spop", length: 30 })
  hisNmWpSkpSpop!: string;

  @Column("character varying", { name: "his_jln_wp_skp_spop", length: 30 })
  hisJlnWpSkpSpop!: string;

  @Column("character varying", {
    name: "his_blok_kav_no_wp_skp_spop",
    nullable: true,
    length: 15,
  })
  hisBlokKavNoWpSkpSpop!: string | null;

  @Column("character", {
    name: "his_rw_wp_skp_spop",
    nullable: true,
    length: 2,
  })
  hisRwWpSkpSpop!: string | null;

  @Column("character", {
    name: "his_rt_wp_skp_spop",
    nullable: true,
    length: 3,
  })
  hisRtWpSkpSpop!: string | null;

  @Column("character varying", {
    name: "his_kelurahan_wp_skp_spop",
    nullable: true,
    length: 30,
  })
  hisKelurahanWpSkpSpop!: string | null;

  @Column("character varying", {
    name: "his_kota_wp_skp_spop",
    nullable: true,
    length: 30,
  })
  hisKotaWpSkpSpop!: string | null;

  @Column("character varying", {
    name: "his_kd_pos_wp_skp_spop",
    nullable: true,
    length: 5,
  })
  hisKdPosWpSkpSpop!: string | null;

  @Column("character varying", {
    name: "his_npwp_skp_spop",
    nullable: true,
    length: 15,
  })
  hisNpwpSkpSpop!: string | null;

  @Column("character varying", {
    name: "his_no_persil_skp_spop",
    nullable: true,
    length: 5,
  })
  hisNoPersilSkpSpop!: string | null;

  @Column("character", { name: "his_kd_kls_tanah", length: 3 })
  hisKdKlsTanah!: string;

  @Column("character", { name: "his_thn_awal_kls_tanah", length: 4 })
  hisThnAwalKlsTanah!: string;

  @Column("character", { name: "his_kd_kls_bng", length: 3 })
  hisKdKlsBng!: string;

  @Column("character", { name: "his_thn_awal_kls_bng", length: 4 })
  hisThnAwalKlsBng!: string;

  @Column("timestamp without time zone", {
    name: "his_tgl_jatuh_tempo_skp_spop",
  })
  hisTglJatuhTempoSkpSpop!: Date;

  @Column("bigint", { name: "his_luas_bumi_skp_spop" })
  hisLuasBumiSkpSpop!: string;

  @Column("bigint", { name: "his_luas_bng_skp_spop" })
  hisLuasBngSkpSpop!: string;

  @Column("bigint", { name: "his_njop_bumi_skp_spop" })
  hisNjopBumiSkpSpop!: string;

  @Column("bigint", { name: "his_njop_bng_skp_spop" })
  hisNjopBngSkpSpop!: string;

  @Column("bigint", { name: "his_njop_skp_spop" })
  hisNjopSkpSpop!: string;

  @Column("integer", { name: "his_njoptkp_skp_spop" })
  hisNjoptkpSkpSpop!: number;

  @Column("numeric", { name: "his_njkp_skp_spop", precision: 5, scale: 2 })
  hisNjkpSkpSpop!: string;

  @Column("bigint", { name: "his_pbb_terhutang_skp_spop" })
  hisPbbTerhutangSkpSpop!: string;

  @Column("bigint", { name: "his_besar_denda_skp_spop" })
  hisBesarDendaSkpSpop!: string;

  @Column("bigint", { name: "his_faktor_pengurang_skp_spop", nullable: true })
  hisFaktorPengurangSkpSpop!: string | null;

  @Column("bigint", { name: "his_pbb_yg_harus_dibyr_skpspop" })
  hisPbbYgHarusDibyrSkpspop!: string;

  @Column("character", { name: "his_status_pembayaran_skp_spop", length: 1 })
  hisStatusPembayaranSkpSpop!: string;

  @Column("character", { name: "his_status_tagihan_skp_spop", length: 1 })
  hisStatusTagihanSkpSpop!: string;

  @Column("timestamp without time zone", { name: "his_tgl_terbit_skp_spop" })
  hisTglTerbitSkpSpop!: Date;

  @Column("timestamp without time zone", { name: "his_tgl_cetak_skp_spop" })
  hisTglCetakSkpSpop!: Date;

  @Column("character", { name: "his_nip_cetak_skp_spop", length: 18 })
  hisNipCetakSkpSpop!: string;
}
