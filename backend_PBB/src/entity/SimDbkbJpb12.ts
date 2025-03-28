import { Column, Entity, Index } from "typeorm";

@Index("sim_dbkb_jpb12_pkey", ["kdDati2", "kdPropinsi", "simThnDbkbJpb12", "simTypeDbkbJpb12"], { unique: true })
@Entity("sim_dbkb_jpb12", { schema: "public" })
export class SimDbkbJpb12 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "sim_thn_dbkb_jpb12", length: 4 })
  simThnDbkbJpb12!: string;

  @Column("character", {
    primary: true,
    name: "sim_type_dbkb_jpb12",
    length: 1,
  })
  simTypeDbkbJpb12!: string;

  @Column("bigint", { name: "sim_nilai_dbkb_jpb12" })
  simNilaiDbkbJpb12!: string;
}
