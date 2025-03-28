import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { RefDati2 } from "./RefDati2";

@Index("c28_1_ak", ["kdDati2", "kdPropinsi", "klsDbkbJpb2", "lantaiMaxJpb2", "lantaiMinJpb2", "thnDbkbJpb2"], { unique: true })
@Index("dbkb_jpb2_pkey", ["kdDati2", "kdPropinsi", "klsDbkbJpb2", "lantaiMaxJpb2", "lantaiMinJpb2", "thnDbkbJpb2"], { unique: true })
@Entity("dbkb_jpb2", { schema: "public" })
export class DbkbJpb2 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "thn_dbkb_jpb2", length: 4 })
  thnDbkbJpb2!: string;

  @Column("character", { primary: true, name: "kls_dbkb_jpb2", length: 1 })
  klsDbkbJpb2!: string;

  @Column("smallint", { primary: true, name: "lantai_min_jpb2" })
  lantaiMinJpb2!: number;

  @Column("smallint", { primary: true, name: "lantai_max_jpb2" })
  lantaiMaxJpb2!: number;

  @Column("bigint", { name: "nilai_dbkb_jpb2" })
  nilaiDbkbJpb2!: string;

  @ManyToOne(() => RefDati2, (refDati2) => refDati2.dbkbJpbs6)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
  ])
  refDati!: RefDati2;
}
