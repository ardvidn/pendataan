import { Column, Entity } from "typeorm";

@Entity("z_his_sppt", { schema: "public" })
export class ZHisSppt {
  @Column("character", { name: "kd_propinsi", nullable: true, length: 2 })
  kdPropinsi!: string | null;

  @Column("character", { name: "kd_dati2", nullable: true, length: 2 })
  kdDati2!: string | null;

  @Column("character", { name: "kd_kecamatan", nullable: true, length: 3 })
  kdKecamatan!: string | null;

  @Column("character", { name: "kd_kelurahan", nullable: true, length: 3 })
  kdKelurahan!: string | null;

  @Column("character", { name: "kd_blok", nullable: true, length: 3 })
  kdBlok!: string | null;

  @Column("character", { name: "no_urut", nullable: true, length: 4 })
  noUrut!: string | null;

  @Column("character", { name: "kd_jns_op", nullable: true, length: 1 })
  kdJnsOp!: string | null;

  @Column("character", { name: "thn_pajak_sppt", nullable: true, length: 4 })
  thnPajakSppt!: string | null;

  @Column("smallint", { name: "his_sppt_ke", nullable: true })
  hisSpptKe!: number | null;

  @Column("smallint", { name: "siklus_sppt", nullable: true })
  siklusSppt!: number | null;

  @Column("character", { name: "kd_kanwil", nullable: true, length: 2 })
  kdKanwil!: string | null;

  @Column("character", { name: "kd_kantor", nullable: true, length: 2 })
  kdKantor!: string | null;

  @Column("character", { name: "kd_tp", nullable: true, length: 2 })
  kdTp!: string | null;

  @Column("character varying", {
    name: "nm_wp_sppt",
    nullable: true,
    length: 30,
  })
  nmWpSppt!: string | null;

  @Column("character varying", {
    name: "jln_wp_sppt",
    nullable: true,
    length: 30,
  })
  jlnWpSppt!: string | null;

  @Column("character varying", {
    name: "blok_kav_no_wp_sppt",
    nullable: true,
    length: 15,
  })
  blokKavNoWpSppt!: string | null;

  @Column("character", { name: "rw_wp_sppt", nullable: true, length: 2 })
  rwWpSppt!: string | null;

  @Column("character", { name: "rt_wp_sppt", nullable: true, length: 3 })
  rtWpSppt!: string | null;

  @Column("character varying", {
    name: "kelurahan_wp_sppt",
    nullable: true,
    length: 30,
  })
  kelurahanWpSppt!: string | null;

  @Column("character varying", {
    name: "kota_wp_sppt",
    nullable: true,
    length: 30,
  })
  kotaWpSppt!: string | null;

  @Column("character varying", {
    name: "kd_pos_wp_sppt",
    nullable: true,
    length: 5,
  })
  kdPosWpSppt!: string | null;

  @Column("character varying", {
    name: "npwp_sppt",
    nullable: true,
    length: 15,
  })
  npwpSppt!: string | null;

  @Column("character varying", {
    name: "no_persil_sppt",
    nullable: true,
    length: 5,
  })
  noPersilSppt!: string | null;

  @Column("character", {
    name: "kd_kls_tanah",
    nullable: true,
    length: 3,
    default: () => "'XXX'",
  })
  kdKlsTanah!: string | null;

  @Column("character", {
    name: "thn_awal_kls_tanah",
    nullable: true,
    length: 4,
    default: () => "'1986'",
  })
  thnAwalKlsTanah!: string | null;

  @Column("character", {
    name: "kd_kls_bng",
    nullable: true,
    length: 3,
    default: () => "'XXX'",
  })
  kdKlsBng!: string | null;

  @Column("character", {
    name: "thn_awal_kls_bng",
    nullable: true,
    length: 4,
    default: () => "'1986'",
  })
  thnAwalKlsBng!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_jatuh_tempo_sppt",
    nullable: true,
  })
  tglJatuhTempoSppt!: Date | null;

  @Column("bigint", {
    name: "luas_bumi_sppt",
    nullable: true,
    default: () => "0",
  })
  luasBumiSppt!: string | null;

  @Column("bigint", {
    name: "luas_bng_sppt",
    nullable: true,
    default: () => "0",
  })
  luasBngSppt!: string | null;

  @Column("bigint", {
    name: "njop_bumi_sppt",
    nullable: true,
    default: () => "0",
  })
  njopBumiSppt!: string | null;

  @Column("bigint", {
    name: "njop_bng_sppt",
    nullable: true,
    default: () => "0",
  })
  njopBngSppt!: string | null;

  @Column("bigint", { name: "njop_sppt", nullable: true })
  njopSppt!: string | null;

  @Column("integer", { name: "njoptkp_sppt", nullable: true })
  njoptkpSppt!: number | null;

  @Column("bigint", { name: "pbb_terhutang_sppt", nullable: true })
  pbbTerhutangSppt!: string | null;

  @Column("bigint", { name: "faktor_pengurang_sppt", nullable: true })
  faktorPengurangSppt!: string | null;

  @Column("bigint", { name: "pbb_yg_harus_dibayar_sppt", nullable: true })
  pbbYgHarusDibayarSppt!: string | null;

  @Column("character", {
    name: "status_pembayaran_sppt",
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  statusPembayaranSppt!: string | null;

  @Column("character", {
    name: "status_tagihan_sppt",
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  statusTagihanSppt!: string | null;

  @Column("character", {
    name: "status_cetak_sppt",
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  statusCetakSppt!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_terbit_sppt",
    nullable: true,
  })
  tglTerbitSppt!: Date | null;

  @Column("timestamp without time zone", {
    name: "tgl_cetak_sppt",
    nullable: true,
  })
  tglCetakSppt!: Date | null;

  @Column("character", {
    name: "nip_pencetak_sppt",
    nullable: true,
    length: 18,
  })
  nipPencetakSppt!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_rekam_his_sppt",
    nullable: true,
    default: () => "statement_timestamp()",
  })
  tglRekamHisSppt!: Date | null;

  @Column("character", {
    name: "nip_rekam_his_sppt",
    nullable: true,
    length: 18,
  })
  nipRekamHisSppt!: string | null;
}
