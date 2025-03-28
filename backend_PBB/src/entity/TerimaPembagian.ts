import { Column, Entity, Index } from "typeorm";

@Index("terima_pembagian_pkey", ["bulanPembagian", "kdDati2", "kdPenerima", "kdPropinsi", "kdSektor", "mingguKePembagian", "pembagianKe", "tahunPembagian"], { unique: true })
@Index("k4_pk2", ["bulanPembagian", "kdDati2", "kdPenerima", "kdPropinsi", "kdSektor", "mingguKePembagian", "pembagianKe", "tahunPembagian"], { unique: true })
@Index("k4_1_ak", ["bulanPembagian", "kdDati2", "kdPenerima", "kdPropinsi", "kdSektor", "mingguKePembagian", "pembagianKe", "tahunPembagian"], { unique: true })
@Entity("terima_pembagian", { schema: "public" })
export class TerimaPembagian {
  @Column("character", { primary: true, name: "kd_sektor", length: 2 })
  kdSektor!: string;

  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "tahun_pembagian", length: 4 })
  tahunPembagian!: string;

  @Column("character", { primary: true, name: "bulan_pembagian", length: 2 })
  bulanPembagian!: string;

  @Column("character", {
    primary: true,
    name: "minggu_ke_pembagian",
    length: 2,
  })
  mingguKePembagian!: string;

  @Column("smallint", { primary: true, name: "pembagian_ke" })
  pembagianKe!: number;

  @Column("character", { primary: true, name: "kd_penerima", length: 1 })
  kdPenerima!: string;

  @Column("character", { name: "no_nota_debet_pembagian", length: 30 })
  noNotaDebetPembagian!: string;

  @Column("timestamp without time zone", { name: "tgl_nota_debet_pembagian" })
  tglNotaDebetPembagian!: Date;

  @Column("bigint", { name: "besar_pembagian" })
  besarPembagian!: string;

  @Column("timestamp without time zone", {
    name: "tgl_rekam_pembagian",
    default: () => "statement_timestamp()",
  })
  tglRekamPembagian!: Date;

  @Column("character", { name: "nip_rekam_trm_bagi", length: 18 })
  nipRekamTrmBagi!: string;
}
