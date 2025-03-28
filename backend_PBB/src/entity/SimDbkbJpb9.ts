import { Column, Entity, Index } from "typeorm";

@Index("sim_dbkb_jpb9_pkey", ["kdDati2", "kdPropinsi", "simKlsDbkbJpb9", "simLantaiMaxJpb9", "simLantaiMinJpb9", "simThnDbkbJpb9"], { unique: true })
@Entity("sim_dbkb_jpb9", { schema: "public" })
export class SimDbkbJpb9 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "sim_thn_dbkb_jpb9", length: 4 })
  simThnDbkbJpb9!: string;

  @Column("character", { primary: true, name: "sim_kls_dbkb_jpb9", length: 1 })
  simKlsDbkbJpb9!: string;

  @Column("smallint", { primary: true, name: "sim_lantai_min_jpb9" })
  simLantaiMinJpb9!: number;

  @Column("smallint", { primary: true, name: "sim_lantai_max_jpb9" })
  simLantaiMaxJpb9!: number;

  @Column("bigint", { name: "sim_nilai_dbkb_jpb9" })
  simNilaiDbkbJpb9!: string;
}
