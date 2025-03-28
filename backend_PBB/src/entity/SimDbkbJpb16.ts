import { Column, Entity, Index } from "typeorm";

@Index("sim_dbkb_jpb16_pkey", ["kdDati2", "kdPropinsi", "simKlsDbkbJpb16", "simLantaiMaxJpb16", "simLantaiMinJpb16", "simThnDbkbJpb16"], { unique: true })
@Entity("sim_dbkb_jpb16", { schema: "public" })
export class SimDbkbJpb16 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "sim_thn_dbkb_jpb16", length: 4 })
  simThnDbkbJpb16!: string;

  @Column("character", { primary: true, name: "sim_kls_dbkb_jpb16", length: 1 })
  simKlsDbkbJpb16!: string;

  @Column("smallint", { primary: true, name: "sim_lantai_min_jpb16" })
  simLantaiMinJpb16!: number;

  @Column("smallint", { primary: true, name: "sim_lantai_max_jpb16" })
  simLantaiMaxJpb16!: number;

  @Column("bigint", { name: "sim_nilai_dbkb_jpb16" })
  simNilaiDbkbJpb16!: string;
}
