import { Column, Entity, Index } from "typeorm";

@Index("x5_1_ak", ["hisIndeksPerubahanSkpKb", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSkpKb"], { unique: true })
@Index("his_skp_kurang_bayar_pkey", ["hisIndeksPerubahanSkpKb", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSkpKb"], { unique: true })
@Index("x5_2_ak", ["hisIndeksPerubahanSkpKb", "jnsSk", "kdBlok", "kdDati2", "kdJnsOp", "kdKantor", "kdKanwil", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakSkpKb"], { unique: true })
@Index("x5_l6_fk", ["jnsSk", "kdKantor", "kdKanwil", "noSk"], {})
@Entity("his_skp_kurang_bayar", { schema: "public" })
export class HisSkpKurangBayar {
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

  @Column("character", { primary: true, name: "thn_pajak_skp_kb", length: 4 })
  thnPajakSkpKb!: string;

  @Column("smallint", { primary: true, name: "his_indeks_perubahan_skp_kb" })
  hisIndeksPerubahanSkpKb!: number;

  @Column("smallint", { name: "his_siklus_skp_kb" })
  hisSiklusSkpKb!: number;

  @Column("character", { name: "kd_kanwil", nullable: true, length: 2 })
  kdKanwil!: string | null;

  @Column("character", { name: "kd_kantor", nullable: true, length: 2 })
  kdKantor!: string | null;

  @Column("character", { name: "jns_sk", nullable: true, length: 1 })
  jnsSk!: string | null;

  @Column("character", { name: "no_sk", nullable: true, length: 30 })
  noSk!: string | null;

  @Column("character", { name: "his_kd_tp", length: 2 })
  hisKdTp!: string;

  @Column("character", { name: "his_kd_kls_tanah", length: 3 })
  hisKdKlsTanah!: string;

  @Column("character", { name: "his_thn_awal_kls_tanah", length: 4 })
  hisThnAwalKlsTanah!: string;

  @Column("character", { name: "his_kd_kls_bng", length: 3 })
  hisKdKlsBng!: string;

  @Column("character", { name: "his_thn_awal_kls_bng", length: 4 })
  hisThnAwalKlsBng!: string;

  @Column("timestamp without time zone", { name: "his_tgl_jatuh_tempo_skp_kb" })
  hisTglJatuhTempoSkpKb!: Date;

  @Column("bigint", { name: "his_luas_bumi_skp_kb" })
  hisLuasBumiSkpKb!: string;

  @Column("bigint", { name: "his_luas_bng_skp_kb" })
  hisLuasBngSkpKb!: string;

  @Column("bigint", { name: "his_njop_bumi_skp_kb" })
  hisNjopBumiSkpKb!: string;

  @Column("bigint", { name: "his_njop_bng_skp_kb" })
  hisNjopBngSkpKb!: string;

  @Column("bigint", { name: "his_njop_skp_kb" })
  hisNjopSkpKb!: string;

  @Column("integer", { name: "his_njoptkp_skp_kb" })
  hisNjoptkpSkpKb!: number;

  @Column("numeric", { name: "his_njkp_skp_kb", precision: 5, scale: 2 })
  hisNjkpSkpKb!: string;

  @Column("bigint", { name: "his_pbb_terhutang_skp_kb" })
  hisPbbTerhutangSkpKb!: string;

  @Column("bigint", { name: "his_besar_denda_skp_kb" })
  hisBesarDendaSkpKb!: string;

  @Column("bigint", { name: "his_faktor_pengurang_skp_kb", nullable: true })
  hisFaktorPengurangSkpKb!: string | null;

  @Column("bigint", { name: "his_pbb_yg_harus_dibyr_skp_kb" })
  hisPbbYgHarusDibyrSkpKb!: string;

  @Column("bigint", { name: "his_pbb_sppt" })
  hisPbbSppt!: string;

  @Column("bigint", { name: "his_selisih_pembayaran_skp_kb" })
  hisSelisihPembayaranSkpKb!: string;

  @Column("character", { name: "his_status_pembayaran_skp_kb", length: 1 })
  hisStatusPembayaranSkpKb!: string;

  @Column("timestamp without time zone", { name: "his_tgl_terbit_skp_kb" })
  hisTglTerbitSkpKb!: Date;

  @Column("timestamp without time zone", { name: "his_tgl_cetak_skp_kb" })
  hisTglCetakSkpKb!: Date;

  @Column("character", { name: "his_nip_pencetak_skp_kb", length: 18 })
  hisNipPencetakSkpKb!: string;
}
