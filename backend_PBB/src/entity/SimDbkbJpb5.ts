import { Column, Entity, Index } from "typeorm";

@Index("sim_dbkb_jpb5_pkey", ["kdDati2", "kdPropinsi", "simKlsDbkbJpb5", "simLantaiMaxJpb5", "simLantaiMinJpb5", "simThnDbkbJpb5"], { unique: true })
@Entity("sim_dbkb_jpb5", { schema: "public" })
export class SimDbkbJpb5 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "sim_thn_dbkb_jpb5", length: 4 })
  simThnDbkbJpb5!: string;

  @Column("character", { primary: true, name: "sim_kls_dbkb_jpb5", length: 1 })
  simKlsDbkbJpb5!: string;

  @Column("smallint", { primary: true, name: "sim_lantai_min_jpb5" })
  simLantaiMinJpb5!: number;

  @Column("smallint", { primary: true, name: "sim_lantai_max_jpb5" })
  simLantaiMaxJpb5!: number;

  @Column("bigint", { name: "sim_nilai_dbkb_jpb5" })
  simNilaiDbkbJpb5!: string;
}
