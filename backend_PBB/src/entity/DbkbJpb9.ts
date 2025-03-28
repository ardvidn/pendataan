import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { RefDati2 } from "./RefDati2";

@Index("c37_1_ak", ["kdDati2", "kdPropinsi", "klsDbkbJpb9", "lantaiMaxJpb9", "lantaiMinJpb9", "thnDbkbJpb9"], { unique: true })
@Index("dbkb_jpb9_pkey", ["kdDati2", "kdPropinsi", "klsDbkbJpb9", "lantaiMaxJpb9", "lantaiMinJpb9", "thnDbkbJpb9"], { unique: true })
@Entity("dbkb_jpb9", { schema: "public" })
export class DbkbJpb9 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "thn_dbkb_jpb9", length: 4 })
  thnDbkbJpb9!: string;

  @Column("character", { primary: true, name: "kls_dbkb_jpb9", length: 1 })
  klsDbkbJpb9!: string;

  @Column("smallint", { primary: true, name: "lantai_min_jpb9" })
  lantaiMinJpb9!: number;

  @Column("smallint", { primary: true, name: "lantai_max_jpb9" })
  lantaiMaxJpb9!: number;

  @Column("bigint", { name: "nilai_dbkb_jpb9" })
  nilaiDbkbJpb9!: string;

  @ManyToOne(() => RefDati2, (refDati2) => refDati2.dbkbJpb13)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
  ])
  refDati!: RefDati2;
}
