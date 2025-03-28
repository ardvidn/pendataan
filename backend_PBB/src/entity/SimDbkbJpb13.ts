import { Column, Entity, Index } from "typeorm";

@Index("sim_dbkb_jpb13_pkey", ["kdDati2", "kdPropinsi", "simKlsDbkbJpb13", "simLantaiMaxJpb13", "simLantaiMinJpb13", "simThnDbkbJpb13"], { unique: true })
@Entity("sim_dbkb_jpb13", { schema: "public" })
export class SimDbkbJpb13 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "sim_thn_dbkb_jpb13", length: 4 })
  simThnDbkbJpb13!: string;

  @Column("character", { primary: true, name: "sim_kls_dbkb_jpb13", length: 1 })
  simKlsDbkbJpb13!: string;

  @Column("smallint", { primary: true, name: "sim_lantai_min_jpb13" })
  simLantaiMinJpb13!: number;

  @Column("smallint", { primary: true, name: "sim_lantai_max_jpb13" })
  simLantaiMaxJpb13!: number;

  @Column("bigint", { name: "sim_nilai_dbkb_jpb13" })
  simNilaiDbkbJpb13!: string;
}
