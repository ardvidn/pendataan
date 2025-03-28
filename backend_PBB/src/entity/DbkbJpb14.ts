import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { RefDati2 } from "./RefDati2";

@Index("c40_1_ak", ["kdDati2", "kdPropinsi", "thnDbkbJpb14"], { unique: true })
@Index("dbkb_jpb14_pkey", ["kdDati2", "kdPropinsi", "thnDbkbJpb14"], {
  unique: true,
})
@Entity("dbkb_jpb14", { schema: "public" })
export class DbkbJpb14 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "thn_dbkb_jpb14", length: 4 })
  thnDbkbJpb14!: string;

  @Column("bigint", { name: "nilai_dbkb_jpb14" })
  nilaiDbkbJpb14!: string;

  @ManyToOne(() => RefDati2, (refDati2) => refDati2.dbkbJpbs3)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
  ])
  refDati!: RefDati2;
}
