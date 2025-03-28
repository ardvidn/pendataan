import { Column, Entity, Index } from "typeorm";

@Index("k1_1_ak", ["bulanPenerimaan", "jnsPenerimaan", "kdDati2", "kdPropinsi", "kdSektor", "mingguKePenerimaan", "penerimaanKe", "tahunPenerimaan"], { unique: true })
@Index("penerimaan_pkey", ["bulanPenerimaan", "kdDati2", "kdPropinsi", "kdSektor", "mingguKePenerimaan", "penerimaanKe", "tahunPenerimaan"], { unique: true })
@Index("k1_2_ak", ["bulanPenerimaan", "jnsPenerimaan", "kdDati2", "kdPropinsi", "kdSektor", "mingguKePenerimaan", "penerimaanKe", "tahunPenerimaan"], { unique: true })
@Entity("penerimaan", { schema: "public" })
export class Penerimaan {
  @Column("character", { primary: true, name: "kd_sektor", length: 2 })
  kdSektor!: string;

  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "tahun_penerimaan", length: 4 })
  tahunPenerimaan!: string;

  @Column("character", { primary: true, name: "bulan_penerimaan", length: 2 })
  bulanPenerimaan!: string;

  @Column("character", {
    primary: true,
    name: "minggu_ke_penerimaan",
    length: 2,
  })
  mingguKePenerimaan!: string;

  @Column("smallint", { primary: true, name: "penerimaan_ke" })
  penerimaanKe!: number;

  @Column("character", { name: "jns_penerimaan", length: 1 })
  jnsPenerimaan!: string;

  @Column("bigint", { name: "besar_penerimaan" })
  besarPenerimaan!: string;

  @Column("timestamp without time zone", {
    name: "tgl_rekam_penerimaan",
    default: () => "statement_timestamp()",
  })
  tglRekamPenerimaan!: Date;

  @Column("character", { name: "nip_rekam_trm_penerimaan", length: 18 })
  nipRekamTrmPenerimaan!: string;
}
