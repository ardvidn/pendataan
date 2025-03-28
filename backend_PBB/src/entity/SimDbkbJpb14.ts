import { Column, Entity, Index } from "typeorm";

@Index("sim_dbkb_jpb14_pkey", ["kdDati2", "kdPropinsi", "simThnDbkbJpb14"], {
  unique: true,
})
@Entity("sim_dbkb_jpb14", { schema: "public" })
export class SimDbkbJpb14 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "sim_thn_dbkb_jpb14", length: 4 })
  simThnDbkbJpb14!: string;

  @Column("bigint", { name: "sim_nilai_dbkb_jpb14" })
  simNilaiDbkbJpb14!: string;
}
