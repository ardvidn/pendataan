import { Column, Entity, Index } from "typeorm";

@Index("sim_dbkb_jpb4_pkey", ["kdDati2", "kdPropinsi", "simKlsDbkbJpb4", "simLantaiMaxJpb4", "simLantaiMinJpb4", "simThnDbkbJpb4"], { unique: true })
@Entity("sim_dbkb_jpb4", { schema: "public" })
export class SimDbkbJpb4 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "sim_thn_dbkb_jpb4", length: 4 })
  simThnDbkbJpb4!: string;

  @Column("character", { primary: true, name: "sim_kls_dbkb_jpb4", length: 1 })
  simKlsDbkbJpb4!: string;

  @Column("smallint", { primary: true, name: "sim_lantai_min_jpb4" })
  simLantaiMinJpb4!: number;

  @Column("smallint", { primary: true, name: "sim_lantai_max_jpb4" })
  simLantaiMaxJpb4!: number;

  @Column("bigint", { name: "sim_nilai_dbkb_jpb4" })
  simNilaiDbkbJpb4!: string;
}
