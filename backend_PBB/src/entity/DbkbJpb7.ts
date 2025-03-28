import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { RefDati2 } from "./RefDati2";

@Index("dbkb_jpb7_pkey", ["bintangDbkbJpb7", "jnsDbkbJpb7", "kdDati2", "kdPropinsi", "lantaiMaxJpb7", "lantaiMinJpb7", "thnDbkbJpb7"], { unique: true })
@Index("c33_1_ak", ["bintangDbkbJpb7", "jnsDbkbJpb7", "kdDati2", "kdPropinsi", "lantaiMaxJpb7", "lantaiMinJpb7", "thnDbkbJpb7"], { unique: true })
@Entity("dbkb_jpb7", { schema: "public" })
export class DbkbJpb7 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "thn_dbkb_jpb7", length: 4 })
  thnDbkbJpb7!: string;

  @Column("character", { primary: true, name: "jns_dbkb_jpb7", length: 1 })
  jnsDbkbJpb7!: string;

  @Column("character", { primary: true, name: "bintang_dbkb_jpb7", length: 1 })
  bintangDbkbJpb7!: string;

  @Column("smallint", { primary: true, name: "lantai_min_jpb7" })
  lantaiMinJpb7!: number;

  @Column("smallint", { primary: true, name: "lantai_max_jpb7" })
  lantaiMaxJpb7!: number;

  @Column("bigint", { name: "nilai_dbkb_jpb7" })
  nilaiDbkbJpb7!: string;

  @ManyToOne(() => RefDati2, (refDati2) => refDati2.dbkbJpb11)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
  ])
  refDati!: RefDati2;
}
