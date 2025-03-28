import { Column, Entity, Index } from "typeorm";

@Index("sim_dbkb_jpb6_pkey", ["kdDati2", "kdPropinsi", "simKlsDbkbJpb6", "simThnDbkbJpb6"], { unique: true })
@Entity("sim_dbkb_jpb6", { schema: "public" })
export class SimDbkbJpb6 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "sim_thn_dbkb_jpb6", length: 4 })
  simThnDbkbJpb6!: string;

  @Column("character", { primary: true, name: "sim_kls_dbkb_jpb6", length: 1 })
  simKlsDbkbJpb6!: string;

  @Column("bigint", { name: "sim_nilai_dbkb_jpb6" })
  simNilaiDbkbJpb6!: string;
}
