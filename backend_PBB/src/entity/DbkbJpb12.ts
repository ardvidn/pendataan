import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { RefDati2 } from "./RefDati2";

@Index("c38_2_ak", ["kdDati2", "kdPropinsi", "thnDbkbJpb12", "typeDbkbJpb12"], {
  unique: true,
})
@Index("c38_1_ak", ["kdDati2", "kdPropinsi", "thnDbkbJpb12", "typeDbkbJpb12"], {
  unique: true,
})
@Index("c38_3_ak", ["kdDati2", "kdPropinsi", "thnDbkbJpb12", "typeDbkbJpb12"], {
  unique: true,
})
@Index("dbkb_jpb12_pkey", ["kdDati2", "kdPropinsi", "thnDbkbJpb12", "typeDbkbJpb12"], { unique: true })
@Entity("dbkb_jpb12", { schema: "public" })
export class DbkbJpb12 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "thn_dbkb_jpb12", length: 4 })
  thnDbkbJpb12!: string;

  @Column("character", { primary: true, name: "type_dbkb_jpb12", length: 1 })
  typeDbkbJpb12!: string;

  @Column("bigint", { name: "nilai_dbkb_jpb12" })
  nilaiDbkbJpb12!: string;

  @ManyToOne(() => RefDati2, (refDati2) => refDati2.dbkbJpbs)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
  ])
  refDati!: RefDati2;
}
