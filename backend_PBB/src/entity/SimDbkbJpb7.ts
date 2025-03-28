import { Column, Entity, Index } from "typeorm";

@Index("sim_dbkb_jpb7_pkey", ["kdDati2", "kdPropinsi", "simBintangDbkbJpb7", "simJnsDbkbJpb7", "simLantaiMaxJpb7", "simLantaiMinJpb7", "simThnDbkbJpb7"], { unique: true })
@Entity("sim_dbkb_jpb7", { schema: "public" })
export class SimDbkbJpb7 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "sim_thn_dbkb_jpb7", length: 4 })
  simThnDbkbJpb7!: string;

  @Column("character", { primary: true, name: "sim_jns_dbkb_jpb7", length: 1 })
  simJnsDbkbJpb7!: string;

  @Column("character", {
    primary: true,
    name: "sim_bintang_dbkb_jpb7",
    length: 1,
  })
  simBintangDbkbJpb7!: string;

  @Column("smallint", { primary: true, name: "sim_lantai_min_jpb7" })
  simLantaiMinJpb7!: number;

  @Column("smallint", { primary: true, name: "sim_lantai_max_jpb7" })
  simLantaiMaxJpb7!: number;

  @Column("bigint", { name: "sim_nilai_dbkb_jpb7" })
  simNilaiDbkbJpb7!: string;
}
