import { Column, Entity, Index } from "typeorm";

@Index("x1_3_ak", ["hisIndeksPerubahanSppt", "hisKdKlsBng", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSppt"], { unique: true })
@Index("x1_1_ak", ["hisIndeksPerubahanSppt", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSppt"], { unique: true })
@Index("x1_2_ak", ["hisIndeksPerubahanSppt", "hisKdKlsTanah", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSppt"], { unique: true })
@Index("his_sppt_pkey", ["hisIndeksPerubahanSppt", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSppt"], { unique: true })
@Index("x1_l6_fk", ["jnsSk", "kdKantor", "kdKanwil", "noSk"], {})
@Entity("his_sppt", { schema: "public" })
export class HisSppt {
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

  @Column("smallint", { primary: true, name: "his_indeks_perubahan_sppt" })
  hisIndeksPerubahanSppt!: number;

  @Column("smallint", { name: "his_siklus_sppt" })
  hisSiklusSppt!: number;

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

  @Column("character varying", { name: "his_nm_wp_sppt", length: 30 })
  hisNmWpSppt!: string;

  @Column("character varying", { name: "his_jln_wp_sppt", length: 30 })
  hisJlnWpSppt!: string;

  @Column("character varying", {
    name: "his_blok_kav_no_wp_sppt",
    nullable: true,
    length: 15,
  })
  hisBlokKavNoWpSppt!: string | null;

  @Column("character", { name: "his_rw_wp_sppt", nullable: true, length: 2 })
  hisRwWpSppt!: string | null;

  @Column("character", { name: "his_rt_wp_sppt", nullable: true, length: 3 })
  hisRtWpSppt!: string | null;

  @Column("character varying", {
    name: "his_kelurahan_wp_sppt",
    nullable: true,
    length: 30,
  })
  hisKelurahanWpSppt!: string | null;

  @Column("character varying", {
    name: "his_kota_wp_sppt",
    nullable: true,
    length: 30,
  })
  hisKotaWpSppt!: string | null;

  @Column("character varying", {
    name: "his_kd_pos_wp_sppt",
    nullable: true,
    length: 5,
  })
  hisKdPosWpSppt!: string | null;

  @Column("character varying", {
    name: "his_npwp_sppt",
    nullable: true,
    length: 15,
  })
  hisNpwpSppt!: string | null;

  @Column("character varying", {
    name: "his_no_persil_sppt",
    nullable: true,
    length: 5,
  })
  hisNoPersilSppt!: string | null;

  @Column("character", { name: "his_kd_kls_tanah", length: 3 })
  hisKdKlsTanah!: string;

  @Column("character", { name: "his_thn_awal_kls_tanah", length: 4 })
  hisThnAwalKlsTanah!: string;

  @Column("character", { name: "his_kd_kls_bng", length: 3 })
  hisKdKlsBng!: string;

  @Column("character", { name: "his_thn_awal_kls_bng", length: 4 })
  hisThnAwalKlsBng!: string;

  @Column("timestamp without time zone", { name: "his_tgl_jatuh_tempo_sppt" })
  hisTglJatuhTempoSppt!: Date;

  @Column("bigint", { name: "his_luas_bumi_sppt" })
  hisLuasBumiSppt!: string;

  @Column("bigint", { name: "his_luas_bng_sppt" })
  hisLuasBngSppt!: string;

  @Column("bigint", { name: "his_njop_bumi_sppt" })
  hisNjopBumiSppt!: string;

  @Column("bigint", { name: "his_njop_bng_sppt" })
  hisNjopBngSppt!: string;

  @Column("bigint", { name: "his_njop_sppt" })
  hisNjopSppt!: string;

  @Column("integer", { name: "his_njoptkp_sppt" })
  hisNjoptkpSppt!: number;

  @Column("bigint", { name: "his_pbb_terhutang_sppt" })
  hisPbbTerhutangSppt!: string;

  @Column("bigint", { name: "his_faktor_pengurang_sppt", nullable: true })
  hisFaktorPengurangSppt!: string | null;

  @Column("bigint", { name: "his_pbb_yg_harus_dibayar_sppt" })
  hisPbbYgHarusDibayarSppt!: string;

  @Column("character", { name: "his_status_pembayaran_sppt", length: 1 })
  hisStatusPembayaranSppt!: string;

  @Column("character", { name: "his_status_tagihan_sppt", length: 1 })
  hisStatusTagihanSppt!: string;

  @Column("timestamp without time zone", { name: "his_tgl_terbit_sppt" })
  hisTglTerbitSppt!: Date;

  @Column("timestamp without time zone", { name: "his_tgl_cetak_sppt" })
  hisTglCetakSppt!: Date;

  @Column("character", { name: "his_nip_pencetak_sppt", length: 18 })
  hisNipPencetakSppt!: string;
}
