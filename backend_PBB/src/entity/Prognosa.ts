import { Column, Entity, Index } from "typeorm";

@Index("prognosa_pkey", ["kdDati2", "kdPropinsi", "kdSektor", "thnAnggaranPrognosa"], { unique: true })
@Index("k2_2_ak", ["kdDati2", "kdPropinsi", "kdSektor", "thnAnggaranPrognosa"], { unique: true })
@Index("k2_1_ak", ["kdDati2", "kdPropinsi", "kdSektor", "thnAnggaranPrognosa"], { unique: true })
@Entity("prognosa", { schema: "public" })
export class Prognosa {
  @Column("character", { primary: true, name: "kd_sektor", length: 2 })
  kdSektor!: string;

  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", {
    primary: true,
    name: "thn_anggaran_prognosa",
    length: 4,
  })
  thnAnggaranPrognosa!: string;

  @Column("bigint", { name: "jml_prognosa" })
  jmlPrognosa!: string;

  @Column("timestamp without time zone", {
    name: "tgl_rekam_prognosa",
    default: () => "statement_timestamp()",
  })
  tglRekamPrognosa!: Date;

  @Column("character", { name: "nip_rekam_trm_prognosa", length: 18 })
  nipRekamTrmPrognosa!: string;
}
