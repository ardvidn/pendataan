import { Column, Entity, Index } from "typeorm";

@Index("k7_1_ak", ["jnsMataAnggaran", "kdDati2", "kdMataAnggaran", "kdPropinsi"], { unique: true })
@Index("ref_mata_anggaran_pkey", ["jnsMataAnggaran", "kdDati2", "kdMataAnggaran", "kdPropinsi"], { unique: true })
@Entity("ref_mata_anggaran", { schema: "public" })
export class RefMataAnggaran {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "jns_mata_anggaran", length: 1 })
  jnsMataAnggaran!: string;

  @Column("character", { primary: true, name: "kd_mata_anggaran", length: 4 })
  kdMataAnggaran!: string;

  @Column("character varying", { name: "nm_mata_anggaran", length: 30 })
  nmMataAnggaran!: string;

  @Column("character varying", {
    name: "rekening_kas_negara",
    nullable: true,
    length: 30,
  })
  rekeningKasNegara!: string | null;
}
