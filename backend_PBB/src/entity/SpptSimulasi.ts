import { Column, Entity, Index } from "typeorm";

@Index("sppt_simulasi_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSppt"], { unique: true })
@Entity("sppt_simulasi", { schema: "public" })
export class SpptSimulasi {
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

  @Column("character", { primary: true, name: "thn_pajak_sppt", length: 4 })
  thnPajakSppt!: string;

  @Column("smallint", { name: "siklus_sppt" })
  siklusSppt!: number;

  @Column("character", { name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", { name: "kd_tp", length: 2 })
  kdTp!: string;

  @Column("character varying", { name: "nm_wp_sppt", length: 30 })
  nmWpSppt!: string;

  @Column("character varying", { name: "jln_wp_sppt", length: 30 })
  jlnWpSppt!: string;

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

  @Column("timestamp without time zone", { name: "tgl_jatuh_tempo_sppt" })
  tglJatuhTempoSppt!: Date;

  @Column("bigint", { name: "luas_bumi_sppt", default: () => "0" })
  luasBumiSppt!: string;

  @Column("bigint", { name: "luas_bng_sppt", default: () => "0" })
  luasBngSppt!: string;

  @Column("bigint", { name: "njop_bumi_sppt", default: () => "0" })
  njopBumiSppt!: string;

  @Column("bigint", { name: "njop_bng_sppt", default: () => "0" })
  njopBngSppt!: string;

  @Column("bigint", { name: "njop_sppt" })
  njopSppt!: string;

  @Column("integer", { name: "njoptkp_sppt" })
  njoptkpSppt!: number;

  @Column("bigint", { name: "pbb_terhutang_sppt" })
  pbbTerhutangSppt!: string;

  @Column("bigint", { name: "faktor_pengurang_sppt", nullable: true })
  faktorPengurangSppt!: string | null;

  @Column("bigint", { name: "pbb_yg_harus_dibayar_sppt" })
  pbbYgHarusDibayarSppt!: string;

  @Column("character", {
    name: "status_pembayaran_sppt",
    length: 1,
    default: () => "'0'",
  })
  statusPembayaranSppt!: string;

  @Column("character", {
    name: "status_tagihan_sppt",
    length: 1,
    default: () => "'0'",
  })
  statusTagihanSppt!: string;

  @Column("character", {
    name: "status_cetak_sppt",
    length: 1,
    default: () => "'0'",
  })
  statusCetakSppt!: string;

  @Column("timestamp without time zone", { name: "tgl_terbit_sppt" })
  tglTerbitSppt!: Date;

  @Column("timestamp without time zone", {
    name: "tgl_cetak_sppt",
    default: () => "statement_timestamp()",
  })
  tglCetakSppt!: Date;

  @Column("character", { name: "nip_pencetak_sppt", length: 18 })
  nipPencetakSppt!: string;
}
