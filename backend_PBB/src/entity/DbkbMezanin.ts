import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { RefDati2 } from "./RefDati2";

@Index("c43_1_ak", ["kdDati2", "kdPropinsi", "thnDbkbMezanin"], {
  unique: true,
})
@Index("dbkb_mezanin_pkey", ["kdDati2", "kdPropinsi", "thnDbkbMezanin"], {
  unique: true,
})
@Entity("dbkb_mezanin", { schema: "public" })
export class DbkbMezanin {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "thn_dbkb_mezanin", length: 4 })
  thnDbkbMezanin!: string;

  @Column("bigint", { name: "nilai_dbkb_mezanin" })
  nilaiDbkbMezanin!: string;

  @ManyToOne(() => RefDati2, (refDati2) => refDati2.dbkbMezanins)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
  ])
  refDati!: RefDati2;
}
