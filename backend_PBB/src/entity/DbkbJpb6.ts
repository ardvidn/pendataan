import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { RefDati2 } from "./RefDati2";

@Index("c32_2_ak", ["kdDati2", "kdPropinsi", "klsDbkbJpb6", "thnDbkbJpb6"], {
  unique: true,
})
@Index("c32_1_ak", ["kdDati2", "kdPropinsi", "klsDbkbJpb6", "thnDbkbJpb6"], {
  unique: true,
})
@Index("dbkb_jpb6_pkey", ["kdDati2", "kdPropinsi", "klsDbkbJpb6", "thnDbkbJpb6"], { unique: true })
@Entity("dbkb_jpb6", { schema: "public" })
export class DbkbJpb6 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "thn_dbkb_jpb6", length: 4 })
  thnDbkbJpb6!: string;

  @Column("character", { primary: true, name: "kls_dbkb_jpb6", length: 1 })
  klsDbkbJpb6!: string;

  @Column("bigint", { name: "nilai_dbkb_jpb6" })
  nilaiDbkbJpb6!: string;

  @ManyToOne(() => RefDati2, (refDati2) => refDati2.dbkbJpb10)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
  ])
  refDati!: RefDati2;
}
