import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { RefDati2 } from "./RefDati2";

@Index("dbkb_jpb13_pkey", ["kdDati2", "kdPropinsi", "klsDbkbJpb13", "lantaiMaxJpb13", "lantaiMinJpb13", "thnDbkbJpb13"], { unique: true })
@Index("c39_1_ak", ["kdDati2", "kdPropinsi", "klsDbkbJpb13", "lantaiMaxJpb13", "lantaiMinJpb13", "thnDbkbJpb13"], { unique: true })
@Entity("dbkb_jpb13", { schema: "public" })
export class DbkbJpb13 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "thn_dbkb_jpb13", length: 4 })
  thnDbkbJpb13!: string;

  @Column("character", { primary: true, name: "kls_dbkb_jpb13", length: 1 })
  klsDbkbJpb13!: string;

  @Column("smallint", { primary: true, name: "lantai_min_jpb13" })
  lantaiMinJpb13!: number;

  @Column("smallint", { primary: true, name: "lantai_max_jpb13" })
  lantaiMaxJpb13!: number;

  @Column("bigint", { name: "nilai_dbkb_jpb13" })
  nilaiDbkbJpb13!: string;

  @ManyToOne(() => RefDati2, (refDati2) => refDati2.dbkbJpbs2)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
  ])
  refDati!: RefDati2;
}
