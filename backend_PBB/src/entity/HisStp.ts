import { Column, Entity, Index } from "typeorm";

@Index("x7_1_ak", ["indeksPerubahanStp", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakStp"], { unique: true })
@Index("his_stp_pkey", ["indeksPerubahanStp", "kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "thnPajakStp"], { unique: true })
@Index("x7_l6_fk", ["jnsSk", "kdKantor", "kdKanwil", "noSk"], {})
@Entity("his_stp", { schema: "public" })
export class HisStp {
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

  @Column("character", { primary: true, name: "thn_pajak_stp", length: 4 })
  thnPajakStp!: string;

  @Column("smallint", { primary: true, name: "indeks_perubahan_stp" })
  indeksPerubahanStp!: number;

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

  @Column("timestamp without time zone", { name: "his_tgl_jatuh_tempo_stp" })
  hisTglJatuhTempoStp!: Date;

  @Column("timestamp without time zone", { name: "his_tgl_terbit_stp" })
  hisTglTerbitStp!: Date;

  @Column("bigint", { name: "his_sisa_pajak_terhutang_stp" })
  hisSisaPajakTerhutangStp!: string;

  @Column("smallint", { name: "his_jml_lambat_bulan_denda_stp" })
  hisJmlLambatBulanDendaStp!: number;

  @Column("bigint", { name: "his_rupiah_denda_stp" })
  hisRupiahDendaStp!: string;

  @Column("bigint", { name: "his_jml_pajak_terhutang_stp" })
  hisJmlPajakTerhutangStp!: string;

  @Column("smallint", { name: "his_persetujuan_stp_kp_pbb" })
  hisPersetujuanStpKpPbb!: number;

  @Column("character", { name: "his_kd_jns_ketetapan", length: 1 })
  hisKdJnsKetetapan!: string;

  @Column("timestamp without time zone", { name: "his_tgl_cetak_stp" })
  hisTglCetakStp!: Date;

  @Column("character", { name: "his_nip_pencetak_stp", length: 18 })
  hisNipPencetakStp!: string;
}
