import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { RefDati2 } from "./RefDati2";

@Index("dbkb_jpb4_pkey", ["kdDati2", "kdPropinsi", "klsDbkbJpb4", "lantaiMaxJpb4", "lantaiMinJpb4", "thnDbkbJpb4"], { unique: true })
@Index("c30_1_ak", ["kdDati2", "kdPropinsi", "klsDbkbJpb4", "lantaiMaxJpb4", "lantaiMinJpb4", "thnDbkbJpb4"], { unique: true })
@Entity("dbkb_jpb4", { schema: "public" })
export class DbkbJpb4 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "thn_dbkb_jpb4", length: 4 })
  thnDbkbJpb4!: string;

  @Column("character", { primary: true, name: "kls_dbkb_jpb4", length: 1 })
  klsDbkbJpb4!: string;

  @Column("smallint", { primary: true, name: "lantai_min_jpb4" })
  lantaiMinJpb4!: number;

  @Column("smallint", { primary: true, name: "lantai_max_jpb4" })
  lantaiMaxJpb4!: number;

  @Column("bigint", { name: "nilai_dbkb_jpb4" })
  nilaiDbkbJpb4!: string;

  @ManyToOne(() => RefDati2, (refDati2) => refDati2.dbkbJpbs8)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
  ])
  refDati!: RefDati2;
}
