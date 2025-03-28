import { Column, Entity, Index } from "typeorm";

@Index("sim_dbkb_jpb2_pkey", ["kdDati2", "kdPropinsi", "simKlsDbkbJpb2", "simLantaiMaxJpb2", "simLantaiMinJpb2", "simThnDbkbJpb2"], { unique: true })
@Entity("sim_dbkb_jpb2", { schema: "public" })
export class SimDbkbJpb2 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "sim_thn_dbkb_jpb2", length: 4 })
  simThnDbkbJpb2!: string;

  @Column("character", { primary: true, name: "sim_kls_dbkb_jpb2", length: 1 })
  simKlsDbkbJpb2!: string;

  @Column("smallint", { primary: true, name: "sim_lantai_min_jpb2" })
  simLantaiMinJpb2!: number;

  @Column("smallint", { primary: true, name: "sim_lantai_max_jpb2" })
  simLantaiMaxJpb2!: number;

  @Column("bigint", { name: "sim_nilai_dbkb_jpb2" })
  simNilaiDbkbJpb2!: string;
}
